import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit } from "react-icons/fa";

function SpocPersonalInfo() {
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    try {
      setLoading(true);
      setError(""); // Reset error state

      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      if (!userId) {
        setError("User ID not found.");
        return;
      }

      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/v1/users/getUserProfile/${userId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.data.success) {
        setUserInfo(response.data.user);
      } else {
        setError("Error fetching user data");
      }
    } catch (error) {
      setError("Unable to fetch user details.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="p-6 pb-10 mb-20 mr-20 bg-white border-2 border-gray-300 shadow-md rounded-lg min-w-[55%] max-w-[60%]">
      <div className="flex items-center justify-between pb-4 border-b">
        <h2 className="text-xl font-semibold text-gray-900">Personal Information</h2>
        <button className="flex items-center px-3 py-1 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700">
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

      {!loading && !error && userInfo && (
        <div className="grid grid-cols-2 mt-4 text-gray-800 gap-y-4">
          <div className="col-span-2">
            <p className="font-semibold text-gray-900">Full Name</p>
            <p className="pl-1">{userInfo.name}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900">Email Address</p>
            <p className="cursor-pointer">{userInfo.email}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900">Phone</p>
            <p className="font-medium">{userInfo.phone}</p>
          </div>
          <div className="col-span-2">
            <p className="font-semibold text-gray-900">Bio</p>
            <p>{userInfo.bio || `I am ${userInfo.name}, the SPOC (Single Point of Contact) for seamless communication, efficient coordination, and ensuring smooth collaboration between power plants/industries and farmers.`}</p>
          </div>
          <div className="col-span-2">
            <p className="font-semibold text-gray-900">Village</p>
            <p>{userInfo.location}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SpocPersonalInfo;
