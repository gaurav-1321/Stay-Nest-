import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const Viewdetail = () => {
  const { id } = useParams();
  const [item, setitem] = useState(null);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/detail/item/${id}`);
        const data = await res.json();
        setitem(data);
      } catch (error) {
        console.error("Error in fetching:", error);
      }
    };
    fetchdata();
  }, [id]);

  return (
    <>
      <div className="p-4">
        {item && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="m-5">
              <h2 className="text-4xl font-serif font-semibold">
                {item.data.propname}{" "}
                <span className="text-gray-400 text-sm ml-4">{item.data.location}</span>
              </h2>
              
              <img src="/Animate.jpg" alt="" className="mt-5 w-65 h-60 rounded-lg shadow-sm" />
              
              <div className="mt-10 gap-6 flex flex-wrap">
                <NavLink to={`/edit/${id}`}>
                  <button className="bg-purple-700 p-3 font-bold text-white text-xl hover:bg-purple-800 shadow-md rounded-md">
                    Edit Property
                  </button>
                </NavLink>
                <NavLink to={`/history/${id}`}>
                  <button className="bg-rose-500 p-3 font-bold text-white text-xl hover:bg-rose-700 shadow-md rounded-md">
                    Booking History
                  </button>
                </NavLink>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 p-5">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-gray-500 text-sm uppercase tracking-wider font-semibold">Revenue Generated</h3>
                <p className="text-3xl font-bold mt-2 text-green-600">₹1,50,000</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-gray-500 text-sm uppercase tracking-wider font-semibold">Total Bookings</h3>
                <p className="text-3xl font-bold mt-2 text-blue-600">25</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-gray-500 text-sm tracking-wider font-semibold">Total Cancellations</h3>
                <p className="text-3xl font-bold mt-2 text-red-600">10</p>
              </div>
            </div>
          </div> 
        )}

        {item && (
         
          <div className="space-y-6 p-6">
             <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h2 className="font-bold mb-3 text-2xl">Description</h2>
                <h3 className="text-gray-600 text-xl font-semibold">{item.data.desc}</h3>
              </div>
            <div className="bg-gray-100 p-4 rounded-xl border border-gray-200 shadow-md">
              <h2 className="font-bold mb-3 text-2xl">Customer Feedback</h2>
              <ul className="space-y-4">
                <li>
                  <div className="flex items-center gap-3">
                    <img src="/Animate.jpg" alt="Jatin" className="rounded-full w-10 h-10 object-cover" />
                    <div>
                      <h2 className="font-semibold text-lg">Jatin</h2>
                      <p className="text-gray-700 italic">"A very good facility and services provided by them"</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-3">
                    <img src="/Animate.jpg" alt="Rahul" className="rounded-full w-10 h-10 object-cover" />
                    <div>
                      <h2 className="font-semibold text-lg">Rahul</h2>
                      <p className="text-gray-700 italic">"Quick and good services are provided by them"</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-100 p-4 rounded-xl border border-gray-200 shadow-md">
              <h2 className="font-bold text-2xl mb-4">Services Offered</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Kitchen</li>
                  <li>AC/NON AC rooms</li>
                  <li>TV</li>
                </ul>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Balcony</li>
                  <li>Bath Tub</li>
                  <li>Recliners</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Viewdetail;
