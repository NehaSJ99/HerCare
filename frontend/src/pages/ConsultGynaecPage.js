import React from 'react';
import DoctorCard from '../components/DoctorCard';
import doctors from '../components/consultGynaecData';

const ConsultGynaecPage = () => {
    return (
        <div className="container mx-auto py-12 mt-16">
            <h1 className="text-3xl font-bold text-center mb-8">Consult a Gynaecologist</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                {doctors.map((doctor) => (
                    <DoctorCard key={doctor.id} doctor={doctor} />
                ))}
            </div>
        </div>
    );
};

export default ConsultGynaecPage;