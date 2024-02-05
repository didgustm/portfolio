import { j as json } from "../../../chunks/index.js";
const fetchMarkdownPosts = async () => {
  const allPostFiles = /* @__PURE__ */ Object.assign({ "/src/routes/list/24fly.md": () => import("../../../chunks/24fly.js"), "/src/routes/list/afly.md": () => import("../../../chunks/afly.js"), "/src/routes/list/airclean.md": () => import("../../../chunks/airclean.js"), "/src/routes/list/alevel.md": () => import("../../../chunks/alevel.js"), "/src/routes/list/bjp.md": () => import("../../../chunks/bjp.js"), "/src/routes/list/blacklabel.md": () => import("../../../chunks/blacklabel.js"), "/src/routes/list/calendar.md": () => import("../../../chunks/calendar.js"), "/src/routes/list/chart.md": () => import("../../../chunks/chart.js"), "/src/routes/list/chungin.md": () => import("../../../chunks/chungin.js"), "/src/routes/list/classeum.md": () => import("../../../chunks/classeum.js"), "/src/routes/list/corevac.md": () => import("../../../chunks/corevac.js"), "/src/routes/list/cpa.md": () => import("../../../chunks/cpa.js"), "/src/routes/list/evlabs.md": () => import("../../../chunks/evlabs.js"), "/src/routes/list/fastdealer.md": () => import("../../../chunks/fastdealer.js"), "/src/routes/list/fasthunter.md": () => import("../../../chunks/fasthunter.js"), "/src/routes/list/fasttrack.md": () => import("../../../chunks/fasttrack.js"), "/src/routes/list/finco.md": () => import("../../../chunks/finco.js"), "/src/routes/list/flowercake.md": () => import("../../../chunks/flowercake.js"), "/src/routes/list/fullpage.md": () => import("../../../chunks/fullpage.js"), "/src/routes/list/goldclass.md": () => import("../../../chunks/goldclass.js"), "/src/routes/list/hankyung.md": () => import("../../../chunks/hankyung.js"), "/src/routes/list/hersit.md": () => import("../../../chunks/hersit.js"), "/src/routes/list/implant.md": () => import("../../../chunks/implant.js"), "/src/routes/list/isabang.md": () => import("../../../chunks/isabang.js"), "/src/routes/list/isabang2.md": () => import("../../../chunks/isabang2.js"), "/src/routes/list/isabang3.md": () => import("../../../chunks/isabang3.js"), "/src/routes/list/isearch.md": () => import("../../../chunks/isearch.js"), "/src/routes/list/jamong.md": () => import("../../../chunks/jamong.js"), "/src/routes/list/jejuchanga.md": () => import("../../../chunks/jejuchanga.js"), "/src/routes/list/kanghan.md": () => import("../../../chunks/kanghan.js"), "/src/routes/list/lawadviser.md": () => import("../../../chunks/lawadviser.js"), "/src/routes/list/license.md": () => import("../../../chunks/license.js"), "/src/routes/list/linefly.md": () => import("../../../chunks/linefly.js"), "/src/routes/list/lotto.md": () => import("../../../chunks/lotto.js"), "/src/routes/list/makefly.md": () => import("../../../chunks/makefly.js"), "/src/routes/list/mentor.md": () => import("../../../chunks/mentor.js"), "/src/routes/list/petfly.md": () => import("../../../chunks/petfly.js"), "/src/routes/list/playup.md": () => import("../../../chunks/playup.js"), "/src/routes/list/publing.md": () => import("../../../chunks/publing.js"), "/src/routes/list/pyeongtaek.md": () => import("../../../chunks/pyeongtaek.js"), "/src/routes/list/slimcare.md": () => import("../../../chunks/slimcare.js"), "/src/routes/list/sort.md": () => import("../../../chunks/sort.js"), "/src/routes/list/stake.md": () => import("../../../chunks/stake.js"), "/src/routes/list/swiper.md": () => import("../../../chunks/swiper.js"), "/src/routes/list/template01.md": () => import("../../../chunks/template01.js"), "/src/routes/list/todo.md": () => import("../../../chunks/todo.js") }), iterablePostFiles = Object.entries(allPostFiles);
  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const postPath = path.slice(11, -3);
      return {
        meta: metadata,
        path: postPath
      };
    })
  );
  return allPosts;
};
const GET = async () => {
  const allPosts = await fetchMarkdownPosts();
  const sortedPosts = allPosts.sort((a, b) => {
    return b.meta.id - a.meta.id;
  });
  return json(sortedPosts);
};
export {
  GET
};
