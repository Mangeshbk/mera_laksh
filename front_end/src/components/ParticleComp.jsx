import React from 'react'
import Particles from "react-particles-js";
import "../styles/about.css"
const ParticleComp = () => {
    return (
        <Particles
                className="particles-canvas"
                params={{
                    particles: {
                        number: {
                            value: 30,
                            density: {
                                enable: true,
                                value_area: 900
                            }
                        },
                        shape: {
                            type: "circle",
                            stroke: {
                                width: 20,
                                color: "#98042D"
                            }
                        }
                    }

                }}

            />
    )
}

export default ParticleComp
