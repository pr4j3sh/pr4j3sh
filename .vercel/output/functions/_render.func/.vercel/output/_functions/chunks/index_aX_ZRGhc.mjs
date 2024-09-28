/* empty css                          */
import { m as createComponent, n as renderTemplate, o as renderComponent, p as maybeRenderHead } from './astro/server_c3hZBegq.mjs';
import 'kleur/colors';
import { g as getCollection } from './_astro_content_UVgez1Z5.mjs';
import { $ as $$Container, a as $$PageLayout } from './PageLayout_CUMc0uVr.mjs';
import { $ as $$ArrowCard } from './ArrowCard_TKQz2xtG.mjs';
import { P as PROJECTS } from './consts_Bkyf_Zw4.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const projects = (await getCollection("projects")).filter((project) => !project.data.draft).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": PROJECTS.TITLE, "description": PROJECTS.DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="space-y-10"> <div class="animate font-semibold text-black dark:text-white">
Projects
</div> <ul class="animate flex flex-col gap-4"> ${projects.map((project) => renderTemplate`<li> ${renderComponent($$result3, "ArrowCard", $$ArrowCard, { "entry": project })} </li>`)} </ul> </div> ` })} ` })}`;
}, "/home/prajesh/files/projects/elevenco/src/pages/projects/index.astro", void 0);

const $$file = "/home/prajesh/files/projects/elevenco/src/pages/projects/index.astro";
const $$url = "/projects";

export { $$Index as default, $$file as file, $$url as url };