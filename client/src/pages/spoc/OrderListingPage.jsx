import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ordersImg from "../../assets/orders.jpg";

const OrderRequests = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error , setError] = useState(null)

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      
  const token = localStorage.getItem("token");
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/v1/spoc/getAllRequests`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data.requests);
      if (response.data.success) {
        setOrders(response.data.requests || []);
      } else {
        setOrders([]);
        setError("Failed to fetch orders")
        toast.error(response.data.message || "Failed to fetch orders.");
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      setError("Error fetching orders")
      toast.error("Failed to fetch orders.");
    } finally {
      setLoading(false);
    }
  };

  const handleAccept = async (id) => {
    try {
      
  const token = localStorage.getItem("token");
      await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/spoc/acceptRequest/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Order Accepted!");
      fetchOrders();
    } catch (error) {
      console.error("Error accepting order:", error);
      toast.error("Failed to accept order.");
    }
  };

  const handleDecline = async (reqid) => {
    try {
      const token = localStorage.getItem("token");
      console.log("Token:", token); // Debugging
  
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/spoc/declineRequest/${reqid}`, 
        {},  // Send empty body
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      console.log("Decline response:", response.data); // Debugging
      toast.warn("Order Declined.");
      fetchOrders();
    } catch (error) {
      console.error("Error declining order:", error.response?.data || error);
      toast.error(error.response?.data?.message || "Failed to decline order.");
    }
  };
  
  
  return (
    <div className="flex flex-col gap-10 items-center bg-gray-100">
          <div className="relative w-full">
            <img
              src={ordersImg}
              className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover brightness-75"
              alt="Orders"
            />
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-center uppercase">
              All Requests
            </h1>
          </div>
    
          {loading ? (
            <p className="text-lg font-semibold text-gray-600">Loading orders...</p>
          ) : error ? (
            <p className="text-lg font-semibold text-red-600">{error}</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
              {orders.length === 0 ? (
                <p className="text-lg font-semibold text-gray-600 ">
                  No Requests found.
                </p>
              ) : (
                orders.map((order) => (
                  <div
                    key={order._id}
                    className="relative w-80 transform transition duration-300 hover:scale-105"
                  >
                    {/* Order Name Button Outside the Clipped Div */}
                    <button className="bg-green-800 text-white rounded-xl p-1 w-[5.5rem] absolute -top-1 -left-1 shadow-lg text-md">
                      {order.name}
                    </button>
    
                    {/* Clipped Order Card */}
                    <div
                      className="relative flex flex-col gap-1 justify-center bg-white rounded-xl p-6 w-80 h-56 "
                      style={{
                        clipPath:
                          "polygon(24% 15%, 35% 0, 100% 0, 100% 100%, 0 100%, 0 15%)",
                      }}
                    >
                      <h3 className="text-md mt-4 text-gray-700">
                        <strong>Order ID: </strong>
                        <span className="text-sm font-normal p-1 rounded-xl text-gray-700">
                          {order._id}
                        </span>
                      </h3>
                      <p className="text-md text-gray-700">
                        <strong>Requested Parali:</strong> {order.requestedParali}{" "}
                        tons
                      </p>
                      <p className="text-md text-gray-700">
                        <strong>Total Price:</strong> ₹{order.totalPrice}
                      </p>
                      <p className="text-md text-gray-700">
                        <strong>Deliver Within:</strong> {order.deliverWithin} days
                      </p>
                      <p className="text-md text-gray-700">
                        <strong>Location:</strong> {order.location}
                      </p>
                      <div className="flex justify-between">
                  <button
                    onClick={() => handleAccept(order._id)}
                    className="px-4 py-1 text-white bg-green-500 rounded-lg hover:bg-green-600"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleDecline(order._id)}
                    className="px-4 py-1 text-white bg-red-500 rounded-lg hover:bg-red-600"
                  >
                    Decline
                  </button>
                </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
  );
};

export default OrderRequests;
