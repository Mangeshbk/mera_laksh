import React from 'react'
import Typed from "react-typed"
import ParticleComp from './ParticleComp';
import WaveComp from './WaveComp';
const About = () => {
    return (
        <>
        <ParticleComp />
            

            <div class="about-container">
                <div className="about-website">
                    
                    <div className="website-tagline">
                    <h1>Building A Better World One Student At A Time !</h1>
                    <Typed className="typed-text"
                        strings={["मेरा लक्ष्य"]}
                        typeSpeed={80}
                        backSpeed={100}
                        loop
                    />
                    <button className="getting-started-btn">
                        Get Started
                    </button>
                    </div>
                    <div className="about-image-div">
                        <img className="about-image" src="https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGNvbnN1bHRhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>
                </div>
                <WaveComp />

            </div>

        </>
    )
}

export default About
