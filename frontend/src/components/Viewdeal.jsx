import { Car, ChevronDown, Heart, Home, MapPin, Minus, Plus, Share, Snowflake, Utensils, Waves, Wifi } from "lucide-react";
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import Header from "./Header";
const Viewdeal = ({ data }) => {
  const [isopen, setisopen] = useState(false);
   const [dateValue, setDateValue] = useState({ 
    startDate: null, 
    endDate: null 
  }); 
   const [guests,setguests]=useState({
      adults:2,
      children:0,
      rooms:1
    });
  const updateCount=(field,operation)=>{

 setguests(prev => {
    const currentVal = prev[field];
       const min = field === "children" ? 0 : 1;
      
      if (operation === "minus" && currentVal > min) {
        return { ...prev, [field]: currentVal - 1 };
      }
      if (operation === "plus") {
        return { ...prev, [field]: currentVal + 1 };
      }
      return prev;
    });
  }




  return (
<>    
<div className="[&_div]:bg-gray-800 text-white">
  <Header />
</div>


<div className="bg-gray-200 p-6   grid grid-cols-1 md:grid-cols-6 gap-6 mt-12">
{/* search bar */}
     <div className="md:col-span-2 lg:col-span-1 bg-white p-5 rounded-lg shadow-md h-fit flex flex-col gap-6 w-full">
        <h3 className="font-bold text-gray-700 border-b pb-2">Property Search</h3>
        
         <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold text-gray-600">Select Dates</span>
            <div className="airbnb-picker-container">
                 <Datepicker 
            placeholder="Check-in  →  Check-out"
            separator="→"
            value={dateValue} 
            onChange={(newValue) => setDateValue(newValue)} 
            showShortcuts={true} 
            minDate={new Date()} // Disables past dates like Airbnb
            primaryColor={"blue"} 
            displayFormat={"DD/MM/YYYY"}
            inputClassName="w-full py-3 px-4 text-sm font-medium bg-transparent focus:ring-0 outline-none cursor-pointer"
            containerClassName="relative"
            popoverDirection="down"
            
            asSingle={false} 
            useRange={true} 
          />
            </div>
            </div>

        <div className="relative">
          <span className="text-sm font-semibold text-gray-600">Stay Details</span>
          <div 
            className="flex items-center border p-2 rounded cursor-pointer bg-gray-50"
            onClick={() => setisopen(!isopen)}
          >
            <input 
              readOnly
              placeholder={`${guests.adults} adults · ${guests.children} children·${guests.rooms} room`}  
              className="text-lg text-black font-semibold outline-none cursor-pointer w-full"
            />
            <ChevronDown size={16} className="text-gray-400" />
          </div>

          {isopen && (
            <div className="absolute top-full mt-2 left-0 bg-white border shadow-2xl p-4 rounded-lg z-20 w-full">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm">Adults</label>
                  <div className="flex items-center gap-3">
                    <button
                     onClick={() => updateCount("adults", "minus")}
                    className="p-1 border rounded hover:bg-gray-100"><Minus size={14}/></button>
                    <span className="text-sm font-medium">{guests.adults}</span>
                    <button 
                     onClick={() => updateCount("adults", "plus")}
                    className="p-1 border rounded hover:bg-gray-100"><Plus size={14}/></button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <label className="text-sm">Children</label>
                  <div className="flex items-center gap-3">
                    <button 
                     onClick={() => updateCount("children", "minus")}
                    className="p-1 border rounded hover:bg-gray-100"><Minus size={14}/></button>
                    <span className="text-sm font-medium">{guests.children}</span>
                    <button 
                     onClick={() => updateCount("children", "plus")}
                    className="p-1 border rounded hover:bg-gray-100"><Plus size={14}/></button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <label className="text-sm">Rooms</label>
                  <div className="flex items-center gap-3">
                    <button 
                     onClick={() => updateCount("rooms", "minus")}
                    className="p-1 border rounded hover:bg-gray-100"><Minus size={14}/></button>
                    <span className="text-sm font-medium">{guests.rooms}</span>
                    <button 
                    onClick={() => updateCount("rooms", "plus")}
                    className="p-1 border rounded hover:bg-gray-100"><Plus size={14}/></button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <button className="bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
          Update Search
        </button>
      </div>
{/* IMAGEs div and Property Name */}
      <div className="md:col-span-4 lg:col-span-5 bg-white p-6 rounded-lg shadow-md h-fit w-full">
        <div className="flex justify-between items-start flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Kasturi Inn</h2>
            <div className="flex items-center text-gray-500 mt-2">
              <MapPin size={18} className="mr-1 text-red-500" />
              <span>Rudraprayag, Uttarakhand | </span>
              <span className="text-blue-600 ml-1 cursor-pointer hover:underline font-medium">On Map</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-1 border border-gray-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-50 transition-all">
              <Heart size={16} className="text-gray-600" /> Save
            </button>
            <button className="flex items-center gap-1 border border-gray-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-50 transition-all">
              <Share size={16} className="text-gray-600" /> Share
            </button>
          </div>
        </div>

       <div className="mt-6 grid grid-cols-4 gap-2 h-[500px] overflow-hidden rounded-2xl">

  <div className="col-span-3 h-full">
    <img 
      src="/Animate.jpg" 
      alt="Hotel Main" 
      className="w-full h-full object-cover hover:brightness-90 transition-all cursor-pointer"
    />
  </div>
  <div className="col-span-1 grid grid-rows-2 gap-2 h-full">
    <img 
      src="/Animate.jpg" 
      alt="Hotel Detail 1" 
      className="w-full h-full object-cover hover:brightness-90 transition-all cursor-pointer"
    />
    <img 
      src="/Animate.jpg" 
      alt="Hotel Detail 2" 
      className="w-full h-full object-cover hover:brightness-90 transition-all cursor-pointer"
    />
  </div>

</div>
      </div>
  
    </div>
     {/* facilities */}
    <div className="mt-6 m-6 bg-white p-4">
  <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">
    Facilities By Us
  </h2>

  <div className="flex gap-4">
    
      <div className=" flex items-center gap-4 group p-2  rounded-lg group-hover:bg-blue-100 transition-colors">
        <Home size={20} className="text-blue-600" />
      <span className="text-lg font-medium text-gray-700">Entire place is yours</span>
    </div>
    <div className="flex items-center gap-3 group">
      <div className="p-2 bg-cyan-50 rounded-lg group-hover:bg-cyan-100 transition-colors">
        <Snowflake size={20} className="text-cyan-600" />
      </div>
      <span className="text-lg font-medium text-gray-700">AC</span>
    </div>
    <div className="flex items-center gap-3 group">
      <div className="p-2 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors">
        <Wifi size={20} className="text-indigo-600" />
      </div>
      <span className="text-lg font-medium text-gray-700">Free Wifi</span>
    </div>
    <div className="flex items-center gap-3 group">
      <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-slate-100 transition-colors">
        <Car size={20} className="text-slate-600" />
      </div>
      <span className="text-lg font-medium text-gray-700">Parking</span>
    </div>
    <div className="flex items-center gap-3 group">
      <div className="p-2 bg-orange-50 rounded-lg group-hover:bg-orange-100 transition-colors">
        <Utensils size={20} className="text-orange-600" />
      </div>
      <span className="text-lg font-medium text-gray-700">Kitchen</span>
    </div>

    <div className="flex items-center gap-3 group">
      <div className="p-2 bg-teal-50 rounded-lg group-hover:bg-teal-100 transition-colors">
        <Waves size={20} className="text-teal-600" />
      </div>
      <span className="text-lg font-medium text-gray-700">Swimming Pool</span>
    </div>
    </div>
  </div>
       {/* About Property  && best places */}
       {/* Main Container: 2 Columns on Desktop */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
  
  {/* 1. LEFT SIDE: About Property (Takes 2/3 of space) */}
  <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-md h-fit">
    <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
      About Property
    </h2>
    <div className="text-gray-600 mb-8 leading-relaxed text-lg">
      <span className="text-3xl font-bold font-serif text-black">Kasturi Inn</span> offers a blend of traditional hospitality and modern comfort. 
      Located in the heart of Rudraprayag, it serves as the perfect base for 
      travelers visiting Kedarnath and Badrinath shrines.
    </div>
    
    <ul className="space-y-5">
      <li className="flex items-center gap-4 text-gray-700 text-lg font-medium">
        <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><MapPin size={22} /></div>
        <span>Prime location with panoramic Himalayan views</span>
      </li>
      <li className="flex items-center gap-4 text-gray-700 text-lg font-medium">
        <div className="bg-green-100 p-2 rounded-lg text-green-600"><Plus size={22} /></div>
        <span>High-speed Wi-Fi and 24/7 Power Backup</span>
      </li>
      <li className="flex items-center gap-4 text-gray-700 text-lg font-medium">
        <div className="bg-orange-100 p-2 rounded-lg text-orange-600"><Heart size={22} /></div>
        <span>In-house multi-cuisine restaurant (Kasturi Kitchen)</span>
      </li>
      <li className="flex items-center gap-4 text-gray-700 text-lg font-medium">
        <div className="bg-purple-100 p-2 rounded-lg text-purple-600"><Share size={22} /></div>
        <span>Free private parking and tour desk assistance</span>
      </li>
    </ul>
  </div>

  <div className="flex flex-col gap-4">
    
    
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2 flex items-center gap-2">
        <MapPin size={20} className="text-red-500" />
        Nearby Best Places to visit
      </h2>
      <ul className="">
        {[
          { name: "Kedarnath", dist: "100 Km" },
          { name: "Rudraprayag Sangam", dist: "Local" },
          { name: "Koteshwar Mahadev", dist: "3 Km" },
          { name: "Tungnath Chopta", dist: "70 Km" },
          { name: "Kartik Swami", dist: "40 Km" },
        ].map((place, index) => (
          <li key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <span className="font-semibold text-gray-700 text-lg ">{place.name}</span>
            <span className="text-lg font-bold ">{place.dist}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Visit Map</h2>
      <div className="rounded-lg overflow-hidden border border-gray-100">
        <img 
          src="/Animate.jpg" 
          alt="Map" 
          className="w-full h-48 object-cover" 
        />
      </div>
    </div>

  </div>
</div>

    </>
  );
};

export default Viewdeal;