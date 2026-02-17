import { json, error } from '@sveltejs/kit'
import { adminAuth } from '@/firebase-admin.config'

export async function POST({ request, cookies }) {
  const { idToken } = await request.json();

	try {
		await adminAuth.verifyIdToken(idToken)
	} catch {
		throw error(400)
	}

  const sessionCookie = await adminAuth.createSessionCookie(idToken, {
    expiresIn: 5 * 24 * 60 * 60 * 1000 // 5 days
  })

  cookies.set('session', sessionCookie, {
    httpOnly: true,
    secure: true,
    path: '/',
    sameSite: 'lax'
  })

  return json({ ok: true })
}
