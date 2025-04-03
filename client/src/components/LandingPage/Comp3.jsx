import React from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Comp3 = () => {
  return (
    <div className="p-6 sm:p-8 pt-12 sm:pt-16 pb-12 sm:pb-16 bg-white min-h-screen">
      <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-0">Sustainability through Paralis</h2>
        <p className="text-gray-600 max-w-lg">Grevion empowers sustainable energy practices by connecting SPOCs and power plants for efficient trading of Paralis.</p>
      </div>

      {/* image  */}
      <div className="relative mt-10 flex justify-center">
        <div className="relative w-full px-5 sm:px-10 md:px-20 lg:px-36">
          <img
            src="https://img.freepik.com/free-photo/natural-landscape-with-green-grass-field-golden-ripe-wheat-ai-generated-image_587448-1493.jpg?t=st=1743500042~exp=1743503642~hmac=1e0dd20e82c7ac7049d22a9db7355bb61e7c13170a280adb0b602d6819991d22&w=1380"
            alt="Energy Trading Visualization"
            className="w-full h-64 sm:h-[550px] object-cover rounded-md"
            style={{ clipPath: "polygon(15% 0, 100% 0, 100% 43%, 100% 100%, 68% 100%, 32% 100%, 0 100%, 0 10%, 13% 10%)" }}
          />

        <div className="absolute -top-1 xs:top-0 md:left-32 left-0 flex gap-2 px-5 ">
          {/* Visible only on medium and large screens */}
          <Link to={"/landingPage/sustainability"} className="hidden sm:block lg:hidden">
            <button className="bg-green-950 text-white px-3 py-2 sm:px-4 sm:ml-10 sm:py-2 rounded-full font-normal shadow-md hover:bg-green-900 text-[0.6rem] sm:text-[0.8rem] md:text-[1rem]">
              Know More
            </button>
          </Link>

          {/* Visible only on small screens */}
          <Link to={"/landingPage/sustainability"} className="sm:hidden flex lg:hidden">
            <button className="hover:bg-green-950 hover:text-white text-black border border-green-950 rounded-full  font-medium hover:font-semibold bg-opacity-25 p-2 sm:p-[0.7rem] text-sm sm:text-[1.2rem] shadow-md md:hidden">
              <FaArrowRight />
            </button>
          </Link>

          {/* Visible only on larger screens (lg and above) */}
          <div className="hidden lg:flex gap-4">
            <Link to={"/landingPage/sustainability"}>
              <button className="bg-green-950 text-white px-4 py-2 rounded-full font-normal shadow-md hover:bg-green-900 text-[1.2rem]">
                Know More
              </button>
            </Link>
            <Link to={"/landingPage/sustainability"}>
              <button className="hover:bg-green-950 hover:text-white text-black border border-green-950 rounded-full        font-medium hover:font-semibold bg-opacity-25 p-[0.7rem] text-[1.2rem] shadow-md md:hidden">
                <FaArrowRight />
              </button>
            </Link>
          </div>
        </div>

        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-10 px-6 sm:px-12 md:px-20">
        <div className="bg-white p-6 text-center border-b-2 border-lime-300">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-2 tracking-tighter">Efficient Energy Trading</h3>
          <p className="text-gray-600 text-sm sm:text-base">Streamline transactions between SPOCs and power plants, reducing energy waste and optimizing resource utilization.</p>
        </div>

        <div className="bg-white p-6 text-center border-b-4 border-lime-300">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-2 tracking-tighter">Transparent Transactions</h3>
          <p className="text-gray-600 text-sm sm:text-base">Achieve complete transparency in energy trading with clear and detailed transaction records.</p>
        </div>

        <div className="bg-white p-6 text-center border-b-2 border-lime-300">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-2 tracking-tighter">Innovation in Energy Management</h3>
          <p className="text-gray-600 text-sm sm:text-base">Utilize modern technology to enhance energy distribution and management through Grevion's platform.</p>
        </div>
      </div>
    </div>
  );
};

export default Comp3;