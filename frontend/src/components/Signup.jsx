import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      console.log(res);

      const data = await res.json().catch(() => ({}));
      console.log("STATUS:", res.status);
        console.log("DATA:", data);

      if (res.ok) {
        alert("Registered Successfully");
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
    <div className="flex flex-col items-center justify-center min-h-[85vh] p-6 max-w-md mx-auto">
      <h2>Signup to the page</h2>
      <form onSubmit={handleSignup}>
        <h4>Name:</h4>
        <input
          type="text"
          required
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <h4>Email:</h4>
        <input
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <h4>Password:</h4>
        <input
          type="password"
          required
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button 
          type="submit" 
          className="font-semibold text-lg"
        >
        Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
