import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../common/Navbar";
import Footer from "../common/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-bg text-text">
      {/* Navbar */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 px-6 sm:px-10 md:px-16 lg:px-20 mt-20">
        {/* mt-20 to offset fixed navbar height */}
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
