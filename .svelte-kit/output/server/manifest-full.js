export const manifest = {
	appDir: "_app",
	appPath: "sveltekit-gh-pages/_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.cea98aa1.js","imports":["_app/immutable/entry/start.cea98aa1.js","_app/immutable/chunks/index.f98f3a93.js","_app/immutable/chunks/singletons.5130b87a.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.6c025e6e.js","imports":["_app/immutable/entry/app.6c025e6e.js","_app/immutable/chunks/index.f98f3a93.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
