import React from "react";

function WhatWeDo() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-16 px-6 md:px-12 lg:px-24 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6 uppercase tracking-wide">What We Do?</h2>
        <p className="text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto">
          <span className="font-semibold text-blue-600">Grevion</span> simplifies energy trading by providing an innovative
          platform that connects SPOCs and power plants. Our technology-driven approach
          ensures seamless transactions, transparency, and efficiency in buying and selling
          <span className="font-semibold text-blue-600 "> paralis</span>.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 mt-12">
        <div className="bg-white p-6 rounded-2xl shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-xl border-t-4 border-yellow-400">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Seamless Connections</h3>
          <p className="text-gray-700">
            We bridge the gap between SPOCs and power plants, making energy trading effortless
            and reliable.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-xl border-t-4 border-green-500">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure Transactions</h3>
          <p className="text-gray-700">
            Our platform ensures secure and transparent transactions, minimizing risks and
            enhancing trust.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-xl border-t-4 border-blue-500">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Efficient Trading</h3>
          <p className="text-gray-700">
            Advanced automation and smart algorithms streamline the trading process for
            maximum efficiency.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
