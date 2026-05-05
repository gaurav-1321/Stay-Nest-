import { BadgePlusIcon, Home, Proportions, StarIcon } from "lucide-react";
import Card from "../../components/Card";

const Profile = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 bg-white mt-5">
      
      <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-8 items-center mb-12">
        <div className="flex justify-center">
          <img 
            className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-gray-100 shadow-xl"
            src="/Animate.jpg" 
            alt="Gaurav"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="font-bold text-4xl md:text-6xl font-serif text-gray-900">Hii Gaurav,</h1>
          <p className="text-gray-500 mt-2 text-lg">Joined 2026</p>
          <p className="font-bold text-3xl md:text-5xl font-serif mt-4 text-indigo-600 leading-tight">
            Welcome to StayNest Host Page
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="border rounded-3xl p-6 md:p-8 bg-gray-50 shadow-sm mb-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
          <h2 className="font-bold text-3xl font-serif">About</h2> 
          <button className="text-sm font-bold px-6 py-2 border-2 border-black rounded-full hover:bg-black hover:text-white transition-all">
            Edit Profile
          </button>
        </div>
        <div className="font-serif text-lg text-gray-700 leading-relaxed">
          <p>
            Gaurav is the dedicated owner of Himalayan Dev Stay. Located in the heart of Rudraprayag, Uttarakhand. 
            He manages a curated collection of 8 premier properties. With a 4.5-star rating, he ensures guest satisfaction. 
            Expert in providing authentic Himalayan hospitality.
            <span className="text-indigo-600 hover:underline cursor-pointer font-semibold ml-2">Read more...</span>
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        <div className="flex items-center gap-3 p-4 border rounded-2xl md:border-none">
          <Home className="text-indigo-600 shrink-0" /> 
          <span className="font-semibold text-gray-800">Lives In: Rudraprayag</span>
        </div>
        <div className="flex items-center gap-3 p-4 border rounded-2xl md:border-none">
          <BadgePlusIcon className="text-indigo-600 shrink-0" /> 
          <span className="font-semibold text-gray-800">Work: Himalayan Stay</span>
        </div>
        <div className="flex items-center gap-3 p-4 border rounded-2xl md:border-none">
          <StarIcon className="text-yellow-500 fill-yellow-500 shrink-0" /> 
          <span className="font-semibold text-gray-800">Rating: 4.5</span>
        </div> 
        <div className="flex items-center gap-3 p-4 border rounded-2xl md:border-none">
          <Proportions className="text-indigo-600 shrink-0" /> 
          <span className="font-semibold text-gray-800">Hosted: 8 Properties</span>
        </div>
      </div>
      <div>
        <h2 className="font-bold font-serif text-4xl mb-8 ml-2">Gaurav's Listings</h2>
        <div className="grid grid-cols-1 gap-6">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Profile;
