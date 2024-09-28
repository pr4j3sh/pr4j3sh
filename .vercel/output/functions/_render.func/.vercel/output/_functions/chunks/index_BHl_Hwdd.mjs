/* empty css                          */
import { m as createComponent, n as renderTemplate, o as renderComponent, p as maybeRenderHead } from './astro/server_c3hZBegq.mjs';
import 'kleur/colors';
import { $ as $$Container, a as $$PageLayout } from './PageLayout_CUMc0uVr.mjs';
import { $ as $$BackToPrev } from './BackToPrev_DQs1hJtG.mjs';
import { Q as QUOTE } from './consts_Bkyf_Zw4.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": QUOTE.TITLE, "description": QUOTE.DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="animate"> ${renderComponent($$result3, "BackToPrev", $$BackToPrev, { "href": "/" }, { "default": ($$result4) => renderTemplate` Back to home ` })} </div> <div class="animate space-y-1 my-10"> <div class="text-2xl font-semibold text-black dark:text-white">
Get Your Project Quote
</div> <p>
We're excited to hear your ideas! Please provide details about your
        project, including what you envision, any specific requirements you
        have, and how we can help turn your concept into reality. The more
        information you share, the better we can assist you!
</p> </div> <article class="animate"> <form class="space-y-6" method="post"> <!-- Project Name and Deadline --> <div class="flex flex-col items-center gap-4 justify-between md:flex-row"> <div class="w-full"> <label for="name" class="block text-sm font-bold">Name</label> <input id="name" name="name" type="text" placeholder="Your name" required class="text-sm mt-1 block w-full px-3 py-2 border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-900 rounded-md shadow-sm focus:outline-none placeholder-stone-400 dark:placeholder-stone-500"> </div> <div class="w-full"> <label for="email" class="block text-sm font-bold">Email</label> <input id="email" name="email" type="email" placeholder="you@example.com" required class="text-sm mt-1 block w-full px-3 py-2 border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-900 rounded-md shadow-sm focus:outline-none placeholder-stone-400 dark:placeholder-stone-500"> </div> </div> <!-- Project Name and Deadline --> <div class="flex flex-col items-center gap-4 justify-between md:flex-row"> <div class="w-full"> <label for="project-name" class="block text-sm font-bold">Project Name</label> <input id="project-name" name="projectName" type="text" placeholder="Project name" required class="mt-1 block w-full px-3 py-2 text-sm border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-900 rounded-md shadow-sm focus:outline-none placeholder-stone-400 dark:placeholder-stone-500"> </div> <div class="w-full"> <label for="deadline" class="block text-sm font-bold">Project Deadline</label> <input id="deadline" name="deadline" type="date" required class="mt-1 block w-full px-3 py-2 text-sm border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-900 rounded-md shadow-sm focus:outline-none placeholder-stone-400 dark:placeholder-stone-500"> </div> </div> <div class="flex flex-col items-center gap-4 justify-between md:flex-row"> <!-- Budget --> <div class="w-full"> <label for="budget" class="block text-sm font-bold">Budget</label> <input id="budget" name="budget" type="number" placeholder="Budget in USD" required class="mt-1 block w-full px-3 py-2 text-sm border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-900 rounded-md shadow-sm focus:outline-none placeholder-stone-400 dark:placeholder-stone-500"> </div> <!-- Project Type --> <div class="w-full"> <label for="project-type" class="block text-sm font-bold">Project Type</label> <select id="project-type" name="projectType" required class="mt-1 block w-full px-3 py-2 text-sm border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-900 rounded-md shadow-sm focus:outline-none"> <option value="web-development">Web Development</option> <option value="mobile-app">Mobile App</option> <option value="cli">CLI App</option> <option value="design">UI Design</option> <option value="other">Other</option> </select> </div> </div> <!-- Features Needed --> <div> <label for="features" class="block text-sm font-bold">Features Needed</label> <div class="mt-1 ml-4 flex flex-col gap-2"> <label class="flex items-center space-x-2"> <input type="checkbox" name="features" value="authentication" class="form-checkbox text-indigo-600"> <span class="py-2 text-sm">User Authentication</span> </label> <label class="flex items-center space-x-2"> <input type="checkbox" name="features" value="api" class="form-checkbox text-indigo-600"> <span class="py-2 text-sm">API Integration</span> </label> <label class="flex items-center space-x-2"> <input type="checkbox" name="features" value="ai" class="form-checkbox text-indigo-600"> <span class="py-2 text-sm">AI Integration</span> </label> <label class="flex items-center space-x-2"> <input type="checkbox" name="features" value="ecommerce" class="form-checkbox text-indigo-600"> <span class="py-2 text-sm">E-commerce</span> </label> <label class="flex items-center space-x-2"> <input type="checkbox" name="features" value="seo" class="form-checkbox text-indigo-600"> <span class="py-2 text-sm">SEO Optimization</span> </label> </div> </div> <!-- Description --> <div> <label for="description" class="block text-sm font-bold">Project Description</label> <textarea id="description" name="description" rows="4" placeholder="Describe your project..." required class="mt-1 block w-full px-3 py-2 text-sm border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-900 rounded-md shadow-sm focus:outline-none placeholder-stone-400 dark:placeholder-stone-500"></textarea> </div> <!-- Submit Button --> <div id="alertBox" class="animate"></div> <button type="submit" class="w-fit flex items-center gap-x-1 px-5 py-1.5 flex-nowrap rounded border border-black/15 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white transition-colors duration-300 ease-in-out no-underline text-sm font-bold">
Submit
</button> </form> </article> ` })} ` })} `;
}, "/home/prajesh/files/projects/elevenco/src/pages/quote/index.astro", void 0);

const $$file = "/home/prajesh/files/projects/elevenco/src/pages/quote/index.astro";
const $$url = "/quote";

export { $$Index as default, $$file as file, $$url as url };