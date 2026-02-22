import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase.config'

export async function login(email: string, password: string) {
  const cred = await signInWithEmailAndPassword(auth, email, password)
  const idToken = await cred.user.getIdToken()

  return fetch('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({ idToken })
  })
}
