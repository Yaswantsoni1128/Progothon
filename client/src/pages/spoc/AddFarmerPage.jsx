import React, { useState } from "react";
import axios from "axios";
import addFarmerBg from '../../assets/addFarmer.jpg'

const AddFarmerPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    totalParali: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const token = localStorage.getItem("token"); 

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/spoc/addFarmer`, 
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        setMessage("Farmer added successfully!");
        setFormData({ name: "", phone: "", email: "", totalParali: "" }); // Reset form
      } else {
        setError(response.data.message || "Something went wrong.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Failed to add farmer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-10 bg-gray-100 flex justify-center items-center bg-[url('/src/assets/addFarmer.jpg')] bg-cover">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[80%] max-w-lg bg-opacity-80">
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">Add Farmer</h2>

        {message && <p className="text-green-600 text-center">{message}</p>}
        {error && <p className="text-red-600 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-bold">Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold">Phone</label>
            <input
              type="text"
              placeholder="+91"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold">Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold">Total Parali</label>
            <input
              type="number"
              name="totalParali"
              value={formData.totalParali}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition duration-300"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddFarmerPage;
