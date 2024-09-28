import { m as createComponent, n as renderTemplate, p as maybeRenderHead, v as unescapeHTML } from './astro/server_c3hZBegq.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Deploying a static site can often seem daunting, but with Vite and GitHub Pages, it becomes a breeze. Here’s a step-by-step guide to setting up your Vite vanilla template for deployment using GitHub Pages, with an automated GitHub Actions workflow.</p>\n<h2 id=\"configure-your-vite-project\">Configure Your Vite Project</h2>\n<p>First, you’ll need to adjust the <code>vite.config.js</code> to ensure your project builds correctly for GitHub Pages. Update your <code>vite.config.js</code> file to include the repository name in the <code>base</code> property:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"javascript\"><code><span class=\"line\"><span style=\"color:#F97583\">export</span><span style=\"color:#F97583\"> default</span><span style=\"color:#E1E4E8\"> {</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">  base: </span><span style=\"color:#9ECBFF\">\"/&#x3C;repo_name>/\"</span><span style=\"color:#E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">};</span></span>\n<span class=\"line\"></span></code></pre>\n<p>Replace <code>&#x3C;repo_name></code> with your actual repository name.</p>\n<h2 id=\"set-up-github-actions-for-deployment\">Set Up GitHub Actions for Deployment</h2>\n<p>Create or modify your <code>.github/workflows/static.yml</code> file to define a workflow that automates deployment to GitHub Pages. Here’s a simple workflow configuration:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"yml\"><code><span class=\"line\"><span style=\"color:#85E89D\">name</span><span style=\"color:#E1E4E8\">: </span><span style=\"color:#9ECBFF\">Deploy static content to Pages</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#79B8FF\">on</span><span style=\"color:#E1E4E8\">:</span></span>\n<span class=\"line\"><span style=\"color:#85E89D\">  push</span><span style=\"color:#E1E4E8\">:</span></span>\n<span class=\"line\"><span style=\"color:#85E89D\">    branches</span><span style=\"color:#E1E4E8\">: [</span><span style=\"color:#9ECBFF\">\"master\"</span><span style=\"color:#E1E4E8\">]</span></span>\n<span class=\"line\"><span style=\"color:#85E89D\">  workflow_dispatch</span><span style=\"color:#E1E4E8\">:</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#85E89D\">permissions</span><span style=\"color:#E1E4E8\">:</span></span>\n<span class=\"line\"><span style=\"color:#85E89D\">  contents</span><span style=\"color:#E1E4E8\">: </span><span style=\"color:#9ECBFF\">read</span></span>\n<span class=\"line\"><span style=\"color:#85E89D\">  pages</span><span style=\"color:#E1E4E8\">: </span><span style=\"color:#9ECBFF\">write</span></span>\n<span class=\"line\"><span style=\"color:#85E89D\">  id-token</span><span style=\"color:#E1E4E8\">: </span><span style=\"color:#9ECBFF\">write</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#85E89D\">concurrency</span><span style=\"color:#E1E4E8\">:</span></span>\n<span class=\"line\"><span style=\"color:#85E89D\">  group</span><span style=\"color:#E1E4E8\">: </span><span style=\"color:#9ECBFF\">\"pages\"</span></span>\n<span class=\"line\"><span style=\"color:#85E89D\">  cancel-in-progress</span><span style=\"color:#E1E4E8\">: </span><span style=\"color:#79B8FF\">true</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#85E89D\">jobs</span><span style=\"color:#E1E4E8\">:</span></span>\n<span class=\"line\"><span style=\"color:#85E89D\">  deploy</span><span style=\"color:#E1E4E8\">:</span></span>\n<span class=\"line\"><span style=\"color:#85E89D\">    environment</span><span style=\"color:#E1E4E8\">:</span></span>\n<span class=\"line\"><span style=\"color:#85E89D\">      name</span><span style=\"color:#E1E4E8\">: </span><span style=\"color:#9ECBFF\">github-pages</span></span>\n<span class=\"line\"><span style=\"color:#85E89D\">      url</span><span style=\"color:#E1E4E8\">: </span><span style=\"color:#9ECBFF\">${{ steps.deployment.outputs.page_url }}</span></span>\n<span class=\"line\"><span style=\"color:#85E89D\">    runs-on</span><span style=\"color:#E1E4E8\">: </span><span style=\"color:#9ECBFF\">ubuntu-latest</span></span>\n<span class=\"line\"><span style=\"color:#85E89D\">    steps</span><span style=\"color:#E1E4E8\">:</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">      - </span><span style=\"color:#85E89D\">name</span><span style=\"color:#E1E4E8\">: </span><span style=\"color:#9ECBFF\">Checkout</span></span>\n<span class=\"line\"><span style=\"color:#85E89D\">        uses</span><span style=\"color:#E1E4E8\">: </span><span style=\"color:#9ECBFF\">actions/checkout@v4</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">      - </span><span style=\"color:#85E89D\">name</span><span style=\"color:#E1E4E8\">: </span><span style=\"color:#9ECBFF\">Set up Node</span></span>\n<span class=\"line\"><span style=\"color:#85E89D\">        uses</span><span style=\"color:#E1E4E8\">: </span><span style=\"color:#9ECBFF\">actions/setup-node@v4</span></span>\n<span class=\"line\"><span style=\"color:#85E89D\">        with</span><span style=\"color:#E1E4E8\">:</span></span>\n<span class=\"line\"><span style=\"color:#85E89D\">          node-version</span><span style=\"color:#E1E4E8\">: </span><span style=\"color:#79B8FF\">20</span></span>\n<span class=\"line\"><span style=\"color:#85E89D\">          cache</span><span style=\"color:#E1E4E8\">: </span><span style=\"color:#9ECBFF\">\"npm\"</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">      - </span><span style=\"color:#85E89D\">name</span><span style=\"color:#E1E4E8\">: </span><span style=\"color:#9ECBFF\">Install dependencies</span></span>\n<span class=\"line\"><span style=\"color:#85E89D\">        run</span><span style=\"color:#E1E4E8\">: </span><span style=\"color:#9ECBFF\">npm ci</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">      - </span><span style=\"color:#85E89D\">name</span><span style=\"color:#E1E4E8\">: </span><span style=\"color:#9ECBFF\">Set environment variable</span></span>\n<span class=\"line\"><span style=\"color:#85E89D\">        run</span><span style=\"color:#E1E4E8\">: </span><span style=\"color:#F97583\">|</span></span>\n<span class=\"line\"><span style=\"color:#9ECBFF\">\t\t    echo \"SECRET_ONE=${{ secrets.SECRET_ONE }}\" >> .env.local</span></span>\n<span class=\"line\"><span style=\"color:#9ECBFF\">\t\t    echo \"SECRET_TWO=${{ secrets.SECRET_TWO }}\" >> .env.local</span></span>\n<span class=\"line\"><span style=\"color:#9ECBFF\">\t\t    echo \"SECRET_THREE=${{ secrets.SECRET_THREE }}\" >> .env.local</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">      - </span><span style=\"color:#85E89D\">name</span><span style=\"color:#E1E4E8\">: </span><span style=\"color:#9ECBFF\">Build</span></span>\n<span class=\"line\"><span style=\"color:#85E89D\">        run</span><span style=\"color:#E1E4E8\">: </span><span style=\"color:#9ECBFF\">npm run build</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">      - </span><span style=\"color:#85E89D\">name</span><span style=\"color:#E1E4E8\">: </span><span style=\"color:#9ECBFF\">Setup Pages</span></span>\n<span class=\"line\"><span style=\"color:#85E89D\">        uses</span><span style=\"color:#E1E4E8\">: </span><span style=\"color:#9ECBFF\">actions/configure-pages@v4</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">      - </span><span style=\"color:#85E89D\">name</span><span style=\"color:#E1E4E8\">: </span><span style=\"color:#9ECBFF\">Upload artifact</span></span>\n<span class=\"line\"><span style=\"color:#85E89D\">        uses</span><span style=\"color:#E1E4E8\">: </span><span style=\"color:#9ECBFF\">actions/upload-pages-artifact@v3</span></span>\n<span class=\"line\"><span style=\"color:#85E89D\">        with</span><span style=\"color:#E1E4E8\">:</span></span>\n<span class=\"line\"><span style=\"color:#85E89D\">          path</span><span style=\"color:#E1E4E8\">: </span><span style=\"color:#9ECBFF\">\"./dist\"</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">      - </span><span style=\"color:#85E89D\">name</span><span style=\"color:#E1E4E8\">: </span><span style=\"color:#9ECBFF\">Deploy to GitHub Pages</span></span>\n<span class=\"line\"><span style=\"color:#85E89D\">        id</span><span style=\"color:#E1E4E8\">: </span><span style=\"color:#9ECBFF\">deployment</span></span>\n<span class=\"line\"><span style=\"color:#85E89D\">        uses</span><span style=\"color:#E1E4E8\">: </span><span style=\"color:#9ECBFF\">actions/deploy-pages@v4</span></span>\n<span class=\"line\"></span></code></pre>\n<p>Replace <code>SECRET_ONE</code>, <code>SECRET_TWO</code>, and <code>SECRET_THREE</code> with your actual secret names.</p>\n<h2 id=\"add-environment-variables\">Add Environment Variables</h2>\n<p>Navigate to your repository’s settings:</p>\n<ul>\n<li>Go to <code>Settings > Secrets and variables > Actions</code>.</li>\n<li>Click <code>New repository secret</code> for each secret you want to add.</li>\n<li>Add secrets with the same name as used in <code>static.yml</code>.</li>\n</ul>\n<h2 id=\"commit-your-changes\">Commit Your Changes</h2>\n<p>Make sure to commit your <code>vite.config.js</code> and <code>static.yml</code> changes:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#B392F0\">git</span><span style=\"color:#9ECBFF\"> add</span><span style=\"color:#9ECBFF\"> vite.config.js</span><span style=\"color:#9ECBFF\"> .github/workflows/static.yml</span></span>\n<span class=\"line\"><span style=\"color:#B392F0\">git</span><span style=\"color:#9ECBFF\"> commit</span><span style=\"color:#79B8FF\"> -m</span><span style=\"color:#9ECBFF\"> \"Configure Vite and GitHub Pages deployment\"</span></span>\n<span class=\"line\"><span style=\"color:#B392F0\">git</span><span style=\"color:#9ECBFF\"> push</span><span style=\"color:#9ECBFF\"> origin</span><span style=\"color:#9ECBFF\"> master</span></span>\n<span class=\"line\"></span></code></pre>\n<p>With these steps, your Vite project is set up to automatically deploy to GitHub Pages with each push to the master branch, thanks to the powerful combination of Vite and GitHub Actions. Happy deploying</p>";

				const frontmatter = {"title":"Simplifying Deployment with Vite and GitHub Pages","description":"Efficiently deploy your Vite app to GitHub Pages with a streamlined GitHub Actions workflow","date":"Sep 11 2024"};
				const file = "/home/prajesh/files/projects/elevenco/src/content/blog/05-vite-github-pages.md";
				const url = undefined;
				function rawContent() {
					return "\nDeploying a static site can often seem daunting, but with Vite and GitHub Pages, it becomes a breeze. Here’s a step-by-step guide to setting up your Vite vanilla template for deployment using GitHub Pages, with an automated GitHub Actions workflow.\n\n## Configure Your Vite Project\n\nFirst, you'll need to adjust the `vite.config.js` to ensure your project builds correctly for GitHub Pages. Update your `vite.config.js` file to include the repository name in the `base` property:\n\n```javascript\nexport default {\n  base: \"/<repo_name>/\",\n};\n```\n\nReplace `<repo_name>` with your actual repository name.\n\n## Set Up GitHub Actions for Deployment\n\nCreate or modify your `.github/workflows/static.yml` file to define a workflow that automates deployment to GitHub Pages. Here's a simple workflow configuration:\n\n```yml\nname: Deploy static content to Pages\n\non:\n  push:\n    branches: [\"master\"]\n  workflow_dispatch:\n\npermissions:\n  contents: read\n  pages: write\n  id-token: write\n\nconcurrency:\n  group: \"pages\"\n  cancel-in-progress: true\n\njobs:\n  deploy:\n    environment:\n      name: github-pages\n      url: ${{ steps.deployment.outputs.page_url }}\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout\n        uses: actions/checkout@v4\n      - name: Set up Node\n        uses: actions/setup-node@v4\n        with:\n          node-version: 20\n          cache: \"npm\"\n      - name: Install dependencies\n        run: npm ci\n      - name: Set environment variable\n        run: |\n\t\t    echo \"SECRET_ONE=${{ secrets.SECRET_ONE }}\" >> .env.local\n\t\t    echo \"SECRET_TWO=${{ secrets.SECRET_TWO }}\" >> .env.local\n\t\t    echo \"SECRET_THREE=${{ secrets.SECRET_THREE }}\" >> .env.local\n      - name: Build\n        run: npm run build\n      - name: Setup Pages\n        uses: actions/configure-pages@v4\n      - name: Upload artifact\n        uses: actions/upload-pages-artifact@v3\n        with:\n          path: \"./dist\"\n      - name: Deploy to GitHub Pages\n        id: deployment\n        uses: actions/deploy-pages@v4\n```\n\nReplace `SECRET_ONE`, `SECRET_TWO`, and `SECRET_THREE` with your actual secret names.\n\n## Add Environment Variables\n\nNavigate to your repository’s settings:\n\n- Go to `Settings > Secrets and variables > Actions`.\n- Click `New repository secret` for each secret you want to add.\n- Add secrets with the same name as used in `static.yml`.\n\n## Commit Your Changes\n\nMake sure to commit your `vite.config.js` and `static.yml` changes:\n\n```bash\ngit add vite.config.js .github/workflows/static.yml\ngit commit -m \"Configure Vite and GitHub Pages deployment\"\ngit push origin master\n```\n\nWith these steps, your Vite project is set up to automatically deploy to GitHub Pages with each push to the master branch, thanks to the powerful combination of Vite and GitHub Actions. Happy deploying\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"configure-your-vite-project","text":"Configure Your Vite Project"},{"depth":2,"slug":"set-up-github-actions-for-deployment","text":"Set Up GitHub Actions for Deployment"},{"depth":2,"slug":"add-environment-variables","text":"Add Environment Variables"},{"depth":2,"slug":"commit-your-changes","text":"Commit Your Changes"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };