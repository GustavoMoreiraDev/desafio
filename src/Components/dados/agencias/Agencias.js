import Carousel from "../carousel/Carousel";
import { Container } from "./styles";

const Agencias = () => {
    return (
        <>
            <Container>
                <div id="agencia" className="agencia-wrapper">
                    <div className="text">
                        <h1>Visite Uma de Nossas Agências</h1>
                    </div>
                </div>
                <Carousel/>
            </Container>
        </>
    )
}

export default Agencias;