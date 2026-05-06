import { ChevronRight, MapPin, Star } from "lucide-react";
const Myproperties = ({image,rating,name,location,price}) => {
  return (
    <>
    <h2 className="text-4xl font-serif font-bold text-center text-gray-800 mb-8">Your Property with us.</h2>
     <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden hover:bg-slate-100 transition duration-300 m-5 p-2">
      

      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover"
        />

        <div className="absolute top-3 left-3 bg-yellow-400 text-black px-2 py-1 rounded-md flex items-center text-sm font-semibold shadow">
          <Star size={14} className="mr-1 fill-yellow-500 text-yellow-500" />
          {rating}
        </div>
      </div>

      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>

        <div className="flex items-center font-semibold text-md mt-1">
          <MapPin size={16} className="mr-1" />
          {location}
        </div>

        <div className="mt-3 text-lg font-semibold text-gray-800">
          ₹{price} <span>/ night</span>
        </div>

        <div className="mt-5 flex space-x-3">
          <button className="flex-1 flex items-center justify-center px-4 py-2 rounded text-white bg-pink-600">
            View Detail <ChevronRight size={16} className="ml-1" />
          </button>

          
        </div>
      </div>
    </div>
    </>
  )
}

export default Myproperties
