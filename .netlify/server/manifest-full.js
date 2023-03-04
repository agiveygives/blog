export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["andrew.png","global.css","images/bitmoji/bird-friends.png","images/bitmoji/secret.png","images/logos/css-logo.png","images/logos/docker-logo.png","images/logos/graphql-logo.png","images/logos/react-logo.png","images/logos/ruby-on-rails-logo.png","images/logos/typescript-logo.svg"]),
	mimeTypes: {".png":"image/png",".css":"text/css",".svg":"image/svg+xml"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.faa29ec9.js","imports":["_app/immutable/entry/start.faa29ec9.js","_app/immutable/chunks/index.b271b0ab.js","_app/immutable/chunks/singletons.2a42090d.js","_app/immutable/chunks/index.ff27eb8e.js","_app/immutable/chunks/control.e7f5239e.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.6508023e.js","imports":["_app/immutable/entry/app.6508023e.js","_app/immutable/chunks/index.b271b0ab.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js')
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
				endpoint: () => import('./entries/endpoints/api/auth/login/_server.ts.js')
			},
			{
				id: "/api/auth/logout",
				pattern: /^\/api\/auth\/logout\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/auth/logout/_server.ts.js')
			},
			{
				id: "/api/auth/validate",
				pattern: /^\/api\/auth\/validate\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/auth/validate/_server.ts.js')
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
};
