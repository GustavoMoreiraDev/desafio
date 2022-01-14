import { Container } from './style';



const Chamada = () => {
    return (
        <>
            <Container>

                <div className="img-wrapper" id="inicio">
                    <img src={require('./background.jpg')} alt=""/>
                </div>

                <div className="banner">
                    <h1>Alavanque seus Resultados</h1>
                        <p>saiba como levar sua empresa a um novo patamar de sucesso de vendas.</p>
                    <a href="#planos"><button className="btn">Saiba Mais</button></a>    
                </div>

            </Container>
        </>
    )
}

export default Chamada;
