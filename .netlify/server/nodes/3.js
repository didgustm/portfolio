import * as universal from '../entries/pages/list/_slug_/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/list/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/list/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/3.KMmDYSGZ.js","_app/immutable/chunks/preload-helper.0HuHagjb.js","_app/immutable/chunks/scheduler.N1zoEepN.js","_app/immutable/chunks/index.ZHvNIqib.js"];
export const stylesheets = [];
export const fonts = [];
