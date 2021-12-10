import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Aside from "../components/Aside";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      style={{
        width: "42rem",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "2rem 1rem",
      }}
    >
      <Header />
      <Aside />

      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
