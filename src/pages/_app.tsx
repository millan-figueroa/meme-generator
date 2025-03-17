import "@/styles/globals.css";
import Header from "@/components/Header";
import Inputs from "@/components/Inputs";
import ImageGenerator from "@/components/ImageGenerator";
import React, { useState, useEffect } from "react";

type Meme = {
  topText: string;
  bottomText: string;
  imageUrl: string;
};

export default function App() {
  const [meme, setMeme] = useState<Meme>({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  // Fetch memes from API and save to state
  const [memes, setMemes] = useState([]);
  React.useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then((res) => res.json())
      .then((data) => setMemes(data.data.memes));
  }, []);

  // Add event listener to input fields
  // Create a function to handle input changes and update the state accordingly
  // Pass values to the ImageGenerator component as props

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="h-screen">
        <Header />
        <Inputs meme={meme} handleInputChange={handleInputChange} />
        <ImageGenerator
          topText={meme.topText}
          bottomText={meme.bottomText}
          imageUrl={meme.imageUrl}
        />
        <pre>{JSON.stringify(meme, null, 2)}</pre>
      </div>
    </>
  );
}
