import PerfilUsuario from '../../assets/perfil-usuario.png';
import { RiStarLine } from "react-icons/ri";
import './Comentario.css';


export default function Comentario() {
    return (
        <div className="container-comentario">
            <div className="texto-comentario">
                <div className="foto-perfil-comentario"><img src={PerfilUsuario} alt="" />
                </div>
                <div className="nome-comentario">
                    <div className='nomeUsuario--notaUsuario'>
                        <div className="nome-Usuario-comentario">
                            <h2>Guilherme</h2>
                        </div>
                        <div className="nota-Usuario-comentario">
                            <p>3,0</p>
                        </div>
                        <div className='estrela-usuario'>
                            <RiStarLine /> <RiStarLine /> <RiStarLine /> <RiStarLine /> <RiStarLine />
                        </div>
                    </div>
                    <div className='conteudo-comentario'>
                        <div className="post-comentario">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel leo iaculis, lobortis arcu sed, scelerisque augue.</p>
                        </div>
                        <div className="like-resposta-comentario">
                            <div className="like-Comentario"><h3>30 min</h3></div>
                            <div className="resposta-Comentario"><h3>Responder</h3></div>
                        </div>
                    </div>
                </div>
            </div>
    
        </div>
    )
}