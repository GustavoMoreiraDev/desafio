import { Container } from './styles';
import Footer from '../../footer/Footer';

export default function Carousel() {
    return (
        <>
            <Container>
                <div className='container-fluid'>
                    <div className='wrapper-card'>
                        <div className='carousel'>
                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-indicators">
                                    <button type="button" className="btn-carousel active" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" className="btn-carousel" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" className="btn-carousel" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="https://www.digitalid.com.br/images/home_4/6.jpg" alt="TheRickAndMorty"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://www.digitalid.com.br/images/home_4/7.jpg" alt="TheRickAndMorty"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://www.digitalid.com.br/images/home_4/6.jpg" alt="TheRickAndMorty"/>
                                    </div>
                                </div>
                                <button className="carousel-control-prev btn-carousel" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next btn-carousel" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Footer/>
        </>
    )
}
