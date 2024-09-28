import { m as createComponent, n as renderTemplate, p as maybeRenderHead, v as unescapeHTML } from './astro/server_c3hZBegq.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"the-warriors-path\">The Warrior’s Path</h2>\n<p>In every legend, the hero’s journey begins with a trial, a moment where doubt and fear whisper in the shadows. This is your call to arms, the summons to rise and meet your destiny. To forge yourself into the warrior you are destined to become, discipline is your greatest ally. It is the bedrock upon which all victories are built.</p>\n<h2 id=\"discipline-is-your-shield\">Discipline is Your Shield</h2>\n<p>Ever heard of the term? Discipline is your shield in the heat of battle. It shapes your resolve and sharpens your focus. In the crucible of life, only the disciplined emerge unscathed. Every action you take carves your destiny in stone. Will you carve a legacy of triumph, or will you let your dreams be buried under the weight of inaction?</p>\n<h2 id=\"hard-work-is-your-sword\">Hard Work is Your Sword</h2>\n<p>A true warrior knows that battle is not won by chance but by relentless effort. Keep fighting, for it is through the grind of hard work that your sword becomes sharp enough to cut through any obstacle. There is no room for excuses on the battlefield; there is only victory or defeat.</p>\n<h2 id=\"surrender-is-not-an-option\">Surrender is Not an Option</h2>\n<p>In the heat of battle, giving up is not an option. There is no retreat, no surrender. This is the Spartan way, the way of warriors. You fight until the last breath, for the moment you give up, you’ve already lost. The path to glory is unforgiving, and only those who refuse to yield will taste its rewards.</p>\n<h2 id=\"conclusion\">Conclusion</h2>\n<p>The beginning of any journey is fraught with challenges. The first steps are the most daunting, but as you press on, the fog clears, and the path becomes illuminated by your determination. Embrace the struggle, for it is in these moments that you are forged into a warrior. Keep advancing, and let nothing stand in your way.</p>";

				const frontmatter = {"title":"The First Few Steps","description":"Abandon hesitation, strike with the swiftness of your resolve.","date":"Aug 12 2024"};
				const file = "/home/prajesh/files/projects/elevenco/src/content/blog/01-first-few-steps.md";
				const url = undefined;
				function rawContent() {
					return "\n## The Warrior’s Path\n\nIn every legend, the hero's journey begins with a trial, a moment where doubt and fear whisper in the shadows. This is your call to arms, the summons to rise and meet your destiny. To forge yourself into the warrior you are destined to become, discipline is your greatest ally. It is the bedrock upon which all victories are built.\n\n## Discipline is Your Shield\n\nEver heard of the term? Discipline is your shield in the heat of battle. It shapes your resolve and sharpens your focus. In the crucible of life, only the disciplined emerge unscathed. Every action you take carves your destiny in stone. Will you carve a legacy of triumph, or will you let your dreams be buried under the weight of inaction?\n\n## Hard Work is Your Sword\n\nA true warrior knows that battle is not won by chance but by relentless effort. Keep fighting, for it is through the grind of hard work that your sword becomes sharp enough to cut through any obstacle. There is no room for excuses on the battlefield; there is only victory or defeat.\n\n## Surrender is Not an Option\n\nIn the heat of battle, giving up is not an option. There is no retreat, no surrender. This is the Spartan way, the way of warriors. You fight until the last breath, for the moment you give up, you’ve already lost. The path to glory is unforgiving, and only those who refuse to yield will taste its rewards.\n\n## Conclusion\n\nThe beginning of any journey is fraught with challenges. The first steps are the most daunting, but as you press on, the fog clears, and the path becomes illuminated by your determination. Embrace the struggle, for it is in these moments that you are forged into a warrior. Keep advancing, and let nothing stand in your way.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"the-warriors-path","text":"The Warrior’s Path"},{"depth":2,"slug":"discipline-is-your-shield","text":"Discipline is Your Shield"},{"depth":2,"slug":"hard-work-is-your-sword","text":"Hard Work is Your Sword"},{"depth":2,"slug":"surrender-is-not-an-option","text":"Surrender is Not an Option"},{"depth":2,"slug":"conclusion","text":"Conclusion"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
