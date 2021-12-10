import Link from "next/link";
import React from "react";
import { PostModel } from "../_modules/posts/types/posts.types";

interface PostProps {
  post: PostModel;
}

function Post({ post }: PostProps) {
  return (
    <div className="card">
      <h3>{post.frontmatter.title}</h3>
      <p>{post.frontmatter.description}</p>
      <div className="post-date">{post.frontmatter.date}</div>
      <Link href={`/blog/${post.slug}`}>
        <a className="btn">Read More</a>
      </Link>
    </div>
  );
}

export default Post;
