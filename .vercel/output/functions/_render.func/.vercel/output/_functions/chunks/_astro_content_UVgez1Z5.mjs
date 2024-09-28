import pLimit from 'p-limit';
import { A as AstroError, U as UnknownContentCollectionError, x as prependForwardSlash } from './astro/assets-service_Bxr6wzEG.mjs';
import { m as createComponent, x as renderUniqueStylesheet, y as renderScriptElement, z as createHeadAndContent, n as renderTemplate, o as renderComponent, v as unescapeHTML } from './astro/server_c3hZBegq.mjs';
import 'kleur/colors';

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://elevenco.vercel.app", "ASSETS_PREFIX": undefined}, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/01-first-few-steps.md": () => import('./01-first-few-steps_Bmp1-PK7.mjs'),"/src/content/blog/02-flow.md": () => import('./02-flow_Cok9RNDz.mjs'),"/src/content/blog/03-workstation/index.md": () => import('./index_ZOZMeZ_3.mjs'),"/src/content/blog/04-evolution-of-frontend-web-development/index.md": () => import('./index_I2-j2oNR.mjs'),"/src/content/blog/05-vite-github-pages.md": () => import('./05-vite-github-pages_CLXhdbOr.mjs'),"/src/content/blog/06-tortoise-hare-algo.md": () => import('./06-tortoise-hare-algo_dCK0MgUu.mjs'),"/src/content/projects/bingehub/index.md": () => import('./index_BmKwKjYi.mjs'),"/src/content/projects/eventsphere/index.md": () => import('./index_Bmu0-s_p.mjs'),"/src/content/projects/query/index.md": () => import('./index_CR3hNNLi.mjs'),"/src/content/work/deepthought.md": () => import('./deepthought_Ct5t8Vp5.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"blog":{"type":"content","entries":{"01-first-few-steps":"/src/content/blog/01-first-few-steps.md","02-flow":"/src/content/blog/02-flow.md","05-vite-github-pages":"/src/content/blog/05-vite-github-pages.md","06-tortoise-hare-algo":"/src/content/blog/06-tortoise-hare-algo.md","04-evolution-of-frontend-web-development":"/src/content/blog/04-evolution-of-frontend-web-development/index.md","03-workstation":"/src/content/blog/03-workstation/index.md"}},"work":{"type":"content","entries":{"deepthought":"/src/content/work/deepthought.md"}},"projects":{"type":"content","entries":{"bingehub":"/src/content/projects/bingehub/index.md","eventsphere":"/src/content/projects/eventsphere/index.md","query":"/src/content/projects/query/index.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/01-first-few-steps.md": () => import('./01-first-few-steps_CkQeQtl2.mjs'),"/src/content/blog/02-flow.md": () => import('./02-flow_CKcxNReu.mjs'),"/src/content/blog/03-workstation/index.md": () => import('./index_Dw9TNJLf.mjs'),"/src/content/blog/04-evolution-of-frontend-web-development/index.md": () => import('./index_AUjfFjTa.mjs'),"/src/content/blog/05-vite-github-pages.md": () => import('./05-vite-github-pages_CcsCBI-v.mjs'),"/src/content/blog/06-tortoise-hare-algo.md": () => import('./06-tortoise-hare-algo_cAYXA_ru.mjs'),"/src/content/projects/bingehub/index.md": () => import('./index_DKIjqmSh.mjs'),"/src/content/projects/eventsphere/index.md": () => import('./index_B7_9k1Z5.mjs'),"/src/content/projects/query/index.md": () => import('./index_Ba90aOzL.mjs'),"/src/content/work/deepthought.md": () => import('./deepthought_D6Y3BCoO.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

export { getCollection as g };
