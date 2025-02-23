export default function Header() {
  return (
    <div className="relative flex items-center w-full h-[60px] bg-gradient-to-r from-purple-500 to-pink-400 px-4">
      <img
        className="ml-3 w-[40px] h-[40px] mr-2"
        src="./ghostface.png"
        alt="troll face"
      />
      <h1 className="ml-1 text-lg font-bold text-white">Meme Generator</h1>
    </div>
  );
}
