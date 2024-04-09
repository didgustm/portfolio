import { c as create_ssr_component, f as each, e as escape, v as validate_component, m as missing_component, b as add_attribute } from "../../chunks/ssr.js";
import { F as Fa } from "../../chunks/fa-layers-text.svelte_svelte_type_style_lang.js";
import "matter-js";
import { faChevronDown, faPenToSquare, faKeyboard, faPalette, faChartSimple, faChevronRight, faEnvelope, faXmark } from "@fortawesome/free-solid-svg-icons";
import { register } from "swiper/element/bundle";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
const Bg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${each(Array(5), (_, idx) => {
    return `<div class="${"bg bg0" + escape(idx + 1, true)}"></div>`;
  })}`;
});
const Svg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg class="sketch"><circle class="visualBall"></circle><clipPath id="clip"><circle class="visualBall"></circle><polygon class="visualTri" fill="#fff" points="1368.737832300204,415.7846238816761 1367.1419323863197,421.2047940113923 1362.8630116964057,424.8947775478896 1357.2671216841604,425.6765420527441 1119.942727311697,289.4847205236227 1116.0466648953682,285.3925424024193 1114.990505579773,279.84188914107506 1117.1114305935605,274.60481923381997 1353.7194829698929,137.1722448939069 1359.2114391965806,135.84425484335767 1364.5465172798997,137.70492209331942 1368.0214860315525,142.16022600497655"></polygon><path class="crossA1" d="M543.8507134528701,264.259450415051 L405.2687835761771,206.85693556028755 416.7492865471298,179.14054958494896 555.3312164238228,236.54306443971242z"></path><path class="crossA2" d="M465.45693556028755,296.73121642382284 L437.7405495849489,285.2507134528702 495.14306443971236,146.66878357617713 522.859450415051,158.14928654712983z"></path></clipPath><text fill="#464646" x="50%" y="50%" text-anchor="middle" alignment-baseline="central" class="staticText main_tit"><tspan dy="-97">WEBSITE</tspan> <tspan x="50%" dy="97">LANDING PAGE</tspan> <tspan x="50%" dy="97">PORTFOLIO</tspan> </text><text fill="#fff" stroke="#fff" x="50%" y="50%" text-anchor="middle" alignment-baseline="central" clip-path="url(#clip)" class="clipText"><tspan dy="-97">WEBSITE</tspan> <tspan x="50%" dy="97">LANDING PAGE</tspan> <tspan x="50%" dy="97">PORTFOLIO</tspan></text></svg>`;
});
const Scroll = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="scroll"><p data-svelte-h="svelte-1aog4hj">Scroll Down</p> ${validate_component(Fa || missing_component, "svelte:component").$$render($$result, { icon: faChevronDown, size: "sm" }, {}, {})}</div>`;
});
const Visual = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="visual">${validate_component(Bg, "Bg").$$render($$result, {}, {}, {})} <div class="visual_in">${validate_component(Svg, "Svg").$$render($$result, {}, {}, {})}</div> ${validate_component(Scroll, "Scroll").$$render($$result, {}, {}, {})} <div class="barba"></div></section>`;
});
const Title$2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 class="title" data-svelte-h="svelte-1gu1316"><div><p>About Me</p></div></h2>`;
});
const me = "data:image/jpeg;base64,/9j/2wCEAAYEBAQFBAYFBQYJBgUGCQsIBgYICwwKCgsKCgwQDAwMDAwMEAwODxAPDgwTExQUExMcGxsbHB8fHx8fHx8fHx8BBwcHDQwNGBAQGBoVERUaHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fH//dAAQACf/uAA5BZG9iZQBkwAAAAAH/wAARCABGAEYDABEAAREBAhEB/8QAjQAAAgMAAwEAAAAAAAAAAAAABgcDBAUAAQIIAQADAQEBAAAAAAAAAAAAAAABAgMABAUQAAIBAwMCBAMECAcAAAAAAAECAwQFEQASIQYxEyJBUQdhgRQjMpEVQlJicaGxwRYXJGNyotERAAICAgEEAgIDAQAAAAAAAAABAhEDITEEEhNBImEyUUJxgcH/2gAMAwAAARECEQA/AOVFFDBvMcYhBOZNo2gscLkge+vLU4cJnfKE3torz7IzhnHI75H9NOxECd6pvFutI6wtKsZDFlONvnHmb3Gnh+LA+UT1/wB2k8mCQVwo9cHI0kRmgYatFbaJ2mTwY496uVyTtCgE8+vOrdtSRPutMpUNNE9K4gZgjE+E3ZiNxxnVWTRKkbR70x2fv9BqUh4ncgwMAc6BjkNZNRESoyguu3zLuHBzoNBuj//Q271HSVvQCXaGDw2qQ77u3lWYhd3r2X6a8NpRml9nsKTlFv6DDqZLTcbJPBR0UcbzT0706UsLFSqxEHziNBnJ5GvQyTi1SPPjF3sS3Wdvjo6qlM0UyyAkIEBXawbOZR+zg6XG7ixnyDVd1IJCVWnH2cFgJCTuJ9CRp1h0B5TFoLnN4U9K0YkaXcabI43sc7SPXc2qShtMmpGzQULPbzLPGEk3MzYGMHc2QNYJXnpmVnXHG7v9BpJDIieEAAeulMR1FMwp0TGULb/c5Kj/AN0GGj//0S6ggX/KspXK0M8dPKscXZVkE7AZU89udeF1T+f+nrYb7dDNpEsj0FP/AK8RybE3qxBw+Bn29dVqFJ2zlcpW9CA+OtwpLZeS7TsQGdkSPA8YDblWOeF+fvrp6dWtCzl7ELV3apkLNE4VQ34F5UE+nPfXZRztlaC5XBXEgcq3BDkYOd3cH0xo0aw06U6gmqoktdehVmJEUw/WxlirfM5znU5IeLCSoolZmdBuDncMfl/bUZclEU6mkA28dxzoBQRxdEXi92+kWwUT1VWiCSo8MopCFVUZDlc8r3Goue6HpVbP/9LC6Sju8Nkr5qtpJKeppJzE7PuTP2pQAnmJ7Z7ga8jrJRc4pc93/D0+li1Fv6DCivVbG0kk9JFuZECBcsoKgg8Y+ffTNf2cuTvr40If4s3uuufVld4gKQUjLBFEOFUAeg/ebJ13YY1FEHfvkBmldWOCRjjVhT2tdUAFd+QTn89Yxdtt4rKetjngdhKhDKRzypzoNDJjxaOUx+KGRFDsgLEKM4LEfQa5nyXRgUrXSaWSWrK7DkRpjDAAnGcEjkawAt6d+Jtj6eqgBvklSn8F5EQuASyswBB/dH5a8rrejnmXxdbO3DkgvyVn/9NXR3TrJ2ZI5QyKQrMqqq89gc4/nrzHiwo7vNkGL0jUTNY4pqh/EqZGcSt7lHZOB6cDTqCXAjm5cgd8TulxPUQ3COFwalwlVggDKJ5ZCO/CjnXRil6JyinsVn2aBvvFQn3UnjVGwKKLMvT1S1N4yRYzjCggnntxoKYXj0a3TfT4juEJqIW3RuGJYcNtyTj5AjGg5WN40lfsPKnqOmpKSekb7QZ5CGCxqGQj5kkHPvqUnQYxsHY+o5Kemljl8recxE4BOTwMD2zoqV8A7aBVJJCWw5Dd/odUFP/UXnQvRUnVUtRuuMNBBTGPx5JlkkdvE3Y2Ko5xt9SNHHhlL8VwaeRLkbVu6DtdFa1oFvCVIRWXeHEBO4kngq2O+kl0s7ugrNCqsx+suiKuezSSUc8TCnSRnjhnEsroybXAUkc7MkY0qxTXKKRnH0Iu12evq6p4qalaRFJy3ZcL65J0ktF4m+tBXW2VFqoTGj4KE4Kkj2IyNRuytUa/6PlDrNTyb2NPvmViTgAFmMf1XLfw1lL0CUd2zFuz7axWabjwzGTHh/OSDn0HGNCYq1wDlZQ3Oed3j2zJ2UBl7f8AE7SNWjONEZRlZ1HYr22dlOUHpyoBH1Oj5I/sHZL9H//VDPhjTUs1ov8ANNTtWGnFK8cKNIjEs0inBjIbsddvR6jJ/qjmzq5RXFh/er7+j6enjMCLW1J+7iJEgSPdsVm4/Ex/V9NS6jrL1HX2WxdIk7ey5b7u4qvD2hjBE8zIoVDJIqFgnA/CMa855JS5Z2KEVwhVR9QTUzsj0iQI4NS0EQYZ3njk84XkAdhrOPcVtouy9RUElChrKcyxVKuVp9uSyRkB5Pkqk43e+p+J3oPmSWzU6Ut1kqaiKooZpKhFjenLSA7qfxxlkdeNzBdwV+x51pRa5B3p8Ab1/wBL3XpqFC6rUW2ocvFcVUrlyQvhNn8LeoHrrKNuxXLtQJy3pKWslikjL7WBDIRyGAb1/jpo4m0LLLTLY6woolCiOQkgE428Z9O+sunbN50j/9bB+FNqvdt6Uv8AdGh8I1v2entm44Z5N7xlgvfaplHPqdVw5u3HJL+VCTxXKLfo83KtT/Eso8USigUQxN3A8FQhc+7Eg41xzOuJ30/dzCKmtm/HUypSxAnJPiNlv+o0EjNktyssFdDVStIkL0oYxMVy5BALKo+eNBqmMpaBSjuFJTXGmnEkTRU8TUsyM0isyStubAKFfQcdvz1SU7SVcE1Hdhb0JSUEXUUtypHjprfFTmN13l/FkcjawT9UKFPf31Ob0PBbGS4tt1o5qOrWKto5l2zU8seUYf2/jqZQSHxQ+Di2mGa/9PTmst8eDW0ZIeemXhQ4I/GnuSMj+lscvRHJD2KpoYFUeJC7N6ncV/ljVbJUf//Xgvt4NClc9NEIYrcscVHEhO1GlXahwf2Auc993Oi1TdBTsWlNUSxrPLnLyeXPzJyTqDKpmvYE+1XGgpScRRSNUN65KDcfr5dBchYQy1P3NVWsvABCR+2441vYeELqCaKS4ySvHkbshPTGe2swDUs9TQUVolqBSIyhVk2fP5/npGOiW3LX3+Bautqmgtr8xUVKShI/3HG0/QaWxuQjtnTtvEEpoYY4ImjdJ8gmSRWUgqXYtxrWY+ZqO51FXVSxg/doBtDYzkcHtqjxpElkZ//Z";
const Info = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="info" data-svelte-h="svelte-13fe6s7"><div class="barbaB"></div> <span class="image"><img${add_attribute("src", me, 0)} alt=""></span> <p class="name">Han Yanghyun</p> <p class="birth date">1991 .09</p></div>`;
});
const Career = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="career" data-svelte-h="svelte-12pcf93"><div class="line"></div> <ul><li class="career01"><span class="dot"></span> <p class="date">2018 .04 ~ 2018 .10</p> <p class="name">디지털디자인(웹디, 웹퍼블) 양성 교육</p></li> <li class="career02"><span class="dot"></span> <p class="date">2019 .01 ~ 2023 .12</p> <p class="name">BJPeoples(웹 퍼블리셔)</p></li></ul></div>`;
});
const Skills = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<ul class="skills"><li class="box box01"><dl data-svelte-h="svelte-18wwp7o"><dt>Tools</dt><dd><p>- VSCode</p> <p>- Github</p> <p>- Photoshop</p> <p>- XD</p> <p>- Figma</p></dd></dl> <div class="icon"><span class="dot"></span> ${validate_component(Fa || missing_component, "svelte:component").$$render($$result, { icon: faPenToSquare, size: "2.5x" }, {}, {})}</div></li> <li class="box box02 dark"><dl data-svelte-h="svelte-1veck21"><dt>Markup</dt><dd><p>- HTML</p> <p>- php</p> <p>- Asp</p> <p>- SVG</p></dd></dl> <div class="icon"><span class="dot"></span> ${validate_component(Fa || missing_component, "svelte:component").$$render($$result, { icon: faKeyboard, size: "2.5x" }, {}, {})}</div></li></ul> <ul class="skills"><li class="box box03 dark"><dl data-svelte-h="svelte-11spb04"><dt>Styles</dt><dd><p>- CSS</p> <p>- CSS Module</p> <p>- SCSS/SASS</p> <p>- CSS in js</p></dd></dl> <div class="icon"><span class="dot"></span> ${validate_component(Fa || missing_component, "svelte:component").$$render($$result, { icon: faPalette, size: "2.5x" }, {}, {})}</div></li> <li class="box box04"><dl data-svelte-h="svelte-10oaemp"><dt>Scripts</dt><dd><p>- Javscript</p> <p>- ES6 Module</p> <p>- jQuery</p> <p>- Canvas</p> <p>- Svelte</p></dd></dl> <div class="icon"><span class="dot"></span> ${validate_component(Fa || missing_component, "svelte:component").$$render($$result, { icon: faChartSimple, size: "2.5x" }, {}, {})}</div></li></ul>`;
});
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="about"><div class="inner"><div class="left">${validate_component(Title$2, "Title").$$render($$result, {}, {}, {})} ${validate_component(Info, "Info").$$render($$result, {}, {}, {})}</div> <div class="right">${validate_component(Career, "Career").$$render($$result, {}, {}, {})} ${validate_component(Skills, "Skills").$$render($$result, {}, {}, {})}</div> <div class="text_bg text01" data-svelte-h="svelte-1ks9vk">CAREER</div> <div class="text_bg text02" data-svelte-h="svelte-keuhfx">SKILLS</div></div></section>`;
});
const Title$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 class="title" data-svelte-h="svelte-a808zh"><div><p>Portfolio</p></div></h2>`;
});
const template = "/_app/immutable/assets/template.LQOXRfdX.jpg";
const isabang3$1 = "/_app/immutable/assets/isabang3.F6Mr1kie.jpg";
const fasttrack$1 = "/_app/immutable/assets/fasttrack.hMznhHIE.jpg";
const petfly$1 = "/_app/immutable/assets/petfly.6hEa9_v2.jpg";
const evlabs$1 = "/_app/immutable/assets/evlabs.1X4vLWr_.jpg";
const isabang2$1 = "/_app/immutable/assets/isabang2.AVwMqQyl.jpg";
const blacklabel$1 = "/_app/immutable/assets/blacklabel.f_1P28vr.jpg";
const alevel$1 = "/_app/immutable/assets/alevel.Hs5Q3Jh2.jpg";
const classeum$1 = "/_app/immutable/assets/classeum.jjLFvpL5.jpg";
const goldclass$1 = "/_app/immutable/assets/goldclass.2N-qQ6RG.jpg";
const slimcare$1 = "/_app/immutable/assets/slimcare.Eb2Alive.jpg";
const corevac$1 = "/_app/immutable/assets/corevac.wLew24tO.jpg";
const fastdealer$1 = "/_app/immutable/assets/fastdealer.nbIpVa8J.jpg";
const fasthunter$1 = "/_app/immutable/assets/fasthunter.pg5G1qjA.jpg";
const airclean$1 = "/_app/immutable/assets/airclean.MdJMO4oA.jpg";
const calendar$1 = "/_app/immutable/assets/calendar.f5uB5Qh8.jpg";
const todo$1 = "data:image/jpeg;base64,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";
const js = "/_app/immutable/assets/js.XFYadGwu.jpg";
const isabang$1 = "/_app/immutable/assets/isabang.YAxvhnN-.jpg";
const jejuchanga$1 = "/_app/immutable/assets/jejuchanga.Kb_A8uz5.jpg";
const stake$1 = "/_app/immutable/assets/stake.pJdq3xwZ.jpg";
const lotto$1 = "/_app/immutable/assets/lotto.goRDlmdW.jpg";
const flowercake$1 = "/_app/immutable/assets/flowercake.b8yC600h.jpg";
const afly$1 = "/_app/immutable/assets/afly.KRCzbou8.jpg";
const bjp$1 = "/_app/immutable/assets/bjp.TcZGvyy7.jpg";
const finco$1 = "/_app/immutable/assets/finco.a8457pjq.jpg";
const license$1 = "/_app/immutable/assets/license.f22giTgT.jpg";
const jamong$1 = "/_app/immutable/assets/jamong.whKxGHZU.jpg";
const playup$1 = "/_app/immutable/assets/playup.8D5M14L_.jpg";
const pyeongtaek$1 = "/_app/immutable/assets/pyeongtaek.OY4cvm9r.jpg";
const publing$1 = "/_app/immutable/assets/publing.sFJz2d49.jpg";
const hersit$1 = "/_app/immutable/assets/hersit.6uTv18rp.jpg";
const hankyung$1 = "/_app/immutable/assets/hankyung.TAmltJwY.jpg";
const mentor$1 = "/_app/immutable/assets/mentor.cNVhikW5.jpg";
const lawadviser$1 = "data:image/jpeg;base64,/9j/2wCEAAYEBAQFBAYFBQYJBgUGCQsIBgYICwwKCgsKCgwQDAwMDAwMEAwODxAPDgwTExQUExMcGxsbHB8fHx8fHx8fHx8BBwcHDQwNGBAQGBoVERUaHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fH//dAAQAKP/uAA5BZG9iZQBkwAAAAAH/wAARCADeAT4DABEAAREBAhEB/8QAkgABAAEFAQEAAAAAAAAAAAAAAAgCAwQFBgcBAQEBAQEBAQEAAAAAAAAAAAAAAQIDBAUGEAACAQMCBAQEBAUDBQAAAAAAAQIDBBEFIQYHEjETIkFRCBQyYRVCcYEjUpGh0WKTwRYlgrPhEQEAAQMDAwIFBQAAAAAAAAAAAQIREgMEBRMhMUFRIiRhkbEycXKB0f/aAAwDAAABEQIRAD8AlSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//QlSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//RlSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//SlSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//TlSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//UlSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//VlSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//WlSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//XlSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//QlSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//RlSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//SlSAAAAAAAAAAAAAAAAAAAGs4m1aro/D+oapSoO4qWdCdaNFfmcVnfHou7+xx19SaKJqiL2hJm0PEYcxOLp3UdQjqkpVG1LwWkqDj/KqazHH9/ufhZ5fc9TLL+vT7PFOtVfy9h4M4vs+JdLVzTxSu6eI3dtnLhL3XvGXoz9jsN9TuKLx2qjzD10V5Q3le4t7elKtcVYUaUN5VKklGK/VvCPbVXFMXmbQ21tHi7hatU8Onq1pKf8vjQ/yeanfaEzaK6fuznHu2lOrSqwVSlOM4S+mcWmn+jR6oqiYvDSooAAAAAAAAAAAAAAAAAAD/05UgAAAAAAAAAAAAAAAAAAB8lGMouMkpRksOL3TTFhwWocmuGak6lTTp1LCU25Kin4lBN/ywl5or9JHxN1wWjq94vRP0/wAcatGJcRdWt3wLxNbR+Zja3E49dB5fy9zT6sShlpb+8X22Z+Z1tDc8fqxVHxR7x7fWHOKZolTxdxJc69qM61dyVlSl02dk35YJbdc0tnKXucOT5Ovc19u1HpDdc37rOm8D8Q6rKLtradOlLfxJJ04Y9+qWF/Qm047cav6aZt7z2hx6dUvS+BuAa3DlWdxV1CpWnVh0ytYNqhnP1NP6pL0ex+w4vi6tv3qqvM+keHo09PH1dkfZdQAAAAAAAAAAAAAAAAAAf//UlSAAAAAAAAAAAAAAAAAAAAABxPN3QbbV+E2qlFVK9tXpVLef5oOclTk19sT3R8vmI+XmfWEmm6rgzlroei21vc1oO81DoUnUrvqjTk0toQ7LHu9znsOK09OmK6ovqTH2/ZIoiHaH2GgAAAAAAAAAAAAAAAAAAAAH/9WVIAAAAAAAAAAAAAAAAAAAAAGo4pj16ZGm+069FP8A3E/+DwclF9K3vMflqny26PeyAAAAAAAAAAAAAAAAAAAAAAf/1pUgAAAAAAAAAAAAAAAAAAAAAaTi+r4WmUp9XQlc0My74XXl9/sePfR8Efyj8t0eWJa8yuBLviKPDlrrVtX1iazC2pyclLy9WI1EnTcsLOFLJ7GbOmCAAAAAAAAAAAAAAAAAAAAAP//XlSAAAAAAAAAAAAAAAAAMgANHxNxtwxw1ZXVzqt/RpStKSrTtVODuJRllRUKWVKTm1iIHiut/FxZ0o1Y6RoEpvdW9a8uFBPfZyp04zf0+nUS7WLybjLnHx/xjG6pX1/8ALaRcNf8AarbpjTjFNNJywpy7ZbkzNXdqIs5bR7upZ3trdU6roXFlWhWo1GmvPTaaSax2wiLKY/AHOnhfi2Xyjf4ZqiWflLmcF4ibUU6U08Ty327m7ucw9BTT3TyVAAAAAAAAAAAAAAAAAAAAP//QlSAAAAAAAAAAAAAAAAAG0k23hLdtgeEc1viFr6ZqNbQuEY06lxbtK51eXTVpqS3lTpQfll7OTeO+F6kmWopR14l1/Uda1itq+q3VW7v7l/xK774X0qKWFGKWyS2RluzSyr1vmFWi1Fw3jnpk8r7boIp+ZlGKTWGm8dS7p/YF1+3u6sJ+VOcc574e2UvK2Bn0azclKFaSUZZi8LCae++2Hn1CvSuU3Oe44JneW95QutXsrvwnCiq7/hODfiTpxmp/Un9O3YsSzNKUHB3GvD/F+k/imiV3Vt1OVKpCa6KkJx9JwfbK3X2NMzDehAAAAAAAAAAAAAAAAAA//9GVIAAAAAAAAAAAAAAAC1d3dvZ2ta7uaipW1vCVWtVl2jCC6pSf6JARr5w/EXT1PS46PwbVq0KVdSjqeoTio5pyjjwaTy5Lq/NJY27EmW4peDULyNOsoxgmul99lh9//hlq77O161Ku+nwIS7dUVLLW2F3x+2ArDn0024KKVRPG/mw/0xj1CKIxi3lqTll+bsv3X7AXPCliE4fUsPDz7/fDIi/bPM/LJqVTKS2wtvzZKL3iVoVFOnXaccdTXlfW00+lrfG3p7hW84f4q4h0ONWWjahc6d8x0fMq1qOHidLfR1L/AE5ZblkqOV3NO11PhLRp8Uajb2+tajWuLa2c2qfzLtpJOSSSgpYkv1fY1DnMPSwgAAAAAAAAAAAAAAAA/9KVIAAAAAAAAAAAAAAHHc29avdI5e6xfabqUNM1KjQdSzuJuOXOnJScIRkpdUpxTitvUSsIi3vODmHf8OX3DN5qVW8tdRn4txVrNyrxin1ThGplfw59nF7exm7Vu7k4xoycoPKeE6O+V1ZWVJvpxtnD9yN3W5VeiUai2aflcovG/vn+wRYU75ufkkqMWnjPr2+3cIR63Vl2lRy3FpebyvtjdZBCpePvDoynF7J+nd/2Cvig1B7+aKXTLukv1zsArwubStKnVg6VaKWY98deGs4znZgsyadZuLeWvWOz7+oGXb3EqMvG8Tw5QTkpSXU8vbCWGt8+oVadzJdMKjUo9ox37vdtLL9v3CO/4e55cztFvLi5WsfiNO7abt7uPiU4dDW0IZj4flXT5di5Ji9u4f8Aig4N1C4s7fU7K60mVaMvm7mqlUt6M4xyl1QzOUZPZPoLeGcZdDW588u6XElPQpXk5OsqDoahTip2kncJOK8SLbjjqXU5Lb9mVLS9EUlJJp5T3TXZoIAAAAAAAAAAAAB//9OVIAAAAAAAAAAAAfJSUYuUmlFLLb2SSAj9zj552d3Y1tA4UuPEoVlKlqGqxX8OVOcHF07eSkpdWXvLH6GZl1po90e51L+s6cKs51bejmcKbnKSjKWMtKbwnt6Eutlm6pTnObnBRjJbqLXVthJJhbMScIqnBLHX36pJPd+i6dyJZ8pUqrl014vEspScU8fb/AuWZHy1r0yhFuU8Lw1NZeYtNrZ/0BZVK06qzWEoze/SsOL74S9O4WymWl7Oop4ptvq6sezw17i6WZE+G68NOhfqdKdtOXgxjCrDxU8dXU6SfXhY+prAuuLG+Rh1SS2jjvNJfvsl/gXLLMrCUanTCEtl51v756sPt+wSzNtLWP1vLqSynHOYY9NillNtptSCi6k45UlOn0rL3zlJ9yXIpZPyVZqrHojUSi5VKOX1OK7uOMdhdbLtHwHGjGvTlb04x6VLMt2ns5OTll429AsQzKNlVqu3pU7epK3vKip2UvDajUqNpdNOWOmby/TOCSsQmdy54dvuHOC9K0W+lCd5Z0nGs6c51IZc5SxGU98JPHt7bHSnw4VTeXSFZAAAAAAAAAAAB//UlSAAAAAAAAAAAABpNYe6fdAc3X5a8v69SVSrw7p8pzfVJ/L01l++yM4w1nLEueUPLG4T8Xhmw83dxoqD3+8OkYwZywFyG5Sqbl/09SbbzvVuHv8A7gxXOXyPIflRGtKotBp4lFR8Lxa/hrH5lHr7/cYwZyuvkbyoaw+HLdpe8qze336xjCZytz5EcqJvP4DBfZVq6XfPbxBhC9SVmfIDlXJt/hEo5aa6biusYWNvOMIOpL5H4fuU8W3+DPfuvmLjH/sGJ1JUS+HrlY1BR02rCMHlRjcVkn9n5s4GJ1JUVPh45aTkmra6hFpqpTjc1Omaf82W3/RoYr1JW5fDny0yuihd08dum5n/AM5GJ1JWanw18uZvaV/BYx0qvFrH/lTkMTqSoj8NHLxZzVv+l7xSrQj049nGmmTE6kr9t8OXLujU65u/uFv5KlxhNSXmi/DjBtP9S4nUlvtE5O8t9GuHcWeiUpVcYXzMp3MV94xrSnFP7pFxhM5ddGztIxpRjQpqNF5opRjiD/07bfsWzF10AAAAAAAAAAAAAH//1ZUgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//1pUgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//15UgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//0JUgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//0ZUgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//0pUgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//2Q==";
const isearch$1 = "/_app/immutable/assets/isearch.X88EjBoI.jpg";
const cpa$1 = "/_app/immutable/assets/cpa.14n4bbqD.jpg";
const makefly$1 = "/_app/immutable/assets/makefly.06Gi8LU_.jpg";
const linefly$1 = "data:image/jpeg;base64,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";
const kanghan$1 = "/_app/immutable/assets/kanghan.kOcQH1WB.jpg";
const implant$1 = "/_app/immutable/assets/implant.Xhl8eB_q.jpg";
const chungin$1 = "data:image/jpeg;base64,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";
const isafly$1 = "/_app/immutable/assets/24fly.hJwmo_CZ.jpg";
const thumnails = [
  isabang3$1,
  fasttrack$1,
  evlabs$1,
  petfly$1,
  isabang2$1,
  slimcare$1,
  goldclass$1,
  template,
  blacklabel$1,
  alevel$1,
  corevac$1,
  airclean$1,
  jejuchanga$1,
  isabang$1,
  fastdealer$1,
  fasthunter$1,
  classeum$1,
  stake$1,
  js,
  lotto$1,
  flowercake$1,
  calendar$1,
  todo$1,
  afly$1,
  bjp$1,
  finco$1,
  js,
  license$1,
  jamong$1,
  playup$1,
  pyeongtaek$1,
  js,
  js,
  publing$1,
  hersit$1,
  hankyung$1,
  mentor$1,
  lawadviser$1,
  isearch$1,
  cpa$1,
  makefly$1,
  linefly$1,
  kanghan$1,
  implant$1,
  chungin$1,
  isafly$1
];
const List$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data, onClick } = $$props;
  let newArr = [];
  for (let i = 0; i < data.lists.length; i++) {
    newArr.push(data.lists[i]);
  }
  register();
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  return `<div class="grid"><swiper-container${add_attribute("slides-per-view", `auto`, 0)}${add_attribute("space-between", 20, 0)}${add_attribute("speed", 700, 0)}${add_attribute("scrollbar", true, 0)}${add_attribute("grid", { rows: 2, fill: "column" }, 0)}${add_attribute(
    "breakpoints",
    {
      501: { grid: { fill: "row", rows: 1 } },
      768: {
        spaceBetween: 40,
        grid: { fill: "row", rows: 1 }
      }
    },
    0
  )}>${each(newArr, (list, idx) => {
    return `<swiper-slide><button class="${"box box" + escape(idx + 1, true)}"><div class="img"><img${add_attribute("src", thumnails[idx], 0)}${add_attribute("alt", list.meta.title, 0)} loading="lazy"></div> <div class="site_info"><p class="name">${escape(list.meta.title)}</p> <p class="hide_txt coment">${escape(list.meta.caption)}</p> <p class="hide_txt type">${escape(list.meta.type)}</p> <span class="icon">${validate_component(Fa || missing_component, "svelte:component").$$render($$result, { icon: faChevronRight, size: "1.5x" }, {}, {})} </span></div> <div class="bg"></div></button> </swiper-slide>`;
  })}</swiper-container></div>`;
});
const Portfolio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data, onClick } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  return `<section class="portfolio"><div class="inner">${validate_component(Title$1, "Title").$$render($$result, {}, {}, {})} ${validate_component(List$1, "List").$$render($$result, { data, onClick }, {}, {})}</div></section>`;
});
const Title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 class="title" data-svelte-h="svelte-htg5zl"><div><p>Contact</p></div></h2>`;
});
const List = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<ul class="list"><li class="list01"><span class="img">${validate_component(Fa || missing_component, "svelte:component").$$render($$result, { icon: faEnvelope, size: "4x" }, {}, {})}</span> <dl data-svelte-h="svelte-10bamxk"><dt>Email</dt><dd><a href="mailto:didgustm12@naver.com" target="_blank">didgustm12@naver.com</a></dd></dl></li> <li class="list02"><span class="img">${validate_component(Fa || missing_component, "svelte:component").$$render($$result, { icon: faGithub, size: "4x" }, {}, {})}</span> <dl data-svelte-h="svelte-h4mhj7"><dt>Github</dt><dd><a href="https://github.com/didgustm?tab=repositories" target="_blank">https://github.com/didgustm?tab=repositories</a></dd></dl></li> <li class="list03"><span class="img">${validate_component(Fa || missing_component, "svelte:component").$$render($$result, { icon: faInstagram, size: "4x" }, {}, {})}</span> <dl data-svelte-h="svelte-mfiqcc"><dt>Instagram</dt><dd><a href="https://www.instagram.com/jegalryanghyun/" target="_blank">https://www.instagram.com/jegalryanghyun/</a></dd></dl></li></ul>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="footer" data-svelte-h="svelte-d7aa61"><p>Copyright ©2023. my worklist</p></footer>`;
});
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="contact"><div class="inner">${validate_component(Title, "Title").$$render($$result, {}, {}, {})} ${validate_component(List, "List").$$render($$result, {}, {}, {})} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div></section>`;
});
const Top = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { detailItem, onClose } = $$props;
  if ($$props.detailItem === void 0 && $$bindings.detailItem && detailItem !== void 0)
    $$bindings.detailItem(detailItem);
  if ($$props.onClose === void 0 && $$bindings.onClose && onClose !== void 0)
    $$bindings.onClose(onClose);
  return `<section class="subTop"><button class="buttons close">${validate_component(Fa || missing_component, "svelte:component").$$render($$result, { icon: faXmark, size: "3x" }, {}, {})}</button> <div class="inner"><p class="descript">${escape(detailItem.meta.caption)}</p> <h2 class="title"><div><p>${escape(detailItem.meta.title)}</p></div></h2> <a${add_attribute("href", detailItem.meta.url, 0)} class="url" target="_blank">${escape(detailItem.meta.url)}</a> <div class="category"><p>${escape(detailItem.meta.role)}</p> <span data-svelte-h="svelte-1j4g6zq">⋅</span> <p>${escape(detailItem.meta.device)}</p></div></div></section>`;
});
const View = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { detailItem, src } = $$props;
  if ($$props.detailItem === void 0 && $$bindings.detailItem && detailItem !== void 0)
    $$bindings.detailItem(detailItem);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  return `<section class="section view"><div class="inner"><div class="view_img"><img${add_attribute("src", src, 0)}${add_attribute("alt", detailItem.meta.title, 0)}></div></div></section>`;
});
const template01 = "/_app/immutable/assets/template01_view.EdfpJI5t.webp";
const isabang3 = "/_app/immutable/assets/isabang3_view.DZWcEVty.webp";
const fasttrack = "/_app/immutable/assets/fasttrack_view.YNEDzp7J.webp";
const petfly = "/_app/immutable/assets/petfly_view.rWqnESmU.webp";
const evlabs = "/_app/immutable/assets/evlabs_view.-qlGEC7e.webp";
const isabang2 = "/_app/immutable/assets/isabang2_view.aZV04i5l.webp";
const blacklabel = "/_app/immutable/assets/blacklabel_view.WKlEAoOr.webp";
const alevel = "/_app/immutable/assets/alevel_view.0mf-GGfO.webp";
const classeum = "/_app/immutable/assets/classeum_view.LmTCtdMx.webp";
const goldclass = "/_app/immutable/assets/goldclass_view.t77wjvak.webp";
const slimcare = "/_app/immutable/assets/slimcare_view.Cj-r2AiE.webp";
const corevac = "/_app/immutable/assets/corevac_view.Q0MBmCZV.webp";
const fastdealer = "/_app/immutable/assets/fastdealer_view.VaM6Thta.webp";
const fasthunter = "/_app/immutable/assets/fasthunter_view.A9YPh_Q4.webp";
const airclean = "/_app/immutable/assets/airclean_view.fIqUuZ7d.webp";
const chart = "/_app/immutable/assets/chart_view.9k4FK3cY.webp";
const isabang = "/_app/immutable/assets/isabang_view.AfwA1Ekf.webp";
const jejuchanga = "/_app/immutable/assets/jejuchanga_view.aRl-eux_.webp";
const stake = "/_app/immutable/assets/stake_view.JbmUFYM2.webp";
const lotto = "/_app/immutable/assets/lotto_view.mcRnl9NX.webp";
const flowercake = "/_app/immutable/assets/flowercake_view.wNiLKCrD.webp";
const calendar = "/_app/immutable/assets/calendar_view.Otlqa-7G.webp";
const todo = "/_app/immutable/assets/todo_view.vAr2HmOQ.webp";
const afly = "/_app/immutable/assets/afly_view.kD5AHNd8.webp";
const bjp = "/_app/immutable/assets/bjp_view.uNXmJeJg.webp";
const finco = "/_app/immutable/assets/finco_view.J8SOEc0c.webp";
const fullpage = "/_app/immutable/assets/fullpage_view.CVn5biAX.webp";
const license = "/_app/immutable/assets/license_view.UqV7mQFR.webp";
const jamong = "/_app/immutable/assets/jamong_view.xj1kRv6f.webp";
const playup = "/_app/immutable/assets/playup_view.styDGifM.webp";
const pyeongtaek = "/_app/immutable/assets/pyeongtaek_view.Xc_fDZ8p.webp";
const sort = "/_app/immutable/assets/sort_view.IRawsGMH.webp";
const swiper = "/_app/immutable/assets/swiper_view.KAlScn-R.webp";
const publing = "/_app/immutable/assets/publing_view.PthBbWyt.webp";
const hersit = "/_app/immutable/assets/hersit_view.Q3yZB5kB.webp";
const hankyung = "/_app/immutable/assets/hankyung_view.E_4S2QPT.webp";
const mentor = "/_app/immutable/assets/mentor_view.QjOXVXJ1.webp";
const lawadviser = "/_app/immutable/assets/lawadviser_view.h6MTr-qi.webp";
const isearch = "/_app/immutable/assets/isearch_view.yY9hPt6A.webp";
const cpa = "/_app/immutable/assets/cpa_view.BhfA3uaU.webp";
const makefly = "/_app/immutable/assets/makefly_view.FuqscGjT.webp";
const linefly = "/_app/immutable/assets/linefly_view.iGGMArF_.webp";
const kanghan = "/_app/immutable/assets/kanghan_view.POJR5vly.webp";
const implant = "/_app/immutable/assets/implant_view.tYnYY417.webp";
const chungin = "/_app/immutable/assets/chungin_view._Ji4T05p.webp";
const isafly = "/_app/immutable/assets/24fly_view.rpBM0fH3.webp";
const views = [
  isabang3,
  fasttrack,
  evlabs,
  petfly,
  isabang2,
  slimcare,
  goldclass,
  template01,
  blacklabel,
  alevel,
  corevac,
  airclean,
  jejuchanga,
  isabang,
  fastdealer,
  fasthunter,
  classeum,
  stake,
  chart,
  lotto,
  flowercake,
  calendar,
  todo,
  afly,
  bjp,
  finco,
  fullpage,
  license,
  jamong,
  playup,
  pyeongtaek,
  sort,
  swiper,
  publing,
  hersit,
  hankyung,
  mentor,
  lawadviser,
  isearch,
  cpa,
  makefly,
  linefly,
  kanghan,
  implant,
  chungin,
  isafly
];
const Detail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { detailItem, onClose } = $$props;
  let detail;
  const arr = [...views].reverse(), src = arr[detailItem.meta.id - 1];
  if ($$props.detailItem === void 0 && $$bindings.detailItem && detailItem !== void 0)
    $$bindings.detailItem(detailItem);
  if ($$props.onClose === void 0 && $$bindings.onClose && onClose !== void 0)
    $$bindings.onClose(onClose);
  return `<div class="detail" data-lenis-prevent${add_attribute("this", detail, 0)}>${validate_component(Top, "Top").$$render($$result, { detailItem, onClose }, {}, {})} ${validate_component(View, "View").$$render($$result, { detailItem, src }, {}, {})} ${``} ${``}</div>`;
});
gsap.registerPlugin(ScrollTrigger);
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let detailItem = data.lists[0], show = false;
  if (location.hash != "") {
    show = true;
  }
  const onClick = (list) => {
    show = true;
    detailItem = list;
    document.documentElement.classList.add("forbid_scroll");
    location.hash = detailItem.path.substr(6);
  };
  const onClose = () => {
    show = false;
    document.documentElement.classList.remove("forbid_scroll");
    history.replaceState("", "", location.pathname);
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return ` <div class="pin">${validate_component(Visual, "Visual").$$render($$result, {}, {}, {})} ${validate_component(About, "About").$$render($$result, {}, {}, {})} ${validate_component(Portfolio, "Portfolio").$$render($$result, { data, onClick }, {}, {})} ${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}</div> ${show ? `${validate_component(Detail, "Detail").$$render($$result, { detailItem, onClose }, {}, {})}` : ``}`;
});
export {
  Page as default
};
