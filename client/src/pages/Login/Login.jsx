import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/auth/login`, {
        email,
        password,
      });

      const { token, role , user } = response.data;
      
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("userId", user._id);

      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });

      setTimeout(() => {
        if (role === "spoc") {
          navigate("/spoc/dashboard");
        } else if (role === "power_plant") {
          navigate("/powerplant/dashboard");
        } else {
          navigate("/");
        }
      }, 1000);

    } catch (err) {
      setError(err.response?.data?.message || "Login failed, try again.");
      toast.error("Error during login", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <div className='flex flex-col min-h-screen bg-gradient-to-r from-green-100 to-blue-100'>
        <div className='flex items-center justify-center w-full h-screen'>
          <div className='h-[80%] flex w-full justify-center items-center'>
            <div className='items-center justify-center hidden w-1/3 h-full px-10 py-2 bg-white shadow-xl rounded-l-xl lg:flex'>
              <img src="./download.gif" alt="" className='object-cover w-full h-full rounded-xl' />
            </div>
            <div className='flex flex-col items-center w-full h-full p-10 bg-white shadow-r-xl md:w-1/3 rounded-r-xl'>
              <h2 className='mb-4 text-3xl font-bold text-gray-700'>Welcome Back</h2>
              <p className='mb-6 text-gray-500'>Please login to continue</p>
              <form onSubmit={handleLogin} className='flex flex-col w-full gap-4'>
                <div className='w-full'>
                  <label className='block text-lg font-medium text-gray-700'>Email</label>
                  <input
                    type='email'
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='w-full px-4 py-2 mt-1 border border-gray-300 outline-none rounded-xl focus:ring-2 focus:ring-green-400'
                  />
                </div>
                <div className='w-full'>
                  <label className='block text-lg font-medium text-gray-700'>Password</label>
                  <input
                    type='password'
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='w-full px-4 py-2 mt-1 border border-gray-300 outline-none rounded-xl focus:ring-2 focus:ring-green-400'
                  />
                </div>
                <button
                  type='submit'
                  className='w-full px-4 py-2 text-lg font-semibold text-white transition duration-300 ease-in-out bg-green-500 shadow-md rounded-xl hover:bg-green-600'
                >
                  Login
                </button>
              </form>
              {error && <p className='mt-4 text-sm text-red-600'>{error}</p>}
              <p className='mt-4 text-sm text-gray-500'>Don't have an account? <Link to={'/signup'} className='text-blue-600 hover:cursor-pointer'>Sign Up</Link></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
