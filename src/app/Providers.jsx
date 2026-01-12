import React from "react";
import { ThemeProvider } from "../context/themeContext/ThemeProvider";
import { FavouriteProvider } from "../context/favouriteContext/favouriteProvider";

const Providers = ({ children }) => {
  return (
    <ThemeProvider>*
      <FavouriteProvider> {children}</FavouriteProvider>
    </ThemeProvider>
  );
};

export default Providers;
