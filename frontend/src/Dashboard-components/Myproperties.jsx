import { ChevronRight, MapPin } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Myproperties = ({ data }) => {
  const [properties, setproperties] = useState(data);

  const toggleBooking = async (id) => {
    const currentitem = properties.find((item) => item.id === id);
    const newStatus = !currentitem.status;

    setproperties((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );

    try {
      const response = await fetch(`http://localhost:5000/api/status/item/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (!response.ok) throw new Error("Failed to update status");
    } catch (error) {
      console.error("Error updating status:", error);
      setproperties((prev) =>
        prev.map((item) => (item.id === id ? { ...item, status: !newStatus } : item))
      );
    }
  };

  return (
    <>
      <h2 className="text-4xl font-serif font-bold text-center text-gray-800 mb-8 mt-4">
        Your Property with us.
      </h2>
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 p-4">
        {properties && properties.length > 0 ? (
          properties.map((item, index) => (
            <div
              key={item.id || index}
              className={`flex-1 rounded overflow-hidden transition-colors border shadow-sm ${
                item.status ? "bg-gray-200" : "bg-white"
              }`}
            >
              <div className="relative">
            
                <img
                  src={item.data.image}
                  className={`w-full h-48 object-cover transition-all duration-300 ${
                    item.status ? "blur-[2px] grayscale-[0.5]" : ""
                  }`}
                  alt={item.data.propname}
                />
              </div>

              <div className="p-5">
                <h2 className="text-xl font-bold text-gray-800">
                  {item.data.propname} <br />
                  <span className="italic text-sm text-gray-400 font-normal">
                    by {item.data.hostname}
                  </span>
                </h2>
                <div className="flex items-center font-semibold text-md mt-1 text-gray-600">
                  <MapPin size={16} className="mr-1" /> {item.data.location}
                </div>
                <div className="mt-3 text-lg font-semibold text-gray-800">
                  {item.data.price}
                  <span className="text-sm font-normal">/ night</span>
                </div>
                <p className="mt-3 text-sm text-gray-600 line-clamp-2">
                  {item.data.desc}
                </p>
                <div className="mt-5 flex space-x-3">
                  <NavLink
                    to={`/Hostdashboard/myproperties/viewdetail/${item.id}`}
                    className="flex-1"
                  >
                    <button className="w-full flex items-center justify-center px-4 py-2 rounded text-white bg-pink-600 hover:bg-pink-700 transition-colors">
                      View <ChevronRight size={16} className="ml-1" />
                    </button>
                  </NavLink>
                  <button
                    onClick={() => toggleBooking(item.id)}
                    className={`flex-1 rounded text-white font-medium transition-colors ${
                      item.status ? "bg-gray-500 text-gray-100" : "bg-purple-600 hover:bg-purple-700"
                    }`}
                  >
                  {item.status ? "Available" : "Not Available"}
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1 className="text-xl text-gray-500 text-center col-span-full">
            No properties found
          </h1>
        )}
      </div>
    </>
  );
};

export default Myproperties;
