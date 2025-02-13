import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useContext } from "react";
import DarkModeContext from "../context/DarkModeContext";
import leetcodeLogo from "../assets/leetcode.png";

const Footer = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div
      className={`py-6 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="md:max-w-screen-lg mx-auto text-center">
        <p className="text-sm mb-4">
          &copy; {new Date().getFullYear()} Jatin Dhamija. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 md:space-x-8 items-center">
          <a
            href="mailto:jatindhamija025@gmail.com"
            className="hover:text-blue-500 transform transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <FaEnvelope size={24} />
          </a>
          <a
            href="https://github.com/JatinDhamija816"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transform transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/jatin-dhamija-971309252"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transform transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://leetcode.com/u/jatindhamija025/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transform transition-all duration-300 hover:scale-110"
            aria-label="LeetCode"
          >
            <img src={leetcodeLogo} alt="LeetCode" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
