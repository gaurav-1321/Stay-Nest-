import { LocateFixed, Search } from "lucide-react";
import { useEffect, useState } from "react";
const Searchbar = () => {
  const [query,setquery]=useState("");
  const [places,setplaces]=useState([]);
   const API_KEY="071c7877e6a84f83888175d08827cbe7";

const handleNearby = async () => {
  try {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();

    setquery(data.city);
  } catch (err) {
    console.log(err);
  }
};
  useEffect(()=>{
    if (!query) {
  setplaces([]);
  return;
}
    const timer=setTimeout(async()=>{
      try{
        //api call
        const res= await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${query}&limit=6&apiKey=071c7877e6a84f83888175d08827cbe7`);
        const data=await res.json();
        console.log(res);
        console.log(data);
        //list of properties
        const list =
        data.features?.map((item) => ({
          name: item.properties.formatted,
        
        })) || [];

        setplaces(list);
        console.log("PLACES:", list);
      }
      catch(error){
       console.log("error in ",error);
       setplaces([]);
      }
    },400);
     return () => clearTimeout(timer);
  },[query]);
 
  //selecting place name
  const selectplace =(place)=>{
    setquery(place.name);
    setplaces([]);
  }

  const handlesearch = () => {
    if (!query) return;
    setplaces([]);
  };

  return (
    <>
       <div className="relative w-full max-w-3xl mx-auto mt-6">

      {/*  Search Bar */}
      <div className="flex items-center bg-white rounded-full shadow-lg overflow-visible">

        {/* Input */}
        <div className="flex items-center flex-grow gap-2 px-4">
          <Search className="text-gray-500 font-semibold text-xl" size={22} />
          <input
            type="text"
            placeholder="Where are you going?"
            className="w-full py-3 outline-none text-gray-700"
            value={query}
            onChange={(e) => setquery(e.target.value)}
          />
        </div>

        {/* Search Button */}
        <button
          onClick={handlesearch}
          className="px-6 py-3 text-white bg-pink-600 hover:bg-pink-700"
        >
          Search
        </button>

        {/*  Nearby Button */}
        <button
          onClick={handleNearby}
          className="flex items-center gap-2 px-5 py-3 text-white bg-purple-600 hover:bg-purple-700"
        >
          <LocateFixed size={18} />
          Nearby
        </button>
      </div>

      {/* Dropdown */}
      {query && places.length > 0 && (
        <div className="absolute top-full left-0 w-full bg-white text-black font-semibold shadow-lg rounded-xl z-50 max-h-64 overflow-y-auto border mt-2">
          {places.map((place, index) => (
            <div
              key={index}
              onClick={() => selectplace(place)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
            >
              {place.name}
            </div>
          ))}
        </div>
      )}
    </div>
      
    </>
  )
}

export default Searchbar
