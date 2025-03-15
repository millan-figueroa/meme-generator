import React from "react";

export default function ImageGenerator() {
  const [randomImage, setRandomImage] = React.useState<string>("");

  return (
    <div className="flex flex-col justify-items-center mx-6">
      <button className="w-full py-2 px-6 mb-6 text-white bg-gradient-to-r from-purple-500 to-pink-400 rounded-lg">
        Get a new image
      </button>
      <div className="relative flex flex-col justify-center items-center">
        <img
          src="http://i.imgflip.com/1bij.jpg"
          alt="image"
          className="rounded-lg"
        />
        <span className="absolute text-center my-[15px] px-[5px] font-anton text-3xl uppercase text-white tracking-[1px] [text-shadow:_2px_2px_0_#000,_-2px_-2px_0_#000,_2px_-2px_0_#000,_-2px_2px_0_#000,_0_2px_0_#000,_2px_0_0_#000,_0_-2px_0_#000,_-2px_0_0_#000,_2px_2px_5px_#000] top-0">
          Some Text
        </span>
        <span className="absolute text-center my-[15px] px-[5px] font-anton text-3xl uppercase text-white tracking-[1px] [text-shadow:_2px_2px_0_#000,_-2px_-2px_0_#000,_2px_-2px_0_#000,_-2px_2px_0_#000,_0_2px_0_#000,_2px_0_0_#000,_0_-2px_0_#000,_-2px_0_0_#000,_2px_2px_5px_#000] bottom-0">
          Some Text
        </span>
      </div>
    </div>
  );
}
