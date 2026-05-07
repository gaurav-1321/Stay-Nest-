import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
 const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        alert("Registered Successfully");
        navigate("/login");
        setName("");
        setEmail("");
        setPassword("");
      } else {
        alert(data.message || "Signup Failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Cannot connect to server");
    } 
  };

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center px-4">
     <div className="max-w-6xl w-full border-2 border-b-gray-100 bg-blue-50 rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">
     <div className="relative hidden md:block">
          <img
            src="/Animate.jpg"
            alt="Signup"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/45 flex flex-col justify-end p-10 text-white">
            <h1 className="text-4xl font-bold mb-3">
              Start Your Journey With StayNest
            </h1>
            <p className="text-gray-200 text-lg">
              Create your account and explore premium stays worldwide.
            </p>
          </div>
        </div>
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-6 max-w-md mx-auto">
      <h2 className="text-4xl font-bold text-gray-800 mb-10">Create  Account</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          required
          placeholder="Enter your name"
           className="w-full border border-gray-300 rounded-xl px-5 py-4 mb-4 focus:ring-2 outline-none text-xl"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          required
          placeholder="Enter your email"
          className="w-full border border-gray-300 rounded-xl px-5 py-4 mb-4 focus:ring-2 outline-none  text-xl"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          required
          placeholder="Enter your password"
          className="w-full border border-gray-300 rounded-xl px-5 py-4 mb-4 focus:ring-2 outline-none  text-xl"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button 
          type="submit" 
           className="w-full bg-purple-500 text-white py-4 rounded-xl font-semibold shadow-lg transition disabled:opacity-50"
        >
        Submit
        </button>
        <p className="text-center mt-8 text-gray-600 text-xl ">
            Already have an account?{" "}
            <Link to="/login" className="text-rose-500 hover:underline text-xl font-semibold ">
              Login
            </Link>
          </p>
      </form>
    </div>
    </div>
    </div>
  );
};

export default Signup;
