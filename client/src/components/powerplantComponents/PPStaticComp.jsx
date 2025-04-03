// PPStaticComp.js
import React from "react";

const PPStaticComp = () => {
  return (
    <div className="relative bg-[url('https://img.freepik.com/free-photo/modern-hydrogen-energy-storage_587448-4987.jpg?t=st=1743608935~exp=1743612535~hmac=a8dff89d0971528cb9ccc0e85633f293037d29c3dce68ac458ff61c27d94a05f&w=1380')] bg-cover bg-center h-[60vh] flex items-center justify-center text-white px-6 md:px-20">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 text-center max-w-2xl">
        <h2 className="text-3xl md:text-5xl font-bold">Powering the Future</h2>
        <p className="text-lg mt-2">Innovative solutions for sustainable energy and efficiency.</p>
      </div>
    </div>
  );
};

export default PPStaticComp;