import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["andrew.png","global.css","images/bitmoji/bird-friends.png","images/bitmoji/secret.png","images/logos/css-logo.png","images/logos/docker-logo.png","images/logos/graphql-logo.png","images/logos/react-logo.png","images/logos/ruby-on-rails-logo.png","images/logos/typescript-logo.svg"]),
	mimeTypes: {".png":"image/png",".css":"text/css",".svg":"image/svg+xml"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.cbcaa54d.js","imports":["_app/immutable/entry/start.cbcaa54d.js","_app/immutable/chunks/index.3193b9c7.js","_app/immutable/chunks/singletons.8d0bf3b6.js","_app/immutable/chunks/index.ac476d2f.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.0ea01750.js","imports":["_app/immutable/entry/app.0ea01750.js","_app/immutable/chunks/index.3193b9c7.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js'),
			() => import('../server/nodes/5.js'),
			() => import('../server/nodes/6.js'),
			() => import('../server/nodes/7.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/auth/login",
				pattern: /^\/api\/auth\/login\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../server/entries/endpoints/api/auth/login/_server.ts.js')
			},
			{
				id: "/api/auth/logout",
				pattern: /^\/api\/auth\/logout\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../server/entries/endpoints/api/auth/logout/_server.ts.js')
			},
			{
				id: "/api/auth/validate",
				pattern: /^\/api\/auth\/validate\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../server/entries/endpoints/api/auth/validate/_server.ts.js')
			},
			{
				id: "/api/blog",
				pattern: /^\/api\/blog\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../server/entries/endpoints/api/blog/_server.ts.js')
			},
			{
				id: "/api/markdown",
				pattern: /^\/api\/markdown\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../server/entries/endpoints/api/markdown/_server.ts.js')
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/blog/create",
				pattern: /^\/blog\/create\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/blog/[slug]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/portfolio",
				pattern: /^\/portfolio\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
