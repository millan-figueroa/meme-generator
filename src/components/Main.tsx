import * as React from "react";

export default function Main(): React.JSX.Element {
  return (
    <main>
      <div>
        <label>
          Top Text
          <input
            type="text"
            className="border border-gray-300 rounded-md p-2"
            placeholder="Enter top text"
          />
        </label>

        <label>
          Bottom Text
          <input
            type="text"
            className="border border-gray-300 rounded-md p-2"
            placeholder="Enter bottom text"
          />
        </label>
        <button>Get a new meme image</button>
      </div>
      <div className="meme">
        <img src="http://i.imgflip.com/1bij.jpg" alt="image" />
        <span className="top">One does not simply</span>
        <span className="bottom">Walk into Mordor</span>
      </div>
    </main>
  );
}
