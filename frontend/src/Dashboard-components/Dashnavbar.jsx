
const Dashnavbar = () => {
  return (
    <>
    <header className="fixed top-0 left-0 w-full bg-gray-800 z-50">
      
      
        <div className="w-full px-8 h-20 flex items-center justify-between gap-4">
        <h2 className="font-semibold text-2xl text-white"> StayNest </h2>

        <h3 className="hidden md:flex items-center gap-8 font-semibold text-xl text-white">Welcome to StayNest Dashboard !</h3>

        <button className="flex items-center gap-3 p-3 bg-gray-800 rounded-xl  text-white  text-lg font-semibold hover:shadow-md transition hover:bg-slate-100 hover:text-black">
          Logout
        </button>
        </div>
        

      </header>
    </>
  )
}

export default Dashnavbar
