import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import DarkModeContext from "./DarkModeContext";

export const DarkModeProvider = ({ children }) => {
  // Load dark mode preference from localStorage or default to false
  const [darkMode, setDarkMode] = useState(() => {
    const savedPreference = localStorage.getItem("darkMode");
    return savedPreference ? JSON.parse(savedPreference) : false;
  });

  // Update localStorage whenever dark mode state changes
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

DarkModeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
