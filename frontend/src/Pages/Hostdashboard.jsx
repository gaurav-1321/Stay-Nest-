import Dashbar from "../Dashboard-components/Dashbar"
import Dashnavbar from "../Dashboard-components/Dashnavbar"
import Outlet from "../Dashboard-components/Outlet"
const Hostdashboard= () => {
  return (
    <>
   <div className="flex flex-col h-screen w-full">
    
      <div className="h-16"> 
        <Dashnavbar />
      </div>

    
      <div className="flex flex-1 overflow-hidden bg-slate-800">
  
          <Dashbar />
      
        <main className="flex-1 h-full overflow-y-auto bg-gray-50 p-8">
          <Outlet />
        </main>

      </div>
    </div>
   
    </>
  )
}

export default Hostdashboard
