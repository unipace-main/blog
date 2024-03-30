// import { Typography } from '@material-tailwind/react'
// import{ useContext } from 'react'
// import myContext from '../../context/data/myContext';
import LinkedInImg from "../../assets/linkedin 4.png"
// import LinkedinImgDark from "../../assets/linkedin 4.png"

function HeroSection() {
    // const context = useContext(myContext);
    // const { mode } = context;

    // Define the background image URL
    return (
        <section
            style={{ 
                background: LinkedInImg,
                backgroundSize: 'cover', // Ensure the background image covers the entire section
                backgroundPosition: 'center', // Center the background image
                minHeight: '40vh', // Set a minimum height to cover the viewport
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <img src={LinkedInImg} alt="" />
            {/* Main Content  */}
            <div className="container mx-auto">
                {/* Other content can go here */}
            </div>
        </section>
    )
}

export default HeroSection;
