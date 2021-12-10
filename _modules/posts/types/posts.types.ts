export interface FrontMatter {
  title?: string;
  description?: string;
  date?: string;
  cover_iamge?: string;
  tags?: string[];
}

export interface PostModel {
  slug: string;
  frontmatter: FrontMatter;
}

export interface PathModel {
  params: {
    slug: string;
  };
}
