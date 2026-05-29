import { NextResponse } from 'next/server';
import { analyzeOnboarding } from '@/lib/server/ai';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { responses, fileUrls } = body || {};
    if (!responses) return NextResponse.json({ error: 'Missing `responses` in request body' }, { status: 400 });

    const analysis = await analyzeOnboarding(responses, Array.isArray(fileUrls) ? fileUrls : []);
    return NextResponse.json({ analysis });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
