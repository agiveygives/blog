import { adminAuth } from '@/firebase-admin.config'

export async function handle({ event, resolve }) {
  const session = event.cookies.get('session')

  if (session) {
    try {
      const decoded = await adminAuth.verifySessionCookie(session, true)
      event.locals.user = decoded
    } catch {
      event.cookies.delete('session', { path: '/'})
      event.locals.user = null
    }
  }

  return resolve(event)
}
