import React from 'react'
import "../styles/about.css"
import Wave from 'react-wavify'
const WaveComp = () => {
    return (
        <Wave fill='crimson'
            className="wave-effect"
            paused={false}
            options={{
                height: 30,
                amplitude: 50,
                speed: 0.2,
                points: 5
            }}
        />
    )
}

export default WaveComp
