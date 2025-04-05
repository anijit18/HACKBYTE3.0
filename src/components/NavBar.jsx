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
    <nav className="fixed m-4 top-0 right-0 left-0 shadow-lg z-50 bg-white">
      <div className="container px-4 flex justify-between items-center h-16">

        {/* Logo and Title */}
        <a href="/" className="flex items-center space-x-2 cursor-pointer">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-10 object-cover rounded-full"
          />
          <h3 className="text-2xl font-bold">Gravitons</h3>
        </a>

        {/* Search bar */}
        <div className="hidden md:flex mx-4 flex-1 max-w-md">
          <input
            type="text"
            placeholder="Search skills or profiles..."
            className="w-full border rounded-full px-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4 text-l font-bold items-center">
  <Link to='/' className="px-6 py-2 hover:bg-teal-600 hover:text-white">Home</Link>
  <Link to="/Profile" className="px-6 py-2 hover:bg-teal-600 hover:text-white">Profiles</Link>
  <Link to="/ContactUs" className="px-6 py-2 hover:bg-teal-600 hover:text-white">Contact Us</Link>
  <Link to="/About" className="px-6 py-2 hover:bg-teal-600 hover:text-white">About Us</Link>
  <Link to="/ChatPage" className="px-6 py-2 hover:bg-teal-600 hover:text-white">Messages</Link>
  <Link to="/Login" className="px-6 py-2 bg-gray-300 hover:bg-green-300 hover:text-white">Login</Link>
  <Link to="/SignUp" className="px-6 py-2 bg-gray-300 hover:bg-red-300 hover:text-white">SignUp</Link>
</div>


        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex space-y-6 py-4 flex-col bg-white items-center">
            <Link to='/' className="px-6 py-2 hover:bg-gray-600 hover:text-white text-4xl">HOME</Link>
            <Link to="/Profiles" className="px-6 py-2 hover:bg-gray-600 hover:text-white">Profiles</Link>
            <Link to="/ContactUs" className="px-6 py-2 hover:bg-gray-600 hover:text-white">Contact Us</Link>
            <Link to="/About" className="px-6 py-2 hover:bg-gray-600 hover:text-white">About Us</Link>
            <Link to="/Login" className="py-2 px-6 border bg-green-300">Login</Link>
            <Link to="/SignUp" className="py-2 px-6 border bg-green-300">SignUp</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
