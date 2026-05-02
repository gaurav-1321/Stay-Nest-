import { useEffect, useState } from "react";
import Card from "../components/Card";

const Middle = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await fetch("https://serpapi.com/search.json?engine=google_hotels&q=india&check_in_date=2026-05-05&check_out_date=2026-05-07&adults=2&currency=INR&api_key=c23fb0823ba5f1e621481c57d443384e580bc305dd233fa63a5421bd90f4b539");
        console.log(res.data);
        alert("Data not fetched");
        const data = await res.json();
        console.log(data);
        console.log(data.hotels);
        setHotels(data.properties || []);
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
              image={hotel.images?.[0]}
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
