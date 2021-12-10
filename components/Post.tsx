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
        <h3
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "1.75rem",
            marginBottom: "0.5rem",
            marginTop: "3.5rem",
            fontWeight: "900",
            textRendering: "optimizeLegibility",
            lineHeight: "1.1",
          }}
          className="text-orange-500"
        >
          <Link href={`/blog/${post.slug}`}>
            <a style={{ cursor: "pointer" }}>{post.frontmatter.title}</a>
          </Link>
        </h3>
        <small
          style={{
            fontSize: "100%",
            fontFamily: "Merriweather','Georgia',serif",
            fontWeight: "400",
            wordWrap: "break-word",
            fontKerning: "normal",
            color: "gray",
          }}
        >
          {post.frontmatter.date}
        </small>
      </header>
      <p style={{ marginBottom: "1.75rem" }}>{post.frontmatter.description}</p>
    </article>
  );
}

export default Post;
