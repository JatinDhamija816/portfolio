import { useContext, useState } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-scroll";
import DarkModeContext from "../context/DarkModeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "experience" },
    { id: 4, link: "projects" },
    { id: 5, link: "skills" },
    // { id: 6, link: "certificate" },
    { id: 7, link: "education" },
    { id: 8, link: "contact" },
  ];

  return (
    <div
      className={`fixed w-full z-50 ${
        darkMode ? "bg-black text-white shadow-white" : "bg-white text-black "
      } transition-colors duration-500 shadow-md`}
    >
      <div className="px-5 py-4 flex justify-between items-center">
        <div>
          <Link to="home" smooth duration={500}>
            <p className="text-4xl font-mono hover:italic transition">JD</p>
          </Link>
        </div>

        <div
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none md:hidden cursor-pointer"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        <ul className="hidden md:flex space-x-6">
          {links.map((link) => (
            <li
              key={link.id}
              className="rounded-md px-2 py-2 transition cursor-pointer"
            >
              <Link to={link.link} smooth duration={500}>
                <p className="uppercase border-b-2">{link.link}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <div
          className={`md:hidden px-6 py-4 shadow-lg space-y-4 flex flex-col items-center justify-center h-full ${
            darkMode ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          {links.map((item) => (
            <div
              key={item.id}
              className="flex items-center rounded-md px-4 py-2 transition cursor-pointer justify-center"
            >
              <Link to={item.link} smooth duration={500}>
                <p
                  onClick={() => setIsOpen(false)}
                  className="uppercase border-b-2"
                >
                  {item.link}
                </p>
              </Link>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`fixed top-20 right-4 p-3 rounded-full shadow-lg transition-transform transform hover:scale-110 focus:outline-none ${
          darkMode ? "bg-black" : "bg-white"
        } `}
      >
        {darkMode ? (
          <FaSun size={20} className="text-yellow-400" />
        ) : (
          <FaMoon size={20} className="text-blue-500" />
        )}
      </button>
    </div>
  );
};

export default Navbar;
