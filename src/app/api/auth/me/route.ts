import { NextResponse } from 'next/server';
import { getUserFromToken } from '@/lib/server/auth';

export async function GET(req: Request) {
  try {
    const auth = req.headers.get('authorization') || '';
    const token = auth.startsWith('Bearer ') ? auth.split(' ')[1] : auth || undefined;
    const user = await getUserFromToken(token);
    if (!user) return NextResponse.json({ error: 'Unauthenticated' }, { status: 401 });
    return NextResponse.json({ user });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Server error' }, { status: 500 });
  }
}
