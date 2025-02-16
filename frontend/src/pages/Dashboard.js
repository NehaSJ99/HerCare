import { Link } from "react-router-dom";

const Dashboard = () => {
    return ( <
        div className = "container" >
        <
        nav className = "navbar" >
        <
        h1 > Dashboard < /h1>

        <
        /nav> <
        h2 > Hi, welcome to HerCare! < /h2> <
        p > Your go - to space
        for period care, wellness, and health insights. < /p>

        <
        h3 > Explore Our Latest Blogs: < /h3> <
        ul >
        <
        li > < Link to = "/blog/1" > Understanding Your Menstrual Cycle < /Link></li >
        <
        li > < Link to = "/blog/2" > Best Foods to Eat During Your Period < /Link></li >
        <
        li > < Link to = "/blog/3" > Managing Cramps: Tips & Remedies < /Link></li >
        <
        li > < Link to = "/blog/4" > Tracking Your Cycle with Technology < /Link></li >
        <
        /ul> < /
        div >
    );
};

export default Dashboard;