import { ChevronRight, MapPin } from "lucide-react";
import { NavLink } from "react-router-dom";
const Myproperties = ({data}) => {
    console.log("Property Data:", data);
 return (
  <>
  
    <h2 className="text-4xl font-serif font-bold text-center text-gray-800 mb-8">
      Your Property with us.
    </h2>
    <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 p-4 ">
    
      {data && data.length > 0 ? (
        data.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden  m-5 p-2 border">
            <div className="relative">
              <img src={item.image} alt="" className="w-full h-48 object-cover hover:bg-slate-200" />
              
            </div>

            <div className="p-5">
              <h2 className="text-xl font-bold text-gray-800">
                {item.propname} 
                <br/>
                <span className="font-italic text-sm text-gray-300"> by {item.hostname}</span>
              </h2>
              <div className="flex items-center font-semibold text-md mt-1">
                <MapPin size={16} className="mr-1" />
                {item.location}
              </div>
              <div className="mt-3 text-lg font-semibold text-gray-800">
                {item.price}<span>/ night</span>
              </div>
              <div className="mt-3 text-lg font-semibold text-gray-800">
                {item.desc}
              </div>
              <div className="mt-5 flex space-x-3">
                <NavLink to={`viewdetail`}>
                  <button 
                
                className="flex-1 flex items-center justify-center px-4 py-2 rounded text-white bg-pink-600">
                  View Detail <ChevronRight size={16} className="ml-1" />
                </button>
                </NavLink>
              
              </div>
            </div>
          </div>
        ))
      ) : (
        <h1 className="text-xl text-gray-500">No properties found</h1>
      )} 
    
    </div>
  </>
);

}

export default Myproperties
