import React from "react";
import { FaStar } from "react-icons/fa";


const GrevionEnergyTrade = () => {
  return (
    <div className="bg-green-950 text-white pt-10 px-5 md:px-20 relative flex flex-col items-start mx-auto shadow-lg">
      <div className="w-[100%] md:w-[70%]">
        <p className="bg-green-800 inline-block bg-opacity-25 rounded-full px-3 ml-2 mb-3">
            <span className="text-[#c1f846] rounded-md px-2">
                Grevion Solutions
            </span>
        </p>
        <h1 className="text-4xl text-center md:text-start md:text-5xl font-bold leading-tight">
            Revolutionizing Energy Trading with Paralis:
            <p className="bg-green-800 inline-block bg-opacity-25 rounded-full px-3 ml-2 mb-3">
                <span className=" text-[#c1f846] rounded-md px-1 md:px-2 ">Innovation</span>
            </p>
            
        </h1>
        <p className="text-gray-100 mt-4 text-[1.2rem] text-center md:text-start">
            The future of energy trading is here. Grevion connects SPOCs and power plants, ensuring a seamless, trustworthy, and efficient marketplace for Paralis transactions.
        </p>
      </div>

      {/* right circular symbol  */}
      <div className="absolute hidden md:block top-36 right-6 md:top-28 md:right-32 lg:top-24 lg:right-44 bg-green-800 text-white p-3 rounded-full flex items-center justify-center w-32 h-32 shadow-md transform rotate-12 border-gray-300 border-8">
        <span className="text-md text-center leading-tight">
           <p className="text-yellow-400 flex justify-center items-center text-[1.2rem]"><FaStar /></p> Best Energy Trading Platform 
        </span>
      </div>
    </div>
  );
};

export default GrevionEnergyTrade;
