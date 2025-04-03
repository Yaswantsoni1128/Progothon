import React from "react";
import About_section_Card from "./About_section_Card";

export default function AboutUsSection() {
  const cards = [
    {btnText: "Farmer", details: "Empowering farmers by enabling efficient energy trading through Paralis.", img_url: "./farmer.jpg", title: "Grow"},
    {btnText: "SPOC", details: "Connecting SPOCs with power plants to streamline the trading of Paralis.", img_url: "./spoc.jpg", title: "Spoc"},
    {btnText: "Power Plant", details: "Facilitating power plants to efficiently buy and sell Paralis via a secure platform.", img_url: "./powerplant.jpg", title: "PowerPlant"}
  ]
  return (
    <div className="bg-white py-12 px-20 text-black flex flex-col relative">
      
      <div className="max-w-4xl text-center sm:text-left">
        <button className="bg-lime-300 px-3 py-1 rounded-full text-lg font-semibold">About Us</button>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
          Sustainable Crop Residue Management
        </h2>
        <p className="text-gray-600 mt-2 text-base sm:text-lg">
          Connects farmers with industries for residue utilization, turning waste into a valuable resource.
        </p>
        <p className="text-gray-600 mt-2 text-base sm:text-lg lg:w-2/3">
          Provides eco-friendly alternatives to burning, such as composting and biofuel production.
        </p>
      </div>

      <div className="mt-8 flex flex-col md:flex-row gap-6 max-w-5xl absolute right-[8rem] top-[3rem]">
        <img
          src="/parali.jpeg"
          alt="Agriculture Drone"
          className="hidden xl:block w-48 h-48 object-cover rounded-lg shadow-lg md:order-last -rotate-12"
        />
      </div>


      {/* cards  */}
      <div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 w-3/4 m-auto">
          {cards.map((item , id)=>(
            <About_section_Card key={id} btnText={item.btnText} details={item.details} img_url={item.img_url} title={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
}
