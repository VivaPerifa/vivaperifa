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


export default function MenuLateralPerfil() {
    return (
        <div>
            <div className="menu-lateral">
                <div className="menu-lateral__conteudo">
                    <div className="menu-lateral__perfil">
                        <figure>
                            <img src="https://cdn.oantagonista.com/uploads/2022/08/reproducao_redessociais.jpeg" alt="Foto de Perfil"/>
                        </figure>
                        <h2>Pablo Marçal</h2>
                        <Link to="/editar-perfil"><span>Editar perfil</span></Link>
                    </div>

                    <div className="menu-lateral__lista">
                        <ul>
                            <li><FontAwesomeIcon icon={faPenToSquare} /> 
                                <Link to="/criar-evento">Criar Evento</Link>
                            </li>
                            <li><FontAwesomeIcon icon={faCalendar} /> 
                                Eventos
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