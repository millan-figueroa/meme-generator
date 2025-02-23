import "@/styles/globals.css";
import Header from "@/components/Header";
import Main from "@/components/Main";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}
