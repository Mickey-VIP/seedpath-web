import { NextResponse } from 'next/server';
import { getUserFromToken } from '@/lib/server/auth';
import { readUsers, writeUsers } from '@/lib/server/db';

export async function POST(req: Request) {
  try {
    const auth = req.headers.get('authorization') || '';
    const token = auth.startsWith('Bearer ') ? auth.split(' ')[1] : auth || undefined;
    const user = await getUserFromToken(token);
    if (!user) return NextResponse.json({ error: 'Unauthenticated' }, { status: 401 });

    const { plan, price } = await req.json();
    if (!plan) return NextResponse.json({ error: 'Missing plan' }, { status: 400 });

    const users = await readUsers();
    const idx = users.findIndex((u) => u.id === user.id);
    if (idx === -1) return NextResponse.json({ error: 'User not found' }, { status: 404 });

    users[idx].subscription = { plan, price: Number(price || 0), status: 'active', startedAt: Date.now() } as any;
    await writeUsers(users as any);

    return NextResponse.json({ ok: true, subscription: users[idx].subscription });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Server error' }, { status: 500 });
  }
}
