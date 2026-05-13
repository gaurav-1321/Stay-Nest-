import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
  const Navstyle = ({ isActive }) =>
  `relative text-white transition 
   after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-yellow-400 
   ${isActive ? "after:w-full font-semibold" : "after:w-0"}`;
const Header = () => {
  const [isopen,setisopen]=useState(false);
  const [islogin] = useState(!!localStorage.getItem("token"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };
  return (
    <>
    <header className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-sm z-50">
    <div className="w-full px-8 h-20 flex items-center justify-between gap-4 ">
    
        <h2 className="font-semibold text-xl text-white">StayNest</h2>
  

     <ul className="hidden md:flex items-center gap-8 font-semibold text-xl text-white" >
          <li><NavLink to="/" className={Navstyle}>Home</NavLink></li>
          <li><NavLink to="/services" className={Navstyle} >Services</NavLink></li>
          <li><NavLink to="/experiances" className={Navstyle} >Experiences</NavLink></li>
        </ul> 
      
      <div className=""> 
           <button 
        onClick={() => setisopen(!isopen)}
        className="flex items-center gap-3 p-3 bg-gray-800 rounded-full border border-gray-600 hover:shadow-md transition"
      >
        <Menu className="text-white" size={20} />
      </button>
      {isopen && (
     <div className="absolute right-0 mt-3 w-56 bg-gray-800 rounded-2xl shadow-2xl py-4 flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200 items-center justify-start ">
      <Link to="/about" className='w-full'>
   <button className="w-full text-left px-5 py-2 font-semibold text-lg text-white hover:bg-white hover:text-black ">About Us</button> 
  
  </Link>
  
{ !islogin ? (
  <Link to="/login" className='w-full' onClick={() => setisopen(false)}>
    <button className="w-full text-left px-5 py-2 font-semibold text-lg text-white hover:bg-white hover:text-black">
      Login/Signup
    </button>
  </Link>
) : (
  <button 
    onClick={handleLogout} 
    className="w-full text-left px-5 py-2 font-semibold text-lg text-white hover:bg-white hover:text-black">
    Logout
  </button>
)}

 

 <Link to="/host" className='w-full'>
 <button className="w-full text-left px-5 py-2 font-semibold text-lg text-white hover:bg-white hover:text-black">Become a Host</button>
</Link>
    </div>
      )}

    </div>
</div>
      
      </header>
    </>
  )
}

export default Header
