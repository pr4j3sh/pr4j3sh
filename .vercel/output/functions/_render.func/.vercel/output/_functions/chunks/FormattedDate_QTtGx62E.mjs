import { q as createAstro, m as createComponent, n as renderTemplate, p as maybeRenderHead, s as addAttribute } from './astro/server_c3hZBegq.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://elevenco.vercel.app");
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}> ${date.toLocaleDateString("en-us", {
    month: "short",
    day: "numeric",
    year: "numeric"
  })} </time>`;
}, "/home/prajesh/files/projects/elevenco/src/components/FormattedDate.astro", void 0);

export { $$FormattedDate as $ };
