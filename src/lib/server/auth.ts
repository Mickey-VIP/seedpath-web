import jwt from 'jsonwebtoken';
import { readUsers, UserRecord } from './db';

const SECRET = process.env.JWT_SECRET || 'dev-secret';

export function verifyToken(token: string) {
  try {
    const payload = jwt.verify(token, SECRET) as any;
    return payload?.userId as string | undefined;
  } catch (e) {
    return undefined;
  }
}

export async function getUserFromToken(token?: string): Promise<UserRecord | null> {
  if (!token) return null;
  const userId = verifyToken(token);
  if (!userId) return null;
  const users = await readUsers();
  const user = users.find((u) => u.id === userId) || null;
  if (user) {
    // strip passwordHash
    const { passwordHash, ...rest } = user as any;
    return rest as UserRecord;
  }
  return null;
}
