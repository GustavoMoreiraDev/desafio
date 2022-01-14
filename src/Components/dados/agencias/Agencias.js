import Carousel from "../carousel/Carousel";
import { Container } from "./styles";

const Agencias = () => {
    return (
        <>
            <Container>
                <div className="agencia-wrapper">
                    <div className="text">
                        <h1 id="agencia">Visite Uma de Nossas Agências</h1>
                    </div>
                </div>
                <Carousel/>
            </Container>
        </>
    )
}

export default Agencias;