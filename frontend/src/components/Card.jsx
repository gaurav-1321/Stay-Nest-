import { ChevronRight, MapPin, Star } from "lucide-react";
import { NavLink } from "react-router-dom";
const Card = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {data && data.length > 0 ? (
        data.map((item, index) => (
          <div 
            key={item.id || index} 
            className={`max-w-sm w-80 bg-white rounded-xl shadow-md overflow-hidden transition duration-300 m-4 border border-slate-100 relative ${
              item.status ? "blur-0" : "hover:shadow-2xl hover:bg-slate-50"
            }`}
          >
            
            <div className="relative">
              <img
                src={item.data?.image || "/Animate.jpg"}
                alt={item.data?.propname}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-black px-2 py-1 rounded-lg flex items-center text-xs font-bold shadow-sm">
                <Star size={14} className="mr-1 fill-yellow-400 text-yellow-400" />
                {item.data?.rating || "4.5"}
              </div>
            </div>
            <div className="p-5">
              <h2 className="text-lg font-bold text-gray-800 truncate">{item.data?.propname}</h2>
              <div className="flex items-center text-gray-500 text-sm mt-1">
                <MapPin size={14} className="mr-1 text-pink-600" />
                <span className="truncate">{item.data?.location}</span>
              </div>

              <div className="mt-4 flex items-baseline justify-between">
                <div className="text-xl font-bold text-gray-900">
                  ₹{item.data?.price}
                  <span className="text-xs text-gray-500 font-normal"> / night</span>
                </div>
              </div>

              <div className="mt-5 flex gap-2">
                <NavLink to= "/viewdeal">
                <button 
                  
                  className="flex-[2] flex items-center justify-center px-4 py-2 rounded-lg text-lg text-white font-semibold bg-pink-700 hover:bg-pink-800"
                >
                  View Deal <ChevronRight size={23} className="ml-1" />
                </button> </NavLink>
                <button 
                  disabled={!item.status}
                  className={`flex-[2] px-4 py-2 text-lg font-semibold rounded-lg transition ${
                    item.status 
                      ? "bg-purple-700 text-white hover:bg-purple-100 hover:text-purple-700 border border-purple-700" 
                      : "bg-gray-200 text-gray-500 border-none"
                  }`}
                >
                     {item.status ? "Available" : "Not Available"}
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-gray-500 mt-10">No properties found...</div>
      )}
    </div>
  );
};

export default Card;
