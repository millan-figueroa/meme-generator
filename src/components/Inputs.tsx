import { useState } from "react";

interface Meme {
  topText: string;
  bottomText: string;
  imageUrl: string;
}

interface InputsProps {
  meme: Meme;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  clearInput: (event: React.FocusEvent<HTMLInputElement, Element>) => void;
}

export default function Inputs({
  meme,
  handleInputChange,
  clearInput,
}: InputsProps): React.JSX.Element {
  return (
    <main className="flex flex-col p-6 mx-auto">
      <div className="flex justify-center items-center gap-6">
        <label className="text-grey-600">
          Top Text
          <input
            type="text"
            name="topText"
            className="w-full border border-gray-400 rounded-md p-2"
            placeholder="Enter top text"
            onChange={handleInputChange}
            onFocus={clearInput}
            value={meme.topText}
          />
        </label>

        <label className="text-grey-600">
          Bottom Text
          <input
            type="text"
            name="bottomText"
            className="w-full border border-gray-400 rounded-md p-2"
            placeholder="Enter bottom text"
            onChange={handleInputChange}
            onFocus={clearInput}
            value={meme.bottomText}
          />
        </label>
      </div>
    </main>
  );
}
