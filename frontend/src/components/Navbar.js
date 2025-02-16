import React, { useState } from "react";
import { Heart, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // You can define your links in an array. 
  // Notice `external: true` for the AI Health Guide link.
  const desktopLinks = [
    { to: "/", text: "Home", external: false },
    { to: "/tracker", text: "Cycle Tracker", external: false },
    {
      to: "https://hercareai.streamlit.app/",
      text: "AI Health Guide",
      external: true,
    },
    { to: "/consult-gynaec", text: "Consult a Gynaecologist", external: false },
    { to: "/pharmacy", text: "Find Pharmacy Nearby", external: false },
  ];

  // Similarly for mobile menu. You can add or remove links as needed.
  const mobileLinks = [
    { to: "/", text: "Home", external: false },
    { to: "#about-us", text: "About Us", external: false },
    { to: "/tracker", text: "Cycle Tracker", external: false },
    {
      to: "https://hercareai.streamlit.app/",
      text: "AI Health Guide",
      external: true,
    },
    { to: "/consult-gynaec", text: "Consult a Gynaecologist", external: false },
    { to: "/pharmacy", text: "Find Pharmacy Nearby", external: false },
    { to: "/nearest-gynaec", text: "Find Gynaecologist Nearby", external: false },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-pink-500 to-purple-500 text-white z-50 border-b shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center cursor-pointer">
            <Heart className="h-8 w-8 text-white" />
            <span className="ml-2 text-xl font-bold">HerCare</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {desktopLinks.map((link) =>
              link.external ? (
                <a
                  key={link.text}
                  href={link.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline transition duration-300"
                >
                  {link.text}
                </a>
              ) : (
                <Link
                  key={link.text}
                  to={link.to}
                  className="text-white hover:underline transition duration-300"
                >
                  {link.text}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className="h-8 w-8 text-white" />
              ) : (
                <Menu className="h-8 w-8 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-purple-600 text-white p-4 space-y-4">
            {mobileLinks.map((link) =>
              link.external ? (
                <a
                  key={link.text}
                  href={link.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white hover:bg-pink-500 p-2 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {link.text}
                </a>
              ) : (
                <Link
                  key={link.text}
                  to={link.to}
                  className="block text-white hover:bg-pink-500 p-2 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {link.text}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
