import React from "react";


export default function HeroSection() {
  return (
    <div className="bg-green-950  flex flex-col px-20 py-6  items-start text-green-950  bg-[url('./bg_home.jpg')]  relative bg-blur-lg bg-cover ">
      <span className="bg-green-600 px-6 py-1 rounded-full  -rotate-12 text-md font-semibold">
        Grevion
      </span>
     <div className="w-full min-h-[80vh]">
       {/* Tag Badge */}
       

      {/* Heading */}
      <h1 className="text-4xl font-semibold mt-4 text-left leading-tight">
      Welcome to the Grevion!
      <p className="text-lg">A platform for managing one crop at a time</p>
      </h1>

      {/* Subtitle */}
      <p className="text-sm mt-4 text-left max-w-2xl">
      We aim to provide sustainable, cost-effective, and technology-driven solutions for crop residue management, ensuring a cleaner environment while benefiting farmers economically.
      </p>

      {/* CTA Button */}
      <div className="flex  items-center justify-between my-auto">
      <button className="bg-green-300 px-6 py-2 mt-6 rounded-full font-semibold flex items-center hover:bg-green-500 text-black transition">
        Get Started 
      </button>
      {/* <FaArrowRight className="p-2 rounded-full text-5xl font-medium border-2 -rotate-45 text-white border-black" /> */}
      </div>
     </div>

      {/* Image Card
      <div className=" mt-8 w-full shadow-lg rounded-lg overflow-hidden relative">
        <img
          src="/hero_bg.jpg"
          alt="Clipped Shape"
          className="w-full h-1/4 object-cover rounded-xl"
          style={{ clipPath: "polygon( 14.22% 8.33%, 17.50% 0.00%, 100% 0.00%, 100% 89.81%, 78.23% 90.74%, 72.45% 97.78%, 0.00% 98.33%, 0.00% 9.07% )" }}
        />
      </div> */}
     
    </div>
  );
}
