import { c as create_ssr_component, e as escape, v as validate_component, m as missing_component } from "../../../../chunks/index3.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "article.svelte-174y7ih{margin:100px 20px 15px 20px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<article class="${"svelte-174y7ih"}"><h1>${escape(data.title)}</h1>
	<p>Published: ${escape(data.createdAt)}</p>
	<p>Last updated: ${escape(data.updatedAt)}</p>
	${validate_component(data.content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}
</article>`;
});
export {
  Page as default
};
