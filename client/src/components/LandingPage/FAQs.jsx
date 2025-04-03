import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "How does Grevion connect SPOCs and power plants?",
    answer:
      "Grevion provides a secure and reliable platform where SPOCs and power plants can register, communicate, and establish energy trading partnerships.",
  },
  {
    question: "What is Paralis and how does Grevion facilitate its trading?",
    answer:
      "Paralis is an innovative energy commodity, and Grevion enables seamless trading through transparent and efficient transaction management.",
  },
  {
    question: "How secure is my data on Grevion?",
    answer:
      "Grevion implements industry-standard security protocols to safeguard your data from unauthorized access and breaches.",
  },
  {
    question: "Can I track transaction history on Grevion?",
    answer:
      "Yes, you can view and manage your complete transaction history within the dashboard.",
  },
  {
    question: "What customer support options are available?",
    answer:
      "Our support team is available 24/7 via chat, email, and phone to assist you with any inquiries.",
  },
  {
    question: "Is there a fee for using Grevion?",
    answer:
      "Grevion offers flexible pricing plans based on your usage, with a free trial to get started.",
  },
  {
    question: "How do I become a registered user on Grevion?",
    answer:
      "Simply sign up on the platform, complete your profile, and start exploring the features.",
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="px-6 md:px-20 py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-700 mt-3">
            Have more questions? Contact our support team for assistance.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white shadow-lg rounded-2xl p-5 border-l-8 transition duration-300 ${
                activeIndex === index ? "border-green-600" : "border-green-600"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left focus:outline-none"
              >
                <h3
                  className={`text-lg md:text-xl font-medium ${
                    activeIndex === index ? "text-green-600" : "text-gray-900"
                  }`}
                >
                  {faq.question}
                </h3>
                {activeIndex === index ? (
                  <FaChevronUp className="text-green-600 transition-transform transform rotate-180" />
                ) : (
                  <FaChevronDown className="text-green-600 transition-transform transform rotate-0" />
                )}
              </button>
              {activeIndex === index && (
                <p className="mt-3 text-gray-700 text-sm md:text-base">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
