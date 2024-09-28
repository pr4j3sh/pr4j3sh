import { m as createComponent, n as renderTemplate, p as maybeRenderHead, v as unescapeHTML, u as spreadAttributes } from './astro/server_c3hZBegq.mjs';
import { a as getImage } from './_astro_assets_BbY1Gx-8.mjs';
import 'clsx';

const Astro__1APMhi = new Proxy({"src":"/_astro/demo.0G176rKf.png","width":1916,"height":1032,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/prajesh/files/projects/elevenco/src/content/projects/bingehub/demo.png";
							}
							
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./demo\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./demo.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__1APMhi, ...props});
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
			const html = await updateImageReferences("<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./demo.png&#x22;,&#x22;alt&#x22;:&#x22;Demo&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>In the age of on-demand streaming, finding the perfect movie or series to watch can sometimes feel like a chore. Whether it’s deciding between multiple services or navigating clunky interfaces, the search for entertainment should be fun, not frustrating. That’s why we created <strong>BingeHub</strong>—a sleek, command-line application designed to streamline the process of discovering and watching movies or series.</p>\n<h2 id=\"what-is-bingehub\">What is BingeHub?</h2>\n<p>BingeHub is a CLI (Command-Line Interface) tool that allows you to search, select, and stream your favorite movies or TV shows without ever leaving your terminal. With integrations to <strong>TMDB (The Movie Database)</strong> and a streamlined, user-friendly experience, it simplifies the process of entertainment discovery.</p>\n<p>Whether you’re on Windows, macOS, or Linux, BingeHub ensures you get the content you want, instantly and without hassle.</p>\n<h2 id=\"why-choose-bingehub\">Why Choose BingeHub?</h2>\n<ul>\n<li><strong>Fast and Lightweight</strong>: BingeHub runs directly from the terminal, allowing for lightning-fast searches and selections without the overhead of a graphical user interface.</li>\n<li><strong>Cross-Platform</strong>: No matter what OS you use, BingeHub seamlessly integrates into your environment and fetches movies and series for streaming.</li>\n<li><strong>Comprehensive Search</strong>: Powered by TMDB, BingeHub lets you search for movies and TV series by title and year, providing an up-to-date database of the latest and greatest in entertainment.</li>\n<li><strong>Quick Streaming Access</strong>: Once you’ve made your selection, BingeHub opens the movie or episode in your default browser—ready to stream in seconds.</li>\n</ul>\n<h2 id=\"how-does-bingehub-work\">How Does BingeHub Work?</h2>\n<ol>\n<li>\n<p><strong>Search</strong>: Simply run BingeHub from your terminal and type in the name of the movie or series you want to watch. You’ll be presented with a list of matching titles from TMDB.</p>\n</li>\n<li>\n<p><strong>Select</strong>: Choose the exact movie or episode from the options provided. For series, you can even select which season and episode you’d like to watch.</p>\n</li>\n<li>\n<p><strong>Stream</strong>: BingeHub will automatically launch the stream in your browser using the best available source.</p>\n</li>\n</ol>\n<h2 id=\"key-features\">Key Features</h2>\n<ul>\n<li>\n<p><strong>Movie Search and Streaming</strong>: Easily search for any movie in the TMDB database and start streaming instantly.</p>\n</li>\n<li>\n<p><strong>Series with Episodes</strong>: Browse through seasons and episodes of your favorite shows, from classics to the latest releases.</p>\n</li>\n<li>\n<p><strong>Platform-Agnostic</strong>: BingeHub works with Windows (<code>start</code>), macOS (<code>open</code>), and Linux (<code>xdg-open</code>), making it versatile across all operating systems.</p>\n</li>\n<li>\n<p><strong>Smooth CLI Experience</strong>: With <code>inquirer</code>-based prompts, BingeHub makes it simple to select what to watch next.</p>\n</li>\n</ul>\n<h2 id=\"setting-up-bingehub\">Setting Up BingeHub</h2>\n<p>Setting up BingeHub is a breeze. Here’s a quick guide to getting it up and running on your machine:</p>\n<ol>\n<li>\n<p><strong>Install via npm</strong>: If you have Node.js installed, you can easily install BingeHub using npm:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#B392F0\">npm</span><span style=\"color:#9ECBFF\"> install</span><span style=\"color:#79B8FF\"> -g</span><span style=\"color:#9ECBFF\"> bingehub</span></span>\n<span class=\"line\"></span></code></pre>\n</li>\n<li>\n<p><strong>Run BingeHub</strong>: Once installed, launch BingeHub by typing:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#B392F0\">bingehub</span></span>\n<span class=\"line\"></span></code></pre>\n</li>\n<li>\n<p><strong>Enjoy Your Binge!</strong>: Simply follow the prompts to search for a movie or series, choose what you want to watch, and start streaming.</p>\n</li>\n</ol>\n<h2 id=\"the-future-of-bingehub\">The Future of BingeHub</h2>\n<p>We’re excited about the potential of BingeHub, and we’re continuously working to add more features and integrations. Future updates may include:</p>\n<ul>\n<li><strong>Personalized Watchlists</strong>: Save your favorite movies and series for quick access later.</li>\n<li><strong>Multiple Streaming Sources</strong>: We plan to integrate more streaming sources, allowing you to choose from different providers.</li>\n</ul>\n<h2 id=\"conclusion\">Conclusion</h2>\n<p>If you’re a movie or series enthusiast who enjoys a minimalist approach, BingeHub is the perfect tool for you. It cuts through the noise of traditional streaming platforms and provides a simple, fast, and intuitive way to watch content directly from your terminal.</p>\n<p>So, why wait? Install BingeHub today and start streaming smarter, not harder!</p>");
	

				const frontmatter = {"title":"BingeHub","description":"Stream effortlessly, binge endlessly.","date":"Sep 27 2024","demoURL":"https://www.npmjs.com/package/bingehub-cli","repoURL":"https://github.com/prajeshElEvEn/bingehub-cli"};
				const file = "/home/prajesh/files/projects/elevenco/src/content/projects/bingehub/index.md";
				const url = undefined;
				function rawContent() {
					return "\n![Demo](./demo.png)\n\nIn the age of on-demand streaming, finding the perfect movie or series to watch can sometimes feel like a chore. Whether it's deciding between multiple services or navigating clunky interfaces, the search for entertainment should be fun, not frustrating. That’s why we created **BingeHub**—a sleek, command-line application designed to streamline the process of discovering and watching movies or series.\n\n## What is BingeHub?\n\nBingeHub is a CLI (Command-Line Interface) tool that allows you to search, select, and stream your favorite movies or TV shows without ever leaving your terminal. With integrations to **TMDB (The Movie Database)** and a streamlined, user-friendly experience, it simplifies the process of entertainment discovery.\n\nWhether you’re on Windows, macOS, or Linux, BingeHub ensures you get the content you want, instantly and without hassle.\n\n## Why Choose BingeHub?\n\n- **Fast and Lightweight**: BingeHub runs directly from the terminal, allowing for lightning-fast searches and selections without the overhead of a graphical user interface.\n- **Cross-Platform**: No matter what OS you use, BingeHub seamlessly integrates into your environment and fetches movies and series for streaming.\n- **Comprehensive Search**: Powered by TMDB, BingeHub lets you search for movies and TV series by title and year, providing an up-to-date database of the latest and greatest in entertainment.\n- **Quick Streaming Access**: Once you’ve made your selection, BingeHub opens the movie or episode in your default browser—ready to stream in seconds.\n\n## How Does BingeHub Work?\n\n1. **Search**: Simply run BingeHub from your terminal and type in the name of the movie or series you want to watch. You’ll be presented with a list of matching titles from TMDB.\n2. **Select**: Choose the exact movie or episode from the options provided. For series, you can even select which season and episode you’d like to watch.\n\n3. **Stream**: BingeHub will automatically launch the stream in your browser using the best available source.\n\n## Key Features\n\n- **Movie Search and Streaming**: Easily search for any movie in the TMDB database and start streaming instantly.\n- **Series with Episodes**: Browse through seasons and episodes of your favorite shows, from classics to the latest releases.\n\n- **Platform-Agnostic**: BingeHub works with Windows (`start`), macOS (`open`), and Linux (`xdg-open`), making it versatile across all operating systems.\n\n- **Smooth CLI Experience**: With `inquirer`-based prompts, BingeHub makes it simple to select what to watch next.\n\n## Setting Up BingeHub\n\nSetting up BingeHub is a breeze. Here’s a quick guide to getting it up and running on your machine:\n\n1. **Install via npm**: If you have Node.js installed, you can easily install BingeHub using npm:\n\n   ```bash\n   npm install -g bingehub\n   ```\n\n2. **Run BingeHub**: Once installed, launch BingeHub by typing:\n\n   ```bash\n   bingehub\n   ```\n\n3. **Enjoy Your Binge!**: Simply follow the prompts to search for a movie or series, choose what you want to watch, and start streaming.\n\n## The Future of BingeHub\n\nWe’re excited about the potential of BingeHub, and we’re continuously working to add more features and integrations. Future updates may include:\n\n- **Personalized Watchlists**: Save your favorite movies and series for quick access later.\n- **Multiple Streaming Sources**: We plan to integrate more streaming sources, allowing you to choose from different providers.\n\n## Conclusion\n\nIf you're a movie or series enthusiast who enjoys a minimalist approach, BingeHub is the perfect tool for you. It cuts through the noise of traditional streaming platforms and provides a simple, fast, and intuitive way to watch content directly from your terminal.\n\nSo, why wait? Install BingeHub today and start streaming smarter, not harder!\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"what-is-bingehub","text":"What is BingeHub?"},{"depth":2,"slug":"why-choose-bingehub","text":"Why Choose BingeHub?"},{"depth":2,"slug":"how-does-bingehub-work","text":"How Does BingeHub Work?"},{"depth":2,"slug":"key-features","text":"Key Features"},{"depth":2,"slug":"setting-up-bingehub","text":"Setting Up BingeHub"},{"depth":2,"slug":"the-future-of-bingehub","text":"The Future of BingeHub"},{"depth":2,"slug":"conclusion","text":"Conclusion"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
