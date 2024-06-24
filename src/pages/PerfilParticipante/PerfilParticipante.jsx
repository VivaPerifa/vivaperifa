import CampoForm from '../../components/CampoForm/CampoForm';
import "./PerfilParticipante.css";
import Menu from '../../static/Menu/Menu';
import Perfil from '../../assets/perfil-participante.png';
import EditarPerfilParticipante from '../EditarPerfilParticipante/EditarPerfilParticipante';

export default function PerfilParticipante() {
    return (
        <div className="container-perfil-participante">
            <div className="perfil-participante__header">
                <Menu></Menu>
                <div className="perfil-participante__info">
                    <figure>
                        <img src={Perfil} alt="foto de perfil" />
                    </figure>
                    <div className="nome-participante">
                        <h2>Nome do perfil</h2>
                        <button>Editar perfil</button>
                        <div className="dados-participante">
                            <span>3 comentários</span>
                            <span>2 seguindo</span>
                        </div>
                    </div>
                </div>
            </div>

            <EditarPerfilParticipante></EditarPerfilParticipante>
        </div>
    );
}
