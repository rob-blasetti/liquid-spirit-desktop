const DEFAULT_API_URL = 'https://liquid-spirit-backend-prod-34ac4484898d.herokuapp.com';
const API_URL = (import.meta.env.VITE_API_URL as string | undefined) || DEFAULT_API_URL;

export function getStoredToken(): string {
  return localStorage.getItem('token') || '';
}

export function getStoredUser(): { id?: string; _id?: string; community?: { _id?: string; id?: string } } | null {
  try {
    const raw = localStorage.getItem('user');
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export async function apiGet(path: string): Promise<any> {
  const token = getStoredToken();
  const response = await fetch(`${API_URL}${path}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  const payload = await response.json().catch(() => null);
  if (!response.ok) {
    const message = payload?.message || `Request failed (${response.status})`;
    throw new Error(message);
  }
  return payload;
}
