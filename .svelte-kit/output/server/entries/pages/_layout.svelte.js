import { c as create_ssr_component, e as escape, b as null_to_empty, v as validate_component } from "../../chunks/index.js";
const Header_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-1dp30oo.svelte-1dp30oo{position:fixed;z-index:1;top:0;right:0;left:0;display:grid;grid-template-columns:max-content auto max-content;grid-column-gap:20px;align-items:center;background-color:var(--white);padding:5px 10px;transition:border-radius 300ms linear, background-color 300ms linear}.sharp.svelte-1dp30oo.svelte-1dp30oo{border-radius:0px}.rounded.svelte-1dp30oo.svelte-1dp30oo{border-radius:0px 0px 20px 20px;box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);background-color:var(--mint)}img.svelte-1dp30oo.svelte-1dp30oo{height:80px}ul.svelte-1dp30oo.svelte-1dp30oo{display:grid;grid-template-columns:max-content max-content max-content;text-align:center;color:var(--caribbean-current);font-weight:600;list-style:none;padding:0px;margin:0px}ul.svelte-1dp30oo>li.svelte-1dp30oo:not(:last-child){padding-right:10px;border-right:1px solid var(--caribbean-current)}ul.svelte-1dp30oo>li.svelte-1dp30oo:not(:first-child){padding-left:10px}li.svelte-1dp30oo>a.svelte-1dp30oo{color:var(--caribbean-current);text-decoration:none;display:block;position:relative;padding:2px 0;text-decoration:none}li.svelte-1dp30oo>a.svelte-1dp30oo::after{content:'';position:absolute;bottom:0;left:0;width:100%;height:0.1em;background-color:var(--caribbean-current);opacity:0;transition:opacity 300ms, transform 300ms;opacity:1;transform:scale(0);transform-origin:center}li.svelte-1dp30oo>a.svelte-1dp30oo:hover::after,li.svelte-1dp30oo>a.svelte-1dp30oo:focus::after{opacity:1;transform:translate3d(0, 0.2em, 0);transform:scale(1)}",
  map: null
};
function deriveClass(y) {
  if (y <= 0) {
    return "sharp";
  }
  return "rounded";
}
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { duration = "300ms" } = $$props;
  let headerClass = "sharp";
  let y = 0;
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  $$result.css.add(css);
  headerClass = deriveClass(y);
  return `

<header class="${escape(null_to_empty(headerClass), true) + " svelte-1dp30oo"}"><a href="${"/"}"><img src="${"/andrew.png"}" aria-label="${"Andrew Givens"}" alt="${"Andrew Givens"}" class="${"svelte-1dp30oo"}"></a>
	<nav><ul class="${"svelte-1dp30oo"}"><li class="${"svelte-1dp30oo"}"><a href="${"/blog"}" class="${"svelte-1dp30oo"}">Blog</a></li>
			<li class="${"svelte-1dp30oo"}"><a href="${"/portfolio"}" class="${"svelte-1dp30oo"}">Portfolio</a></li>
			<li class="${"svelte-1dp30oo"}"><a href="${"/about"}" class="${"svelte-1dp30oo"}">About Me</a></li></ul></nav>
	<div></div></header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
