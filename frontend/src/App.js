import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import './styles/tailwind.css';


function App() {
    return ( <
        Router >
        <
        Navbar / >
        <
        Routes >
        <
        Route path = "/"
        element = { < HomePage / > }
        /> <
        Route path = "/login"
        element = { < LoginPage / > }
        /> <
        Route path = "/signup"
        element = { < SignUpPage / > }
        /> < /
        Routes > <
        /Router>
    );
}

export default App;