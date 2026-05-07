import { useState } from "react";
import Imageuploader from "../Imageuploader";
const Addprop = () => {
  const [propname,setpropname]=useState("");
  const [location,setlocation]=useState("");
  const [hostname,sethostname]=useState("");
  const [price,setprice]=useState("");
  const [desc,setdesc]=useState("");
  const [images,setimages]=useState("/Animate.png");


 const handlesubmit=async(e)=>{
e.preventDefault();
    const propdata = { propname, location, hostname, price, desc, images };
   try{ const res= await fetch("http://localhost:5000/api/prop/create",{
      method:"POST",
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify({propdata}),
    });
    const data=await res.json().catch(()=>{});
    console.log(data);
    if(res.ok){
      alert("data send to Database");
      setdesc("");
      sethostname("");
      setimages("");
      setlocation("");
      setprice("");
      setpropname("");
      setimages("");
    }else{
      alert(data.message|| "error  .... not reached to database")
    }}
    catch(error){
      console.error("Error in db");
      alert("cannot connect to server");
    }
    console.log(propdata);
 }
  return (
    <div>
      <h2 className="text-4xl font-serif font-bold text-center text-gray-800 mb-8">Add Your Property  & <span>Be part of our us.</span></h2>
      <form className="space-y-6" onSubmit={handlesubmit}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      
       <div className="flex flex-col">
            <label className="text-lg font-serif font-semibold mb-2">Property Name</label>
            <input 
              type="text" 
              placeholder="e.g. Hyatt Hotel" 
              value={propname}
              onChange={(e) => setpropname(e.target.value)}
              className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
       <div className="flex flex-col">
            <label className="text-lg font-serif font-semibold mb-2">Location</label>
            <input 
              type="text" 
              value={location}
              onChange={(e) => setlocation(e.target.value)}
              placeholder="e.g. Dehradun, India" 
              className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
     
       <div className="flex flex-col">
            <label className="text-lg font-serif font-semibold mb-2">Host Name</label>
            <input
              type="text" 
              value={hostname}
              onChange={(e) => sethostname(e.target.value)}
              placeholder="e.g. Billy " 
              className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
       
       <div className="flex flex-col">
            <label className="text-lg font-serif font-semibold mb-2">Price <span>/Night</span></label>
            <input 
              type="text" 
              placeholder="...in rupees" 
              value={price}
              onChange={(e) => setprice(e.target.value)}
              className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
            
       

    </div>
    <div className="flex flex-col space-y-4">
          <label className="text-lg font-serif font-semibold mb-2
          " >Images </label>
         
         <Imageuploader setimages={"/Animate.jpg"}/>
         
        
        </div>
      <div className="flex flex-col space-y-4">
          <label className="text-lg font-serif font-semibold mb-2">Description</label>
          <textarea 
            placeholder="Tell us about your property...." 
            className="border border-gray-300 p-3 rounded-lg h-32  outline-none resize-none"
            value={desc}
              onChange={(e) => setdesc(e.target.value)}
          />
          <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700  shadow-md" 
          
          type="submit">
            Add Your Property
          </button>
        </div>
      </form>
       
    </div>
  )
}

export default Addprop
