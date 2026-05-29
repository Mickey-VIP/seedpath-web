import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { readUsers, writeUsers, genId } from '@/lib/server/db';

const SECRET = process.env.JWT_SECRET || 'dev-secret';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password } = body;
    if (!name || !email || !password) return NextResponse.json({ error: 'Missing fields' }, { status: 400 });

    const users = await readUsers();
    const exists = users.find((u) => u.email.toLowerCase() === String(email).toLowerCase());
    if (exists) return NextResponse.json({ error: 'Email already registered' }, { status: 409 });

    const passwordHash = await bcrypt.hash(password, 8);
    const id = genId('u_');
    const user = { id, name, email: String(email).toLowerCase(), passwordHash, createdAt: Date.now() };
    users.push(user as any);
    await writeUsers(users as any);

    const token = jwt.sign({ userId: id }, SECRET, { expiresIn: '30d' });

    return NextResponse.json({ token, user: { id, name, email: user.email } }, { status: 201 });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Server error' }, { status: 500 });
  }
}
