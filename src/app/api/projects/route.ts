import { NextResponse } from 'next/server';
import { getUserFromToken } from '@/lib/server/auth';
import { readProjects, writeProjects, readUsers, writeUsers, genId } from '@/lib/server/db';

export async function GET(req: Request) {
  try {
    const auth = req.headers.get('authorization') || '';
    const token = auth.startsWith('Bearer ') ? auth.split(' ')[1] : auth || undefined;
    const user = await getUserFromToken(token);
    if (!user) return NextResponse.json({ error: 'Unauthenticated' }, { status: 401 });

    const projects = await readProjects();
    const mine = projects.filter((p) => p.userId === user.id);
    return NextResponse.json({ projects: mine });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Server error' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const auth = req.headers.get('authorization') || '';
    const token = auth.startsWith('Bearer ') ? auth.split(' ')[1] : auth || undefined;
    const user = await getUserFromToken(token);
    if (!user) return NextResponse.json({ error: 'Unauthenticated' }, { status: 401 });

    const { title, content } = await req.json();
    if (!title) return NextResponse.json({ error: 'Missing title' }, { status: 400 });

    const projects = await readProjects();
    const project = { id: genId('p_'), userId: user.id, title, content: content || '', createdAt: Date.now() } as any;
    projects.push(project);
    await writeProjects(projects as any);

    return NextResponse.json({ project }, { status: 201 });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Server error' }, { status: 500 });
  }
}
