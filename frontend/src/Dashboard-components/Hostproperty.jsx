import { useEffect, useState } from 'react';
import Myproperties from './Dashboar-pages/Myproperties';

const Hostproperty = () => {
const [properties,setproperties]=useState("");
  useEffect(()=>{
    const fetchdata =async()=>{


      try{
        const res=fetch("http://localhost:5000/api/prop/getdata");
  const result=res.json();
  console.log(result);
   setproperties(result.data);

      }catch(error){
      console.log('error fetching in my properties');
      }
  
    }
    fetchdata();
  },[]);
  return (
    <div >
      <Myproperties
      data={data}
      
      />
    </div>
  )
}

export default Hostproperty
