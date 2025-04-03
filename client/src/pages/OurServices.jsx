import React from 'react';
import { FaLock, FaChartLine, FaExchangeAlt } from 'react-icons/fa';

function OurServices() {
    return (
        <div className="bg-gradient-to-b from-gray-50 to-gray-200 py-20 px-6 md:px-12 lg:px-24 text-gray-800">
            <h1 className="text-5xl font-extrabold text-gray-900 text-center mb-8">
                Our Services
            </h1>
            <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-12">
                Grevion provides innovative solutions for SPOCs and power plants to facilitate seamless energy trading. 
                Our services ensure efficiency, reliability, and sustainability in the energy market.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-2xl p-8 text-center transition-transform transform hover:scale-105 hover:shadow-xl"
                    >
                        <div className="flex justify-center mb-4">
                            {service.icon}
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h2>
                        <p className="text-gray-600">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

const services = [
    {
        title: "Secure Transactions",
        description: "Ensuring safe and transparent energy trading with secure payment gateways.",
        icon: <FaLock className="text-blue-500 text-5xl" />,
    },
    {
        title: "Real-Time Insights",
        description: "Providing live data analytics to help stakeholders make informed decisions.",
        icon: <FaChartLine className="text-green-500 text-5xl" />,
    },
    {
        title: "Smart Matching",
        description: "Connecting SPOCs with the right power plants based on demand and supply.",
        icon: <FaExchangeAlt className="text-purple-500 text-5xl" />,
    },
];

export default OurServices;
