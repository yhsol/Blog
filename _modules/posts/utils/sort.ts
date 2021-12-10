import { PostModel } from "../types/posts.types";

export function sortPostByDate(a: PostModel, b: PostModel) {
  if (!a.frontmatter?.date || !b.frontmatter?.date) return 0;
  return (
    Number(new Date(b.frontmatter?.date)) -
    Number(new Date(a.frontmatter?.date))
  );
}
