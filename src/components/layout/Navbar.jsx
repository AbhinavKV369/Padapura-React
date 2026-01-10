import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../context/themeContext/UseTheme";

const Navbar = () => {
  const { handleThemeToggle } = useTheme();
  return (
    <nav>
      <NavLink to="/" end> Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <NavLink to="/search">Search</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
      <button onClick={handleThemeToggle}>C</button>
    </nav>
  );
};

export default Navbar;
