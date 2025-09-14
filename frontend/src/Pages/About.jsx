import React from 'react';
import Navbar from '../Components/Navbar';

const About = () => {
    return (
        <div>
            <Navbar />
            <h1 className="text-3xl font-bold underline">
                About MittiMitra
            </h1>
            <p className="mt-4">
                MittiMitra is a platform which helps farmers by providing them with
                information about soil health, crop recommendations, and best farming
                practices. Our mission is to empower farmers with the knowledge and tools
                they need to improve their yield and sustainability.
            </p>
        </div>
    );
};

export default About;
