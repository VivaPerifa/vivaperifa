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
                        <Link to="/editar-perfil"><span>Editar perfil</span></Link>
                    </div>

                    <div className="menu-lateral__lista">
                        <ul>
                            <li><FontAwesomeIcon icon={faPenToSquare} /> 
                                <Link to="/criar-evento">Criar Evento</Link>
                            </li>
                            <li><FontAwesomeIcon icon={faCalendar} /> 
                                <Link to="/eventos-cadastrados">Eventos</Link>
                            </li>
                            <li><FontAwesomeIcon icon={faChartSimple} /> 
                                Analytics
                            </li>
                            <li><FontAwesomeIcon icon={faCommentDots} /> 
                                Comunidade
                            </li>
                            <li><FontAwesomeIcon icon={faGear} /> 
                                Configurações
                            </li>
                            <li><FontAwesomeIcon icon={faCircleQuestion} /> 
                                Suporte
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}