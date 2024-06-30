import './DetalheEvento.css';
import Menu from '../../static/Menu/Menu';
import Footer from '../../static/Footer/Footer';
import Coracao from '../../assets/coracao.png';
import Agenda from '../../assets/agenda.png';
import Calendar from '../../assets/icone-calendar.png';
import Local from '../../assets/icone-local.png';
import FaixaEtaria from '../../assets/faixa-etaria.png';
import Mapa from '../../components/Mapa/Mapa';
import { useLocation } from 'react-router-dom';
import Comentario from '../../components/Comentario/Comentario';
import { IoMdStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";

export default function DetalheEvento() {

    const location = useLocation();
    const { evento } = location.state;

    var listComentarios = [];

    if (evento.comentarios != null) {
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
                    <div className="detalhe-evento__categoria-list">
                        {
                            evento.categorias.map((item) => (
                                <span style={{ color: item.cor }}>#{item.categoria}</span>
                            ))
                        }
                    </div>
                    <div className="detalhe-evento__icones">
                        <span>
                            <img src={Coracao} alt="Ícone de Like" />
                        </span>
                        <span>
                            <img src={Agenda} alt="Ícone de Agenda" />
                        </span>
                    </div>
                </div>
                <div className="detalhe-evento__titulo">
                    <h2>{evento.titulo}</h2>
                </div>

                <div className="detalhe-evento__prog-info">
                    <div className="detalhe-evento__descricao">
                        {
                            evento.paragrafos.map((item) => (
                                <p>{item.descricao}</p>
                            ))
                        }
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
                                <span>{evento.local.rua}, {evento.local.numero}, {evento.local.cidade} - {evento.local.estado}</span>
                            </div>
                            <div className="programacao__item">
                                <div className="programacao__icone">
                                    <figure>
                                        <img src={FaixaEtaria} alt="faixa etária" />
                                    </figure>
                                    <span>Faixa etária</span>
                                </div>
                                <span>{evento.faixaEtaria}</span>
                            </div>
                            <div className="programacao__mapa">
                                <Mapa larguraMapa="100%" alturaMapa="250px"></Mapa>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mini-perfil-organizador">
                    <div className="mini-perfil-dados">
                        <figure>
                            <img src={evento.organizador.imagem} alt="Perfil do Organizador de Eventos" />
                        </figure>

                        <div className="detalhes-mini-perfil">
                            <span>{evento.organizador.nome}</span>
                            <span>{evento.organizador.eventos} eventos</span>
                        </div>
                    </div>
                    <div className="botao-mini-perfil">
                        <button>Seguir</button>
                    </div>
                </div>

                <span className={`${listComentarios == null ? 'show' : 'hidden'}`}>Deixe seu comentário quando o evento ocorrer!</span>

                <div className="detalhe-evento__avaliacao">
                    <div className="avaliacao__header">
                        <h2>Avaliação e comentários</h2>
                        <button>Avalie esse evento</button>
                    </div>
                    <div className="avaliacao__nota">
                        <div className="avaliacao__nota-total">
                            <span>4.0</span>
                            <div className="avaliacao__estrelas">
                                <IoMdStar style={{ width:"3rem",height:"3rem",color: "var(--cor-amarela)" }} /> <IoMdStar style={{ width:"3rem",height:"3rem",color: "var(--cor-amarela)" }} /> <IoIosStarHalf style={{ width:"3rem",height:"3rem",color: "var(--cor-amarela)" }} /> <IoIosStarOutline style={{ width:"3rem",height:"3rem",color: "var(--cor-amarela)" }} /> <IoIosStarOutline style={{ width:"3rem",height:"3rem",color: "var(--cor-amarela)" }} />
                            </div>
                            <span className="avaliacao__qtd">4,123 avaliações</span>
                        </div>
                        <div className="avaliacao__nota-separada">
                            <div class="progress-bar">
                                <span>5</span><div class="progress" style={{width: '100%'}}></div>
                            </div>
                            <div class="progress-bar">
                                <span>4</span><div class="progress" style={{width: '70%'}}></div>
                            </div>
                            <div class="progress-bar">
                                <span>3</span><div class="progress" style={{width: '50%'}}></div>
                            </div>
                            <div class="progress-bar">
                                <span>2</span><div class="progress" style={{width: '30%'}}></div>
                            </div>
                            <div class="progress-bar">
                                <span>1</span><div class="progress" style={{width: '15%'}}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className={`detalhe-evento__comentarios ${evento.comentarios != null ? 'show' : 'hidden'}`}>
                    {
                        listComentarios.map((item, index) => (
                            <div className="comentario__item" key={index}>
                                <Comentario
                                    nome={item.usuario}
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