import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import '../MenuLateralPerfil/MenuLateralPerfil.css';
import '../../../App';
export default function MenuLateralPerfil() {
    return (
        <div>
            <div className="conteudo-menu-lateral">
                <div className="nav-bar-menu-lateral">
                    <div className="perfil-menu-lateral">
                        <img src="https://cdn.oantagonista.com/uploads/2022/08/reproducao_redessociais.jpeg" alt="Foto de Perfil" className="foto-perfil-menu-lateral" />
                        <h2>Pablo Marçal</h2>
                        <div className="editar-perfil-menu-lateral">
                            Editar Perfil
                        </div>
                    </div>

                    <ul>
                        <li> <FontAwesomeIcon icon={faPenToSquare} /> Criar Evento</li>
                        <li><FontAwesomeIcon icon={faCalendar} /> Eventos</li>
                        <li><FontAwesomeIcon icon={faChartSimple} /> Analytics</li>
                        <li><FontAwesomeIcon icon={faCommentDots} /> Comunidade</li>
                        <li><FontAwesomeIcon icon={faGear} /> Configurações</li>
                        <li><FontAwesomeIcon icon={faCircleQuestion} /> Suporte</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}