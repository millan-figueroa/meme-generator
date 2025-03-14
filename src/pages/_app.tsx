import "@/styles/globals.css";
import Header from "@/components/Header";
import Inputs from "@/components/Inputs";
import ImageGenerator from "@/components/ImageGenerator";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen bg-gray-800">
      <Header />
      <Inputs />
      <ImageGenerator />
    </div>
  );
}
