import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","favicon.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.M3l1dKce.js","app":"_app/immutable/entry/app.8IQZCgLX.js","imports":["_app/immutable/entry/start.M3l1dKce.js","_app/immutable/chunks/scheduler.N1zoEepN.js","_app/immutable/chunks/singletons.fHrSH49U.js","_app/immutable/entry/app.8IQZCgLX.js","_app/immutable/chunks/preload-helper.0HuHagjb.js","_app/immutable/chunks/scheduler.N1zoEepN.js","_app/immutable/chunks/index.ZHvNIqib.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js'))
		],
		routes: [
			{
				id: "/api",
				pattern: /^\/api\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../server/entries/endpoints/api/_server.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
