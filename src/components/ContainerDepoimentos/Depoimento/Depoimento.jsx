import PerfilUsuario from '../../PerfilUsuario/PerfilUsuario';
import  './Depoimento.css';

export default function Depoimento(props){
    return (
        <div className="depoimento">
            <div className="titulo-descricao">
                    <div className="depoimento__titulo"> 
                        <h1>{props.tituloDepoimento}</h1>
                    </div>
                    <div className="depoimento__descricao">
                        <p> {props.descricaoDepoimento}</p>
                    </div>
            </div>
            <div className="perfil-nome-usuario">
                <PerfilUsuario 
                    fotoPerfil={props.fotoPerfil}
                    tipoUsuario={props.tipoUsuario}
                    nomeUsuario={props.nomeUsuario}
                />  
            </div>
        </div>
     )
}
