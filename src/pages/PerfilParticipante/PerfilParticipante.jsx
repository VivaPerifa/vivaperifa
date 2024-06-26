import CampoForm from '../../components/CampoForm/CampoForm';
import "./PerfilParticipante.css";
import Menu from '../../static/Menu/Menu';
import Perfil from '../../assets/perfil-participante.png';
import EditarPerfilParticipante from '../EditarPerfilParticipante/EditarPerfilParticipante';
import Comentario from '../../components/Comentario/Comentario';

const PerfilParticipante = () => {
    return (
        <div className="container-perfil-participante">
            <div className="perfil-participante__header">
                <Menu />
                <div className="perfil-participante__info">
                    <figure className="perfil-participante__foto">
                        <img src={Perfil} alt="foto de perfil" />
                    </figure>
                    <div className="participante__editar">
                        <div className="nome-participante">
                            <h2>Guilherme</h2>
                            <button>Editar perfil</button>
                        </div>
                        <div className="dados-participante">
                            <span>3 comentários</span>
                            <span>2 seguindo</span>
                        </div>
                    </div>
                </div>
                <div className="perfil-participante__guia">
                    <div id="titulo_comentarios">
                        <span>Comentários</span>
                    </div>
                    <div id="titulo_favoritos">
                        <span>Favoritos</span>
                    </div>
                    <div id="titulo_favoritos">
                        <span>Seguindo</span>
                    </div>
                </div>
            </div>
            <div className="perfil-participante__comentarios">
                <Comentario></Comentario>
                <Comentario></Comentario>
                <Comentario></Comentario>
            </div>
            <EditarPerfilParticipante />
        </div>
    );
}

export default PerfilParticipante;
