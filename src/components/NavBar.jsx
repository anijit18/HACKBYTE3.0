import React, { useState } from "react";
import {Link} from 'react-router-dom'
import{FaBars,FaTimes}from'react-icons/fa'

const NavBar = () => {
    const[isOpen, setIsOpen]=useState(false)
    return (
        <nav className="fixed m-4 top-0 right-0 left-0 shadow-lg z-50 bg-white">
            <div className="container px-4 flex justify-between items-center h-16" >


                <h3 className="text-2xl font-bold" image = "logo.jpg">Gravitons</h3>
                <div className="hidden md:flex space-x-4 text-sm font-bold items-center">
                    <Link to='/' className="px-6 py-2 hover:bg-gray-600 hover:text-white">HOME</Link>
                    <Link to="/Profiles" className="px-6 py-2 hover:bg-gray-600 hover:text-white">Profiles</Link>
                    <Link to="/Contact" className="px-6 py-2 hover:bg-gray-600 hover:text-white">Contact Us</Link>
                    <Link to="/About" className="px-6 py-2 hover:bg-gray-600 hover:text-white">About Us</Link>
                    <Link to="/Login" className="px-6 py-2 bg-gray-300 hover:bg-blue-600 hover:text-white">Login</Link>

                    {/* <button className="py-2 px-6 border bg-gray-300">Login</button> */}
                </div>
                <div className="md:hidden">
                    <button onclick={()=>setIsOpen(!isOpen)} >
                        {isOpen?<FaTimes/> : <FaBars/>}
                    </button>
                </div>
                {isOpen && (
                    <div className="md:hidden flex space-y-6 py-4 flex-col bg-white items-center">
                    <Link to='/' className="px-6 py-2 hover:bg-gray-600 hover:text-white">HOME</Link>
                    <Link to="/Profiles" className="px-6 py-2 hover:bg-gray-600 hover:text-white">Profiles</Link>
                    <Link to="ContactUs" className="px-6 py-2 hover:bg-gray-600 hover:text-white">Contact Us</Link>
                    <Link to="AboutUs" className="px-6 py-2 hover:bg-gray-600 hover:text-white">About Us</Link>

                    <button className="py-2 px-6 border bg-green-300">Login</button>
                    <button className="py-2 px-6 border bg-green-300">Register</button>
                </div>
            )}
            </div>
        </nav>
    )
}
    export default NavBar;
