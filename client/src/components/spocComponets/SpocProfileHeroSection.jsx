import axios from "axios";
import React, { useEffect, useState } from "react";

function SpocProfileHeroSection() {
  const [userInfo, setUserInfo] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId"); 
      console.log(userId)
      if (!userId) {
        setError("User ID not found.");
        return;
      }

      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/v1/users/getUserProfile/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response)

      if (response.data.success) {
        setUserInfo(response.data.user);
      } else {
        console.log("Error while fetching data");
        setError("Error fetching user data");
      }
    } catch (error) {
      console.error(error);
      setError("Unable to fetch user");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="relative w-full h-[60vh] overflow-x-hidden overflow-y-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover mb-52"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/panoramic-view-wild-animals-south-africa_181624-37596.jpg?t=st=1743585165~exp=1743588765~hmac=e03cf39067c3ff79cd7921d25428962f34556487982ebad8d9b0e53206683f03&w=1380')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0"></div>

      {/* Profile Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-4 text-white top-8 left-20">
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
              {userInfo.name || "Unknown"}
            </h1>
            <p className="text-lg md:text-xl">
              {(userInfo.role == 'spoc') ? "Single Point of Contact (SPOC)" : "Power Plant Manager"}
            </p>
            <div className="flex mt-2 space-x-4 text-sm md:text-base">
              <p>Village : {userInfo.location || "No village info"}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default SpocProfileHeroSection;
