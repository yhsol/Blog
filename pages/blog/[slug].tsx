import React from "react";
import { POST_FILES_PATH } from "../../_modules/posts/constants/posts.const";
import {
  getFiles,
  makePaths,
  makePost,
} from "../../_modules/posts/utils/handlePostFiles";
import { FrontMatter, PathModel } from "../../_modules/posts/types/posts.types";
import Link from "next/link";
import { marked } from "marked";

export async function getStaticPaths() {
  const files = getFiles(POST_FILES_PATH);
  const paths = makePaths(files);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }: PathModel) {
  const { data: frontmatter, content } = makePost(slug);

  return {
    props: {
      slug,
      frontmatter,
      content,
    },
  };
}

interface PostPageProps {
  frontmatter: FrontMatter;
  slug: string;
  content: string;
}

function PostPage({ frontmatter, content }: PostPageProps) {
  return (
    <>
      <article>
        <header>
          <h1
            style={{
              lineHeight: "1.1",
              marginBottom: "1.75rem",
              marginTop: "3.5rem",
              fontWeight: "900",
              fontSize: "2.5rem",
            }}
          >
            {frontmatter?.title}
          </h1>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.75rem",
              display: "block",
              marginBottom: "1.75rem",
              marginTop: "-1.4rem",
            }}
          >
            {frontmatter?.date}
          </p>
        </header>
        <div className="post-body">
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </article>
      <footer
        style={{
          fontWeight: "bold",
          marginTop: "2rem",
        }}
      >
        <div
          style={{
            marginBottom: "2rem",
          }}
        >
          {frontmatter.tags?.length ? "Tags:" : ""}
          {/* show tags */}
        </div>

        <Link href="/">
          <a className="text-orange-500">Go Back</a>
        </Link>
      </footer>
    </>
  );
}

export default PostPage;
