import React from "react";

function Blog() {
    const blogPosts = [
        {
            title: "The Future of Renewable Energy Trading",
            date: "March 25, 2025",
            summary: "Discover how platforms like Grevion are revolutionizing energy trading with secure and efficient transactions.",
            borderColor: "border-red-400"
        },
        {
            title: "How Paralis Can Boost Sustainability",
            date: "March 18, 2025",
            summary: "Learn about the impact of paralis in the energy sector and how they contribute to a greener future.",
            borderColor: "border-yellow-400"
        },
        {
            title: "Top Trends in Energy Market Digitalization",
            date: "March 10, 2025",
            summary: "Stay updated on the latest trends shaping the digital transformation of energy trading.",
            borderColor: "border-green-400"
        },
        {
            title: "Why Transparency Matters in Energy Trading",
            date: "March 5, 2025",
            summary: "Explore how transparency and trust are key factors in shaping a reliable energy marketplace.",
            borderColor: "border-blue-400"
        },
        {
            title: "The Role of AI in Renewable Energy Forecasting",
            date: "February 28, 2025",
            summary: "Understand how artificial intelligence is enhancing energy predictions and optimizing market strategies.",
            borderColor: "border-green-400"
        },
        {
            title: "Green Investments: The Future of Sustainable Energy",
            date: "February 20, 2025",
            summary: "Discover the financial incentives driving the shift towards sustainable energy sources.",
            borderColor: "border-red-400"
        }
    ];

    return (
        <div className="bg-gradient-to-b from-gray-50 to-gray-200 py-20 px-6 md:px-12 lg:px-24 text-gray-800">
            <h1 className="text-5xl font-extrabold text-gray-900 text-center mb-8">
                Our Blog
            </h1>
            <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-12">
                Stay informed with the latest insights, updates, and trends in the renewable energy market and paralis trading.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {blogPosts.map((post, index) => (
                    <div
                        key={index}
                        className={`bg-white rounded-2xl shadow-lg border-t-4 ${post.borderColor} p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl`}
                    >
                        <h2 className="text-2xl font-bold text-green-900 mb-3">{post.title}</h2>
                        <p className="text-gray-500 text-sm mb-3">{post.date}</p>
                        <p className="text-gray-700 mb-4">{post.summary}</p>
                        
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog;
