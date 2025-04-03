import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";

function ParaliInfo() {
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    try {
      setLoading(true);
      setError(""); // Reset error state

      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      console.log("UserId : ", userId)

      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/v1/spoc/getSpocInfo`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("spoc info",response.data)
      if (response.data.success) {
        console.log("parali info new : ", response.data.spoc)
        setUserInfo(response.data.spoc);
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
    <div className="w-1/4 max-w-2xl p-6 pb-10 mb-20 ml-20 border-2 border-gray-400 rounded-md bg-gray-50 border-opacity-30">
      <div className="flex items-center justify-between pb-4 border-b border-gray-300">
        <h2 className="text-lg font-semibold">Parali Collection Info</h2>
        <button className="flex items-center text-green-800 hover:text-green-600">
          <FaEdit className="mr-2" /> Edit
        </button>
      </div>

      {/* Show loading spinner */}
      {loading && (
        <div className="flex items-center justify-center mt-4">
          <div className="w-6 h-6 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
        </div>
      )}

      {/* Show error message */}
      {error && (
        <p className="p-3 mt-4 text-sm text-red-600 bg-red-100 border border-red-400 rounded-md">
          {error}
        </p>
      )}

      {/* Show data only if userInfo is available and no errors */}
      {!loading && !error && userInfo && (
        <div className="grid mt-4 text-gray-700 gap-y-4">
          <div className="flex justify-between">
            <p className="font-semibold text-black text-md">Total Parali Collected:</p>
            <p>{userInfo?.totalParaliCollected || 0}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold text-black text-md">Available For Sale:</p>
            <p>{userInfo?.availableForSale ? "Yes" : "No"}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold text-black text-md">Registered Farmers:</p>
            <p>{userInfo?.farmers?.length || 0}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold text-black text-md">Pending Requests:</p>
            <p>{userInfo?.requests?.length || 0}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold text-black text-md">Last Updated:</p>
            <p>{userInfo?.updatedAt ? new Date(userInfo.updatedAt).toLocaleString() : "N/A"}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ParaliInfo;
