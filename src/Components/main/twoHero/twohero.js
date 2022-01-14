import { Container } from "./styles";
import Footer from './../../footer/Footer';

const TwoHero = () => {
    return (
        <>
            <Container>    
                <div class="container my-5">
                    <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 boRder shadow-lg">
                        <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
                            <h2 class="display-4 fw-bold lh-1">o seu negocio precisa de marketing digital</h2>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                                <a  className="btn-style" href="http://api.whatsapp.com/send?phone=5541988430759" target="_blank"  rel="noreferrer">Fale Conosco</a>
                            </div>
                        </div>
                        <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                        <img src={require('./Img.jpg')} className="d-block mx-lg-auto img-fluid" alt="Imagem" width="700" height="500" loading="lazy"/>
                        </div>
                    </div>
                </div>
            </Container>
            <Footer/>
        </>
    )
}

export default TwoHero;