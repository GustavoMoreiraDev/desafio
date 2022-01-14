import Card from './Card';
import CardTwo from './CardTwo';
import CardThree from './CardThree';
import Footer from '../../footer/Footer';
import { Container } from './styles';
const Cards = () => {
    return (
        <>
            <Container id='planos'>
                <div className="container px-4 py-5" id="custom-cards">
                    <h1 className="pb-2 h1-wrapper">Planos Especiais</h1>
                    <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                        <Card/>
                            <CardTwo/>
                        <CardThree/>
                    </div>
                </div>
                <Footer/>
            </Container>
        </>
    )
}

export default Cards;