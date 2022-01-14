import { Container } from "./styles";
import Agencias from '../../dados/agencias/Agencias';

const TwoHero = () => {
    return (
        <>
            <Container>    
                <div className="container my-5">
                    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 boRder shadow-lg">
                        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                            <h2 className="display-4 fw-bold lh-1">O seu Negocio Precisa de Marketing Digital</h2>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                                <a  className="btn-style" href="http://api.whatsapp.com/send?phone=5541988430759" target="_blank"  rel="noreferrer">Fale Conosco</a>
                            </div>
                        </div>
                        <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                            <img src={require('./Img.jpg')} className="d-block mx-lg-auto img-fluid" alt="Imagem" width="700" height="500" loading="lazy"/>
                        </div>
                    </div>
                </div>
                <Agencias/>
            </Container>
        </>
    )
}

export default TwoHero;