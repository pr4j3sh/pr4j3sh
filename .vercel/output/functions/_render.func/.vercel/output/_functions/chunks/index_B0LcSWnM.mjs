import { m as createComponent, n as renderTemplate, p as maybeRenderHead, v as unescapeHTML, u as spreadAttributes } from './astro/server_c3hZBegq.mjs';
import { a as getImage } from './_astro_assets_BbY1Gx-8.mjs';
import 'clsx';

const Astro__QKuj = new Proxy({"src":"/_astro/home.CWyYkkQ0.png","width":1536,"height":895,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/prajesh/files/projects/elevenco/src/content/projects/eventsphere/home.png";
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
			const html = await updateImageReferences("<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./home.png&#x22;,&#x22;alt&#x22;:&#x22;Home&#x22;,&#x22;index&#x22;:0}\">\nIn today’s fast-paced world, keeping track of social gatherings, meetups, and events can be overwhelming. As someone who loves attending events and meeting new people, I wanted to create a solution that would make discovering and connecting with local events easy and fun. That’s how <strong>EventSphere</strong> was born.</p>\n<h2 id=\"what-is-eventsphere\"><strong>What is EventSphere?</strong></h2>\n<p><strong>EventSphere</strong> is a location-based event discovery app that allows users to find nearby events, join them, and connect with fellow attendees in real-time. The app is built with simplicity in mind, offering a streamlined experience for people looking to explore events happening in their city or even in other areas.</p>\n<h3 id=\"key-features-of-eventsphere\"><strong>Key Features of EventSphere</strong></h3>\n<ul>\n<li>\n<p><strong>Location-Based Event Listings</strong>: EventSphere shows a curated list of nearby events based on your current location or a manually entered city. It ensures that you stay updated with what’s happening around you.</p>\n</li>\n<li>\n<p><strong>Filter Events by Categories</strong>: Users can filter events by various categories such as music, tech, food, and more. This feature helps you narrow down events that interest you the most.</p>\n</li>\n<li>\n<p><strong>Find Nearest and Latest Events</strong>: The app prioritizes the nearest and most recent events at the top, ensuring users don’t miss out on the most relevant opportunities.</p>\n</li>\n<li>\n<p><strong>Event Details</strong>: Each event has its own details page that provides users with important information like venue, date, time, and description.</p>\n</li>\n<li>\n<p><strong>Join Events &#x26; Real-Time Chatroom</strong>: When users join an event, they gain access to a chatroom where they can communicate with other attendees in real time. This fosters community engagement and interaction among participants.</p>\n</li>\n<li>\n<p><strong>Bookmarking</strong>: Users can bookmark events they’re interested in for easy access later, making it convenient to plan your schedule.</p>\n</li>\n</ul>\n<h2 id=\"building-eventsphere\"><strong>Building EventSphere</strong></h2>\n<p>The development process for <strong>EventSphere</strong> involved several technologies that allowed me to achieve a smooth and scalable experience:</p>\n<ul>\n<li>\n<p><strong>Frontend</strong>: The app’s frontend was built using React, ensuring a clean and responsive user interface.</p>\n</li>\n<li>\n<p><strong>Backend &#x26; Authentication</strong>: I used <strong>Convex</strong> to handle backend functionalities such as user authentication, event management, and real-time chat features. Convex’s <strong>Single Sign-On (SSO)</strong> made the authentication flow extremely easy to set up and integrate.</p>\n</li>\n<li>\n<p><strong>Map Integration</strong>: One of the core features of the app is displaying events on a map. This was a new challenge for me, but integrating the map feature helped enhance the user experience, allowing them to visualize the events geographically.</p>\n</li>\n<li>\n<p><strong>TypeScript</strong>: I utilized TypeScript throughout the project, which improved the code’s quality and ensured better error handling.</p>\n</li>\n</ul>\n<h2 id=\"challenges-i-faced\"><strong>Challenges I Faced</strong></h2>\n<p>Like any project, <strong>EventSphere</strong> came with its own set of challenges. Some of the key challenges included:</p>\n<ul>\n<li>\n<p><strong>Channeling Data</strong>: Since the app receives events from external sources, generating dummy data for testing purposes proved to be a challenge. I had to create realistic test cases to ensure that the app handled event data efficiently.</p>\n</li>\n<li>\n<p><strong>Map Integration</strong>: Working with map APIs was a new experience, and it took some time to figure out how to display events on the map accurately.</p>\n</li>\n<li>\n<p><strong>Fluency with TypeScript</strong>: Although I had experience with TypeScript, this project allowed me to become much more fluent with it, especially when it came to defining types and managing complex data flows.</p>\n</li>\n</ul>\n<h2 id=\"what-i-learned\"><strong>What I Learned</strong></h2>\n<p>Building <strong>EventSphere</strong> was a rewarding learning experience. Here’s what I took away from the project:</p>\n<ul>\n<li>\n<p><strong>Convex Mastery</strong>: I became proficient with Convex’s powerful authentication and backend tools. The SSO feature was particularly impressive, and it allowed me to simplify the authentication flow for users.</p>\n</li>\n<li>\n<p><strong>Improved TypeScript Skills</strong>: Working with TypeScript throughout the project helped me become more fluent in it, making me more confident in handling large-scale codebases with static types.</p>\n</li>\n<li>\n<p><strong>Tackling Map APIs</strong>: Integrating maps into the app was a steep learning curve, but it taught me how to leverage APIs to create interactive and dynamic user interfaces.</p>\n</li>\n</ul>\n<h2 id=\"whats-next-for-eventsphere\"><strong>What’s Next for EventSphere?</strong></h2>\n<p>Although <strong>EventSphere</strong> is complete, there are plenty of features I’m excited to explore in future versions. Some ideas I’d like to incorporate include:</p>\n<ul>\n<li>\n<p><strong>Enhanced Search and Filtering</strong>: Adding more filters and advanced search options to improve event discovery.</p>\n</li>\n<li>\n<p><strong>AI-Generated Event Descriptions</strong>: Utilizing AI to automatically generate concise and engaging event descriptions.</p>\n</li>\n<li>\n<p><strong>Additional Real-Time Features</strong>: Expanding the chat functionality and adding more real-time interactions between users.</p>\n</li>\n</ul>\n<h2 id=\"conclusion\"><strong>Conclusion</strong></h2>\n<p><strong>EventSphere</strong> was not only a passion project but also a way for me to enhance my development skills and learn new technologies. It’s been incredibly rewarding to see the app come to life, from conceptualization to deployment.</p>\n<p>Whether you’re looking for social gatherings, workshops, or concerts, <strong>EventSphere</strong> has got you covered. Try it out and explore what’s happening around you!</p>");
	

				const frontmatter = {"title":"EventSphere","description":"Discover, Connect, and Engage with Local Events","date":"Sep 20 2024","demoURL":"https://eventsphereapp.vercel.app/","repoURL":"https://github.com/prajeshElEvEn/eventsphere"};
				const file = "/home/prajesh/files/projects/elevenco/src/content/projects/eventsphere/index.md";
				const url = undefined;
				function rawContent() {
					return "\n![Home](./home.png)\nIn today’s fast-paced world, keeping track of social gatherings, meetups, and events can be overwhelming. As someone who loves attending events and meeting new people, I wanted to create a solution that would make discovering and connecting with local events easy and fun. That’s how **EventSphere** was born.\n\n## **What is EventSphere?**\n\n**EventSphere** is a location-based event discovery app that allows users to find nearby events, join them, and connect with fellow attendees in real-time. The app is built with simplicity in mind, offering a streamlined experience for people looking to explore events happening in their city or even in other areas.\n\n### **Key Features of EventSphere**\n\n- **Location-Based Event Listings**: EventSphere shows a curated list of nearby events based on your current location or a manually entered city. It ensures that you stay updated with what’s happening around you.\n- **Filter Events by Categories**: Users can filter events by various categories such as music, tech, food, and more. This feature helps you narrow down events that interest you the most.\n\n- **Find Nearest and Latest Events**: The app prioritizes the nearest and most recent events at the top, ensuring users don't miss out on the most relevant opportunities.\n\n- **Event Details**: Each event has its own details page that provides users with important information like venue, date, time, and description.\n\n- **Join Events & Real-Time Chatroom**: When users join an event, they gain access to a chatroom where they can communicate with other attendees in real time. This fosters community engagement and interaction among participants.\n\n- **Bookmarking**: Users can bookmark events they’re interested in for easy access later, making it convenient to plan your schedule.\n\n## **Building EventSphere**\n\nThe development process for **EventSphere** involved several technologies that allowed me to achieve a smooth and scalable experience:\n\n- **Frontend**: The app’s frontend was built using React, ensuring a clean and responsive user interface.\n- **Backend & Authentication**: I used **Convex** to handle backend functionalities such as user authentication, event management, and real-time chat features. Convex’s **Single Sign-On (SSO)** made the authentication flow extremely easy to set up and integrate.\n\n- **Map Integration**: One of the core features of the app is displaying events on a map. This was a new challenge for me, but integrating the map feature helped enhance the user experience, allowing them to visualize the events geographically.\n\n- **TypeScript**: I utilized TypeScript throughout the project, which improved the code's quality and ensured better error handling.\n\n## **Challenges I Faced**\n\nLike any project, **EventSphere** came with its own set of challenges. Some of the key challenges included:\n\n- **Channeling Data**: Since the app receives events from external sources, generating dummy data for testing purposes proved to be a challenge. I had to create realistic test cases to ensure that the app handled event data efficiently.\n\n- **Map Integration**: Working with map APIs was a new experience, and it took some time to figure out how to display events on the map accurately.\n\n- **Fluency with TypeScript**: Although I had experience with TypeScript, this project allowed me to become much more fluent with it, especially when it came to defining types and managing complex data flows.\n\n## **What I Learned**\n\nBuilding **EventSphere** was a rewarding learning experience. Here’s what I took away from the project:\n\n- **Convex Mastery**: I became proficient with Convex’s powerful authentication and backend tools. The SSO feature was particularly impressive, and it allowed me to simplify the authentication flow for users.\n\n- **Improved TypeScript Skills**: Working with TypeScript throughout the project helped me become more fluent in it, making me more confident in handling large-scale codebases with static types.\n\n- **Tackling Map APIs**: Integrating maps into the app was a steep learning curve, but it taught me how to leverage APIs to create interactive and dynamic user interfaces.\n\n## **What’s Next for EventSphere?**\n\nAlthough **EventSphere** is complete, there are plenty of features I’m excited to explore in future versions. Some ideas I’d like to incorporate include:\n\n- **Enhanced Search and Filtering**: Adding more filters and advanced search options to improve event discovery.\n- **AI-Generated Event Descriptions**: Utilizing AI to automatically generate concise and engaging event descriptions.\n\n- **Additional Real-Time Features**: Expanding the chat functionality and adding more real-time interactions between users.\n\n## **Conclusion**\n\n**EventSphere** was not only a passion project but also a way for me to enhance my development skills and learn new technologies. It’s been incredibly rewarding to see the app come to life, from conceptualization to deployment.\n\nWhether you’re looking for social gatherings, workshops, or concerts, **EventSphere** has got you covered. Try it out and explore what’s happening around you!\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"what-is-eventsphere","text":"What is EventSphere?"},{"depth":3,"slug":"key-features-of-eventsphere","text":"Key Features of EventSphere"},{"depth":2,"slug":"building-eventsphere","text":"Building EventSphere"},{"depth":2,"slug":"challenges-i-faced","text":"Challenges I Faced"},{"depth":2,"slug":"what-i-learned","text":"What I Learned"},{"depth":2,"slug":"whats-next-for-eventsphere","text":"What’s Next for EventSphere?"},{"depth":2,"slug":"conclusion","text":"Conclusion"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
