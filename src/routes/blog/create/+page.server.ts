import type { ServerLoad } from '@sveltejs/kit';
import { protectedRoute } from '@/lib/protectedRoute';

export const load: ServerLoad = async ({ locals }) => {
	await protectedRoute('/blog', locals);
};
