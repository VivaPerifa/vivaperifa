import './DetalheEvento.css';
import PerfilOrganizador from "../../assets/perfil-usuario.png";
import Menu from '../../static/Menu/Menu';
import Evento from '../../assets/xamuel.jpg';
import Footer from '../../static/Footer/Footer';
import Coracao from '../../assets/coracao.png';
import Agenda from '../../assets/agenda.png';
import Calendar from '../../assets/icone-calendar.png';
import Local from '../../assets/icone-local.png';
import FaixaEtaria from '../../assets/faixa-etaria.png';
import Mapa from '../../components/Mapa/Mapa';
import Evento10 from "../../assets/evento_10.png";
import { useLocation } from 'react-router-dom';
import Comentario from '../../components/Comentario/Comentario';
import Perfil from '../../assets/perfil-participante.png';
import { IoMdStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";

export default function DetalheEvento() {

    const location = useLocation();
    const { evento } = location.state;

    var listComentarios = [];

    if(evento.comentarios!=null){
        listComentarios = evento.comentarios;
        console.log(listComentarios);
    }

    return (
        <div className="container-detalhe-evento">
            <div className="detalhe-evento__header">
                <Menu></Menu>
                <div className="detalhe-evento__imagem">
                    <figure>
                        <img src={evento.imagem} alt="Imagem do evento" />
                    </figure>
                </div>
            </div>
            <div className="detalhe-evento__body">

                <div className="detalhe-evento__categoria">
                    <span>#Categoria</span>
                    <div className="detalhe-evento__icones">
                        <span>
                            <img src={Coracao} alt="" />
                        </span>
                        <span>
                            <img src={Agenda} alt="" />
                        </span>
                    </div>
                </div>
                <div className="detalhe-evento__titulo">
                    <h2>{evento.titulo}</h2>
                </div> 

                <p>{evento.descricao}</p>
                
                <div className="detalhe-evento__prog-info">
                    <div className="detalhe-evento__descricao">
                        <p>{evento.descricao}</p>
                    </div>
                    <div className="detalhe-evento__programacao">
                        <h2>detalhes do evento</h2>
                        <div className="programacao__info">
                            <div className="programacao__item">
                                <div className="programacao__icone">
                                    <figure>
                                        <img src={Calendar} alt="calendário" />
                                    </figure>
                                    <span>Programação</span>
                                </div>
                                <span>{evento.data}</span>
                            </div>
                            <div className="programacao__item">
                                <div className="programacao__icone">
                                    <figure>
                                        <img src={Local} alt="localização" />
                                    </figure>
                                    <span>Localização</span>
                                </div>
                                <span>{evento.local}</span>
                            </div>
                            <div className="programacao__item">
                                <div className="programacao__icone">
                                    <figure>
                                        <img src={FaixaEtaria} alt="faixa etária" />
                                    </figure>
                                    <span>Faixa etária</span>
                                </div>
                                <span>Livre para todos os públicos</span>
                            </div>
                            <div className="programacao__mapa">
                                <Mapa larguraMapa="100%" alturaMapa="250px"></Mapa>
                            </div>
                        </div>
                    </div>
                </div>
                
                <p>{evento.descricao}</p>

                <div className="mini-perfil-organizador">
                    <div className="mini-perfil-dados">
                        <figure>
                            <img src={PerfilOrganizador} alt="" />
                        </figure>

                        <div className="detalhes-mini-perfil">
                            <span>Nome do produtor</span>
                            <span>90 eventos</span>
                        </div>
                    </div>
                    <div className="botao-mini-perfil">
                        <button>Seguir</button>
                    </div>
                </div>

                <span className={`${listComentarios==null?'show':'hidden'}`}>Deixe seu comentário quando o evento ocorrer!</span>

                <div className={`detalhe-evento__comentarios ${evento.comentarios!=null?'show':'hidden'}`}>
                    <div className="detalhe-evento__avaliacao">
                        <span>4.0</span>
                        <IoMdStar style={{color:"var(--cor-amarela)" }}/> <IoMdStar style={{color:"var(--cor-amarela)"}}/> <IoIosStarHalf style={{color:"var(--cor-amarela)"}}/> <IoIosStarOutline style={{color:"var(--cor-amarela)"}}/> <IoIosStarOutline style={{color:"var(--cor-amarela)"}}/>
                        <span>293901</span>
                    </div>
                   <div className="evento-comentarios__header">
                        <h2>Avaliação e comentários</h2>
                        <button>Avalie esse evento</button>
                   </div>
                    {
                        listComentarios.map((item) => (
                            <div className="comentario__item">
                                <Comentario 
                                    nome={item.nome}
                                    perfil={item.perfil}
                                    nota={item.nota}
                                    comentario={item.comentario}
                                    tempo={item.tempo}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}