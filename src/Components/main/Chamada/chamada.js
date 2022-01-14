import { Container } from './style';

const Chamada = () => {
    return (
        <>
            <Container>

                <div class="img-wrapper">
                    <img src={require('./background.jpg')} alt=""/>
                </div>

                <div class="banner">
                    <h1>Alavanque seus Resultados</h1>
                        <p>saiba como levar sua empresa a um novo patamar de sucesso de vendas.</p>
                    <a href="#planos"><button class="btn">Saiba Mais</button></a>    
                </div>

            </Container>
        </>
    )
}

export default Chamada;
