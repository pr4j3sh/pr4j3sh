import { m as createComponent, n as renderTemplate, p as maybeRenderHead, v as unescapeHTML } from './astro/server_c3hZBegq.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Worked on Whatsapp Connection Service, automating recruitment process using Whatsapp and whatsapp-web.js, created reports of contact information of potential clients via web scraping using beautifulsoup and selenium, took workshops on topics such as web development, data science and statistics.</p>";

				const frontmatter = {"company":"DeepThought","role":"Software Developer Intern","dateStart":"06/14/2023","dateEnd":"02/11/2024"};
				const file = "/home/prajesh/files/projects/elevenco/src/content/work/deepthought.md";
				const url = undefined;
				function rawContent() {
					return "\nWorked on Whatsapp Connection Service, automating recruitment process using Whatsapp and whatsapp-web.js, created reports of contact information of potential clients via web scraping using beautifulsoup and selenium, took workshops on topics such as web development, data science and statistics.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
