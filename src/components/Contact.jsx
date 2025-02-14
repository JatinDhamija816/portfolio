import { useState, useContext } from "react";
import DarkModeContext from "../context/DarkModeContext";
import { motion } from "framer-motion";

const Contact = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://getform.io/f/paqgxooa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div
      id="contact"
      className={`min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white"
          : "bg-gradient-to-br from-blue-200 via-white to-blue-200 text-gray-900"
      }`}
    >
      <motion.div
        className={`w-full max-w-lg p-8 rounded-2xl shadow-xl backdrop-blur-md ${
          darkMode
            ? "bg-gray-800/60 shadow-white/10"
            : "bg-white/80 shadow-gray-400/30"
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <label
              className="block mb-1 text-md font-medium text-left"
              htmlFor="name"
            >
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className={`w-full px-4 py-3 rounded-lg outline-none transition-all focus:ring-2 ${
                darkMode
                  ? "bg-gray-700 text-white focus:ring-blue-400"
                  : "bg-gray-200 text-gray-900 focus:ring-blue-600"
              }`}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative">
            <label
              className="block mb-1 text-md font-medium text-left"
              htmlFor="email"
            >
              Your Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className={`w-full px-4 py-3 rounded-lg outline-none transition-all focus:ring-2 ${
                darkMode
                  ? "bg-gray-700 text-white focus:ring-blue-400"
                  : "bg-gray-200 text-gray-900 focus:ring-blue-600"
              }`}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative">
            <label
              className="block mb-1 text-md font-medium text-left"
              htmlFor="message"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className={`w-full px-4 py-3 rounded-lg outline-none transition-all focus:ring-2 resize-none ${
                darkMode
                  ? "bg-gray-700 text-white focus:ring-blue-400"
                  : "bg-gray-200 text-gray-900 focus:ring-blue-600"
              }`}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full py-3 mt-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>

        {/* Status Message */}
        {status && (
          <motion.div
            className={`mt-4 text-center text-lg font-medium ${
              status.includes("success") ? "text-green-500" : "text-red-500"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {status}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Contact;
