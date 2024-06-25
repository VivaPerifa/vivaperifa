import React from 'react';
import './PerfilParticipante.css'; 
import Menu from '../../static/Menu/Menu'; 
import Perfil from '../../assets/perfil-participante.png'; 
import EditarPerfilParticipante from '../EditarPerfilParticipante/EditarPerfilParticipante'; 

const PerfilParticipante = () => {
    return (
        <div className="container-perfil-participante">
            <div className="perfil-participante__header">
                <Menu />
                <div className="perfil-participante__info">
                    <figure className="perfil-participante__foto">
                        <img src={Perfil} alt="foto de perfil" />
                    </figure>
                    <div className="perfil-participante__descricao">
                        <div className="perfil-participante__nome">
                            <h2 className='nome-participante-cor'>Gabriel augusto</h2>
                            <button className="botao-editar">Editar perfil</button>
                        </div>
                        <div className="perfil-participante__dados">
                            <span>3 comentários</span>
                            <span>2 seguindo</span>
                        </div>
                    </div>
                </div>
            </div>
            <EditarPerfilParticipante />
        </div>
    );
}

export default PerfilParticipante;
