import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../context/themeContext/UseTheme";
import { FaMoon, FaSun, FaHeart, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { handleThemeToggle, theme } = useTheme();
  const [mobileMenu, setMobileMenu] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `relative px-2 py-1 text-sm font-medium transition-all duration-300
     ${isActive ? "text-text" : "text-text/70 hover:text-text hover:scale-105"}
     after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:rounded-full
     after:bg-accent after:transition-all after:duration-300
     ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-bg/70 backdrop-blur-lg border-b border-white/5 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-extrabold tracking-wider text-accent hover:text-accent/80 transition relative">
          PADAPURA
          <span className="absolute -bottom-1 left-0 w-2 h-2 bg-accent rounded-full animate-bounce"></span>
        </NavLink>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/movies" className={navLinkClass}>
            Movies
          </NavLink>
          <NavLink to="/search" className={navLinkClass}>
            Search
          </NavLink>
          <NavLink to="/favorites" className={navLinkClass}>
            Favorites
          </NavLink>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Favorites Icon */}
          <NavLink
            to="/favorites"
            className="text-text/70 hover:text-accent transition text-lg">
            <FaHeart />
          </NavLink>

          {/* Theme Toggle */}
          <button
            onClick={handleThemeToggle}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-surface text-text/70 hover:text-text hover:bg-surface/80 transition shadow-md"
            title="Toggle theme">
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center bg-surface rounded-full text-text/70 hover:text-text hover:bg-surface/80 transition shadow-md"
            onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-bg/90 backdrop-blur-lg px-6 py-4 flex flex-col gap-4 border-t border-white/5">
          <NavLink
            to="/"
            end
            className={navLinkClass}
            onClick={() => setMobileMenu(false)}>
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={navLinkClass}
            onClick={() => setMobileMenu(false)}>
            Movies
          </NavLink>
          <NavLink
            to="/search"
            className={navLinkClass}
            onClick={() => setMobileMenu(false)}>
            Search
          </NavLink>
          <NavLink
            to="/favorites"
            className={navLinkClass}
            onClick={() => setMobileMenu(false)}>
            Favorites
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
