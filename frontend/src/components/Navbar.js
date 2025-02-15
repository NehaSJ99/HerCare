import React, { useState } from "react";
import { Heart, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return ( <
        nav className = "fixed top-0 left-0 right-0 bg-gradient-to-r from-pink-500 to-purple-500 text-white z-50 border-b shadow-lg" >
        <
        div className = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
        <
        div className = "flex justify-between h-16 items-center" > { /* Logo */ } <
        div className = "flex items-center cursor-pointer" >
        <
        Heart className = "h-8 w-8 text-white" / >
        <
        span className = "ml-2 text-xl font-bold" > HerCare < /span> < /
        div >

        { /* Desktop Menu */ } <
        div className = "hidden md:flex items-center space-x-6" > {
            [
                { to: "/", text: "Home" },
                { to: "#about-us", text: "About Us" },
                { to: "/tracker", text: "Cycle Tracker" },
                { to: "/ai-health", text: "AI Health Guide" },
                { to: "/consult-gynaec", text: "Consult a Gynaecologist" },
                { to: "/nearest-pharmacy", text: "Find Pharmacy Nearby" },
                { to: "/nearest-gynaec", text: "Find Gynaecologist Nearby" },
            ].map((link) => ( <
                Link key = { link.to }
                to = { link.to }
                className = "text-white hover:underline transition duration-300" > { link.text } <
                /Link>
            ))
        } <
        /div>

        { /* Mobile Menu Button */ } <
        div className = "md:hidden" >
        <
        button onClick = {
            () => setIsOpen(!isOpen)
        } > { isOpen ? < X className = "h-8 w-8 text-white" / > : < Menu className = "h-8 w-8 text-white" / > } <
        /button> < /
        div > <
        /div>

        { /* Mobile Menu */ } {
            isOpen && ( <
                div className = "md:hidden bg-purple-600 text-white p-4 space-y-4" > {
                    [
                        { to: "/", text: "Home" },
                        { to: "#about-us", text: "About Us" },
                        { to: "/tracker", text: "Cycle Tracker" },
                        { to: "/ai-health", text: "AI Health Guide" },
                        { to: "/consult-gynaec", text: "Consult a Gynaecologist" },
                        { to: "/nearest-pharmacy", text: "Find Pharmacy Nearby" },
                        { to: "/nearest-gynaec", text: "Find Gynaecologist Nearby" },
                    ].map((link) => ( <
                        Link key = { link.to }
                        to = { link.to }
                        className = "block text-white hover:bg-pink-500 p-2 rounded-md"
                        onClick = {
                            () => setIsOpen(false)
                        } > { link.text } <
                        /Link>
                    ))
                } <
                /div>
            )
        } <
        /div> < /
        nav >
    );
};

export default Navbar;