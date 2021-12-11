import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Aside from "../components/Aside";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="w-138 mx-auto py-8 px-4">
      <Header />
      <Aside />

      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
