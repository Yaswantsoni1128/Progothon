import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ordersImg from "../../assets/orders.jpg";

const MyOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();

  const firstCharacterUpperCase = (word) =>
    word ? word.charAt(0).toUpperCase() + word.slice(1) : "";

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Error: Authentication token not found");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/v1/powerplant/getAllOrders`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setOrders(Array.isArray(response.data.orders) ? response.data.orders : []);
      } catch (error) {
        setError(
          error.response
            ? `Error: ${error.response.status} - ${
                error.response.data.message || "Something went wrong"
              }`
            : "Error: No response from server"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const filteredOrders = orders.filter((order) =>
    filter === "all" ? true : order.status === filter
  );

  return (
    <div className="flex flex-col gap-10 items-center bg-gray-100">
      {/* Header Image */}
      <div className="relative w-full">
        <img
          src={ordersImg}
          className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover brightness-75"
          alt="Orders"
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-center uppercase">
          My Orders
        </h1>
      </div>

      {/* Order Status */}
      {loading ? (
        <p className="text-lg font-semibold text-gray-600">Loading orders...</p>
      ) : error ? (
        <p className="text-lg font-semibold text-red-600">{error}</p>
      ) : (
        <div className="w-full p-4">
          {orders.length === 0 ? (
            <p className="text-lg font-semibold text-gray-600">No orders found.</p>
          ) : (
            <div className="w-full m-auto">
              {/* Filter Buttons */}
              <div className="w-[90%] max-w-4xl mx-auto flex justify-between items-center px-4 py-3 bg-green-900/85 backdrop-blur-md rounded-full shadow-xl border border-green-600 mb-6">
                {["all", "pending", "accepted", "rejected"].map((status) => (
                  <button
                    key={status}
                    className={`relative px-6 py-2 font-semibold transition-all duration-300 rounded-full text-sm sm:text-base tracking-wide uppercase ${
                      filter === status
                        ? "bg-white text-green-900 shadow-lg scale-105"
                        : "bg-transparent text-white border border-white hover:bg-white hover:text-green-900 hover:scale-110 hover:shadow-md"
                    }`}
                    onClick={() => setFilter(status)}
                  >
                    {firstCharacterUpperCase(status)} Orders
                  </button>
                ))}
              </div>

              {/* Orders Grid */}
              <div className="flex flex-wrap justify-center p-6 gap-6">
                {filteredOrders.map((order) => (
                  <div key={order._id} className="relative w-80 transform transition duration-300 hover:scale-105">
                    {/* Order Name */}
                    <button className="bg-green-800 text-white rounded-xl p-1 w-[5.5rem] absolute -top-1 -left-1 shadow-lg text-md">
                      
                      {order.name}
                    </button>

                    {/* Order Card */}
                    <div
                      className={`relative flex flex-col gap-1 justify-center bg-white rounded-xl p-6 w-80  h-72`}
                      style={{
                        clipPath: "polygon(24% 15%, 35% 0, 100% 0, 100% 100%, 0 100%, 0 15%)",
                      }}
                    >
                      <h3 className="text-md mt-4 text-gray-700">
                        <strong>Order ID:</strong>
                        <span className="text-sm font-normal p-1 rounded-xl text-gray-700">
                          {order._id}
                        </span>
                      </h3>
                      <p className="text-md text-gray-700">
                        <strong>Requested Parali:</strong> {order.requestedParali} tons
                      </p>
                      <p className="text-md text-gray-700">
                        <strong>Total Price:</strong> ₹{order.totalPrice}
                      </p>
                      <p className="text-md text-gray-700">
                        <strong>Deliver Within:</strong> {order.deliverWithin} days
                      </p>
                      <p className="text-md text-gray-700">
                        <strong>Location:</strong> {firstCharacterUpperCase(order.location)}
                      </p>
                      <p
                        className={`text-md font-bold ${
                          order.status === "pending"
                            ? "text-yellow-600"
                            : order.status === "accepted"
                            ? "text-lime-600"
                            : "text-red-600"
                        }`}
                      >
                        <strong>Status:</strong> {firstCharacterUpperCase(order.status)}
                      </p>

                      {/* Proceed to Payment Button */}
                      {order.status === "accepted" && (
                        <button
                          onClick={() => navigate("/powerplant/payment")}
                          className="mt-3 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                        >
                          Proceed to Payment
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MyOrdersPage;
