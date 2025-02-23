export default function Header() {
  return (
    <div className="relative flex items-center w-full h-[60px] bg-gradient-to-r from-red-500 to-pink-400 px-4">
      <img
        className="w-[40px] h-[40px] mr-2"
        src="./ghostface.png"
        alt="troll face"
      />
      <h1 className="text-lg font-bold text-white">Meme Generator</h1>
    </div>
  );
}
