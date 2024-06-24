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

export default function DetalheEvento(props) {
    return (
        <div className="container-detalhe-evento">
            <div className="detalhe-evento__header">
                <Menu></Menu>
                <figure className="detalhe-evento__imagem">
                    <img src={Evento10} alt="Imagem do evento" />
                </figure>
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
                    <h2>titulo do evento</h2>
                </div> 

                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                
                <div className="detalhe-evento__prog-info">
                    <div className="detalhe-evento__descricao">
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. <br></br>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. <br></br> All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. <br></br> The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
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
                                <span>Sábado dia 20/04 das 9:00h às 12:00h</span>
                            </div>
                            <div className="programacao__item">
                                <div className="programacao__icone">
                                    <figure>
                                        <img src={Local} alt="localização" />
                                    </figure>
                                    <span>Localização</span>
                                </div>
                                <span>R. Oscar Feire, 2500 - Sumaré São Paulo, SP 05409-012</span>
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

                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

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