import { NavLink } from "react-router-dom"

const Viewdetail = () => {
  return (
    <>
     <div>
      <div className="grid grid-cols-2 ">
    <div className="grid grid-cols-1 *:xl:grid-cols-3 m-5">
    <h2 className="text-4xl font-serif font-semibold ">Kasturi Inn<span className="text-gray-400 text-sm ml-4">Rudraprayag,Uttarakhand</span></h2>
    <img
    src="/Animate.jpg"
    alt=""
    className="mt-5 w-65 h-60"
    />  
      <div className=" border-1  border-gray-200 mt-4 m-1">
        <NavLink>
          <button className="bg-purple-700 p-3 m-4 font-bold text-white text-xl hover:bg-purple-800 shadow-md rounded-md">
        Edit Property
        </button>
        </NavLink>
       <NavLink>
       <button  className="bg-rose-500 p-3 m-4 font-bold text-white text-xl hover:bg-rose-700 shadow-md rounded-md ">
        Booking History
       </button>

       </NavLink>
        
      </div>
  </div>
         {/* Stats Grid */}
        <div className="lg:rows-span-2 grid grid-rows-1 sm:grid-rows-3 gap-4">
          {[
            { label: "Revenue Generated", value: "₹1,50,000", color: "text-green-600" },
            { label: "Total Bookings", value: "25", color: "text-blue-600" },
            { label: "Total Cancellations", value: "10", color: "text-red-600" },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-gray-500 text-sm uppercase tracking-wider font-semibold">
                {stat.label}
              </h3>
              <p className={`text-3xl font-bold mt-2 ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>
      
        
    </div>  
    <div>
      <h2>Customer Feedback</h2>
      <ul>
        <li>Hey nice hotel</li>
      </ul>
    </div>
    <div>
      Services offer by You.. 

      <ul>
        <li>Kitchen</li>
        <li>AC/NON AC rooms</li>
      </ul>
    </div>
    </div> 
    </>
  )
}

export default Viewdetail
