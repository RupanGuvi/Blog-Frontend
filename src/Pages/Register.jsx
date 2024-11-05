import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../Services/api";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/register", { name, email, password });
      toast.success(res.data.message);
      setError(null);
      window.location.href = "/login";
    } catch (error) {
      setError(error.response.data.message);
      toast.error(error.response.data.message);
    }
    setEmail("");
    setPassword("");
    setName("");
  };

  return (
    <div className="container mx-auto mt-8">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-8 shadow"
      >
        <h2 className="text-2xl mb-4 font-bold">Register</h2>
        {error && (
          <div className="bg-red-100 p-3 mb-4 text-red-600 rounded">
            {error}
          </div>
        )}
        <p>
          <label htmlFor="name" className="block mb-2 font-bold">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter the Your Name"
            className="border w-full p-2 mb-4 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="email" className="block mb-2 font-bold">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter the Your Email Id"
            className="border w-full p-2 mb-4 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="password" className="block mb-2 font-bold">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Enter the Your Password"
            className="border w-full p-2 mb-4 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="bg-red-100 p-2 mb-4 text-red-600  font-serif rounded"
          >
            {showPassword ? "Hide" : "Show"} password
          </button>
        </p>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded font-serif p-2 text-xl"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
