// DoctorDashboard.js
import React from "react";
import { Link } from "react-router-dom";
import { Video } from "lucide-react"; // Example icon
import doctorDetails from "../components/doctorData"; // adjust path as needed

const DoctorDashboard = () => {
  const { id, name, email, patients } = doctorDetails;

  // Mock data for upcoming video calls. 
  // In a real app, you might fetch this from an API or pass as props.
  const upcomingCalls = [
    {
      name: "Jane Carter",
      time: "2:00 PM",
      date: "2025-02-18",
      roomCode: "room123"
    },
    {
      name: "Bobby Johnson",
      time: "5:30 PM",
      date: "2025-02-20",
      roomCode: "room456"
    },
    {
      name: "Lucy Adams",
      time: "10:00 AM",
      date: "2025-02-21",
      roomCode: "room789"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-50 via-purple-50 to-white p-8">
      {/* Doctor Info Section */}
      <div className="max-w-3xl mx-auto text-center mb-12 mt-16">
        <h1 className="text-4xl font-bold text-pink-600">Welcome, {name}</h1>
        <p className="text-gray-700 mt-2">Doctor ID: {id}</p>
        <p className="text-gray-700">{email}</p>
      </div>

      {/* Patients Section */}
      <div className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Your Patients
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {patients.map((patient, index) => (
            <div
              key={index}
              className="bg-white shadow p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-pink-600 mb-2">
                {patient.name}
              </h3>
              <p className="text-gray-600">
                <span className="font-semibold">Issue:</span> {patient.issue}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Medicine:</span>{" "}
                {patient.medicine}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Phone:</span> {patient.phone}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Email:</span> {patient.email}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Calls Section */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Upcoming Video Calls
        </h2>
        <div className="space-y-4">
          {upcomingCalls.map((call, idx) => (
            <div
              key={idx}
              className="bg-white shadow p-4 rounded-lg flex items-center justify-between hover:shadow-lg transition-shadow"
            >
              <div>
                <p className="text-gray-800 font-medium">
                  {call.name}
                  <span className="text-sm text-gray-500 ml-2">
                    ({call.date} at {call.time})
                  </span>
                </p>
              </div>
              <Link
                to={`/doctor-video-call/${call.roomCode}`}
                className="inline-flex items-center bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition-all"
              >
                <Video className="h-5 w-5 mr-2" />
                Consult
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
