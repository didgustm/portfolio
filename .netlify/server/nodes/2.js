import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.FD_M2sfT.js","_app/immutable/chunks/scheduler.N1zoEepN.js","_app/immutable/chunks/index.ZHvNIqib.js","_app/immutable/chunks/index.FIwMyrFU.js"];
export const stylesheets = ["_app/immutable/assets/2.lI4GDCgl.css","_app/immutable/assets/index.3mVwUuae.css"];
export const fonts = [];
