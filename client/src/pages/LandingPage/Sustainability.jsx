import React from "react";
import { FaLeaf, FaCloud, FaRecycle } from "react-icons/fa";

function Sustainability() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white py-16 px-6 md:px-12 lg:px-24 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6 uppercase tracking-wide">
          Sustainability & Parali Management
        </h2>
        <p className="text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto">
          The improper handling of <span className="font-semibold text-blue-600">parali</span> (crop residue) has led to severe environmental issues,
          including hazardous air pollution. By enabling a structured and sustainable marketplace for
          parali sales, <span className="font-semibold text-blue-600">Grevion</span> aims to reduce pollution, promote responsible disposal, and
          encourage eco-friendly utilization.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 mt-12">
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 text-center">
          <FaCloud className="text-4xl text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-3">Delhi Pollution Crisis</h3>
          <p className="text-gray-700">
            Stubble burning in neighboring states has been a major contributor to Delhi’s
            hazardous air quality. Our platform provides a sustainable alternative by facilitating
            responsible parali trade.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 text-center">
          <FaRecycle className="text-4xl text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-3">Unutilized Biomass Waste</h3>
          <p className="text-gray-700">
            Millions of tons of parali go to waste or are burnt, worsening global warming. By selling
            parali for biofuel or sustainable applications, farmers can turn waste into wealth.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 text-center">
          <FaLeaf className="text-4xl text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-3">Eco-Friendly Solutions</h3>
          <p className="text-gray-700">
            Grevion connects suppliers with industries that repurpose parali into bioenergy, paper,
            and organic fertilizers, reducing environmental impact and fostering green innovation.
          </p>
        </div>
      </div>

      
    </section>
  );
}

export default Sustainability;