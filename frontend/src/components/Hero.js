import React from "react";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import HeroImage from "../Images/feminine.png";

const Hero = () => {
    return ( <
        div className = "pt-16 bg-gradient-to-r from-pink-50 via-purple-50 to-white" >
        <
        div className = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center" >

        { /* Left Side Content */ } <
        div className = "space-y-8" >
        <
        div className = "inline-flex items-center px-4 py-2 bg-pink-100 rounded-full text-pink-600" >
        <
        Sparkles className = "h-4 w-4 mr-2" / >
        <
        span > AI - Powered Health Companion < /span> < /
        div >

        <
        h1 className = "text-5xl md:text-6xl font-bold" >
        Take Control of <
        span className = "block bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent" >
        Your Health <
        /span> < /
        h1 >

        <
        p className = "text-lg text-gray-600" >
        Join thousands of women using AI - powered insights
        for better health tracking and personalized care. <
        /p>

        <
        div className = "flex space-x-4" >
        <
        Link to = "/login"
        className = "group px-6 py-3 bg-pink-500 text-white rounded-lg transition-all hover:scale-105 hover:shadow-lg flex items-center" >
        Login <
        /Link> <
        Link to = "/signup"
        className = "px-6 py-3 text-pink-500 border border-pink-500 rounded-lg hover:bg-pink-50 transition-all hover:scale-105" >
        Sign Up <
        /Link> < /
        div > <
        /div>

        { /* Right Side Image (Hidden on Mobile, Visible on md and Larger) */ } <
        div className = "hidden md:block" >
        <
        img src = { HeroImage }
        alt = "Health Tracking"
        className = "w-full" / >
        <
        /div>

        <
        /div> < /
        div >
    );
};

export default Hero;