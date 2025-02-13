import { useState, useContext } from "react";
import DarkModeContext from "../context/DarkModeContext";

const Contact = () => {
  const { darkMode } = useContext(DarkModeContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // For success/error message after form submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can add custom form validation here if needed

    try {
      const response = await fetch("https://getform.io/f/paqgxooa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form fields
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
      className={`min-h-screen flex items-center justify-center ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } `}
    >
      <div className="py-10 px-7 w-full md:max-w-screen-sm">
        <p className="text-2xl font-semibold py-10 underline text-center">
          Contact Me
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className={`input p-2 rounded-md w-full ${
                darkMode
                  ? "bg-black text-white focus:ring-white"
                  : "bg-white text-black border-black focus:ring-black"
              }`}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block mb-2" htmlFor="email">
              Your Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className={`input p-2 rounded-md w-full ${
                darkMode
                  ? "bg-black text-white focus:ring-white"
                  : "bg-white text-black border-black focus:ring-black"
              }`}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block mb-2" htmlFor="message">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              className={`input p-2 rounded-md w-full ${
                darkMode
                  ? "bg-black text-white focus:ring-white"
                  : "bg-white text-black border-black focus:ring-black"
              }`}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="border w-3/4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-all duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </form>

        {status && (
          <div
            className={`mt-6 text-center ${
              status.includes("success") ? "text-green-500" : "text-red-500"
            }`}
          >
            <p>{status}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
