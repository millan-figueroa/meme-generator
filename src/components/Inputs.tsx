import * as React from "react";

export default function Inputs(): React.JSX.Element {
  const [topText, setTopText] = React.useState<string>("");
  const [bottomText, setBottomText] = React.useState<string>("");

  return (
    <main className="flex-direction-column justify-items-center p-8">
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
    </main>
  );
}
