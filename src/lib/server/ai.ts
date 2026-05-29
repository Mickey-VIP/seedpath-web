export type ChatMessage = { role: 'system' | 'user' | 'assistant'; content: string };

export async function callAIChat(messages: ChatMessage[], model?: string): Promise<string> {
  const API_URL = process.env.AI_API_URL || 'https://api.openai.com/v1/chat/completions';
  const API_KEY = process.env.AI_API_KEY || process.env.OPENAI_API_KEY || '';
  if (!API_KEY) throw new Error('Missing AI API key. Set AI_API_KEY or OPENAI_API_KEY in the environment.');

  const modelName = model || process.env.AI_MODEL || 'gpt-4o-mini';
  const provider = (process.env.AI_PROVIDER || '').toLowerCase();
  const isGoogleGen = API_URL.includes('generativelanguage.googleapis.com') || provider.includes('google') || provider.includes('gemini');

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  };

  let payload: any;
  if (isGoogleGen) {
    // Google Generative Language / Gemini (generateMessage shape)
    payload = {
      model: modelName,
      messages: messages.map((m) => ({
        author: m.role === 'system' ? 'system' : m.role === 'user' ? 'user' : 'assistant',
        content: [{ type: 'text', text: m.content }],
      })),
      temperature: 0.2,
    };
  } else {
    // OpenAI-compatible chat completions
    payload = {
      model: modelName,
      messages: messages.map((m) => ({ role: m.role, content: m.content })),
      temperature: 0.2,
      max_tokens: 800,
    };
  }

  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`AI provider error: ${res.status} ${text}`);
  }

  const data = await res.json();

  // Robust parsing for different provider response shapes
  let content = '';
  if (data?.choices?.[0]?.message?.content) {
    content = data.choices[0].message.content;
  } else if (data?.choices?.[0]?.text) {
    content = data.choices[0].text;
  } else if (data?.candidates?.[0]?.content) {
    const c = data.candidates[0].content;
    if (Array.isArray(c)) content = c.map((p: any) => p?.text ?? '').join('');
    else if (typeof c === 'string') content = c;
    else content = JSON.stringify(c);
  } else if (data?.output?.[0]?.content) {
    const o = data.output[0].content;
    if (Array.isArray(o)) content = o.map((p: any) => p?.text ?? '').join('');
    else content = JSON.stringify(o);
  } else if (data?.outputText) {
    content = data.outputText;
  } else {
    content = JSON.stringify(data);
  }

  return content ?? '';
}

export async function analyzeOnboarding(responses: unknown, fileUrls: string[] = []): Promise<any> {
  const responsesText = typeof responses === 'string' ? responses : JSON.stringify(responses, null, 2);

  const fileSummaries: string[] = [];
  for (const url of fileUrls || []) {
    try {
      const r = await fetch(url);
      const ct = r.headers.get('content-type') || '';
      if (ct.startsWith('text/') || ct.includes('json')) {
        const txt = await r.text();
        fileSummaries.push(`File: ${url}\\nContent (first 2000 chars):\\n${txt.slice(0, 2000)}`);
      } else {
        const buffer = await r.arrayBuffer();
        fileSummaries.push(`File: ${url} (type: ${ct}, bytes: ${buffer.byteLength})`);
      }
    } catch (e) {
      fileSummaries.push(`File: ${url} (fetch error: ${String(e)})`);
    }
  }

  const filesText = fileSummaries.length ? fileSummaries.join('\\n\\n') : 'No files provided.';

  const system = `Eres un experto Venture Architect. Analiza las respuestas y los archivos adjuntos. Devuelve únicamente un JSON válido con la forma:\\n{ "risks": [{"id":"r1","title":"...","severity":"low|medium|high","explanation":"..."}], "recommendations": [{"title":"...","steps":["...","..."]}], "score": 0-100, "summary":"texto resumido" }`;

  const user = `RESPUESTAS:\\n${responsesText}\\n\\nARCHIVOS:\\n${filesText}\\n\\nInstrucciones: identifica riesgos clave, prioriza recomendaciones accionables y devuelve un JSON válido estrictamente.`;

  const aiText = await callAIChat([{ role: 'system', content: system }, { role: 'user', content: user }], process.env.AI_MODEL);
  if (!aiText) return { error: 'Empty response from AI provider' };

  try {
    // Try to extract JSON from the response if the model added text around it
    const firstBrace = aiText.indexOf('{');
    if (firstBrace !== -1) {
      const maybe = aiText.slice(firstBrace);
      return JSON.parse(maybe);
    }
    return JSON.parse(aiText);
  } catch (e) {
    return { raw: aiText };
  }
}
