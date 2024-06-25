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

export default function DetalheEvento() {

    const location = useLocation();
    const { evento } = location.state;

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

                <span>Deixe seu comentário quando o evento ocorrer!</span>
            </div>
            <Footer></Footer>
        </div>
    );
}