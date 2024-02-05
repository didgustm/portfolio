import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import Lenis from "@studio-freight/lenis";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { toAnchor } = $$props;
  if ($$props.toAnchor === void 0 && $$bindings.toAnchor && toAnchor !== void 0)
    $$bindings.toAnchor(toAnchor);
  return `<header class="header"><div class="inner"><h1 class="logo" data-svelte-h="svelte-zmps7s"><a href="/"><svg viewBox="0 0 44 33"><path d="M43.09,7.64c-0.48,1.46-0.92,2.93-1.45,4.36c-2.46,6.66-5.81,12.78-10.94,17.78    c-1.24,1.21-2.69,2.29-4.22,3.1c-3.01,1.6-6.6-0.68-6.67-4.11c-0.06-2.8,0.66-5.45,1.77-8c0.25-0.58,0.53-1.16,0.8-1.74    c0.01-0.1,0.02-0.19,0.03-0.29c-0.09,0.04-0.17,0.07-0.26,0.11c-2.31,2.7-4.52,5.49-6.96,8.06c-1.78,1.87-3.77,3.58-5.83,5.14    c-2.08,1.57-2.94,1.25-4.29-0.96c-1.57-2.57-1.77-5.14,0.02-7.62c1.8-2.49,3.69-4.91,5.66-7.27c1.71-2.05,3.6-3.96,5.38-5.96    c0.53-0.59,1.04-1.24,1.39-1.94c0.22-0.44,0.38-1.24,0.15-1.52c-0.31-0.36-1.07-0.56-1.57-0.48c-1.21,0.2-2.46,0.47-3.57,0.97    C9.7,8.57,6.94,10,4.15,11.37c-0.82,0.4-1.62,0.88-2.48,1.19c-1.18,0.43-1.78,0.03-1.65-1.18c0.38-3.6,1.24-6.97,5.02-8.62    C6.23,2.24,7.4,1.69,8.69,1.11C8.67,1.48,8.66,1.66,8.64,1.88C8.82,1.85,8.97,1.84,9.12,1.8c2.11-0.57,4.2-1.23,6.34-1.68    c0.95-0.2,1.99-0.1,2.97,0.03c2.58,0.35,3.57,1.5,3.8,4.1c0.2,2.32-0.18,4.53-1.53,6.39c-2.2,3.03-4.58,5.94-6.9,8.88    c-1.72,2.18-3.63,4.23-4.54,7.28c0.54-0.35,0.92-0.52,1.2-0.79c3.36-3.3,6.77-6.55,10.02-9.96c3.22-3.38,6.24-6.96,9.4-10.4    c0.78-0.84,1.74-1.52,2.66-2.21c0.71-0.54,1.32-0.33,1.83,0.38c1.03,1.4,1.02,2.73-0.16,4.55c-1.54,2.38-3.24,4.67-4.66,7.11    c-1.86,3.2-3.55,6.5-5.26,9.78c-0.34,0.65-0.44,1.42-0.75,2.49c0.72-0.32,1.22-0.47,1.65-0.74c4.39-2.78,7.58-6.69,10.26-11.05    c0.69-1.12,1.31-2.29,1.96-3.43c0.66-1.15,1.12-2.31,0.92-3.72c-0.09-0.67,0.2-1.53,0.61-2.1c0.84-1.15,1.88-2.15,2.97-3.37    c0.47,0.94,0.82,1.65,1.17,2.36C43.09,6.36,43.09,7,43.09,7.64z"></path></svg></a></h1> <nav class="gnb"><ul><li><button class="menus buttons" data-svelte-h="svelte-1wz17fr">About</button></li> <li><button class="menus buttons" data-svelte-h="svelte-g1s9g1">Portfolio</button></li> <li><button class="menus buttons" data-svelte-h="svelte-5tl6eh">Contact</button></li></ul></nav></div></header>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="footer" data-svelte-h="svelte-roqjhh"><div class="inner"><p>Copyright ©2023. my worklist</p></div></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let app, isMobile = window.matchMedia("(pointer:coarse)").matches;
  gsap.registerPlugin(ScrollTrigger);
  const lenis = new Lenis({ syncTouch: true });
  lenis.on("scroll", () => {
    ScrollTrigger.update;
  });
  gsap.ticker.add((time) => {
    lenis.raf(time * 1e3);
  });
  gsap.ticker.lagSmoothing(0);
  const toAnchor = (target, margin) => {
    !isMobile ? lenis.scrollTo(`.${target}`, {
      offset: -document.querySelector(".header").offsetHeight
    }) : window.scrollTo({
      top: document.querySelector(`.${target}`).offsetTop - document.querySelector(".header").offsetHeight,
      behavior: "smooth"
    });
  };
  return `${$$result.head += `<!-- HEAD_svelte-mnx22g_START -->${$$result.title = `<title>MyWorklist</title>`, ""}<!-- HEAD_svelte-mnx22g_END -->`, ""}  <div id="app"${add_attribute("this", app, 0)}>${validate_component(Header, "Header").$$render($$result, { toAnchor }, {}, {})} <main>${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};
