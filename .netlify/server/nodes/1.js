

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.zxxjhjKw.js","_app/immutable/chunks/scheduler.JY9BNgAg.js","_app/immutable/chunks/index.MQF-j6lW.js","_app/immutable/chunks/singletons.vKt_Pd03.js"];
export const stylesheets = [];
export const fonts = [];
