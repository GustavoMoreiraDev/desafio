import { Container } from "./style";
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
const Footer = () => {
    return (
        
        <>
            <Container>
                <div>
                    <div className="logo">
                        <img src={require('../../logo.png')} />
                    </div>
                    
                    <span id="contato">
                        <p className="copyright"> &copy;Direitos Reservados - Digital !D 2022</p>
                        <a href="" target="_blank"><FaWhatsapp/></a>
                        <a href="" target="_blank"><FaInstagram/></a>
                        <a href="" target="_blank"><FaFacebook/></a>
                    </span>
                </div>      
            </Container>
        </>
    )
}

export default Footer;