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

  useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then((res) => res.json())
      .then((data) => setMemes(data.data.memes));
  }, []);

  // Automatically poulate text when the user types in the input fields
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  // Clear input field on focus
  function clearInput(event: React.FocusEvent<HTMLInputElement>) {
    const { name } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: "",
    }));
    // console.log("sanity check!");
  }

  // Generate a random image from the memes array, and update the state
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
        <Inputs
          meme={meme}
          handleInputChange={handleInputChange}
          clearInput={clearInput}
        />
        <ImageGenerator
          topText={meme.topText}
          bottomText={meme.bottomText}
          imageUrl={meme.imageUrl}
          getRandomMeme={getRandomMeme}
        />
      </div>
    </>
  );
}
