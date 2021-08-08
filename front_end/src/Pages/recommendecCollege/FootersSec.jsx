import React from 'react'
import "./footerSec.css"
const FootersSec = () => {
    return (
        <div className="footer_sec_div">
            <div className="footer_about_div">
                <h1>मेरा लक्ष्य</h1>
                <p>Mera Laksh is a platform which provides educational guidence for students to achive their goals.</p>
            </div>
            <div className="footer_social_handles">
                <h4>Follow Us For More Updates</h4>
                <div className="social_handles_icons">
                    <div><i class="fab fa-twitter"></i></div>
                    <div><i class="fab fa-facebook-f"></i></div>
                    <div><i class="fab fa-instagram"></i></div>
                    <div><i class="fab fa-linkedin-in"></i></div>
                </div>
            </div>
            <div className="footer_community_section">
                <h4>Our Community</h4>
                <br />
                <p>To join our community please subscribe us with your email</p>
                <br />
                <input type="text" />
                <button>Subscribe</button>
            </div>
            <div className="footer_hr"></div>
            <div className="copyRight_footer">
                <p>© Copyright <span style={{fontWeight:'700'}}>Mera Laksh</span>. All Rights Reserved</p>
                <p>Designed by <span style={{color:'#1acc8d'}}>BootstrapMade</span></p>
            </div>
        </div>
    )
}

export default FootersSec
