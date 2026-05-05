import { Chart } from "react-google-charts";

const Overview = () => {
  const data = [
    ["Task", "Hours per Day"],
    ["Work", 9],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      <h1 className="font-bold text-3xl font-serif text-gray-800 mb-8">
        Property Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        
      
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <p className="text-xl text-gray-500 font-medium">Total Properties</p>
      <p className="text-3xl font-bold text-blue-600">12</p>
        </div>

      
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <p className="text-xl text-gray-500 font-medium">Current Bookings</p>
          <p className="text-3xl font-bold text-green-600">8</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <p className="text-xl text-gray-500 font-medium">Monthly Revenue</p>
      <p className="text-2xl font-bold text-gray-800">$4,250</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          
          <p className="text-xl text-gray-500 font-medium">Maintenance</p>
          <p className="text-3xl font-bold text-orange-500">2 <span className="text-sm font-normal">Pending</span></p>
        </div>
      </div>

    
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
      
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="font-semibold text-lg mb-4">Revenue Overview</h2>
          <div className="flex items-end gap-2 h-32 bg-gray-50 p-4 rounded border-b border-gray-300">
          
            <div className="w-full bg-blue-400 "> 
              
           </div>
          
          </div>
        </div>

    
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
         
          <h2 className="font-semibold text-lg mb-4">Recent Notifications</h2>
          <div className="space-y-3">
                  
                  
                  
   <div className="text-sm p-2 bg-blue-50 text-blue-700 rounded italic">
              "Beach House" was booked for June 12th.
            </div>
            <div className="text-sm p-2 bg-gray-50 text-gray-600 rounded">
              Payment received for "City Apartment".
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Overview;
