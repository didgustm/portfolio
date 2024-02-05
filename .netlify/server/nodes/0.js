import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.13_vDYOo.js","_app/immutable/chunks/scheduler.JY9BNgAg.js","_app/immutable/chunks/index.MQF-j6lW.js","_app/immutable/chunks/index.vM2YPvhc.js"];
export const stylesheets = ["_app/immutable/assets/0.hSCnz465.css"];
export const fonts = ["_app/immutable/assets/Montserrat-vf.ohno7SAI.woff","_app/immutable/assets/Pretendard-vf.f3X054Iy.woff2"];
