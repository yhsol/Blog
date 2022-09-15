import Link from "next/link";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  const isMainPage = router.pathname === "/";
  return (
    <header className="flex justify-between items-center mb-12">
      <div>
        <Link href="/" passHref>
          <h1
            className={`${
              isMainPage ? "text-black text-2.5rem" : "text-orange-500 text-3xl"
            } my-0 font-black cursor-pointer`}
          >
            <a>PaulPaulBlog</a>
          </h1>
        </Link>
      </div>
    </header>
  );
}

export default Header;
