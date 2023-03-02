// @ts-nocheck
import type { ServerLoad } from "@sveltejs/kit";
import { protectedRoute } from "@/lib/protectedRoute";

export const load = async () => {
	await protectedRoute('/blog');
}
;null as any as ServerLoad;