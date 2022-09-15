import Head from "next/head";
import { PostModel } from "../_modules/posts/types/posts.types";
import Post from "../components/Post";
import { getFiles, makePosts } from "../_modules/posts/utils/handlePostFiles";
import { POST_FILES_PATH } from "../_modules/posts/constants/posts.const";
import { sortPostByDate } from "../_modules/posts/utils/sort";

interface HomeProps {
  posts: PostModel[];
}

export async function getStaticProps() {
  const files = getFiles(POST_FILES_PATH);
  const posts = makePosts(files);
  // 나중에 sort 조건을 여러가지 사용하려면 sort 하는 부분을 컴포넌트로 내려야 할 듯?
  const sortedPosts = posts.sort(sortPostByDate);
  return { props: { posts: sortedPosts } };
}

function Home({ posts }: HomeProps) {
  return (
    <>
      <Head>
        <title>WhyAndHow</title>
      </Head>

      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </>
  );
}

export default Home;
