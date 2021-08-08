import React from 'react'
import "./navigation.css"
import {Link} from "react-router-dom"
const Navigation = () => {
    return (
        <div className="navigation_main_container">
            <div className="navigation-logo">मेरा लक्ष्य</div>
            <div className="navigation-links">
                <Link  className="navigation-links-options">Home</Link>
                <Link  className="navigation-links-options">About</Link>
                <Link  className="navigation-links-options">Features</Link>
                <Link  className="navigation-links-options">Gallery</Link>
                <Link  className="navigation-links-options">Team</Link>
                <Link  className="navigation-links-options">Contact</Link>
            </div>
        </div>
    )
}

export default Navigation
