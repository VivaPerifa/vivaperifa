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

import { IoCreateOutline } from "react-icons/io5";

export default function MenuLateralPerfil() {
    return (
        <div>
            <div className="menu-lateral">
                <div className="menu-lateral__conteudo">
                    <div className="menu-lateral__perfil">
                        <Link to="/perfil-organizador">
                            <img src="https://cdn.oantagonista.com/uploads/2022/08/reproducao_redessociais.jpeg" alt="Foto de Perfil"/>
                        </Link>
                        <h2>Pablo Marçal</h2>
                        <Link to="/editar-perfil" className="editar-perfil__link"><span>Editar perfil</span></Link>
                    </div>

                    <div className="menu-lateral__lista">
                        <ul>
                            <Link to="/criar-evento"><li><FontAwesomeIcon icon={faPenToSquare} /> 
                                Criar Evento
                            </li></Link>
                            <Link to="/eventos-cadastrados"><li><FontAwesomeIcon icon={faCalendar} /> 
                                Eventos
                            </li></Link>
                            <Link><li><FontAwesomeIcon icon={faChartSimple} /> 
                                Analytics
                            </li></Link>
                            <Link><li><FontAwesomeIcon icon={faCommentDots} /> 
                                Comunidade
                            </li></Link>
                            <Link><li><FontAwesomeIcon icon={faGear} /> 
                                Configurações
                            </li></Link>
                            <Link><li><FontAwesomeIcon icon={faCircleQuestion} /> 
                                Suporte
                            </li></Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}