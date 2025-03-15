import { useState } from "react";

interface Meme {
  topText: string;
  bottomText: string;
  imageUrl: string;
}

export default function Inputs(): React.JSX.Element {
  const [meme, setMeme] = useState<Meme>({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  return (
    <main className="flex-direction-column p-6">
      <div className="flex justify-center items-center gap-6">
        <label className="text-white">
          Top Text
          <input
            type="text"
            className="w-full border border-gray-400 rounded-md p-2"
            placeholder="Enter top text"
          />
        </label>

        <label className="text-white">
          Bottom Text
          <input
            type="text"
            className="w-full border border-gray-400 rounded-md p-2"
            placeholder="Enter bottom text"
          />
        </label>
      </div>
    </main>
  );
}
