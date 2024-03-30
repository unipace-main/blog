import { Typography } from '@material-tailwind/react'
import React, { useContext } from 'react'
import myContext from '../../context/data/myContext';


function HeroSection() {
    const context = useContext(myContext);
    const { mode } = context;

    // Define the background image URL
    const backgroundImageUrl = mode === 'light' 
        ? 'url("../../../assets/linkedin 4.png")';
        : 'url("https://drive.google.com/file/d/1sOrQDHZTW7YDuvdG2UDO4ONpKQ3b_km_/view?usp=sharing")'; // Change 'your-dark-image-url.jpg' to your actual dark image URL

    return (
        <section
            style={{ 
                background: backgroundImageUrl,
                backgroundSize: 'cover', // Ensure the background image covers the entire section
                backgroundPosition: 'center', // Center the background image
                minHeight: '40vh', // Set a minimum height to cover the viewport
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {/* Main Content  */}
            <div className="container mx-auto">
                {/* Other content can go here */}
            </div>
        </section>
    )
}

export default HeroSection;
