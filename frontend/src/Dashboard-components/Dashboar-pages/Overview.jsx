import { Chart } from "react-google-charts";

const Overview = () => {
 const data = [
  { month: "Jan", bookings: 54, available: 306 },
  { month: "Feb", bookings: 39, available: 321 },
  { month: "Mar", bookings: 61, available: 299 },
  { month: "Apr", bookings: 60, available: 300 },
  { month: "May", bookings: 74, available: 286 },
  { month: "Jun", bookings: 92, available: 268 },
  { month: "Jul", bookings: 114, available: 246 },
  { month: "Aug", bookings: 108, available: 252 },
  { month: "Sep", bookings: 71, available: 289 },
  { month: "Oct", bookings: 61, available: 299 },
  { month: "Nov", bookings: 65, available: 295 },
  { month: "Dec", bookings: 93, available: 267 },
];
const chartdata=[
  ["month","bookings","available"],
  ...data.map((item)=>
    [item.month,item.available,item.bookings],)

];
const options = {
  title: "Bookings and Available Properties",
  chartArea: { width: "100%",height:"70%" },
  hAxis: {
       title: "Month",
    
  },
  vAxis: {
 title: "bookings",
  }
};




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

    
      <div className="grid grid-cols-1 gap-2">
        
      
        <div className=" w-full bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="font-semibold text-lg mb-4"> Available Vs Booked Properties</h2>
          <div className=" gap-2  bg-gray-50 p-4 rounded border-b border-gray-300">
          
            <div className="w-full bg-white "> 
              <Chart
              chartType="ColumnChart"
              data={chartdata} 
              width="100%"
              height="500px"
              options={options}
              
              />
           </div>
          
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
  );
};

export default Overview;
