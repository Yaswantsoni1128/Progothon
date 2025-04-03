import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import landingComp2Img from "../../assets/landingComp2.jpg"
function WhoWeAreComp() {
    return (
        <div className='bg-gray-100 pb-8 pt-1 px-4 sm:px-8'>
            <h2 className="font-bold mt-12 mx-auto w-full sm:w-2/3 text-black text-center text-3xl sm:text-4xl md:text-5xl leading-tight">
                A Single Platform to Make <br className='mt-4' /> 
                <button className="bg-green-950 text-2xl sm:text-3xl md:text-5xl text-lime-300 px-4 sm:px-6 py-1 rounded-full -rotate-[3deg] mt-2">
                    Agriculture
                </button> Resilient
            </h2>
            <div className="flex flex-col md:flex-row items-center px-4 sm:px-10 md:px-20 py-8 sm:py-12 rounded-lg">
                {/* Image Section */}
                <div className="md:w-2/5 w-full flex justify-center md:justify-start">
                    <img 
                        src={landingComp2Img} 
                        alt="Who We Are" 
                        className="rounded-lg w-full sm:w-4/5 md:w-full"
                    />
                </div>
                
                {/* Text Section */}
                <div className="md:w-3/5 w-full py-6 px-4 sm:px-10">
                    <h2 className="text-2xl sm:text-3xl md:text-[2.4rem] font-bold text-gray-900 leading-snug">
                        Connecting Farmers & Buyers for a Sustainable Future
                    </h2>
                    <p className="text-gray-700 mt-4 sm:mt-6 text-base sm:text-lg pb-4 sm:pb-6 pr-0 sm:pr-10">
                        By leveraging technology, we bridge the gap between agricultural producers and industries 
                        that utilize parali for sustainable practices. Whether you are a farmer looking for 
                        a reliable buyer or a business seeking raw materials, Grevion ensures secure transactions, 
                        transparent pricing, and a hassle-free experience.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                        <Link to={"/landingPage/whoweare"}>
                        <button className="mr-4 bg-green-950 text-white px-4 py-2 rounded-full font-normal shadow-md hover:bg-green-900 text-lg sm:text-[1.2rem]">
                            Know More
                        </button>
                            <button 
                                className="hover:bg-green-950 hover:text-white text-black border border-green-950 rounded-full font-medium hover:font-semibold bg-opacity-25 p-3 sm:p-[0.7rem] text-lg sm:text-[1.2rem] shadow-md"
                            >
                                <FaArrowRight/>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhoWeAreComp;
