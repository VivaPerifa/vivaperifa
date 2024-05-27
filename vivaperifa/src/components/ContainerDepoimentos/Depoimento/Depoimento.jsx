import PerfilUsuario from '../../PerfilUsuario/PerfilUsuario';
import Neguinha from '../../../assets/fotoUsuario.png';
import  './Depoimento.css';

export default function Depoimento(props){
    return (
        <div className="container-depoimento">
            <div className="titulo-descricao">
                    <div className="titulo"> 
                        <h1>{props.tituloDepoimento}</h1>
                    </div>
                    <div className="descricao-depoimento">
                        <p> {props.descricaoDepoimento}</p>
                    </div>
            </div>
            <div className="perfil-nome-usuario">
                <PerfilUsuario 
                    nomeUsuario={props.nomeUsuario} 
                    tipoUsuario={props.tipoUsuario} 
                    fotoPefil={Neguinha}
                />    
            </div>
        </div>
     )
}
