import React from "react";

export default function ImageGenerator() {
  const [randomImage, setRandomImage] = React.useState<string>("");

  return (
    <div className="flex-direction-column justify-items-center">
      <button className="w-[450px] h-[50px] my-4 bg-gradient-to-r from-purple-500 to-pink-400 border-gray-200 rounded-lg">
        Get a new meme image
      </button>

      <img
        src="http://i.imgflip.com/1bij.jpg"
        alt="image"
        className="rounded-lg"
      />
    </div>
  );
}
