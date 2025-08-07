import { useEffect, useState, useRef } from "react";

function DarkModeToggle({ isDarkMode, toggleDarkMode, buttonRef }) {
  return (
    <button
      ref={buttonRef}
      onClick={toggleDarkMode}
      aria-label="Toggle Dark Mode"
      className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-green-600 dark:hover:text-green-400 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 rounded"
    >
      <div className="relative w-6 h-6">
        {/* Moon Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`absolute inset-0 w-6 h-6 transform transition-all duration-300 ease-in-out ${isDarkMode ? "opacity-0 scale-90" : "opacity-100 scale-100"}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
        </svg>

        {/* Sun Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`absolute inset-0 w-6 h-6 transform transition-all duration-300 ease-in-out ${isDarkMode ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.36 6.36l-1.41-1.41M7.05 7.05L5.64 5.64m12.73 0L18.36 7.05M7.05 16.95l-1.41 1.41" />
        </svg>
      </div>
    </button>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("Home");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const darkToggleRef = useRef(null);

  // Set theme from localStorage or system preference
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const activeDark = storedTheme === "dark" || (!storedTheme && prefersDark);
    setIsDarkMode(activeDark);
    document.documentElement.classList.toggle("dark", activeDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newMode);
  };

  useEffect(() => {
    // Close menu on outside click
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target) &&
        darkToggleRef.current &&
        !darkToggleRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    // Close mobile menu on resize to desktop
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Lock scroll when mobile menu is open
    document.body.classList.toggle("overflow-hidden", isOpen);
  }, [isOpen]);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50 transition-all dark:bg-gray-900 dark:text-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-green-600 text-white font-bold rounded-full flex items-center justify-center shadow text-lg" aria-label="Health Plus logo">H+</div>
          <h1 className="text-2xl font-extrabold text-green-700 dark:text-green-400 tracking-wide">Health Plus</h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setCurrentPage(item.name)}
              className={`relative group font-medium transition duration-300 ${
                currentPage === item.name
                  ? "text-green-600 font-semibold dark:text-green-400"
                  : "text-gray-700 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
              }`}
            >
              {item.name}
            </a>
          ))}
          <a href="#book" className="ml-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">Book Now</a>
          <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} buttonRef={darkToggleRef} />
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} buttonRef={darkToggleRef} />
          <button
            ref={hamburgerRef}
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 flex flex-col justify-center items-center relative focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 rounded"
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <span className={`absolute w-6 h-0.5 bg-current transform transition duration-300 ${isOpen ? "rotate-45" : "-translate-y-2"}`}></span>
            <span className={`absolute w-6 h-0.5 bg-current transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
            <span className={`absolute w-6 h-0.5 bg-current transform transition duration-300 ${isOpen ? "-rotate-45" : "translate-y-2"}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`md:hidden fixed top-16 left-0 w-full bg-white dark:bg-gray-900 shadow transition-all duration-300 ease-in-out z-40 transform ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-4 px-6 py-4" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => {
                setCurrentPage(item.name);
                setIsOpen(false);
              }}
              className={`text-base font-medium transition ${
                currentPage === item.name
                  ? "text-green-600 dark:text-green-400"
                  : "text-gray-700 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
              }`}
            >
              {item.name}
            </a>
          ))}
          <a href="#book" onClick={() => setIsOpen(false)} className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">Book Now</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
