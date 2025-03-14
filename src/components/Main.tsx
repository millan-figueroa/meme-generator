import * as React from "react";

export default function Main(): React.JSX.Element {
  return (
    <main className="flex-direction-column justify-items-center p-8 bg-gray-800 ">
      <div className="flex justify-center items-center gap-6">
        <label className="text-gray-800">
          Top Text
          <br />
          <input
            type="text"
            className="border border-gray-300 rounded-md p-2"
            placeholder="Enter top text"
          />
        </label>

        <label className="text-gray-800">
          Bottom Text
          <br />
          <input
            type="text"
            className="border border-gray-300 rounded-md p-2"
            placeholder="Enter bottom text"
          />
        </label>
      </div>

      <button className="w-[450px] h-[50px] mt-4 bg-gradient-to-r from-purple-500 to-pink-400 border-gray-200 rounded-lg">
        Get a new meme image
      </button>

      <div className="mr-5 ml-5 mt-4">
        <img
          src="http://i.imgflip.com/1bij.jpg"
          alt="image"
          className="rounded-lg"
        />
        <span className="top">One does not simply</span>
        <span className="bottom">Walk into Mordor</span>
      </div>
    </main>
  );
}
