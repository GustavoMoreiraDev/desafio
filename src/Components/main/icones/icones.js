import { RiPagesLine } from 'react-icons/ri'
import { BsCameraReels } from 'react-icons/bs';
import { BsGlobe2 } from 'react-icons/bs';
import { Container } from "./style";
import '../../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import TwoHero from '../twoHero/twohero';

const Icones = () => {
    return (
        <>
            <Container>
                <section className="features-icons text-center">               
                    <div className="container">
                        <div className="row">
                            
                            <div className="col-lg-4">
                                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                    <p className='icones'><RiPagesLine/></p>
                                    <h3>Desenvolvimento Web</h3>
                                    <p className="lead mb-0">Apareça no mundo digital com o seu próprio site ou landing page. Está desenvolvendo algo grande?</p>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                    <p className='icones'><BsCameraReels/></p>
                                    <h3>Identidade Visual</h3>
                                    <p className="lead mb-0">Contrate nossos designers para criar layouts incríveis e experiências visuais únicas e autênticas.</p>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                                    <p className='icones'><BsGlobe2/></p>
                                    <h3>Gestão de Redes Sociais</h3>
                                    <p className="lead mb-0">Atraia o público nas principais redes sociais e aumente o fluxo de clientes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <TwoHero/>
                </section>
            </Container>
        </>
    )
}

export default Icones;