import Link from "next/link";

function Header() {
  return (
    <header>
      <div
        style={{
          fontSize: "44px",
          color: "white",
          backgroundColor: "orange",
          padding: "14px",
        }}
      >
        <Link href="/">Blog</Link>
      </div>
    </header>
  );
}

export default Header;
