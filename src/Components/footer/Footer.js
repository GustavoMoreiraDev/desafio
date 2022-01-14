import { Container } from "./style";
import { FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa'
const Footer = () => {
    return (
        
        <>
            <Container>
                <div>
                    <div className="logo">
                        <img src={require('../../logo.png')} alt="Logo" />
                    </div>
                    
                    <span id="contato">
                        <p className="copyright"> &copy;Direitos Reservados - Digital !D 2022</p>
                        <a href="http://api.whatsapp.com/send?phone=5541988430759" target="_blank"  rel="noreferrer"><FaWhatsapp/></a>
                        <a href="https://www.instagram.com/sejadigitalid/" target="_blank"  rel="noreferrer"><FaInstagram/></a>
                        <a href="https://www.linkedin.com/company/digitalidmarketing/" target="_blank"  rel="noreferrer"><FaLinkedin/></a>
                    </span>
                </div>      
            </Container>
        </>
    )
}

export default Footer;