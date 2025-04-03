import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function ReviewSection() {
  return (
    <div className="bg-white text-black p-8 rounded-lg shadow-lg max-w-5xl mx-auto mt-12">
      <h2 className="text-2xl font-bold text-center">
        Benefits Gained from Using our <span className="text-green-600">Agridev</span> Solutions.
      </h2>
      
      <div className="flex flex-wrap justify-between mt-6">
        <div className="bg-gray-100 p-4 rounded-lg shadow w-full md:w-[48%] mb-4">
          <h3 className="font-bold">Increased Productivity</h3>
          <p className="text-sm text-gray-600">Leverage real-time insights for well-informed decisions & data-driven analysis.</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow w-full md:w-[48%] mb-4">
          <h3 className="font-bold">Cost Efficiency</h3>
          <p className="text-sm text-gray-600">Leverage real-time insights for well-informed decisions & data-driven analysis.</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow w-full md:w-[48%] mb-4">
          <h3 className="font-bold">Real-Time Monitoring</h3>
          <p className="text-sm text-gray-600">Leverage real-time insights for well-informed decisions & data-driven analysis.</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow w-full md:w-[48%] mb-4">
          <h3 className="font-bold">Real-Time Data</h3>
          <p className="text-sm text-gray-600">Leverage real-time insights for well-informed decisions & data-driven analysis.</p>
        </div>
      </div>
      
      <div className="flex justify-center mt-6">
        <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold flex items-center hover:bg-green-700 transition">
          More Service <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
}
