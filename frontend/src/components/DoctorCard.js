import React from 'react';

const DoctorCard = ({ doctor }) => {
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
                <button className="bg-pink-500 text-white py-2 px-4 rounded-md">Consult Over Call</button>
                <button className="bg-purple-500 text-white py-2 px-4 rounded-md">Schedule Appointment</button>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md">Chat</button>
            </div>
        </div>
    );
};

export default DoctorCard;
