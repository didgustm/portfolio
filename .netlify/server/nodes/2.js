import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.Li44Ym3L.js","_app/immutable/chunks/scheduler.JY9BNgAg.js","_app/immutable/chunks/index.MQF-j6lW.js","_app/immutable/chunks/index.vM2YPvhc.js"];
export const stylesheets = ["_app/immutable/assets/2.4ADa0e9y.css"];
export const fonts = [];
