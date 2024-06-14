import './PerfilUsuario.css';

export default function PerfilUsuario(props){
    return (
        <div className="container-perfil-usuario">
            <div className="ft-perfil">
                <img src={props.fotoPerfil} alt="Foto do perfil do usuário" />
             </div>
            <div className="dadosperfil">
                <div className="nome-perfil">
                    <h2>
                        {props.nomeUsuario}
                    </h2>
                </div>
                <div className="usuario">
                    <span>
                        {props.tipoUsuario}
                    </span>
                </div>
            </div>
        </div>
    )
}