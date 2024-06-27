import Perfil from '../../assets/perfil-participante.png';
import { RiStarLine } from "react-icons/ri";
import './Comentario.css';
import { IoMdStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";

export default function Comentario() {
    return (
        <div className="container-comentario">
            <div className="comentario__body">
                
                <div className="comentario__perfil">
                    <figure>
                        <img src={Perfil} alt="Pefil do usuário" />
                    </figure>
                </div>

                <div className="comentario__dados">
                    <div className="comentario__nome">
                        <div className="usuario-nome">
                            <span>Guilherme</span>
                        </div>
                        <div className="usuario-nota">
                            <span>3,0</span>
                        </div>
                        <div className="usuario-estrela">
                            <IoMdStar style={{color:"var(--cor-amarela)" }}/> <IoMdStar style={{color:"var(--cor-amarela)"}}/> <IoIosStarHalf style={{color:"var(--cor-amarela)"}}/> <IoIosStarOutline style={{color:"var(--cor-amarela)"}}/> <IoIosStarOutline style={{color:"var(--cor-amarela)"}}/>
                        </div>
                    </div>

                    <div className="comentario__conteudo">
                        <div className="comentario__descricao">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel leo iaculis, lobortis arcu sed, scelerisque augue.</p>
                        </div>
                        <div className="comentario__like">
                            <span className="comentario__time">30 min</span>
                            <span className="comentario__responder">Responder</span>
                        </div>
                    </div>
                </div>
            </div>
    
        </div>
    )
}