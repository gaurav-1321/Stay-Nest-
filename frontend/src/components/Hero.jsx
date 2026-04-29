import { LocateFixed, Search } from "lucide-react";
import Header from "./Header";
const HeroSection = () => {
  return (
    <>
    
    <div className="relative w-full h-[350px] bg-gray-800 flex items-center justify-center ">
      <Header/>
      {/* CONTENT */}
      <div className="text-center text-white w-full px-4">
        <h1 className="text-4xl font-bold mb-2">StayNest</h1>
        <p className="mb-6 text-lg">
          Find your Dream Stay With Us.
        </p>

        <div className="flex items-center w-full max-w-3xl mx-auto bg-white rounded-full shadow-lg overflow-hidden mt-6 ">

          <div className="flex items-center flex-grow gap-2 px-4">
            <Search className="text-gray-500" size={25} />
            <input
              type="text"
              placeholder="Where are you going?"
              className="w-full py-3 outline-none text-gray-700"
            />
          </div>

          <button className="px-6 py-3 text-white bg-pink-600 hover:bg-pink-700">
            Search
          </button>

          <button className="flex items-center gap-2 px-4 py-3 text-white bg-purple-600 hover:bg-purple-700">
            <LocateFixed size={18} />
            Nearby
          </button>

        </div>
      </div>
    </div>
    </>
  );
};

export default HeroSection;
