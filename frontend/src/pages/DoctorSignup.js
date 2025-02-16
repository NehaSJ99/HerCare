import React, { useState } from "react";
import { Mail, Lock, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const InputField = ({ icon: Icon, type, placeholder, value, onChange, error }) => {
        return ( <
            div className = "space-y-1" >
            <
            div className = "relative" >
            <
            div className = "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" >
            <
            Icon className = "h-5 w-5 text-gray-400" / >
            <
            /div> <
            input type = { type }
            className = "block w-full pl-10 py-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
            placeholder = { placeholder }
            value = { value }
            onChange = { onChange }
            /> <
            /div> {
                error && < p className = "text-red-500 text-xs mt-1" > { error } < /p>} <
                    /div>
            );
        };

        const DoctorSignup = () => {
            const [formData, setFormData] = useState({ name: "", email: "", password: "" });
            const [errors, setErrors] = useState({});
            const navigate = useNavigate();

            const validate = () => {
                let tempErrors = {};
                if (!formData.name) tempErrors.name = "Full Name is required";
                if (!formData.email) tempErrors.email = "Email is required";
                else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) tempErrors.email = "Invalid email format";
                if (!formData.password) tempErrors.password = "Password is required";
                else if (formData.password.length < 6) tempErrors.password = "Password must be at least 6 characters";

                setErrors(tempErrors);
                return Object.keys(tempErrors).length === 0;
            };

            const handleSubmit = async (e) => {
                e.preventDefault();
                
                try {
                    const response = await axios.post("http://localhost:5000/api/doctors/signup", formData);
                    alert(response.data.message);
                    navigate(response.data.redirect);
                } catch (error) {
                    alert(error.response.data.error);
                }
            };

            return ( <
                div className = "min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-50 via-purple-50 to-white" >
                <
                div className = "bg-white p-8 rounded-xl shadow-xl w-96" >
                <
                h2 className = "text-3xl font-bold text-center text-gray-900 mb-6" >
                Create an Account <
                /h2> <
                form onSubmit = { handleSubmit }
                className = "space-y-6" >
                <
                InputField icon = { User }
                type = "text"
                placeholder = "Full Name"
                value = { formData.name }
                onChange = {
                    (e) => setFormData({...formData, name: e.target.value }) }
                error = { errors.name }
                /> <
                InputField icon = { Mail }
                type = "email"
                placeholder = "Email address"
                value = { formData.email }
                onChange = {
                    (e) => setFormData({...formData, email: e.target.value }) }
                error = { errors.email }
                /> <
                InputField icon = { Lock }
                type = "password"
                placeholder = "Password"
                value = { formData.password }
                onChange = {
                    (e) => setFormData({...formData, password: e.target.value }) }
                error = { errors.password }
                /> <
                button type = "submit"
                className = "w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white p-3 rounded-lg hover:scale-105 transition-all flex items-center justify-center" >
                Sign Up <
                ArrowRight className = "ml-2 h-5 w-5" / >
                <
                /button> <
                /form> <
                p className = "text-center text-sm text-gray-600 mt-4" >
                Already a member ? < Link to = "/doctor_login"
                className = "underline text-pink-500" > Login < /Link> <
                /p> <
                /div> <
                /div>
            );
        };

        export default DoctorSignup;