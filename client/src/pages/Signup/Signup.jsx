import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [role, setRole] = useState(""); // Ensure role is selected
  const navigate = useNavigate();

  const sendOtp = async () => {
    if (!email) {
      return toast.error("Please enter an email first.", { autoClose: 1000 });
    }

    try {
      console.log(import.meta.env.VITE_API_URL)
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/auth/sendOtp`,
        { email }
      );


      if (response.data.success) {
        toast.success("OTP sent successfully!", { autoClose: 1000 });
      } else {
        toast.error(response.data.message || "Failed to send OTP.", {
          autoClose: 1000,
        });
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      toast.error("Error sending OTP. Please try again.", { autoClose: 1000 });
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // Validation for empty fields
    if (!name || !email || !otp || !password || !phone || !location || !role) {
      return toast.error("All fields are required!", { autoClose: 2000 });
    }

    console.table({ name, email, role, location, password, phone, otp });

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/auth/signup`,
        { name, email, otp, password, role, phone, location }
      );

      
      console.log(response.data)

      if (response.data.success) {
        toast.success("Signup successful! Redirecting...", { autoClose: 1000 });

        const  {savedUser , token , role} = response.data
        localStorage.setItem("token", token);
        localStorage.setItem("role", role);
        localStorage.setItem("userId", savedUser._id);

        setTimeout(() => {
          if (role === "spoc") {
            navigate("/spoc/dashboard");
          } else if (role === "power_plant") {
            navigate("/powerplant/dashboard");
          } else {
            navigate("/");
          }
        }, 1000);
      } else {
        toast.error(response.data.message || "Signup failed.", {
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error("Signup error:", error);
      toast.error(
        error.response?.data?.message || "Error during signup.",
        { autoClose: 3000 }
      );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-green-100 to-blue-100">
      <ToastContainer />
      <div className="flex items-center justify-center w-full h-screen">
        <div className="flex items-center justify-center w-full h-[90%]">
          <div className="hidden w-1/2 h-full px-10 py-2 bg-white shadow-xl rounded-l-xl lg:flex">
            <img
              src="./animation_signup.gif"
              alt="Signup Animation"
              className="object-cover w-full h-full rounded-xl"
            />
          </div>
          <div className="flex flex-col items-center w-full h-full px-10 py-3 bg-white shadow-xl md:w-1/3 rounded-r-xl">
            <h2 className="mb-4 text-3xl font-bold text-gray-700">
              Create Account
            </h2>
            <form onSubmit={submitHandler} className="flex flex-col w-full gap-3">
              {/* Name Field */}
              <div className="w-full">
                <label className="block font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 mt-1 border border-gray-300 outline-none rounded-xl focus:ring-2 focus:ring-green-400"
                />
              </div>

              {/* Role & Location */}
              <div className="flex w-full gap-2">
                <div className="w-full">
                  <label className="block font-medium text-gray-700">Role</label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-4 py-2 mt-1 border border-gray-300 outline-none rounded-xl focus:ring-2 focus:ring-green-400"
                  >
                    <option value="" disabled>Select Role</option>
                    <option value="spoc">SPOC</option>
                    <option value="power_plant">Power Plant</option>
                  </select>
                </div>
                <div className="w-full">
                  <label className="block font-medium text-gray-700">Location</label>
                  <input
                    type="text"
                    placeholder="Enter your location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-4 py-2 mt-1 border border-gray-300 outline-none rounded-xl focus:ring-2 focus:ring-green-400"
                  />
                </div>
              </div>

              {/* Email & OTP */}
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-3/4 px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400"
                />
                <button
                  type="button"
                  onClick={sendOtp}
                  className="w-1/4 px-3 py-2 text-white bg-blue-500 rounded-xl hover:bg-blue-600"
                >
                  Send OTP
                </button>
              </div>

              {/* OTP & Phone */}
              <div className="flex w-full gap-2">
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400"
                />
                <input
                  type="text"
                  placeholder="Enter phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400"
                />
              </div>

              {/* Password Field */}
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400"
              />

              <button type="submit" className="w-full px-4 py-2 text-white bg-green-500 rounded-xl hover:bg-green-600">
                Sign Up
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-500">
              Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
