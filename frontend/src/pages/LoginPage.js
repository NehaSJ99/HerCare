import React from "react";

const LoginPage = () => {
    return ( <
        div className = "min-h-screen flex items-center justify-center bg-gray-100" >
        <
        div className = "bg-white p-8 rounded-lg shadow-lg w-96" >
        <
        h2 className = "text-2xl font-bold mb-6 text-center" > Login to HerCare < /h2> <
        input type = "email"
        placeholder = "Email"
        className = "w-full p-2 border rounded mb-4" / >
        <
        input type = "password"
        placeholder = "Password"
        className = "w-full p-2 border rounded mb-4" / >
        <
        button className = "w-full bg-pink-500 text-white p-2 rounded hover:bg-pink-600" >
        Login <
        /button> <
        /div> <
        /div>
    );
};

export default LoginPage;