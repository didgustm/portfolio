import { c as create_ssr_component, v as validate_component, m as missing_component, b as add_attribute } from "../../chunks/ssr.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import ScrollToPlugin from "gsap/ScrollToPlugin.js";
import Lenis from "@studio-freight/lenis";
import { F as Fa } from "../../chunks/fa-layers-text.svelte_svelte_type_style_lang.js";
import { faBars, faXmark, faHouse, faUser, faListUl, faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
const Blobs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { show, w } = $$props;
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.w === void 0 && $$bindings.w && w !== void 0)
    $$bindings.w(w);
  return `<svg class="line"><defs><filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur><feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -7" result="goo"></feColorMatrix><feBlend in="SourceGraphic" in2="goo"></feBlend></filter></defs>${w > 500 ? `<circle r="25" cx="25" cy="25" fill="none" stroke-width="3" stroke="#ED6075" transform="rotate(-90)" class="tail t-large"></circle>` : `<circle r="20" cx="20" cy="20" fill="none" stroke-width="3" stroke="#ED6075" transform="rotate(-90)" class="tail t-small"></circle>`}</svg> <div class="blobs radius"><span class="blob blob01 radius"></span> ${show ? `<span class="blob blob02 radius"></span> <span class="blob blob03 radius"></span> <span class="blob blob04 radius"></span> <span class="blob blob05 radius"></span>` : ``}</div>`;
});
const Btn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { show, gnbOpen, Fa: Fa2 } = $$props;
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.gnbOpen === void 0 && $$bindings.gnbOpen && gnbOpen !== void 0)
    $$bindings.gnbOpen(gnbOpen);
  if ($$props.Fa === void 0 && $$bindings.Fa && Fa2 !== void 0)
    $$bindings.Fa(Fa2);
  return `<button class="ham blob01 radius">${!show ? `<span class="icon-menu">${validate_component(Fa2 || missing_component, "svelte:component").$$render($$result, { icon: faBars, size: "1.4x" }, {}, {})}</span>` : `<span class="icon-x">${validate_component(Fa2 || missing_component, "svelte:component").$$render($$result, { icon: faXmark, size: "1.4x" }, {}, {})}</span>`}</button>`;
});
const Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { toAnchor, Fa: Fa2 } = $$props;
  if ($$props.toAnchor === void 0 && $$bindings.toAnchor && toAnchor !== void 0)
    $$bindings.toAnchor(toAnchor);
  if ($$props.Fa === void 0 && $$bindings.Fa && Fa2 !== void 0)
    $$bindings.Fa(Fa2);
  return `<nav><ul><li class="blob02"><button class="radius"><p data-svelte-h="svelte-6z05k5">Home</p> ${validate_component(Fa2 || missing_component, "svelte:component").$$render($$result, { icon: faHouse, size: "1.2x" }, {}, {})}</button></li> <li class="blob03"><button class="radius"><p data-svelte-h="svelte-1kprrk1">About</p> ${validate_component(Fa2 || missing_component, "svelte:component").$$render($$result, { icon: faUser, size: "1.2x" }, {}, {})}</button></li> <li class="blob04"><button class="radius"><p data-svelte-h="svelte-19xjf3k">Portfolio</p> ${validate_component(Fa2 || missing_component, "svelte:component").$$render($$result, { icon: faListUl, size: "1.2x" }, {}, {})}</button></li> <li class="blob05"><button class="radius"><p data-svelte-h="svelte-1xa2t1g">Contact</p> ${validate_component(Fa2 || missing_component, "svelte:component").$$render($$result, { icon: faEnvelopeOpen, size: "1.2x" }, {}, {})}</button></li></ul></nav>`;
});
const Quick = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { toAnchor, w } = $$props;
  let show = false;
  function gnbOpen() {
    show = !show;
  }
  if ($$props.toAnchor === void 0 && $$bindings.toAnchor && toAnchor !== void 0)
    $$bindings.toAnchor(toAnchor);
  if ($$props.w === void 0 && $$bindings.w && w !== void 0)
    $$bindings.w(w);
  return `<div class="quick">${validate_component(Blobs, "Blobs").$$render($$result, { show, w }, {}, {})} ${validate_component(Btn, "Btn").$$render($$result, { show, gnbOpen, Fa }, {}, {})} ${show ? `${validate_component(Navigation, "Navigation").$$render($$result, { toAnchor, Fa }, {}, {})}` : ``}</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let app;
  window.matchMedia("(pointer:coarse)").matches;
  let w = window.innerWidth;
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  const lenis = new Lenis({ syncTouch: true });
  lenis.on("scroll", () => {
    ScrollTrigger.update;
  });
  gsap.ticker.add((time) => {
    lenis.raf(time * 1e3);
  });
  gsap.ticker.lagSmoothing(0);
  const toAnchor = (idx) => {
    gsap.to(window, { scrollTo: innerHeight * idx, duration: 1 });
  };
  return `${$$result.head += `<!-- HEAD_svelte-mnx22g_START -->${$$result.title = `<title>MyWorklist</title>`, ""}<!-- HEAD_svelte-mnx22g_END -->`, ""}  <div id="app"${add_attribute("this", app, 0)}>${validate_component(Quick, "Quick").$$render($$result, { w, toAnchor }, {}, {})} <main>${slots.default ? slots.default({}) : ``}</main></div>`;
});
export {
  Layout as default
};
