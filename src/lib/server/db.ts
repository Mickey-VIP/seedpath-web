import fs from 'fs/promises';
import path from 'path';
import { randomUUID } from 'crypto';

const DATA_DIR = path.join(process.cwd(), 'data');
const USERS_FILE = path.join(DATA_DIR, 'users.json');
const PROJECTS_FILE = path.join(DATA_DIR, 'projects.json');

async function ensureFiles() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    try { await fs.access(USERS_FILE); } catch (e) { await fs.writeFile(USERS_FILE, '[]'); }
    try { await fs.access(PROJECTS_FILE); } catch (e) { await fs.writeFile(PROJECTS_FILE, '[]'); }
  } catch (e) {
    // ignore
  }
}

export type UserRecord = {
  id: string;
  name: string;
  email: string;
  passwordHash?: string;
  createdAt: number;
  subscription?: { plan: string; price: number; status: string; startedAt: number };
};

export type ProjectRecord = {
  id: string;
  userId: string;
  title: string;
  content?: string;
  createdAt: number;
};

export async function readUsers(): Promise<UserRecord[]> {
  await ensureFiles();
  const raw = await fs.readFile(USERS_FILE, 'utf-8');
  try { return JSON.parse(raw || '[]'); } catch (e) { return []; }
}

export async function writeUsers(users: UserRecord[]) {
  await ensureFiles();
  await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2));
}

export async function readProjects(): Promise<ProjectRecord[]> {
  await ensureFiles();
  const raw = await fs.readFile(PROJECTS_FILE, 'utf-8');
  try { return JSON.parse(raw || '[]'); } catch (e) { return []; }
}

export async function writeProjects(projects: ProjectRecord[]) {
  await ensureFiles();
  await fs.writeFile(PROJECTS_FILE, JSON.stringify(projects, null, 2));
}

export function genId(prefix = '') {
  return prefix + randomUUID();
}
