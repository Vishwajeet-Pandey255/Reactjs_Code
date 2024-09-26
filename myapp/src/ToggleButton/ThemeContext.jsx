import  { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import './App.css'; // Make sure your CSS file includes your styles

const ThemeContext = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedMode);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <h1>Dark Mode</h1>
      <button onClick={toggleMode} aria-label="Toggle mode">
        {isDarkMode ? (
          <i className="fas fa-sun"></i> // Font Awesome sun icon for light mode
        ) : (
          <i className="fas fa-moon"></i> // Font Awesome moon icon for dark mode
        )}
      </button>
    </div>
  );
};

export default ThemeContext;



