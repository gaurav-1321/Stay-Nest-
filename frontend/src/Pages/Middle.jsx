import { useEffect, useState } from "react";
import Card from "../components/Card";

const Middle = ({ query }) => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/hotels/get");
        const result = await res.json();
        setHotels(result.data);
      } catch (error) {
        console.error('Error fetching data');
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen pb-10">
      <div className="text-2xl pt-6 ml-8 font-bold text-gray-800">
        {"India"}
      </div>

      <div className="flex flex-wrap justify-start items-start px-4">
        {hotels.length > 0 ? (

            <Card  data={hotels} />
        ) : (
          <div className="ml-4 mt-10 text-gray-500">
            No properties found in database...
          </div>
        )}
      </div>
    </div>
  );
};

export default Middle;
