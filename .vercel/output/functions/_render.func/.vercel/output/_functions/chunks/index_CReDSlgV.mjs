import { m as createComponent, n as renderTemplate, p as maybeRenderHead, v as unescapeHTML, u as spreadAttributes } from './astro/server_c3hZBegq.mjs';
import { a as getImage } from './_astro_assets_BbY1Gx-8.mjs';
import 'clsx';

const Astro__ZzbXIJ = new Proxy({"src":"/_astro/home.BEPmpuTA.png","width":1536,"height":895,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/prajesh/files/projects/elevenco/src/content/projects/query/home.png";
							}
							
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "home\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "home.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__ZzbXIJ, ...props});
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
			const html = await updateImageReferences("<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;home.png&#x22;,&#x22;alt&#x22;:&#x22;Home&#x22;,&#x22;index&#x22;:0}\">\nIn the digital age, where information is vast and often overwhelming, students face a major challenge: finding answers that are precise and relevant. We’ve all been there—asking a question, only to be bombarded with lengthy, off-track explanations that take us far from our original intent. This is where <strong>Query App</strong> steps in, providing a simple yet powerful solution to this problem.</p>\n<h2 id=\"the-problem-information-overload-in-the-age-of-learning\">The Problem: Information Overload in the Age of Learning</h2>\n<p>As students, whether in school, college, or self-learning environments, we constantly seek answers to questions that help us grow academically or solve problems. However, most available sources tend to dive deep, offering long, detailed responses that often lead us astray from the initial query.</p>\n<p>The result? <strong>Confusion and wasted time.</strong></p>\n<p>Long-winded answers can cause:</p>\n<ul>\n<li><strong>Distraction</strong>: Leading students into irrelevant details.</li>\n<li><strong>Time Drain</strong>: Making students sift through unnecessary information.</li>\n<li><strong>Frustration</strong>: Especially when immediate, direct answers are needed.</li>\n</ul>\n<h2 id=\"the-solution-query-app\">The Solution: Query App</h2>\n<p><strong>Query App</strong> solves this by delivering short, crisp answers tailored to exactly what you’re asking, ensuring students stay on track without the burden of excessive information. By integrating with <strong>GROQ’s llama3-8b-8192</strong> model, the app quickly processes your query and delivers concise answers in real-time.</p>\n<h3 id=\"how-it-works\">How It Works</h3>\n<ol>\n<li><strong>Ask</strong>: Students submit a query, much like they would in a typical search.</li>\n<li><strong>AI Processing</strong>: The app communicates with the GROQ API to process the question.</li>\n<li><strong>Get Crisp Answers</strong>: The app provides a direct, no-nonsense response to your question, saving you time and keeping you focused.</li>\n</ol>\n<h2 id=\"why-were-building-this\">Why We’re Building This</h2>\n<p>Students often lose hours trying to extract relevant data from verbose explanations. Instead of learning the key points, they spiral into unrelated topics, delaying progress and adding frustration to the learning process.</p>\n<p>At <strong>Query App</strong>, we understand that students need <strong>quick</strong>, <strong>to-the-point</strong> responses, especially when under pressure. Whether preparing for exams, completing assignments, or building projects, students benefit from having a tool that respects their time and helps them <strong>stay focused</strong> on their goals.</p>\n<h2 id=\"how-we-solve-these-problems\">How We Solve These Problems</h2>\n<ul>\n<li><strong>Short Answers, No Fluff</strong>: We strip down the noise and provide what’s needed. Every query gets a direct answer, eliminating unnecessary distractions.</li>\n<li><strong>Built for Students</strong>: We know the pain points students face. Whether studying for a test or completing an assignment, our app provides answers that keep them moving forward.</li>\n<li><strong>Easy to Use</strong>: The user-friendly interface allows you to ask questions quickly, whether you’re on your PC, mobile, or tablet.</li>\n</ul>\n<h2 id=\"key-features\">Key Features</h2>\n<ul>\n<li><strong>Real-Time AI Responses</strong>: Powered by GROQ’s llama3-8b-8192 model for fast, accurate results.</li>\n<li><strong>History Tracking</strong>: Students can review past queries to stay organized.</li>\n<li><strong>Supabase-Integrated Data</strong>: All queries and responses are stored securely, giving users access to their learning history.</li>\n</ul>\n<h2 id=\"who-is-it-for\">Who Is It For?</h2>\n<ul>\n<li><strong>Students</strong>: Looking for quick, clear answers to academic questions.</li>\n<li><strong>Educators</strong>: Who want to offer students a resource for focused learning.</li>\n<li><strong>Self-Learners</strong>: Pursuing knowledge without getting bogged down by long-form content.</li>\n</ul>\n<h2 id=\"conclusion\">Conclusion</h2>\n<p>In a world of increasing information overload, <strong>Query App</strong> empowers students by giving them the answers they need—fast. No more getting lost in the details. No more distractions. Just short, accurate, and actionable answers. So, the next time you’re in doubt, simply <strong>“Just Query it with Query!”</strong></p>");
	

				const frontmatter = {"title":"Query","description":"Simplifying Information for Students with Crisp, Direct Answers","date":"Sep 23 2024","demoURL":"https://queryyyapp.vercel.app/","repoURL":"https://github.com/prajeshElEvEn/query"};
				const file = "/home/prajesh/files/projects/elevenco/src/content/projects/query/index.md";
				const url = undefined;
				function rawContent() {
					return "\n![Home](home.png)\nIn the digital age, where information is vast and often overwhelming, students face a major challenge: finding answers that are precise and relevant. We’ve all been there—asking a question, only to be bombarded with lengthy, off-track explanations that take us far from our original intent. This is where **Query App** steps in, providing a simple yet powerful solution to this problem.\n\n## The Problem: Information Overload in the Age of Learning\n\nAs students, whether in school, college, or self-learning environments, we constantly seek answers to questions that help us grow academically or solve problems. However, most available sources tend to dive deep, offering long, detailed responses that often lead us astray from the initial query.\n\nThe result? **Confusion and wasted time.**\n\nLong-winded answers can cause:\n\n- **Distraction**: Leading students into irrelevant details.\n- **Time Drain**: Making students sift through unnecessary information.\n- **Frustration**: Especially when immediate, direct answers are needed.\n\n## The Solution: Query App\n\n**Query App** solves this by delivering short, crisp answers tailored to exactly what you’re asking, ensuring students stay on track without the burden of excessive information. By integrating with **GROQ's llama3-8b-8192** model, the app quickly processes your query and delivers concise answers in real-time.\n\n### How It Works\n\n1. **Ask**: Students submit a query, much like they would in a typical search.\n2. **AI Processing**: The app communicates with the GROQ API to process the question.\n3. **Get Crisp Answers**: The app provides a direct, no-nonsense response to your question, saving you time and keeping you focused.\n\n## Why We’re Building This\n\nStudents often lose hours trying to extract relevant data from verbose explanations. Instead of learning the key points, they spiral into unrelated topics, delaying progress and adding frustration to the learning process.\n\nAt **Query App**, we understand that students need **quick**, **to-the-point** responses, especially when under pressure. Whether preparing for exams, completing assignments, or building projects, students benefit from having a tool that respects their time and helps them **stay focused** on their goals.\n\n## How We Solve These Problems\n\n- **Short Answers, No Fluff**: We strip down the noise and provide what’s needed. Every query gets a direct answer, eliminating unnecessary distractions.\n- **Built for Students**: We know the pain points students face. Whether studying for a test or completing an assignment, our app provides answers that keep them moving forward.\n- **Easy to Use**: The user-friendly interface allows you to ask questions quickly, whether you're on your PC, mobile, or tablet.\n\n## Key Features\n\n- **Real-Time AI Responses**: Powered by GROQ's llama3-8b-8192 model for fast, accurate results.\n- **History Tracking**: Students can review past queries to stay organized.\n- **Supabase-Integrated Data**: All queries and responses are stored securely, giving users access to their learning history.\n\n## Who Is It For?\n\n- **Students**: Looking for quick, clear answers to academic questions.\n- **Educators**: Who want to offer students a resource for focused learning.\n- **Self-Learners**: Pursuing knowledge without getting bogged down by long-form content.\n\n## Conclusion\n\nIn a world of increasing information overload, **Query App** empowers students by giving them the answers they need—fast. No more getting lost in the details. No more distractions. Just short, accurate, and actionable answers. So, the next time you're in doubt, simply **\"Just Query it with Query!\"**\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"the-problem-information-overload-in-the-age-of-learning","text":"The Problem: Information Overload in the Age of Learning"},{"depth":2,"slug":"the-solution-query-app","text":"The Solution: Query App"},{"depth":3,"slug":"how-it-works","text":"How It Works"},{"depth":2,"slug":"why-were-building-this","text":"Why We’re Building This"},{"depth":2,"slug":"how-we-solve-these-problems","text":"How We Solve These Problems"},{"depth":2,"slug":"key-features","text":"Key Features"},{"depth":2,"slug":"who-is-it-for","text":"Who Is It For?"},{"depth":2,"slug":"conclusion","text":"Conclusion"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
