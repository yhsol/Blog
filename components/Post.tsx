import Link from "next/link";
import React from "react";
import { PostModel } from "../_modules/posts/types/posts.types";

interface PostProps {
  post: PostModel;
}

function Post({ post }: PostProps) {
  return (
    <article>
      <header>
        <h3 className="text-orange-500 text-1.75rem mb-2 mt-14 font-black leading-1.1">
          <Link href={`/blog/${post.slug}`}>
            <a className="cursor-pointer">{post.frontmatter.title}</a>
          </Link>
        </h3>
        <small className="text-100% font-normal break-words text-gray-600">
          {post.frontmatter.date}
        </small>
      </header>
      <p className="mb-7">{post.frontmatter.description}</p>
    </article>
  );
}

export default Post;
