import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import '../MenuLateralPerfil/MenuLateralPerfil.css';
import '../../../App';
import { Link  }from 'react-router-dom';
import Perfil from "../../../assets/foto-organizador.png";

export default function MenuLateralPerfil() {
    return (
        <div>
            <div className="menu-lateral">
                <div className="menu-lateral__conteudo">
                    <div className="menu-lateral__perfil">
                        <Link to="/perfil-organizador">
                            <img src={Perfil} alt="Foto de Perfil"/>
                        </Link>
                        <h2>João Elias</h2>
                        <Link to="/editar-perfil" className="editar-perfil__link"><span>Editar perfil</span></Link>
                    </div>

                    <div className="menu-lateral__lista">
                        <ul>
                            <Link to="/criar-evento">
                                <li><FontAwesomeIcon icon={faPenToSquare} /> 
                                    Criar Evento
                                </li>
                            </Link>
                            <Link to="/eventos-cadastrados">
                                <li><FontAwesomeIcon icon={faCalendar} /> 
                                    Eventos
                                </li>
                            </Link>
                            <Link to="">
                                <li><FontAwesomeIcon icon={faChartSimple} /> 
                                    Analytics
                                </li>
                            </Link>
                            <Link to='/comentarios-evento'>
                                <li><FontAwesomeIcon icon={faCommentDots} /> 
                                    Comunidade
                                </li>
                            </Link>
                            <Link to='/suporte-evento'>
                                <li><FontAwesomeIcon icon={faCircleQuestion} /> 
                                    Suporte
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}