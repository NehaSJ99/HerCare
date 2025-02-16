import React from 'react';
import { useNavigate } from 'react-router-dom';

const DoctorCard = ({ doctor }) => {
    const navigate = useNavigate();

    // Function to handle "Consult Over Call" button click
    const handleConsultOverCall = () => {
        const roomCode = `room-${doctor.id}`; // Use doctor ID or any unique identifier as the room code
        navigate(`/video-call/${roomCode}`);  // Redirect to the video call page
    };

    const handleScheduleAppointment = () => {
        navigate('/schedule-appointment', { state: { doctor } });
    };

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <img className="w-full h-48 object-cover" src={doctor.photo} alt={doctor.name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{doctor.name}</div>
                <p className="text-gray-700 text-base">{doctor.specialty}</p>
                <p className="text-gray-600 text-sm">{doctor.location}</p>
                <div className="flex items-center mt-2">
                    <span className="text-yellow-500">{"★".repeat(Math.round(doctor.reviews))}</span>
                    <span className="ml-2 text-gray-500">{doctor.reviews} / 5</span>
                </div>
            </div>
            <div className="px-6 pt-4 pb-2 flex space-x-4">
                <button
                    onClick={handleConsultOverCall} // Trigger video call page
                    className="bg-pink-500 text-white py-2 px-4 rounded-md">
                    Consult Over Call
                </button>
                <button 
                    className="bg-purple-500 text-white py-2 px-4 rounded-md"
                    onClick={handleScheduleAppointment}
                >
                    Schedule Appointment
                </button>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md">Chat</button>
            </div>
        </div>
    );
};

export default DoctorCard;
