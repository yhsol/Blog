import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { POST_FILES_PATH } from "../constants/posts.const";

// fetch data
// cms 나 서버를 구성해서 데이터를 가져와도 됨. 지금은 폴더에서 파일 가져올 것
export function getFiles(filepath: string) {
  return fs.readdirSync(path.join(filepath));
}

// get slug and frontmatter from posts
export function makePosts(files: string[]) {
  return files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join(POST_FILES_PATH, filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);

    return { slug, frontmatter };
  });
}

export function makePaths(files: string[]) {
  return files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
}
