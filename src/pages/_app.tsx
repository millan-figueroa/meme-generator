import "@/styles/globals.css";
import Header from "@/components/Header";
import Inputs from "@/components/Inputs";
import ImageGenerator from "@/components/ImageGenerator";
import { useState } from "react";

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

  // Add event listener to input fields
  // Create a function to handle input changes and update the state accordingly
  // Pass values to the ImageGenerator component as props

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        topText: value,
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
        />
      </div>
    </>
  );
}
