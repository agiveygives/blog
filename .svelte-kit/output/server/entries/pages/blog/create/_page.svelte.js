import { c as create_ssr_component, e as escape, n as null_to_empty, a as add_attribute, v as validate_component, b as subscribe } from "../../../../chunks/index3.js";
import { l as loggedIn } from "../../../../chunks/loggedIn.js";
import classnames from "classnames";
const Button_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "button.svelte-11qg2no{height:fit-content;border:none;border-radius:5px;font-size:16px;padding:5px 0px;transition:0.3s ease-in-out;cursor:pointer;padding:5px 10px}.primary.svelte-11qg2no{background-color:#00c49a;color:#f2f2f2}.primary.svelte-11qg2no:hover,.primary.svelte-11qg2no:focus{background-color:#009172}.secondary.svelte-11qg2no{background-color:#fb8f67;color:#f2f2f2}.secondary.svelte-11qg2no:hover,.secondary.svelte-11qg2no:focus{background-color:#fa6a35}.text.svelte-11qg2no{background-color:transparent;color:#00c49a}.text.svelte-11qg2no:hover,.text.svelte-11qg2no:focus{color:#009172}.ghost.svelte-11qg2no{border:solid 1px #156064;background-color:transparent;color:#156064}.ghost.svelte-11qg2no:hover,.ghost.svelte-11qg2no:focus{text-shadow:0px 0px 1px #156064}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { variant = "primary" } = $$props;
  let { rounded = false } = $$props;
  let buttonClasses = variant;
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  $$result.css.add(css$3);
  buttonClasses = classnames(variant, { rounded });
  return `<button class="${escape(null_to_empty(buttonClasses), true) + " svelte-11qg2no"}">${slots.default ? slots.default({}) : ``}
</button>`;
});
const Switch_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".switch.svelte-1u7s2ud.svelte-1u7s2ud{position:relative;display:inline-block;width:30px;height:17px}.switch.svelte-1u7s2ud input.svelte-1u7s2ud{opacity:0;width:0;height:0}.slider.svelte-1u7s2ud.svelte-1u7s2ud{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;-webkit-transition:0.4s;transition:0.4s;border-radius:17px}.slider.svelte-1u7s2ud.svelte-1u7s2ud:before{position:absolute;content:'';height:13px;width:13px;left:2px;bottom:2px;background-color:white;-webkit-transition:0.4s;transition:0.4s;border-radius:50%}input.svelte-1u7s2ud:checked+.slider.svelte-1u7s2ud{background-color:var(--mint)}input.svelte-1u7s2ud:checked+.slider.svelte-1u7s2ud{box-shadow:0 0 1px var(--mint)}input.svelte-1u7s2ud:checked+.slider.svelte-1u7s2ud:before{-webkit-transform:translateX(13px);-ms-transform:translateX(13px);transform:translateX(13px)}",
  map: null
};
const Switch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { checked = false } = $$props;
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  $$result.css.add(css$2);
  return `<label class="${"switch svelte-1u7s2ud"}"><input type="${"checkbox"}" class="${"svelte-1u7s2ud"}"${add_attribute("checked", checked, 1)}>
	<span class="${"slider svelte-1u7s2ud"}"></span>
</label>`;
});
const MarkdownInput_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".container.svelte-ush2qx{flex-grow:1;height:auto;display:grid;grid-template-columns:auto 200px;gap:50px;justify-items:start;justify-content:center}.title.svelte-ush2qx{display:grid;grid-template-columns:auto 100px;gap:20px;align-items:center;font-size:24px}input.svelte-ush2qx{padding:5px;border-radius:5px;border:var(--mint) solid 1px;font-size:24px}input.svelte-ush2qx:focus,input.svelte-ush2qx:hover{border:var(--mint) solid 2px}.controls.svelte-ush2qx{display:grid;justify-content:end;grid-template-columns:auto auto;align-items:center;padding-bottom:15px;max-width:100vw;width:800px}label.svelte-ush2qx{padding-left:10px}textarea.svelte-ush2qx,.markdown.svelte-ush2qx{max-width:100vw;width:800px;height:100%;resize:none;padding:20px;border-radius:5px;border:solid 1px var(--mint)}textarea.svelte-ush2qx:focus,textarea.svelte-ush2qx:focus-visible{border:solid 2px var(--mint);outline:none}aside.svelte-ush2qx{position:sticky;top:125px;align-self:start;display:grid;gap:15px}.metadata.svelte-ush2qx{height:min-content;border:solid 1px var(--coral);border-radius:5px;padding:10px 15px}",
  map: null
};
const MarkdownInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let blogTitle = "New Blog Post";
  let markdown = "";
  let oldMarkdown = null;
  let isPreview = false;
  let compiledMarkdown = "<div>Loading...</div>";
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (isPreview && markdown !== oldMarkdown) {
        oldMarkdown = markdown;
        compiledMarkdown = "<div>Loading...</div>";
        fetch("/api/markdown", {
          method: "post",
          body: JSON.stringify({ markdown })
        }).then((res) => res.json()).then((body) => {
          compiledMarkdown = body?.mdx;
        }).catch((e) => {
          compiledMarkdown = "<div>Error compiling markdown</div>";
        });
      }
    }
    $$rendered = `<div class="${"container svelte-ush2qx"}"><div><div class="${"title svelte-ush2qx"}">${`<div>${escape(blogTitle)}</div>
				${validate_component(Button, "Button").$$render($$result, { variant: "ghost" }, {}, {
      default: () => {
        return `Edit
				`;
      }
    })}`}</div>
		<div class="${"controls svelte-ush2qx"}"></div>
		${isPreview ? `<div class="${"markdown svelte-ush2qx"}"><!-- HTML_TAG_START -->${compiledMarkdown}<!-- HTML_TAG_END --></div>` : `<textarea class="${"svelte-ush2qx"}">${""}</textarea>`}</div>

	<aside class="${"svelte-ush2qx"}"><div class="${"preview-toggle"}">${validate_component(Switch, "Switch").$$render(
      $$result,
      { id: "preview-toggle", checked: isPreview },
      {
        checked: ($$value) => {
          isPreview = $$value;
          $$settled = false;
        }
      },
      {}
    )}
			<label for="${"preview-toggle"}" class="${"svelte-ush2qx"}">Preview</label></div>

		<div class="${"metadata svelte-ush2qx"}"><select><option value="${"front-end"}">front-end</option></select></div>

		<div class="${"publish-controls"}">${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `Publish`;
      }
    })}
			${validate_component(Button, "Button").$$render($$result, { variant: "ghost" }, {}, {
      default: () => {
        return `Save as draft`;
      }
    })}</div></aside>
</div>`;
  } while (!$$settled);
  return $$rendered;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-7b9oq1{margin:100px 20px 15px 20px;height:100%;display:flex;justify-content:flex-start;flex-direction:column}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_loggedIn;
  $$unsubscribe_loggedIn = subscribe(loggedIn, (value) => value);
  $$result.css.add(css);
  $$unsubscribe_loggedIn();
  return `<div class="${"svelte-7b9oq1"}">${validate_component(MarkdownInput, "MarkdownInput").$$render($$result, {}, {}, {})}
</div>`;
});
export {
  Page as default
};
