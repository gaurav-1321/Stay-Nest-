import { Outlet } from "react-router-dom";
import Dashbar from "../Dashboard-components/Dashbar";
import Dashnavbar from "../Dashboard-components/Dashnavbar";

const Hostdashboard = () => {
  return (
    <div className="flex flex-col h-screen w-full overflow-hidden">
    
      <div className="h-20 flex-shrink-0"> 
        <Dashnavbar />
      </div>

      <div className="flex flex-1 overflow-hidden">
    
        <aside className="h-full bg-slate-800">
          <Dashbar />
        </aside>
      
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Hostdashboard;
