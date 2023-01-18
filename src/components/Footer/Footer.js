import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaWhatsappSquare } from 'react-icons/fa';
import { ImMail } from 'react-icons/im';
import './Footer.css'


function Footer() {
    return (
    <footer className="footerContainer">
        <div className="icon">
                <a href="https://github.com/alezingoni" target="blank">
                    <FaGithubSquare />
                </a>
                <a href="https://www.linkedin.com/in/alejandro-zingoni/" target="blank">
                    <FaLinkedin />
                </a>
                <a href="https://wa.me/5491165499058" target="blank">
                    <FaWhatsappSquare />
                </a>
                <a href="mailto:alezingoni29@gmail.com">
                    <ImMail />
                </a>
        </div>
        <div>
            <p className="text">Copyright © 2022 - All right reserved</p>
            <p className="text">by Burger 360</p>
        </div>
        <div>
            <p  className="text">Alejandro Zingoni React Developer</p>
        </div>
    
    </footer>
    )
}
export default Footer;