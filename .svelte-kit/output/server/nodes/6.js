import * as server from '../entries/pages/blog/_slug_/_page.server.ts.js';

export const index = 6;
export const component = async () => (await import('../entries/pages/blog/_slug_/_page.svelte.js')).default;
export const file = '_app/immutable/entry/blog-_slug_-page.svelte.7730b8ce.js';
export { server };
export const server_id = "src/routes/blog/[slug]/+page.server.ts";
export const imports = ["_app/immutable/entry/blog-_slug_-page.svelte.7730b8ce.js","_app/immutable/chunks/index.3193b9c7.js"];
export const stylesheets = ["_app/immutable/assets/_page.c079de8b.css"];
export const fonts = [];
