import React from "react";
import pollutionImg from "../../assets/pollution.png"
import visionImg from "../../assets/show.png"
function WhoWeAre() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-200 py-20 px-6 md:px-12 lg:px-24 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-wide">
          Who We Are?
        </h2>
        <p className="text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto">
          <span className="font-bold text-gray-900 text-xl">Grevion</span> is a web platform that connects 
          <span className="font-semibold text-indigo-600"> SPOCs </span> and power plants to facilitate the 
          buying and selling of <span className="font-semibold text-indigo-600">paralis</span>. It streamlines energy trading by 
          providing a reliable and efficient way to establish connections and manage transactions. 
          The platform emphasizes <span className="text-indigo-600 font-semibold">innovation</span> and <span className="text-indigo-600 font-semibold">trust</span>, 
          making energy trading more accessible and organized.
        </p>
      </div>

      {/* Vision & Mission Cards */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-12 gap-10">
        {/* Our Vision */}
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full h-72 md:w-1/3 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="w-14 h-14  text-white flex items-center justify-center rounded-full mx-auto mb-4">
            <img src={visionImg} alt="" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
          <p className="text-gray-700 text-lg">
            To revolutionize energy trading by fostering seamless connections and efficient 
            transactions between SPOCs and power plants.
          </p>
        </div>

        {/* Our Mission */}
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full md:w-1/3 text-center transform transition h-72 duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="w-14 h-14 text-white flex items-center justify-center rounded-full mx-auto mb-4">
          <img src={pollutionImg} alt="" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
          <p className="text-gray-700 text-lg">
          Our mission is to eradicate air pollution from parali burning and enhance farmers' income sustainably.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
