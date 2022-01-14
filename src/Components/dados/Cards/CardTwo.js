import { Wrapper } from './styles';
import TextTwo from './textos/textTwo';

const Card = () => {
    return (
        <>
            <Wrapper>
                <div className="col">
                    <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                            <p className='promo'>
                                Google ADS
                                    Facebook ADS
                                        Instagram ADS
                                            16 posts por mês
                                                12 stories por mês
                                                    Destaques Instagram
                                                Criação de conteúdo
                                            Google Meu Negócio
                                        Gestão de Anúncios
                                    Suporte Exclusivo
                                ID Visual
                            </p>
                            <a  className="btn-style" href="http://api.whatsapp.com/send?phone=5541988430759" target="_blank"  rel="noreferrer">Obter Pacote</a>
                            <ul className="d-flex list-unstyled mt-auto">
                                <li className="me-auto">
                                    <img src="https://scontent.fbfh14-1.fna.fbcdn.net/v/t1.6435-9/131272790_105327421449898_6243616787152884129_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=SnHqacJYI6UAX-g4Tp5&tn=amhaExg4iYwTWQTF&_nc_ht=scontent.fbfh14-1.fna&oh=00_AT8Bt92HMu2OssaQdlinBINekLkIt4K-oIEfRPkZ8eFJsQ&oe=6207C328" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white"/>
                                </li>

                                <li className="d-flex align-items-center">
                                    <svg className="bi me-2" width="1em" height="1em"></svg>
                                    <small><TextTwo/></small>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}

export default Card;