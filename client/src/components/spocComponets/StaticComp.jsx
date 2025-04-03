import React, { useEffect, useState } from "react";
import { FaChartBar } from "react-icons/fa";
import axios from "axios";

function StaticComp() {
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [counts, setCounts] = useState([]);

  const fetchUser = async () => {
    try {
      setLoading(true);
      setError("");

      const token = localStorage.getItem("token");

      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/v1/spoc/getSpocInfo`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      console.log("spoc info", response.data);
      if (response.data.success) {
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

  useEffect(() => {
    if (userInfo) {
      const stats = [
        { label: "Total Farmers", value: userInfo?.farmers?.length || 0, color: "text-green-700" },
        { label: "Pending Requests", value: userInfo?.requests?.length || 0, color: "text-yellow-700" },
        { label: "Total Parali Collected", value: userInfo?.totalParaliCollected || 0, color: "text-blue-700" },
      ];

      setCounts(stats.map(() => 0));

      const totalDuration = 2000; 
      const frameRate = 60; 
      const totalFrames = (totalDuration / 1000) * frameRate;

      stats.forEach((stat, index) => {
        let count = 0;
        let increment = Math.ceil(stat.value / totalFrames); 

        if (increment < 1) increment = 1; 

        const animate = () => {
          if (count < stat.value) {
            count += increment;
            if (count > stat.value) count = stat.value; 

            setCounts((prevCounts) => {
              const newCounts = [...prevCounts];
              newCounts[index] = count;
              return newCounts;
            });

            requestAnimationFrame(animate); // Smooth animation
          }
        };

        animate();
      });
    }
  }, [userInfo]); // Run animation when userInfo updates

  return (
    <div className="col-span-1 p-4 py-8 text-center bg-gray-100 md:col-span-2 lg:col-span-4">
      <h3 className="flex items-center justify-center gap-2 mb-8 text-5xl font-bold">
        <FaChartBar className="text-gray-700" />
        <p>Statistics Overview</p>
      </h3>

      {loading ? (
        <p className="text-xl text-gray-600">Loading...</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : userInfo ? (
        <div className="flex justify-around mt-4">
          {[
            { label: "Total Farmers", value: userInfo?.farmers?.length || 0, color: "text-green-700" },
            { label: "Pending Requests", value: userInfo?.requests?.length || 0, color: "text-yellow-700" },
            { label: "Total Parali Collected", value: userInfo?.totalParaliCollected || 0, color: "text-blue-700" },
          ].map((stat, index) => (
            <div key={index}>
              <h4 className="text-2xl font-semibold">{stat.label}</h4>
              <p className={`text-3xl font-bold ${stat.color}`}>{counts[index]}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-xl text-gray-600">No data available</p>
      )}
    </div>
  );
}

export default StaticComp;
