import { adminAuth } from '@/firebase-admin.config';

export const verifySession = async (session: string) => {
	if (!session) {
		return null;
	}

	try {
		const decodedToken = await adminAuth.verifySessionCookie(session, true /** checkRevoked */);
		return decodedToken;
	} catch (err) {
		console.error('Error verifying session cookie:', err);
		return null;
	}
}
