export default function Header() {
  return (
    <div className="relative flex items-center w-full h-[60px] px-4 mb-6 bg-gradient-to-r from-purple-500 to-pink-400">
      <img
        className="ml-1 w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] mr-3"
        src="./ghostface.png"
        alt="troll face"
      />
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
        Meme Generator
      </h1>
    </div>
  );
}
