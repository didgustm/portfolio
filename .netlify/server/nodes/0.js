import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.KxZfZrnX.js","_app/immutable/chunks/scheduler.N1zoEepN.js","_app/immutable/chunks/index.ZHvNIqib.js","_app/immutable/chunks/index.FIwMyrFU.js"];
export const stylesheets = ["_app/immutable/assets/0.BYzBNgVt.css","_app/immutable/assets/index.3mVwUuae.css"];
export const fonts = ["_app/immutable/assets/Montserrat-vf.ohno7SAI.woff","_app/immutable/assets/Pretendard-vf.f3X054Iy.woff2"];
