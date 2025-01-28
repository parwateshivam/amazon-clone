import React from 'react';
import Hero from '../images/hero_section.jpg';
import CardSelection from './CardSelection';
const HeroSection = () => {
    return (
        <>
            {/* Hero Section with Background Image */}
            <div className="w-full h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${Hero})` }}>
                {/* Center CardSelection */}
                <div className="absolute mt-80">
                    <CardSelection  />
                </div>
            </div>
        </>
    );
};

export default HeroSection;
