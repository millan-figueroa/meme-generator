import "@/styles/globals.css";
import Header from "@/components/Header";
import Inputs from "@/components/Inputs";
import ImageGenerator from "@/components/ImageGenerator";
import React, { useState, useEffect } from "react";

type Meme = {
  topText: string;
  bottomText: string;
  imageUrl: string;
  url: string;
};

export default function App() {
  const [meme, setMeme] = useState<Meme>({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
    url: "",
  });

  // Fetch memes images from API and save to state
  const [memes, setMemes] = useState<Meme[]>([]);
  React.useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then((res) => res.json())
      .then((data) => setMemes(data.data.memes));
  }, []);

  // Handle input changes and update the state accordingly
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  // Generate a random image from the memes array
  function getRandomMeme() {
    const randomMeme = memes[Math.floor(Math.random() * memes.length)];
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        imageUrl: randomMeme.url,
      };
    });
  }

  return (
    <>
      <div className="h-screen">
        <Header />
        <Inputs meme={meme} handleInputChange={handleInputChange} />
        <ImageGenerator
          topText={meme.topText}
          bottomText={meme.bottomText}
          imageUrl={meme.imageUrl}
          getRandomMeme={getRandomMeme}
        />
        {/* <pre>{JSON.stringify(meme, null, 2)}</pre> */}
      </div>
    </>
  );
}
