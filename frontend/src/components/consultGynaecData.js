const doctorImages = require.context('../styles/assets/Images', true);

const doctors = [{
        id: 1,
        name: 'Dr. Emily Roberts',
        specialty: 'Obstetrics & Gynaecology',
        photo: doctorImages('./1.jpg'),
        reviews: 4.5,
        location: 'New York, NY'
    },
    {
        id: 2,
        name: 'Dr. Sarah Johnson',
        specialty: 'Gynaecology',
        photo: doctorImages('./2.jpg'),
        reviews: 4.7,
        location: 'Los Angeles, CA'
    },
    {
        id: 3,
        name: 'Dr. Linda Smith',
        specialty: 'Obstetrics & Gynaecology',
        photo: doctorImages('./3.jpg'),
        reviews: 4.8,
        location: 'Chicago, IL'
    },
    {
        id: 4,
        name: 'Dr. Karen Miller',
        specialty: 'Gynaecology',
        photo: doctorImages('./4.jpg'),
        reviews: 4.6,
        location: 'Houston, TX'
    },
    {
        id: 5,
        name: 'Dr. Natalie Evans',
        specialty: 'Obstetrics & Gynaecology',
        photo: doctorImages('./1.jpg'),
        reviews: 4.9,
        location: 'San Francisco, CA'
    },
    {
        id: 6,
        name: 'Dr. Jessica Parker',
        specialty: 'Gynaecology',
        photo: doctorImages('./2.jpg'),
        reviews: 4.3,
        location: 'Miami, FL'
    }
];

export default doctors;