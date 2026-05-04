import { Link } from "react-router-dom";
import Header from "../components/Header";

const Host = () => {
  return (
    <div className=" bg-gray-800 min-h-screen">
      <Header />
      <main className="flex flex-col md:flex-row items-center justify-center min-h-[85vh] p-6 gap-12 max-w-7xl mx-auto">
        
        {/* Left Side: */}
        <div className="w-full md:w-1/2">
          <img 
            src="/Animate.jpg" 
            alt="Beautifully designed living space" 
            className="rounded-3xl shadow-2xl w-full h-[350px] md:h-[550px] object-cover"
          />
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/3 flex flex-col gap-8 text-center md:text-left">
          <div className="space-y-4">
            <h2 className="text-5xl font-extrabold text-gray-200 tracking-tight ">
              Become a Host
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed">
              Join our community of hosts and start earning today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/signuphost" className="flex-1">
              <button className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-all active:scale-95">
                Signup as Host
              </button>
            </Link>
            <Link to="/loginhost" className="flex-1">
              <button className="w-full border-2 border-gray-300 py-4 rounded-xl font-bold text-gray text-white hover:border-black transition-all active:scale-95">
                Login as Host
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Host;
