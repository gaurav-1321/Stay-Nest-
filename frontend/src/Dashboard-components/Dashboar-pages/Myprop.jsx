import { useEffect, useState } from 'react';
import Myproperties from '../Myproperties';

const Myprop = () => {
  const [properties, setproperties] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/prop/getdata");
        const result = await res.json();
        
        const Data = result.data || result; 
        
        const formattedData = Data.map((item) => item.data || item);
        
        setproperties(formattedData);
      } catch (error) {
        console.error('error fetching in my properties');
      }
    };
    fetchdata();
  }, []);

  return (
    <div>
      
      {properties.length > 0 ? (
        <Myproperties data={properties} />
      ) : (
        <p>No properties available.</p>
      )}
    </div>
  );
}

export default Myprop;
