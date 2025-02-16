import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ScheduleAppointment = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const doctor = location.state?.doctor; // Get doctor data from navigation

    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [appointmentConfirmed, setAppointmentConfirmed] = useState(false);

    const handleConfirmAppointment = () => {
        if (!selectedDate || !selectedTime) {
            alert('Please select a date and time');
            return;
        }

        setAppointmentConfirmed(true);

        // Simulate email sending
        setTimeout(() => {
            alert(`Appointment booked! A confirmation email has been sent to the registered email`);
            navigate('/consult-gynaec'); // Redirect back to doctors list
        }, 2000);
    };

    if (!doctor) {
        return <p className="text-center text-red-500">No doctor selected.</p>;
    }

    return (
        <div className="container mx-auto py-12">
            <h1 className="text-3xl font-bold text-center mb-8 mt-16">Schedule Appointment</h1>
            <div className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-md">
                <h2 className="text-xl font-semibold mb-4">{doctor.name}</h2>
                <p className="text-gray-700 mb-2">{doctor.specialty}</p>
                <p className="text-gray-600">{doctor.location}</p>

                <div className="mt-4">
                    <label className="block font-semibold">Select Date:</label>
                    <input 
                        type="date" 
                        className="border border-gray-300 rounded-md w-full p-2 mt-1"
                        value={selectedDate} 
                        onChange={(e) => setSelectedDate(e.target.value)} 
                    />
                </div>

                <div className="mt-4">
                    <label className="block font-semibold">Select Time:</label>
                    <input 
                        type="time" 
                        className="border border-gray-300 rounded-md w-full p-2 mt-1"
                        value={selectedTime} 
                        onChange={(e) => setSelectedTime(e.target.value)} 
                    />
                </div>

                <button 
                    className="bg-green-500 text-white py-2 px-4 rounded-md w-full mt-4" 
                    onClick={handleConfirmAppointment}
                >
                    Confirm Appointment
                </button>

                {appointmentConfirmed && (
                    <p className="text-green-500 mt-4 text-center">
                        Appointment confirmed! A confirmation email has been sent.
                    </p>
                )}
            </div>
        </div>
    );
};

export default ScheduleAppointment;
