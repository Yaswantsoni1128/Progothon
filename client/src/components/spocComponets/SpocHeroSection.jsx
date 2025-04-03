import React from 'react'

function SpocHeroSection() {
    return (
    <div className="relative bg-[url('/src/assets/spocDashboard.jpg')] bg-cover bg-center h-[80vh] flex items-center text-white px-10 md:px-20">
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="relative z-10 max-w-3xl">
      <h1 className="text-center text-4xl xs:text-5xl sm:7xl w-[80vw] md:text-6xl font-bold leading-tight mb-6 animate-fade-in">
        Welcome to the <span className="text-yellow-400">SPOC Dashboard</span>
      </h1>
      <p className="text-lg md:text-xl mb-6 animate-slide-up text-center w-[80vw]">
          The SPOC Dashboard is designed to empower administrators with a comprehensive platform for managing farmer interactions, tracking requests, and overseeing agricultural operations seamlessly. With an intuitive interface and real-time insights, it simplifies decision-making and enhances productivity.
        </p>
  
    </div>
  </div>
);
}


export default SpocHeroSection