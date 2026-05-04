import { Link, NavLink } from "react-router-dom";
  const Navstyle = ({ isActive }) =>
  `relative text-white transition 
   after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-yellow-400 
   ${isActive ? "after:w-full font-semibold" : "after:w-0"}`;
const Header = () => {

  return (
    <>
    <header className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-sm z-50">
    <div className="w-full px-8 h-20 flex items-center justify-between gap-4 ">
    
        <h2 className="font-semibold text-xl text-white">StayNest</h2>
  

     <ul className="hidden md:flex items-center gap-8 font-semibold text-xl text-white" >
          <li><NavLink to="/" className={Navstyle}>Home</NavLink></li>
          <li><NavLink to="/about" className={Navstyle}>About Us</NavLink></li>
          <li><NavLink to="/services" className={Navstyle} >Services</NavLink></li>
          <li><NavLink to="/experiances" className={Navstyle} >Experiences</NavLink></li>
        </ul> 
      
       
<div>
  <Link to="/login">
   <button className="font-semibold  text-lg text-white m-4">Login</button> 
  
  </Link>
<Link to="/signup">
 <button className="font-semibold  text-lg text-white hover:shadow-xl m-4">Signup</button>
</Link>
 <Link to="/host">
 <button className="font-semibold  text-lg text-white hover:shadow-xl">Become a Host</button>
</Link>
    </div>
</div>
      
      </header>
    </>
  )
}

export default Header
