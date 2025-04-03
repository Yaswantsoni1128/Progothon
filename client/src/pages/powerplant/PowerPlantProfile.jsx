import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit } from 'react-icons/fa';
const PowerPlantProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Error: Authentication token not found');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/auth/getUserInfo`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        console.log('User Info:', response.data);
        setUser(response.data.user);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        if (error.response) {
          console.error('Response error:', error.response.data);
          setError(`Error: ${error.response.status} - ${error.response.data.message || 'Something went wrong'}`);
        } else if (error.request) {
          console.error('Request error:', error.request);
          setError('Error: No response from server');
        } else {
          console.error('Error:', error.message);
          setError(`Error: ${error.message}`);
        }
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <>
      {/* hero section  */}
        <div className="relative w-full h-[60vh] overflow-x-hidden overflow-y-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center bg-cover mb-52 h-48 "
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-photo/view-nuclear-power-plant-with-steaming-towers_23-2150957731.jpg?t=st=1743676961~exp=1743680561~hmac=999bc59c2907dd3518da3d4f80c86c42c36e91f90c15ffe165937d97cb11e378&w=1380')",
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0"></div>

        {/* Profile Content */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-4 text-white top-0 left-20">
          <img
            src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="SPOC Profile"
            className="w-32 h-32 border-4 border-white rounded-full shadow-lg md:h-52 md:w-52"
          />
        </div>

        <div className="relative bottom-52 left-80">
          {loading ? (
            <p className="text-white">Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <>
              <h1 className="mt-4 text-2xl font-bold md:text-3xl">
                {user.name || "Unknown"}
              </h1>
              <p className="text-lg md:text-xl">
                {(user.role == 'spoc') ? "Single Point of Contact (SPOC)" : "Power Plant | Industry Manager"}
              </p>
              <div className="flex mt-2 space-x-4 text-sm md:text-base">
                <p>Village : {user.location || "No village info"}</p>
              </div>
            </>
          )}
        </div>
        </div>



       {/* Information Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center w-full px-4 md:px-8">
  <div className="p-6 pb-10 m-4 bg-white border border-gray-300 shadow-md rounded-lg w-full md:w-3/5">
    <div className="flex items-center justify-between pb-4 border-b">
      <h2 className="text-lg md:text-xl font-semibold text-gray-900">Power Plant | Industry Information</h2>
      <button className="flex items-center px-3 py-1 text-sm md:text-base font-medium text-white bg-green-600 rounded-md hover:bg-green-700">
        <FaEdit className="mr-2" /> Edit
      </button>
    </div>

    {loading && (
      <div className="flex items-center justify-center mt-4">
        <div className="w-6 h-6 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
      </div>
    )}

    {error && (
      <p className="p-3 mt-4 text-sm text-red-600 bg-red-100 border border-red-400 rounded-md">
        {error}
      </p>
    )}

    {!loading && !error && user && (
      <div className="grid grid-cols-1 md:grid-cols-2 mt-4 text-gray-800 gap-4">
        <div className="col-span-2">
          <p className="font-semibold text-gray-900">Full Name</p>
          <p className="pl-1">{user.name}</p>
        </div>
        <div>
          <p className="font-semibold text-gray-900">Email Address</p>
          <p className="cursor-pointer">{user.email}</p>
        </div>
        <div>
          <p className="font-semibold text-gray-900">Phone</p>
          <p className="font-medium">{user.phone}</p>
        </div>
        <div className="col-span-2">
          <p className="font-semibold text-gray-900">Bio</p>
          <p>{user.bio || `I am ${user.name}, the Power plant | Industry manager for ensuring seamless communication, efficient coordination, and smooth collaboration between power plants/industries and SPOCs to fulfill parali requirements effectively.`}</p>
        </div>
        <div className="col-span-2">
          <p className="font-semibold text-gray-900">Village</p>
          <p>{user.location}</p>
        </div>
      </div>
    )}
  </div>

  {/* Image Section */}
  <div className="w-full md:w-2/5 flex justify-center p-4">
    <img 
      src="https://img.freepik.com/free-photo/collage-sustainability-factories-concept_23-2149232156.jpg?t=st=1743676571~exp=1743680171~hmac=842c9467e18d6e5d89269ab671ee0a07b925246a805bebc29f22fae0af394827&w=740" 
      alt="Industry" 
      className="w-full sm:w-[20rem] md:w-[24rem] lg:w-[28rem] h-auto object-cover rounded-lg shadow-md"
    />
  </div>
          </div>

    </>
  );
};

export default PowerPlantProfile;
