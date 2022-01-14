import { Container } from './styles';

const Hero = () => {
    return (
        <>
            <Container>
                <div className='titulo'>
                    <h1>o seu negócio<br/>precisa de <br/>marketing digital!</h1>
                </div>
                <div className="container col-xxl-8 px-4 py-5">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img src={require('./Logo.jpg')} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
                        </div>
                        <div className="col-lg-6">
                            <h1 className="display-5 fw-bold lh-1 mb-4">Somos Criativos</h1>
                            <p className="lead">Com excelência e muita criatividade, iniciamos nossa startup de Marketing Digital para suprir a nova demanda de pessoas insatisfeitas com seus resultados e mostrar que Marketing não é gasto, e sim investimento.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Hero;