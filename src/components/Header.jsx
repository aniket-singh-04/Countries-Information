import { useState } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className="shadow-[0_2px_4px_0_rgba(0,0,0,0.1)] px-6 bg-white sticky top-0 z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h2 className="font-extrabold text-2xl m-3">
          <a href="/">Where in the World?</a>
        </h2>
        <button
          onClick={toggleMode}
          className="flex items-center gap-2 text-sm font-medium cursor-pointer"
        >
          <i className={darkMode ? "fa-solid fa-sun" : "fa-solid fa-moon"} />
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </header>
  );
}
