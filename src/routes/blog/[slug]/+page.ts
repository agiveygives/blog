import { redirect } from "@sveltejs/kit";

type ParamsType = {
	slug: string;
}

export const load = async ({ params }: { params: ParamsType }) => {
  let post;
  try {
    post = await import(`../../../blogs/${params.slug}.md`);
  } catch {
    throw redirect(307, '/blog');
  }

  const { title, date } = post.metadata;
  const content = post.default;

  return {
    content,
    title,
    date,
  }
}
