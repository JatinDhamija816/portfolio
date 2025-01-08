import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useContext } from "react";
import DarkModeContext from "../context/DarkModeContext";
import leetcodeLogo from "../assets/leetcode.png";

const Footer = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div
      className={`py-6  ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } `}
    >
      <div className="md:max-w-screen-lg mx-auto text-center ">
        <p className="text-sm mb-4">
          &copy; {new Date().getFullYear()} Jatin Dhamija. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="mailto:jatindhamija025@gmail.com"
            className="hover:text-blue-500 transition"
          >
            <FaEnvelope size={24} />
          </a>
          <a
            href="https://github.com/JatinDhamija816"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/jatin-dhamija-971309252"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://leetcode.com/u/jatindhamija025/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <img src={leetcodeLogo} alt="LeetCode" className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
