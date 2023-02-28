export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["andrew.png","global.css","images/bitmoji-bird-friends.png","images/css-logo.png","images/docker-logo.png","images/graphql-logo.png","images/react-logo.png","images/ruby-on-rails-logo.png","images/typescript-logo.svg"]),
	mimeTypes: {".png":"image/png",".css":"text/css",".svg":"image/svg+xml"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.d25c67d5.js","imports":["_app/immutable/entry/start.d25c67d5.js","_app/immutable/chunks/index.82666dd5.js","_app/immutable/chunks/singletons.c5aa4a83.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.bc76ce5a.js","imports":["_app/immutable/entry/app.bc76ce5a.js","_app/immutable/chunks/index.82666dd5.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js')
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
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/portfolio",
				pattern: /^\/portfolio\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
