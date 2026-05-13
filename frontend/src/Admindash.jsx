import { useEffect, useState } from "react";

const Admindash = ({data}) => {




const [propts,setpropts]=useState([]);
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };
useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/prop/getdata");
        const result = await res.json();
        
        setpropts(result.data);
      } catch (error) {
        console.error('error fetching in my properties');
      }
    };
    fetchdata();
  }, []);
  return (
    <> {/* Added missing opening fragment */}
      <header className="w-full bg-gray-800">
        <div className="w-full px-8 h-20 flex items-center justify-between gap-4">
          <h2 className="font-semibold text-2xl text-white">StayNest</h2>
          <h3 className="hidden md:flex items-center gap-8 font-semibold text-xl text-white">
            Welcome to Admin Dashboard!
          </h3>
          <button 
            onClick={handleLogout} 
            className="flex items-center gap-3 p-3 bg-gray-800 rounded-xl text-white text-lg font-semibold hover:shadow-md transition hover:bg-slate-100 hover:text-black border border-transparent hover:border-gray-300"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="p-8">
        <div className="text-center mb-12">
          <h1 className="font-bold text-4xl md:text-6xl font-serif text-gray-900">Hii Admin,</h1>
          <p className="font-bold text-3xl md:text-5xl font-serif mt-4 text-indigo-600 leading-tight">
            Welcome to StayNest Host Page
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Requests</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3">Id</th>
                <th className="border p-3">Name</th>
                <th className="border p-3">Data</th>
                <th className="border p-3">Request</th>
          
              </tr>
            </thead>
            <tbody>
              
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
};

export default Admindash;
