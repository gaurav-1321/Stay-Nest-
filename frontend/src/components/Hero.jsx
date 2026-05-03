import Header from "./Header";
import Searchbar from "./Searchbar";
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
      <Searchbar/>
      </div>
    </div>
    </>
  );
};

export default HeroSection;
