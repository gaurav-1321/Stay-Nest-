import Card from "../components/Card";
import data from "../Data"; // adjust path if needed

const Middle = () => {
  return (
    <div>
      <div className="text-2xl mt-3 ml-4 font-bold">
        Popular Hotels in India
      </div>
      <div className="flex flex-wrap justify-start items-center">
        {data.map((hotel) => (
          <Card
            key={hotel.id}
            id={hotel.id}
            name={hotel.name}
            location={hotel.location}
            price={hotel.price}
            rating={hotel.rating}
            image={hotel.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Middle;
