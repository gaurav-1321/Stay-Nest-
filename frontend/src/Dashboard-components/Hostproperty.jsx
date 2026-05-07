import { useEffect, useState } from 'react';
import Myproperties from './Dashboar-pages/Myproperties';

const Hostproperty = () => {
const [properties,setproperties]=useState("");
  useEffect(()=>{
    const fetchdata =async()=>{


      try{
        const res=await fetch("http://localhost:5000/api/prop/getdata");
        const result = await res.json();
        
        console.log("API Result:", result);
        const finalData = result.data || res.data; 
        console.log(res.data);
        console.log(finalData);
   setproperties(finalData);

      }catch(error){
      console.log('error fetching in my properties');
      }
  
    }
    fetchdata();
  },[]);
  return (
    <div >
      <Myproperties
      data={properties}
      
      />
    </div>
  )
}

export default Hostproperty
