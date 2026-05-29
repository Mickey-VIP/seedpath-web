AI integration
=================

Environment variables
---------------------

- `AI_API_KEY` (required): Bearer key for your AI provider (e.g. OpenAI API key).
- `AI_API_URL` (optional): Override the default API base URL. Defaults to OpenAI Chat completions endpoint.
- `AI_MODEL` (optional): Model name to use (defaults to `gpt-4o-mini`).

Files added
-----------

- `src/lib/server/ai.ts` — server-side helper that builds prompts and calls the AI provider.
- `src/app/api/ai/analyze/route.ts` — POST API route that accepts `{ responses, fileUrls }` and returns analysis.
- `src/lib/client/ai.ts` — tiny client helper to call the API from the frontend.

Usage
-----

1. Set the environment variables in your `.env.local` (do NOT commit secrets):

```bash
AI_API_KEY=sk-...your_key_here...
# Optional:
AI_API_URL=https://api.openai.com/v1/chat/completions
AI_MODEL=gpt-4o-mini
```

2. From the frontend (e.g. when user finishes the questionnaire or uploads roadmap files):

```js
import { analyzeOnboardingClient } from '@/lib/client/ai';

const result = await analyzeOnboardingClient(responsesObj, [fileUrl1, fileUrl2]);
console.log(result.analysis);
```

Notes & security
----------------
- The helper stores no secrets in the repo. Keep `AI_API_KEY` secret and use server-side API calls only.
- Uploaded files must be accessible by the server (or public URLs) so the AI helper can fetch them for summarization.
- The server tries to parse AI output as JSON; if parsing fails the raw text is returned under the `raw` key.
