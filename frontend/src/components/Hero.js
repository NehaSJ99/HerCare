import React from "react";
import { Sparkles, ArrowRight, MapPin, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import HeroImage from "../Images/feminine.png";

const Hero = () => {
    return ( <
        div className = "pt-16 bg-gradient-to-r from-pink-50 via-purple-50 to-white" >
        <
        div className = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center" > { /* Left Side Content */ } <
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
        Take Control of < span className = "block bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent" > Your Health < /span> < /
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
        /div> < /
        div >

        { /* Features Section */ } <
        div className = "py-12 bg-white"
        id = "features" >
        <
        div className = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
        <
        h2 className = "text-3xl font-bold text-center" >
        Everything You Need
        for Your < span className = "bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent ml-2" > Health Journey < /span> < /
        h2 > <
        /div> < /
        div >

        { /* Card Section */ } <
        div id = "about-us"
        className = "py-12 bg-white" >
        <
        div className = "py-12 bg-white"
        id = "features" >
        <
        div className = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
        <
        div className = "grid grid-cols-1 md:grid-cols-3 gap-12" > { /* Card 1: Mood Tracker */ } <
        div className = "bg-gradient-to-r from-pink-50 via-purple-50 to-white rounded-lg shadow-lg p-6 flex flex-col items-center" >
        <
        div className = "h-16 w-16 bg-pink-500 rounded-full mb-4 flex items-center justify-center text-white" >
        <
        Calendar className = "h-8 w-8" / >
        <
        /div> <
        h3 className = "text-xl font-semibold text-pink-500 mb-2" > Period Cycle Tracker < /h3> <
        p className = "text-gray-600 text-center" >
        Track your monthly periods and ignore the hassle of remembering. <
        /p> < /
        div >

        { /* Card 2: Consultation with Gynaecologist */ } <
        div className = "bg-gradient-to-r from-pink-50 via-purple-50 to-white rounded-lg shadow-lg p-6 flex flex-col items-center" >
        <
        div className = "h-16 w-16 bg-purple-500 rounded-full mb-4 flex items-center justify-center text-white" >
        <
        ArrowRight className = "h-8 w-8" / >
        <
        /div> <
        h3 className = "text-xl font-semibold text-purple-500 mb-2" > Consultation with Gynaecologist < /h3> <
        p className = "text-gray-600 text-center" >
        Schedule virtual consultations with expert gynecologists
        for personalized advice. <
        /p> < /
        div >

        { /* Card 3: Search Nearest Pharmacy */ } <
        div className = "bg-gradient-to-r from-pink-50 via-purple-50 to-white rounded-lg shadow-lg p-6 flex flex-col items-center" >
        <
        div className = "h-16 w-16 bg-pink-600 rounded-full mb-4 flex items-center justify-center text-white" >
        <
        MapPin className = "h-8 w-8" / >
        <
        /div> <
        h3 className = "text-xl font-semibold text-pink-600 mb-2" > Search Nearest Pharmacy < /h3> <
        p className = "text-gray-600 text-center" >
        Find pharmacies nearby to easily access your medication and health products. <
        /p> < /
        div > <
        /div> < /
        div > <
        /div> < /
        div >


        { /* CTA Section */ } <
        div className = "bg-gradient-to-r from-pink-500 to-purple-500 py-20" >
        <
        div className = "max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8" >
        <
        h2 className = "text-3xl font-bold text-white mb-6" >
        Start Your Health Journey Today <
        /h2> <
        p className = "text-lg text-white/90 mb-8" >
        Join thousands of women who have taken control of their menstrual health with HerCare. <
        /p> <
        button className = "group px-8 py-4 bg-white text-pink-500 rounded-lg hover:bg-pink-50 transition-all hover:scale-105 text-lg font-medium" >
        Create Free Account <
        ArrowRight className = "ml-2 h-5 w-5 inline-block group-hover:translate-x-1 transition-transform" / >
        <
        /button> < /
        div > <
        /div> < /
        div >
    );
};

export default Hero;