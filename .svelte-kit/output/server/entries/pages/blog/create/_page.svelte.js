import { c as create_ssr_component, b as subscribe } from "../../../../chunks/index3.js";
import { l as loggedIn } from "../../../../chunks/loggedIn.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-fj3zha{margin:100px 20px 15px 20px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_loggedIn;
  $$unsubscribe_loggedIn = subscribe(loggedIn, (value) => value);
  $$result.css.add(css);
  $$unsubscribe_loggedIn();
  return `<div class="${"svelte-fj3zha"}"><h3>Create Blog</h3>
</div>`;
});
export {
  Page as default
};
