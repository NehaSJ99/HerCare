import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const blogs = [
    { title: "Understanding React", excerpt: "Learn the basics of React and how it works." },
    { title: "Cloud Computing Trends", excerpt: "Explore the latest trends in cloud computing and how they impact businesses." },
    { title: "Event Management in the Digital Age", excerpt: "Discover how technology is revolutionizing event planning and ticketing." },
];

const Dashboard = () => {
    return ( <
        div className = "min-h-screen bg-gray-100 p-6" >
        <
        nav className = "flex justify-between items-center bg-white shadow-md p-4 rounded-lg" >
        <
        h1 className = "text-2xl font-bold" > Welcome to-- --Site < /h1> <
        div >
        <
        Link to = "/" >
        <
        Button className = "mr-4" > Home < /Button> <
        /Link> <
        Button variant = "destructive" > Sign Out < /Button> <
        /div> <
        /nav> <
        div className = "mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" > {
            blogs.map((blog, index) => ( <
                Card key = { index }
                className = "p-4 bg-white shadow-md rounded-lg" >
                <
                CardContent >
                <
                h2 className = "text-xl font-semibold" > { blog.title } < /h2> <
                p className = "text-gray-600 mt-2" > { blog.excerpt } < /p> <
                /CardContent> <
                /Card>
            ))
        } <
        /div> <
        /div>
    );
};

export default Dashboard;