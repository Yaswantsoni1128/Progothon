import React from 'react';
import powerplantImg from "../../assets/powerplantDashboard.jpg";

function PPHeroSection() {
  return (
    <div 
      className="relative bg-cover bg-center md:bg-bottom h-[70vh] md:h-[80vh] flex items-center px-6 md:px-12 lg:px-20 text-white"
      style={{ backgroundImage: `url(${powerplantImg})` }} 
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Text content */}
      <div className="relative z-10 max-w-4xl text-center mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
          Welcome to the <span className="text-yellow-400">Power Plant Dashboard</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-gray-200 px-4 sm:px-10">
          The Power Plant Dashboard streamlines procurement and resource management, ensuring smooth operations 
          with real-time tracking and user-friendly navigation.
        </p>
      </div>
    </div>
  );
}

export default PPHeroSection;
