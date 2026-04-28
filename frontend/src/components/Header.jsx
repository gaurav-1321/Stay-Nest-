import { NavLink } from "react-router-dom"
const Header = () => {
  return (
    <>
    <div className="w-full px-8 h-20 flex items-center justify-between gap-4 bg-blue-500">
    
        <h2 className="font-semibold text-xl">Logo</h2>
  

     <ul className="hidden md:flex items-center gap-8 font-semibold text-xl" >
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/" >About Us</NavLink></li>
          <li><NavLink to="/" >Services</NavLink></li>
        </ul> 
      
       
<div>
 <button className="font-semibold  text-lg bg-white p-2 ml-6 ">Login</button> <button className="font-semibold  text-lg bg-white p-2 mr-3">Signup</button>
    </div>
</div>
      
      
    </>
  )
}

export default Header
