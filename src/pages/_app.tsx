import "@/styles/globals.css";
import Header from "@/components/Header";
import Inputs from "@/components/Inputs";
import ImageGenerator from "@/components/ImageGenerator";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Phudu:wght@300..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="h-screen">
        <Header />
        <Inputs />
        <ImageGenerator
          topText="One does not simply"
          bottomText="Walk into Mordor"
          imageUrl="http://i.imgflip
            .com/1bij.jpg"
        />
      </div>
    </>
  );
}
