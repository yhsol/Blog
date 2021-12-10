import Link from "next/link";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  const isMainPage = router.pathname === "/";
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "3rem",
      }}
    >
      <div>
        <Link href="/" passHref>
          <h1
            style={{
              lineHeight: "2rem",
              marginBottom: "0",
              marginTop: "0",
              fontWeight: "900",
              fontSize: "2.5rem",
              cursor: "pointer",
            }}
            className={isMainPage ? "text-black" : "text-orange-500"}
          >
            <a>Blog</a>
          </h1>
        </Link>
      </div>
    </header>
  );
}

export default Header;
