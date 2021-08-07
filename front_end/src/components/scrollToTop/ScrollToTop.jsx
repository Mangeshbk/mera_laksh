  
import React, { useState } from 'react'
import "./scroll.css"
const ScrollToTop = () => {
    const [showScroll, setShowScroll] = useState(false)

    const scrollerVisible = () => {
        const scrolled = document.documentElement.scrollTop
        // console.log(scrolled)
        if (scrolled > 200) {
            setShowScroll(true)
        }
        else if (scrolled <= 200) {
            setShowScroll(false)
        }
    }

    const scrollToTopBtn = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    window.addEventListener('scroll', scrollerVisible)
    return (
        <>
            {showScroll ? <div onClick={scrollToTopBtn} className="scrollDiv">
                <i style={{ color: "white", width: '30px', height: '30px',textAlign: 'center' }} className="fas fa-arrow-up fa-2x"></i>
            </div> : null}
        </>
    )
}

export default ScrollToTop