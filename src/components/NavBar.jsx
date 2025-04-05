import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../logo.png';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchTerm.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
    }
  };

  return (
<nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md backdrop-blur bg-opacity-90">
  <div className="container mx-auto px-4 flex justify-between items-center h-16">

    {/* Logo and Title */}
    <Link to="/" className="flex items-center space-x-2">
      <img
        src={logo}
        alt="Logo"
        className="h-10 w-10 object-cover rounded-full border-2 border-blue-400"
      />
      <h3 className="text-2xl font-extrabold text-blue-700 tracking-wide hover:text-purple-500 transition">
        SkillBridge
      </h3>
    </Link>

    {/* Search Bar */}
    <div className="hidden md:flex mx-4 flex-1 max-w-md">
      <input
        type="text"
        placeholder="Search skills or profiles..."
        className="w-full px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleSearch}
      />
    </div>

    {/* Desktop Navigation */}
    <div className="hidden md:flex space-x-3 font-semibold text-gray-700 items-center">
      <Link to="/" className="hover:text-blue-600 hover:underline transition">Home</Link>
      <Link to="/Profile" className="hover:text-blue-600 hover:underline transition">Profiles</Link>
      <Link to="/ContactUs" className="hover:text-blue-600 hover:underline transition">Contact</Link>
      <Link to="/About" className="hover:text-blue-600 hover:underline transition">About</Link>
      <Link to="/ChatPage" className="hover:text-blue-600 hover:underline transition">Messages</Link>
      <Link
        to="/Login"
        className="bg-gradient-to-r from-green-400 to-teal-500 text-white px-4 py-2 rounded-full hover:opacity-90 transition"
      >
        Login
      </Link>
      <Link
        to="/SignUp"
        className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-full hover:opacity-90 transition"
      >
        Sign Up
      </Link>
    </div>

    {/* Hamburger Icon for Mobile */}
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-2xl text-gray-800 hover:text-blue-600"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  {isOpen && (
    <div className="md:hidden bg-white px-6 py-4 flex flex-col space-y-4 text-center shadow-md">
      <Link to="/" className="text-lg font-medium hover:text-blue-500">Home</Link>
      <Link to="/Profile" className="text-lg font-medium hover:text-blue-500">Profiles</Link>
      <Link to="/ContactUs" className="text-lg font-medium hover:text-blue-500">Contact</Link>
      <Link to="/About" className="text-lg font-medium hover:text-blue-500">About</Link>
      <Link to="/ChatPage" className="text-lg font-medium hover:text-blue-500">Messages</Link>
      <Link
        to="/Login"
        className="bg-green-400 text-white py-2 rounded-full hover:opacity-90"
      >
        Login
      </Link>
      <Link
        to="/SignUp"
        className="bg-pink-500 text-white py-2 rounded-full hover:opacity-90"
      >
        Sign Up
      </Link>
    </div>
  )}
</nav>

  );
};

export default NavBar;
