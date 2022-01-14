import { Env } from './style';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <>
            <Env className="navbar navbar-expand-md navbar-dark fixed-top"> 
                <div className="container-fluid">
                            
                    <a href="/" className="navbar-brand d-flex align-items-center logo">
                        <img src={require('../../logo.png')} alt="Logo" />  
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarCollapse">                
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">                 
                            <li className="nav-item">
                                <a className="nav-link active" href="/" aria-current="page" >Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#agencia" aria-current="page">Agência</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#planos" aria-current="page">Planos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#contato" aria-current="page">Contato</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Env>
        </>
    )
}

export default Header;