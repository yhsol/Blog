import React from "react";
import { POST_FILES_PATH } from "../../_modules/posts/constants/posts.const";
import {
  getFiles,
  makePaths,
} from "../../_modules/posts/utils/handlePostFiles";
import { FrontMatter, PathModel } from "../../_modules/posts/types/posts.types";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
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
  const markdownWithMeta = fs.readFileSync(
    path.join(POST_FILES_PATH, slug + ".md"),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);

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

function PostPage({ frontmatter, slug, content }: PostPageProps) {
  return (
    <>
      <Link href="/">
        <a className="btn btn-back">Go Back</a>
      </Link>
      <div className="card card-page">
        <h1 className="post-title">{frontmatter?.title}</h1>
        <div className="post-date">{frontmatter?.date}</div>
        <div className="post-body">
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </>
  );
}

export default PostPage;
