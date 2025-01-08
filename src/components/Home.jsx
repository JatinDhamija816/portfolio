import { useContext } from "react";
import DarkModeContext from "../context/DarkModeContext";

const Home = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div
      id="home"
      className={`min-h-screen flex items-center justify-center  ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="p-10 text-center space-y-6">
        <p className="text-5xl font-bold">Jatin Dhamija</p>
        <p className="text-xl ">Full Stack Developer</p>

        <p className="text-lg max-w-2xl mx-auto">
          Building dynamic web and mobile solutions that blend design,
          performance, and scalability. I thrive on turning complex problems
          into clean, user-friendly experiences using the latest technologies.
        </p>
      </div>
    </div>
  );
};

export default Home;
