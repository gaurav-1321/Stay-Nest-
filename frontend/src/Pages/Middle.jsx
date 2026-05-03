
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
const Middle = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/hotels/hotel");
        console.log(res.data);
        const data = res.data;
        console.log(data);
        setHotels(data.hotels || []);
      }
       catch (error) {
        console.error("Error fetching hotels:", error);
      }
    };
    
    fetchHotels();
  }, []);

  return (
    <div>
      <div className="text-2xl mt-3 ml-4 font-bold">
        Popular Hotels in India
      </div>
      <div className="flex flex-wrap justify-start items-center">
        {hotels.length > 0 ? (
          hotels.map((hotel) => (
            <Card
              key={hotel.id || hotel.name}
              id={hotel.id}
              name={hotel.name}
              location={hotel.address}
              price={hotel.rate_per_night?.lowest}
              rating={hotel.overall_rating}
              image={hotel.images?.[0].thumbnail}
            />
          ))
        ) : (
          <p className="ml-4 mt-2">No hotels found.</p>
        )}
      </div>
    </div>
  );
};

export default Middle;
