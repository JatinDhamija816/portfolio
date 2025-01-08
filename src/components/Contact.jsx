import { useState, useContext } from "react";
import DarkModeContext from "../context/DarkModeContext";

const Contact = () => {
  const { darkMode } = useContext(DarkModeContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div
      id="contact"
      className={`min-h-screen flex items-center justify-center ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } `}
    >
      <div className="py-10 px-7 w-full md:max-w-screen-sm">
        <p className="text-2xl font-semibold py-10 underline">Contact Me</p>
        <form
          action="https://getform.io/f/paqgxooa"
          method="POST"
          className="space-y-6 "
        >
          <div className="">
            <label className="block mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className={`input ${
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
              className={`input ${
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
              className={`input ${
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
              className="border w-3/4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
