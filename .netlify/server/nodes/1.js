

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1._9FDPvUx.js","_app/immutable/chunks/scheduler.N1zoEepN.js","_app/immutable/chunks/index.ZHvNIqib.js","_app/immutable/chunks/singletons.fHrSH49U.js"];
export const stylesheets = [];
export const fonts = [];
