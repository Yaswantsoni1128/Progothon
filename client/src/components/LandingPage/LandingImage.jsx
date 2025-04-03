import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import landingHeroImg from '../../assets/landingHero.jpg';

function LandingImage() {
    const companies = [
        { name: "FocalPoint", highlighted: false },
        { name: "Polymath", highlighted: false },
        { name: "Lightbox", highlighted: true },
        { name: "Alt+Shift", highlighted: false },
        { name: "Nietzsche", highlighted: false },
        { name: "Acme Corp", highlighted: false },
        { name: "Spheru", highlighted: false },
        { name: "Quantum Dynamics", highlighted: false },
    ];

    return (
        <div className="bg-green-950 text-white pb-10 px-5 sm:px-10 lg:px-20 pt-10 relative flex flex-col items-center shadow-lg">
            {/* Image Section */}
            <div className="relative w-full max-w-6xl mt-10">
                <img
                    src={landingHeroImg}
                    alt="Energy Trading Visualization"
                    className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] object-cover rounded-md"
                    style={{ clipPath: "polygon(15% 0, 100% 0, 100% 43%, 100% 100%, 68% 100%, 32% 100%, 0 100%, 0 10%, 13% 10%)" }}
                />
                
                <Link to="/login">
                  {/* Get Started button - Visible on medium and larger screens, hidden on small screens */}
                  <button className="hidden sm:block absolute  bg-lime-300 text-gray-900 px-3 py-1 sm:px-4 sm:py-2 rounded-full font-medium shadow-lg hover:font-semibold hover:bg-lime-400 text-sm sm:text-md md:text-lg top-0 left-0">
                    Get Started
                  </button>

                  {/* Arrow button - Visible on small screens, hidden on medium and larger screens, shown again on xl */}
                  <button className="sm:hidden xl:flex absolute hover:bg-lime-300  hover:text-gray-900 text-gray-200 rounded-full font-medium hover:font-semibold bg-opacity-25 bg-green-600 p-[0.6rem] sm:p-[0.7rem] text-sm sm:text-lg shadow-md md:top-0 md:left-[8rem] -top-3 left-0">
                      <FaArrowRight />
                  </button>
                </Link>


            </div>

            {/* Companies Section */}
            <div className="text-center pt-10 w-full max-w-7xl px-4">
                <h2 className="text-base sm:text-lg md:text-xl font-light">
                    Connecting the world’s <span className="text-lime-400 font-semibold">Greatest Companies</span> to their Customers.
                </h2>
                <div className="flex justify-center items-center gap-4 sm:gap-6 flex-wrap mt-4 px-2">
                    {companies.map((company, index) => (
                        <span
                            key={index}
                            className={`text-sm sm:text-lg font-semibold ${company.highlighted ? 'text-white' : 'opacity-50'}`}
                        >
                            {company.name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LandingImage;