import React from "react";

export default function ImageGenerator() {
  const [randomImage, setRandomImage] = React.useState<string>("");

  return (
    <div className="flex-direction-column justify-items-center mx-6">
      <button className="w-full py-2 px-6 my-6 bg-gradient-to-r from-purple-500 to-pink-400 rounded-lg">
        Get a new image
      </button>

      <img
        src="http://i.imgflip.com/1bij.jpg"
        alt="image"
        className="rounded-lg border-2 border-slate-300"
      />
    </div>
  );
}
