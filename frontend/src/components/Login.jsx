import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlelogin = async (e) => {
    e.preventDefault(); 

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        alert("Login Successful");
        setEmail("");
        setPassword("");
  
      } else {
        alert(data.message || "Login Failed");
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("Cannot connect to server.");
    }
  };

  return (
    
    <div className="flex flex-col items-center justify-center min-h-[85vh] p-6 max-w-md mx-auto">

      <h2 className="text-2xl font-bold mb-4">Login Page</h2>
      <form onSubmit={handlelogin} className="flex flex-col gap-3">
        <label className="font-semibold">Email:</label>
        <input
          type="email"
          required
          className="border p-2 rounded"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="font-semibold">Password:</label>
        <input
          type="password"
          required
          className="border p-2 rounded"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="bg-blue-600 text-white rounded p-2 mt-4 font-semibold text-lg hover:bg-blue-700 transition">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
