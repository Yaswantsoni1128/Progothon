import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import yashImage from "../assets/yash1.jpg"
import srishImage from "../assets/srish.jpg"
import snehaImage from "../assets/sneha1.jpg"

function ContactUs() {
    return (
        <div className="bg-gradient-to-b from-blue-50 to-blue-100 py-16 px-6">
            <h1 className="text-5xl font-extrabold text-gray-900 text-center mb-8">
                Contact Us
            </h1>
            <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-20">
                Get in touch with Grevion for inquiries, support, or partnership opportunities. 
                We are here to assist you in making energy trading seamless and efficient.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto mt-5">
                {/* Contact Details */}
                <div className="bg-white p-8 rounded-2xl shadow-lg text-center relative">
                <img src={srishImage} alt="" className="w-24 h-24 rounded-full absolute text-center -top-14 left-20 object-fit"/>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-5">Srishti</h2>
                    <div className="space-y-4">
                        <p className="flex items-center justify-center gap-3 text-gray-700">
                            <FaEnvelope className="text-blue-600 text-lg" />
                            23252@iiitu.ac.in
                        </p>
                        <p className="flex items-center justify-center gap-3 text-gray-700">
                            <FaPhone className="text-green-600 text-lg" />
                            ++917206032634
                        </p>
                        <p className="flex items-center justify-center gap-3 text-gray-700">
                            <FaMapMarkerAlt className="text-red-600 text-lg" />
                            IIIT Una, Saloh , Una(H.P.)
                        </p>
                    </div>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg text-center relative">
                <img src={snehaImage} alt="" className="w-24 h-24 rounded-full absolute text-center -top-14 left-20 object-fit"/>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-5">Sneha</h2>
                    <div className="space-y-4">
                        <p className="flex items-center justify-center gap-3 text-gray-700">
                            <FaEnvelope className="text-blue-600 text-lg" />
                            23156@iiitu.ac.in
                        </p>
                        <p className="flex items-center justify-center gap-3 text-gray-700">
                            <FaPhone className="text-green-600 text-lg" />
                            +918235090925
                        </p>
                        <p className="flex items-center justify-center gap-3 text-gray-700">
                            <FaMapMarkerAlt className="text-red-600 text-lg" />
                            IIIT Una, Saloh , Una(H.P.)
                        </p>
                    </div>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg text-center relative">
                    <img src={yashImage} alt="" className="w-24 h-24 rounded-full absolute text-center -top-14 left-20 object-fit"/>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-5">Yaswant</h2>
                    <div className="space-y-4">
                        <p className="flex items-center justify-center gap-3 text-gray-700">
                            <FaEnvelope className="text-blue-600 text-lg" />
                            23261@iiitu.ac.in
                        </p>
                        <p className="flex items-center justify-center gap-3 text-gray-700">
                            <FaPhone className="text-green-600 text-lg" />
                            +918003999085
                        </p>
                        <p className="flex items-center justify-center gap-3 text-gray-700">
                            <FaMapMarkerAlt className="text-red-600 text-lg" />
                            IIIT Una, Saloh , Una(H.P.)
                        </p>
                    </div>
                </div>

                
            </div>
        </div>
    );
}

export default ContactUs;
