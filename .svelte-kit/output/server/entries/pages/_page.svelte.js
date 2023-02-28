import { c as create_ssr_component, f as each, e as escape, v as validate_component } from "../../chunks/index2.js";
const Introduction_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".intro.svelte-16bgb3z.svelte-16bgb3z{display:grid;justify-content:center;min-height:100vh;background-color:var(--white);color:var(--caribbean-current)}.intro-content.svelte-16bgb3z.svelte-16bgb3z{margin:120px auto auto auto;text-align:center}.bitmoji.svelte-16bgb3z.svelte-16bgb3z{height:200px;padding-bottom:20px}.logos.svelte-16bgb3z>img.svelte-16bgb3z{height:75px;padding:10px}",
  map: null
};
const Introduction = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section class="${"intro svelte-16bgb3z"}"><div class="${"intro-content svelte-16bgb3z"}"><img class="${"bitmoji svelte-16bgb3z"}" src="${"/images/bitmoji-bird-friends.png"}" alt="${"Andrew Givens Bitmoji with Birds"}">

		<h1>Andrew Givens</h1>

		<p>Full Stack Software Engineer</p>

		<div class="${"logos svelte-16bgb3z"}"><img src="${"/images/react-logo.png"}" alt="${"React JS Logo"}" class="${"svelte-16bgb3z"}">
			<img src="${"/images/typescript-logo.svg"}" alt="${"Type Script Logo"}" class="${"svelte-16bgb3z"}">
			<img src="${"/images/css-logo.png"}" alt="${"CSS 3 Logo"}" class="${"svelte-16bgb3z"}">
			<img src="${"/images/ruby-on-rails-logo.png"}" alt="${"Ruby on Rails Logo"}" class="${"svelte-16bgb3z"}">
			<img src="${"/images/graphql-logo.png"}" alt="${"Graph QL Logo"}" class="${"svelte-16bgb3z"}">
			<img src="${"/images/docker-logo.png"}" alt="${"Docker Logo"}" class="${"svelte-16bgb3z"}"></div></div>
</section>`;
});
const Experience_svelte_svelte_type_style_lang = "";
const css = {
  code: ".experience.svelte-11ihvwa{display:grid;grid-template-columns:auto auto;padding:20px;align-items:center;justify-content:space-around;gap:20px;background-color:var(--caribbean-current);color:var(--coral)}.divider.svelte-11ihvwa{grid-column:1 / -1;border-bottom:1px solid var(--coral)}@media screen and (max-width: 700px){.experience.svelte-11ihvwa{grid-template-columns:auto}}",
  map: null
};
const Experience = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { companies } = $$props;
  const totalCompanies = companies.length;
  if ($$props.companies === void 0 && $$bindings.companies && companies !== void 0)
    $$bindings.companies(companies);
  $$result.css.add(css);
  return `<div class="${"experience svelte-11ihvwa"}">${each(companies, ({ company, location, roles }, i) => {
    return `<div class="${"company"}"><h2>${escape(company)}</h2>
			<p>${escape(location)}</p></div>
		<div class="${"roles"}">${each(roles, (role) => {
      return `<h3>${escape(role.title)}</h3>
				<h4>${escape(role.timeline)}</h4>
				<ul>${each(role.duties, (duty) => {
        return `<li>${escape(duty)}</li>`;
      })}
				</ul>`;
    })}</div>
		${i + 1 < totalCompanies ? `<div class="${"divider svelte-11ihvwa"}"></div>` : ``}`;
  })}
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Introduction, "Introduction").$$render($$result, {}, {}, {})}

${validate_component(Experience, "Experience").$$render($$result, { companies: data.companies }, {}, {})}`;
});
export {
  Page as default
};
