import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import PeriodTrackerPage from "./pages/PeriodTrackerPage";
import ConsultGynaecPage from "./pages/ConsultGynaecPage";
import Dashboard from "./pages/Dashboard";
import VideoCallPage from "./pages/VideoCallPage";
import Pharmacy from "./pages/Pharmacy";
import DoctorLogin from './pages/DoctorLogin';

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
        /> <
        Route path = "/tracker"
        element = { < PeriodTrackerPage / > }
        /> <
        Route path = "/consult-gynaec"
        element = { < ConsultGynaecPage / > }
        /> <
        Route path = "/dashboard"
        element = { < Dashboard / > }
        /> <
        Route path = "/video-call/:roomCode"
        element = { < VideoCallPage / > }
        /> <
        Route path = "/pharmacy"
        element = { < Pharmacy / > }
        /> <
        Route path = "/doctor_login"
        element = { < DoctorLogin / > }
        /> < /
        Routes > <
        /Router>
    );
}

export default App;