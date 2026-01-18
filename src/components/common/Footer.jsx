import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-bg-secondary text-text mt-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-8">
        {/* Branding */}
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-extrabold text-accent tracking-wide">
            PADAPURA
          </h1>
          <p className="text-text/70 max-w-sm">
            Your ultimate movie trailer streaming platform. Watch the latest
            trailers, discover new movies, and never miss out!
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row gap-6 md:gap-12">
          <div className="flex flex-col gap-2">
            <h3 className="text-text/80 font-semibold uppercase text-sm">
              Explore
            </h3>
            <a href="/" className="hover:text-accent transition">
              Home
            </a>
            <a href="/movies" className="hover:text-accent transition">
              Movies
            </a>
            <a href="/search" className="hover:text-accent transition">
              Search
            </a>
            <a href="/favorites" className="hover:text-accent transition">
              Favorites
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-text/80 font-semibold uppercase text-sm">
              Follow Us
            </h3>
            <div className="flex gap-4 mt-1">
              <a
                href="#"
                className="text-text/70 hover:text-accent transition text-lg">
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-text/70 hover:text-accent transition text-lg">
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-text/70 hover:text-accent transition text-lg">
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-text/70 hover:text-accent transition text-lg">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal / Copyright */}
      <div className="border-t border-white/10 mt-6">
        <div className="max-w-7xl mx-auto px-6 py-4 text-text/50 text-sm text-center">
          &copy; {new Date().getFullYear()} Padapura. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
