import React from 'react';
import { FaList, FaShoppingCart, FaCreditCard, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

function PPCardSection() {
    return (
        <div className="px-6 md:px-20 py-10">
            <h2 className="text-4xl md:text-5xl font-bold text-center">Dashboard Features</h2>
            <p className="text-center text-base md:text-lg mt-4 mb-8 text-gray-600 px-4 md:px-20">
                Access key functionalities for managing your orders, payments, and profile with ease.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                
                <div className="bg-green-100 shadow-lg rounded-2xl p-6 text-center flex flex-col items-center">
                    <FaList className="text-green-700 text-5xl mb-4" />
                    <h3 className="text-xl font-bold">SPOC Listing</h3>
                    <p className="text-gray-600 text-sm md:text-base text-center">View and manage SPOC listings effortlessly.</p>
                    <Link to={"/powerplant/spocs-listing"}>
                        <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded-lg transition hover:bg-green-800">
                            View Listings
                        </button>
                    </Link>
                </div>
    
                <div className="bg-yellow-100 shadow-lg rounded-2xl p-6 text-center flex flex-col items-center">
                    <FaShoppingCart className="text-yellow-700 text-5xl mb-4" />
                    <h3 className="text-xl font-bold">My Orders</h3>
                    <p className="text-gray-600 text-sm md:text-base text-center">Track and manage your orders seamlessly.</p>
                    <Link to={"/powerplant/my-orders"}>
                        <button className="mt-4 bg-yellow-700 text-white px-4 py-2 rounded-lg transition hover:bg-yellow-800">
                            View Orders
                        </button>
                    </Link>
                </div>
    
                {/* <div className="bg-blue-100 shadow-lg rounded-2xl p-6 text-center flex flex-col items-center">
                    <FaCreditCard className="text-blue-700 text-5xl mb-4" />
                    <h3 className="text-xl font-bold">Make Payment</h3>
                    <p className="text-gray-600 text-sm md:text-base text-center">Proceed with payments securely.</p>
                    <Link to={"/powerplant/make-payment"}>
                        <button className="mt-4 bg-blue-700 text-white px-4 py-2 rounded-lg transition hover:bg-blue-800">
                            Pay Now
                        </button>
                    </Link>
                </div> */}
    
                <div className="bg-purple-100 shadow-lg rounded-2xl p-6 text-center flex flex-col items-center">
                    <FaUser className="text-purple-700 text-5xl mb-4" />
                    <h3 className="text-xl font-bold">Profile</h3>
                    <p className="text-gray-600 text-sm md:text-base text-center">Manage your profile settings.</p>
                    <Link to={"/powerplant/profile"}>
                        <button className="mt-4 bg-purple-700 text-white px-4 py-2 rounded-lg transition hover:bg-purple-800">
                            View Profile
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default PPCardSection;
