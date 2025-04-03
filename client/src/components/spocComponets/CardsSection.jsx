import React from 'react'
import { FaUserPlus, FaClipboardList, FaEnvelopeOpenText, FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

function CardsSection() {
    return (
        <>
        <h2 className="text-5xl font-bold mt-6 mb-4 text-center pt-10">Dashboard Features</h2>
        <p className="text-center text-lg mb-6 px-8 sm:px-20 md:px-32 lg:px-44 text-gray-600">The SPOC dashboard provides a powerful suite of tools to enhance agricultural management. From farmer registrations to handling requests and monitoring data, every feature is designed for efficiency and ease of use. With an intuitive interface and real-time analytics, SPOCs can make informed decisions, streamline operations, and foster better communication between stakeholders. Explore the key functionalities below to optimize your workflow.</p>
        <div className="px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-20 pt-10">
            
          <div className="bg-green-100 shadow-lg rounded-2xl p-4 text-center">
            <FaUserPlus className="text-green-700 text-4xl mb-4" />
            <h3 className="text-xl font-bold">Farmers Adding</h3>
            <p className="text-gray-600">Add new farmers to the system seamlessly.</p>
            <Link to={"/spoc/add-farmer"}>
                <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded">Add Farmer</button>
            </Link>
          </div>
    
          <div className="bg-yellow-100 shadow-lg rounded-2xl p-4 text-center">
            <FaClipboardList className="text-yellow-700 text-4xl mb-4" />
            <h3 className="text-xl font-bold">Parali Listing</h3>
            <p className="text-gray-600">View and manage parali listings efficiently.</p>
            <Link to={"/spoc/farmer-listing"}>
                <button className="mt-4 bg-yellow-700 text-white px-4 py-2 rounded">View Listings</button>
            </Link>
          </div>
    
          <div className="bg-blue-100 shadow-lg rounded-2xl p-4 text-center">
            <FaEnvelopeOpenText className="text-blue-700 text-4xl mb-4" />
            <h3 className="text-xl font-bold">Requests Handling</h3>
            <p className="text-gray-600">Manage and process requests from farmers.</p>
            <Link to={"/spoc/paralis-request"}>
                <button className="mt-4 bg-blue-700 text-white px-4 py-2 rounded">Handle Requests</button>
            </Link>
          </div>
    
          <div className="bg-purple-100 shadow-lg rounded-2xl p-4 text-center">
            <FaUserCircle className="text-purple-700 text-4xl mb-4" />
            <h3 className="text-xl font-bold">Profile</h3>
            <p className="text-gray-600">Manage your SPOC profile and settings.</p>
            <Link to={"/spoc/profile"}>
                <button className="mt-4 bg-purple-700 text-white px-4 py-2 rounded">View Profile</button>
            </Link>
          </div>
        </div>
        </>
      );
    }

export default CardsSection