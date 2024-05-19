import PerfilUsuario from '../../PerfilUsuario/PerfilUsuario'
export default function Depoimento(props){
    return (
        <div className="container-depoimento">
            <div className="titulo-descricao">
                    <div className="titulo"> <h1>Tô amando!!!</h1></div>
                    <div className="descricao"><p> VivaPerifa é incrível! Encontrei diversos eventos culturais na minha  região que nem sabia que existiam. É uma plataforma que fortalece a cultura local.</p></div>
            </div>
            <div className="perfil-nome-usuario">
                <PerfilUsuario nomeUsuario="nome" tipoUsuario="usuario" pefil={props.fotoUsuario}/>    
            </div>
        </div>
     )
}
