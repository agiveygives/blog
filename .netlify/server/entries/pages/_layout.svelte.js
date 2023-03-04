import { c as create_ssr_component, a as subscribe, e as escape, n as null_to_empty, b as add_attribute, v as validate_component } from "../../chunks/index3.js";
import { l as loggedIn } from "../../chunks/loggedIn.js";
import { faX } from "@fortawesome/free-solid-svg-icons";
const Header_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "header.svelte-1k4bu79.svelte-1k4bu79{position:fixed;z-index:1;top:0;right:0;left:0;display:grid;grid-template-columns:max-content auto max-content;grid-column-gap:20px;align-items:center;background-color:var(--white);padding:5px 10px;transition:border-radius 300ms linear, background-color 300ms linear}.sharp.svelte-1k4bu79.svelte-1k4bu79{border-radius:0px}.rounded.svelte-1k4bu79.svelte-1k4bu79{border-radius:0px 0px 20px 20px;box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);background-color:var(--mint)}img.svelte-1k4bu79.svelte-1k4bu79{height:80px}ul.svelte-1k4bu79.svelte-1k4bu79{display:grid;grid-template-columns:max-content max-content max-content;text-align:center;color:var(--caribbean-current);font-weight:600;list-style:none;padding:0px;margin:0px}ul.svelte-1k4bu79>li.svelte-1k4bu79:not(:last-child){padding-right:10px;border-right:1px solid var(--caribbean-current)}ul.svelte-1k4bu79>li.svelte-1k4bu79:not(:first-child){padding-left:10px}li.svelte-1k4bu79>a.svelte-1k4bu79{color:var(--caribbean-current);text-decoration:none;display:block;position:relative;padding:2px 0;text-decoration:none}li.svelte-1k4bu79>a.svelte-1k4bu79::after{content:'';position:absolute;bottom:0;left:0;width:100%;height:0.1em;background-color:var(--caribbean-current);opacity:0;transition:opacity 300ms, transform 300ms;opacity:1;transform:scale(0);transform-origin:center}li.svelte-1k4bu79>a.svelte-1k4bu79:hover::after,li.svelte-1k4bu79>a.svelte-1k4bu79:focus::after{opacity:1;transform:translate3d(0, 0.2em, 0);transform:scale(1)}.logout.svelte-1k4bu79.svelte-1k4bu79{padding:10px 20px;border-radius:10px;background-color:var(--mint);color:var(--white);border:unset;cursor:pointer}.logout.svelte-1k4bu79.svelte-1k4bu79:hover,.logout.svelte-1k4bu79.svelte-1k4bu79:focus{background-color:var(--caribbean-current)}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $loggedIn, $$unsubscribe_loggedIn;
  $$unsubscribe_loggedIn = subscribe(loggedIn, (value) => $loggedIn = value);
  let headerClass = "sharp";
  let y = 0;
  const deriveClass = (y2) => {
    if (y2 <= 0) {
      return "sharp";
    }
    return "rounded";
  };
  $$result.css.add(css$2);
  headerClass = deriveClass(y);
  $$unsubscribe_loggedIn();
  return `

<header class="${escape(null_to_empty(headerClass), true) + " svelte-1k4bu79"}"><a href="${"/"}"><img src="${"/andrew.png"}" aria-label="${"Andrew Givens"}" alt="${"Andrew Givens"}" class="${"svelte-1k4bu79"}"></a>
	<nav><ul class="${"svelte-1k4bu79"}"><li class="${"svelte-1k4bu79"}"><a href="${"/blog"}" class="${"svelte-1k4bu79"}">Blog</a></li>
			<li class="${"svelte-1k4bu79"}"><a href="${"/portfolio"}" class="${"svelte-1k4bu79"}">Portfolio</a></li>
			<li class="${"svelte-1k4bu79"}"><a href="${"/about"}" class="${"svelte-1k4bu79"}">About Me</a></li></ul></nav>
	<div>${$loggedIn ? `<button class="${"logout svelte-1k4bu79"}">Log out</button>` : ``}</div>
</header>`;
});
const parseNumber = parseFloat;
function joinCss(obj, separator = ";") {
  let texts;
  if (Array.isArray(obj)) {
    texts = obj.filter((text) => text);
  } else {
    texts = [];
    for (const prop in obj) {
      if (obj[prop]) {
        texts.push(`${prop}:${obj[prop]}`);
      }
    }
  }
  return texts.join(separator);
}
function getStyles(style, size, pull, fw) {
  let float;
  let width;
  const height = "1em";
  let lineHeight;
  let fontSize;
  let textAlign;
  let verticalAlign = "-.125em";
  const overflow = "visible";
  if (fw) {
    textAlign = "center";
    width = "1.25em";
  }
  if (pull) {
    float = pull;
  }
  if (size) {
    if (size == "lg") {
      fontSize = "1.33333em";
      lineHeight = ".75em";
      verticalAlign = "-.225em";
    } else if (size == "xs") {
      fontSize = ".75em";
    } else if (size == "sm") {
      fontSize = ".875em";
    } else {
      fontSize = size.replace("x", "em");
    }
  }
  return joinCss([
    joinCss({
      float,
      width,
      height,
      "line-height": lineHeight,
      "font-size": fontSize,
      "text-align": textAlign,
      "vertical-align": verticalAlign,
      "transform-origin": "center",
      overflow
    }),
    style
  ]);
}
function getTransform(scale, translateX, translateY, rotate, flip, translateTimes = 1, translateUnit = "", rotateUnit = "") {
  let flipX = 1;
  let flipY = 1;
  if (flip) {
    if (flip == "horizontal") {
      flipX = -1;
    } else if (flip == "vertical") {
      flipY = -1;
    } else {
      flipX = flipY = -1;
    }
  }
  return joinCss(
    [
      `translate(${parseNumber(translateX) * translateTimes}${translateUnit},${parseNumber(translateY) * translateTimes}${translateUnit})`,
      `scale(${flipX * parseNumber(scale)},${flipY * parseNumber(scale)})`,
      rotate && `rotate(${rotate}${rotateUnit})`
    ],
    " "
  );
}
const fa_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".spin.svelte-1cj2gr0{animation:svelte-1cj2gr0-spin 2s 0s infinite linear}.pulse.svelte-1cj2gr0{animation:svelte-1cj2gr0-spin 1s infinite steps(8)}@keyframes svelte-1cj2gr0-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}",
  map: null
};
const Fa = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: clazz = "" } = $$props;
  let { id = "" } = $$props;
  let { style = "" } = $$props;
  let { icon } = $$props;
  let { size = "" } = $$props;
  let { color = "" } = $$props;
  let { fw = false } = $$props;
  let { pull = "" } = $$props;
  let { scale = 1 } = $$props;
  let { translateX = 0 } = $$props;
  let { translateY = 0 } = $$props;
  let { rotate = "" } = $$props;
  let { flip = false } = $$props;
  let { spin = false } = $$props;
  let { pulse = false } = $$props;
  let { primaryColor = "" } = $$props;
  let { secondaryColor = "" } = $$props;
  let { primaryOpacity = 1 } = $$props;
  let { secondaryOpacity = 0.4 } = $$props;
  let { swapOpacity = false } = $$props;
  let i;
  let s;
  let transform;
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0)
    $$bindings.class(clazz);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.fw === void 0 && $$bindings.fw && fw !== void 0)
    $$bindings.fw(fw);
  if ($$props.pull === void 0 && $$bindings.pull && pull !== void 0)
    $$bindings.pull(pull);
  if ($$props.scale === void 0 && $$bindings.scale && scale !== void 0)
    $$bindings.scale(scale);
  if ($$props.translateX === void 0 && $$bindings.translateX && translateX !== void 0)
    $$bindings.translateX(translateX);
  if ($$props.translateY === void 0 && $$bindings.translateY && translateY !== void 0)
    $$bindings.translateY(translateY);
  if ($$props.rotate === void 0 && $$bindings.rotate && rotate !== void 0)
    $$bindings.rotate(rotate);
  if ($$props.flip === void 0 && $$bindings.flip && flip !== void 0)
    $$bindings.flip(flip);
  if ($$props.spin === void 0 && $$bindings.spin && spin !== void 0)
    $$bindings.spin(spin);
  if ($$props.pulse === void 0 && $$bindings.pulse && pulse !== void 0)
    $$bindings.pulse(pulse);
  if ($$props.primaryColor === void 0 && $$bindings.primaryColor && primaryColor !== void 0)
    $$bindings.primaryColor(primaryColor);
  if ($$props.secondaryColor === void 0 && $$bindings.secondaryColor && secondaryColor !== void 0)
    $$bindings.secondaryColor(secondaryColor);
  if ($$props.primaryOpacity === void 0 && $$bindings.primaryOpacity && primaryOpacity !== void 0)
    $$bindings.primaryOpacity(primaryOpacity);
  if ($$props.secondaryOpacity === void 0 && $$bindings.secondaryOpacity && secondaryOpacity !== void 0)
    $$bindings.secondaryOpacity(secondaryOpacity);
  if ($$props.swapOpacity === void 0 && $$bindings.swapOpacity && swapOpacity !== void 0)
    $$bindings.swapOpacity(swapOpacity);
  $$result.css.add(css$1);
  i = icon && icon.icon || [0, 0, "", [], ""];
  s = getStyles(style, size, pull, fw);
  transform = getTransform(scale, translateX, translateY, rotate, flip, 512);
  return `${i[4] ? `<svg${add_attribute("id", id || void 0, 0)} class="${[
    "svelte-fa " + escape(clazz, true) + " svelte-1cj2gr0",
    (pulse ? "pulse" : "") + " " + (spin ? "spin" : "")
  ].join(" ").trim()}"${add_attribute("style", s, 0)} viewBox="${"0 0 " + escape(i[0], true) + " " + escape(i[1], true)}" aria-hidden="${"true"}" role="${"img"}" xmlns="${"http://www.w3.org/2000/svg"}"><g transform="${"translate(" + escape(i[0] / 2, true) + " " + escape(i[1] / 2, true) + ")"}" transform-origin="${escape(i[0] / 4, true) + " 0"}"><g${add_attribute("transform", transform, 0)}>${typeof i[4] == "string" ? `<path${add_attribute("d", i[4], 0)}${add_attribute("fill", color || primaryColor || "currentColor", 0)} transform="${"translate(" + escape(i[0] / -2, true) + " " + escape(i[1] / -2, true) + ")"}"></path>` : `
          <path${add_attribute("d", i[4][0], 0)}${add_attribute("fill", secondaryColor || color || "currentColor", 0)}${add_attribute("fill-opacity", swapOpacity != false ? primaryOpacity : secondaryOpacity, 0)} transform="${"translate(" + escape(i[0] / -2, true) + " " + escape(i[1] / -2, true) + ")"}"></path>
          <path${add_attribute("d", i[4][1], 0)}${add_attribute("fill", primaryColor || color || "currentColor", 0)}${add_attribute("fill-opacity", swapOpacity != false ? secondaryOpacity : primaryOpacity, 0)} transform="${"translate(" + escape(i[0] / -2, true) + " " + escape(i[1] / -2, true) + ")"}"></path>`}</g></g></svg>` : ``}`;
});
const LoginModal_svelte_svelte_type_style_lang = "";
const css = {
  code: ".hidden.svelte-9e8b5n.svelte-9e8b5n{display:none !important}.modal-background.svelte-9e8b5n.svelte-9e8b5n{display:block;position:fixed;z-index:99;padding-top:100px;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(0, 0, 0, 0.4)}.modal-container.svelte-9e8b5n.svelte-9e8b5n{background-color:var(--white);margin:auto;border:1px solid #888;width:80%}.modal-header.svelte-9e8b5n.svelte-9e8b5n{padding:0px 15px}.modal-content.svelte-9e8b5n.svelte-9e8b5n{padding:0px 20px 20px 20px;justify-content:center}.close.svelte-9e8b5n.svelte-9e8b5n{color:var(--caribbean-current);background-color:transparent;border:none;cursor:pointer;float:right;margin:10px}.close.svelte-9e8b5n.svelte-9e8b5n:hover,.close.svelte-9e8b5n.svelte-9e8b5n:focus{color:var(--coral)}.header.svelte-9e8b5n.svelte-9e8b5n{text-align:center;padding:10px 50px}.bitmoji-container.svelte-9e8b5n.svelte-9e8b5n{justify-content:center;display:flex}.bitmoji.svelte-9e8b5n.svelte-9e8b5n{height:100px}form.svelte-9e8b5n.svelte-9e8b5n{display:grid;grid-template-columns:auto;grid-gap:10px;justify-content:center}input.svelte-9e8b5n.svelte-9e8b5n{padding:5px;border-radius:5px;border:var(--mint) solid 2px;font-size:16px}input.svelte-9e8b5n.svelte-9e8b5n:focus,input.svelte-9e8b5n.svelte-9e8b5n:hover{border-color:var(--caribbean-current)}form.svelte-9e8b5n>button.svelte-9e8b5n{border:none;border-radius:5px;background-color:var(--mint);color:var(--white);font-size:16px;padding:5px 0px}form.svelte-9e8b5n>button.svelte-9e8b5n:hover,form.svelte-9e8b5n>button.svelte-9e8b5n:focus{cursor:pointer;background-color:var(--caribbean-current)}",
  map: null
};
const LoginModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let greeting = "";
  let email;
  let password;
  $$result.css.add(css);
  return `

<div class="${escape(null_to_empty(`modal-background ${"hidden"}`), true) + " svelte-9e8b5n"}"><div class="${"modal-container svelte-9e8b5n"}"><button class="${"close svelte-9e8b5n"}">${validate_component(Fa, "Fa").$$render($$result, { icon: faX }, {}, {})}</button>

		<div class="${"header svelte-9e8b5n"}">${escape(greeting)}</div>

		<div class="${"modal-content svelte-9e8b5n"}"><div class="${"bitmoji-container svelte-9e8b5n"}"><img class="${"bitmoji svelte-9e8b5n"}" src="${"/images/bitmoji/secret.png"}" alt="${"Andrew Givens Bitmoji shh"}"></div>

			<form class="${"svelte-9e8b5n"}"><input type="${"email"}" name="${"email"}" placeholder="${"email"}" class="${"svelte-9e8b5n"}"${add_attribute("value", email, 0)}>
				<input type="${"password"}" name="${"password"}" placeholder="${"password"}" class="${"svelte-9e8b5n"}"${add_attribute("value", password, 0)}>
				<button type="${"submit"}" class="${"svelte-9e8b5n"}">Login</button></form></div></div>
</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

${validate_component(LoginModal, "LoginModal").$$render($$result, {}, {}, {})}

${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
