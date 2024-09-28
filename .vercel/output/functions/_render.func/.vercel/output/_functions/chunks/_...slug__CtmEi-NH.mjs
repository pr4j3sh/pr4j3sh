/* empty css                          */
import { q as createAstro, m as createComponent, n as renderTemplate, o as renderComponent, p as maybeRenderHead } from './astro/server_c3hZBegq.mjs';
import 'kleur/colors';
import { g as getCollection } from './_astro_content_UVgez1Z5.mjs';
import { a as $$PageLayout, $ as $$Container, r as readingTime } from './PageLayout_CUMc0uVr.mjs';
import { $ as $$FormattedDate } from './FormattedDate_QTtGx62E.mjs';
import { $ as $$BackToPrev } from './BackToPrev_DQs1hJtG.mjs';

const $$Astro = createAstro("https://elevenco.vercel.app");
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const posts = (await getCollection("blog")).filter((post2) => !post2.data.draft).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const { slug } = Astro2.params;
  const post = posts.find((page) => page.slug === slug);
  if (!post) return Astro2.redirect("/404");
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": post.data.title, "description": post.data.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="animate"> ${renderComponent($$result3, "BackToPrev", $$BackToPrev, { "href": "/blog" }, { "default": ($$result4) => renderTemplate` Back to blog ` })} </div> <div class="space-y-1 my-10"> <div class="animate flex items-center gap-1.5"> <div class="font-base text-sm"> ${renderComponent($$result3, "FormattedDate", $$FormattedDate, { "date": post.data.date })} </div>
&bull;
<div class="font-base text-sm"> ${readingTime(post.body)} </div> </div> <div class="animate text-2xl font-semibold text-black dark:text-white"> ${post.data.title} </div> </div> <article class="animate"> ${renderComponent($$result3, "Content", Content, {})} </article> ` })} ` })}`;
}, "/home/prajesh/files/projects/elevenco/src/pages/blog/[...slug].astro", void 0);

const $$file = "/home/prajesh/files/projects/elevenco/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

export { $$ as default, $$file as file, $$url as url };
