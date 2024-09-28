import { m as createComponent, n as renderTemplate, p as maybeRenderHead, v as unescapeHTML, u as spreadAttributes } from './astro/server_c3hZBegq.mjs';
import { a as getImage } from './_astro_assets_BbY1Gx-8.mjs';
import 'clsx';

const Astro__QKuj = new Proxy({"src":"/_astro/home.D1LX8GkT.png","width":1920,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/prajesh/files/projects/elevenco/src/content/blog/03-workstation/home.png";
							}
							
							return target[name];
						}
					});

const Astro__ZNnace = new Proxy({"src":"/_astro/term.B5azO6o2.png","width":1920,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/prajesh/files/projects/elevenco/src/content/blog/03-workstation/term.png";
							}
							
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./home\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./home.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__QKuj, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./term\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./term.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__ZNnace, ...props});
													occurrenceCounter++;
											}
									}
					return imageSources;
			};

			async function updateImageReferences(html) {
				return images(html).then((imageSources) => {
						return html.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm, (full, imagePath) => {
								const decodedImagePath = JSON.parse(imagePath.replace(/&#x22;/g, '"'));
		
								// Use the 'index' property for each image occurrence
								const srcKey = decodedImagePath.src + '_' + decodedImagePath.index;
		
								if (imageSources[srcKey].srcSet && imageSources[srcKey].srcSet.values.length > 0) {
										imageSources[srcKey].attributes.srcset = imageSources[srcKey].srcSet.attribute;
								}
		
								const { index, ...attributesWithoutIndex } = imageSources[srcKey].attributes;
		
								return spreadAttributes({
										src: imageSources[srcKey].src,
										...attributesWithoutIndex,
								});
						});
				});
		}
		

		// NOTE: This causes a top-level await to appear in the user's code, which can break very easily due to a Rollup
	  // bug and certain adapters not supporting it correctly. See: https://github.com/rollup/rollup/issues/4708
	  // Tread carefully!
			const html = await updateImageReferences("<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./home.png&#x22;,&#x22;alt&#x22;:&#x22;Home&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>In a world where efficiency and customization meet, my <a href=\"https://www.dell.com/support/kbdoc/en-in/000181897/inspiron-5502-5509-product-overview\">Dell Inspiron</a> i3 (11th Gen) with 8GB RAM and a 500GB M.2 NVMe PCIe SSD stands as the powerhouse of my development environment. Running <a href=\"https://archlinux.org/\">Arch</a> Linux with the sleek and minimalist <a href=\"https://i3wm.org/\">i3wm</a>, my setup is tailored for both speed and simplicity.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./term.png&#x22;,&#x22;alt&#x22;:&#x22;Terminal&#x22;,&#x22;index&#x22;:0}\"></p>\n<h2 id=\"tools-of-the-trade\">Tools of the Trade</h2>\n<ul>\n<li><strong><a href=\"https://sw.kovidgoyal.net/kitty/\">Kitty</a></strong>: My terminal of choice, blending performance with aesthetics.</li>\n<li><strong><a href=\"https://neovim.io/\">Neovim</a></strong> with <strong><a href=\"https://www.lazyvim.org/\">LazyVim</a></strong>: A modern editor setup that’s as flexible as it is powerful.</li>\n<li><strong><a href=\"https://obsidian.md/\">Obsidian</a></strong>: The ultimate tool for capturing thoughts and organizing knowledge.</li>\n<li><strong><a href=\"https://catppuccin.com/\">Catppuccin Theme</a></strong>: Every interface element bathed in a soothing, cohesive color scheme.</li>\n<li><strong><a href=\"https://www.nerdfonts.com/font-downloads\">FiraCode Nerd Font</a></strong>: A font that not only looks great but enhances readability with ligatures.</li>\n</ul>\n<h2 id=\"journey-to-arch\">Journey to Arch</h2>\n<p>My transition from a Windows user, indulging in Photoshop, Premiere, and VS Code, to a dedicated Linux enthusiast, was marked by exploration. I dabbled in Ubuntu, dual-booted with Kali, tested Zorin OS, and eventually found my home in Arch.</p>\n<p>The best part? Arch’s package manager <code>pacman</code>, along with <code>yay</code>, allows me to install exactly what I need—nothing more, nothing less. Customizability is at its peak with i3wm, letting me craft an environment where everything is at my fingertips. Mouse? Only when I’m creating content; otherwise, it’s all about the keyboard.</p>\n<p>For those interested, my dotfiles are publicly available on <a href=\"https://github.com/prajeshElEvEn/dotfiles\">GitHub</a>, showcasing the configurations that make this workstation uniquely mine.</p>\n<h2 id=\"thank-you\">Thank You</h2>\n<p>A heartfelt thank you to all the amazing resources, tools, and communities that have guided and supported me on this journey. From the developers who created the tools I now rely on, to the countless tutorials and documentation that made the learning curve less steep—your contributions have been invaluable. Here’s to continued learning and growth in this ever-evolving world of tech!</p>");
	

				const frontmatter = {"title":"Workstation","description":"Crafting Code, One Keystroke at a Time","date":"Aug 31 2024"};
				const file = "/home/prajesh/files/projects/elevenco/src/content/blog/03-workstation/index.md";
				const url = undefined;
				function rawContent() {
					return "\n![Home](./home.png)\n\nIn a world where efficiency and customization meet, my [Dell Inspiron](https://www.dell.com/support/kbdoc/en-in/000181897/inspiron-5502-5509-product-overview) i3 (11th Gen) with 8GB RAM and a 500GB M.2 NVMe PCIe SSD stands as the powerhouse of my development environment. Running [Arch](https://archlinux.org/) Linux with the sleek and minimalist [i3wm](https://i3wm.org/), my setup is tailored for both speed and simplicity.\n\n![Terminal](./term.png)\n\n## Tools of the Trade\n\n- **[Kitty](https://sw.kovidgoyal.net/kitty/)**: My terminal of choice, blending performance with aesthetics.\n- **[Neovim](https://neovim.io/)** with **[LazyVim](https://www.lazyvim.org/)**: A modern editor setup that’s as flexible as it is powerful.\n- **[Obsidian](https://obsidian.md/)**: The ultimate tool for capturing thoughts and organizing knowledge.\n- **[Catppuccin Theme](https://catppuccin.com/)**: Every interface element bathed in a soothing, cohesive color scheme.\n- **[FiraCode Nerd Font](https://www.nerdfonts.com/font-downloads)**: A font that not only looks great but enhances readability with ligatures.\n\n## Journey to Arch\n\nMy transition from a Windows user, indulging in Photoshop, Premiere, and VS Code, to a dedicated Linux enthusiast, was marked by exploration. I dabbled in Ubuntu, dual-booted with Kali, tested Zorin OS, and eventually found my home in Arch.\n\nThe best part? Arch’s package manager `pacman`, along with `yay`, allows me to install exactly what I need—nothing more, nothing less. Customizability is at its peak with i3wm, letting me craft an environment where everything is at my fingertips. Mouse? Only when I’m creating content; otherwise, it’s all about the keyboard.\n\nFor those interested, my dotfiles are publicly available on [GitHub](https://github.com/prajeshElEvEn/dotfiles), showcasing the configurations that make this workstation uniquely mine.\n\n## Thank You\n\nA heartfelt thank you to all the amazing resources, tools, and communities that have guided and supported me on this journey. From the developers who created the tools I now rely on, to the countless tutorials and documentation that made the learning curve less steep—your contributions have been invaluable. Here's to continued learning and growth in this ever-evolving world of tech!\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"tools-of-the-trade","text":"Tools of the Trade"},{"depth":2,"slug":"journey-to-arch","text":"Journey to Arch"},{"depth":2,"slug":"thank-you","text":"Thank You"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
