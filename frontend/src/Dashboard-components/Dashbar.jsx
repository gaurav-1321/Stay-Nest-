 import { BadgeHelpIcon, ChartNoAxesGantt, DollarSign, FolderEditIcon, HotelIcon, LucideTableProperties, Proportions, Settings, User } from "lucide-react";
import { NavLink } from "react-router-dom";

 const Navstyle =({ isActive }) => {
   return `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 font-medium text-lg ${
    isActive 
      ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20" 
      : "text-gray-400 hover:bg-gray-800 hover:text-white"
  }`;
};
const Dashbar = () => {
  return (
    <div className="w-1/5 h-screen  bg-gray-900 text-gray-100 p-6 ">
    <div className="mb-8">
    <ul>
      <li><NavLink to="/profile" className={Navstyle}>
      <User/> Profile  </NavLink></li>
      <li><NavLink to="/overview" className={Navstyle}>
      <ChartNoAxesGantt/>
      Overview</NavLink></li>
      <li><NavLink to="/myproperties" className={Navstyle}>
      <LucideTableProperties/>
      My properties</NavLink></li>
      <li><NavLink to="/addproperties" className={Navstyle}>
      <Proportions/>
      Add Properties</NavLink></li>
      <li><NavLink to="/revenue" className={Navstyle}>
      <DollarSign/>
      Revenue Analysis</NavLink></li>
      <li><NavLink to="/bookings" className={Navstyle}>
      <HotelIcon/>
      Bookings</NavLink></li>
   
    </ul>
    
    <ul >
      <li><NavLink to="/feedback" className={Navstyle}>
      <FolderEditIcon/>
      Reviews & Feedback </NavLink></li>
     <li><NavLink to="/help" className={Navstyle}>
     <BadgeHelpIcon/>
     Help & Support </NavLink></li>
     <li><NavLink to="/settings" className={Navstyle}>
     <Settings/>
     Settings </NavLink></li>
    </ul>
    </div>
    </div>
  )
}

export default Dashbar;
