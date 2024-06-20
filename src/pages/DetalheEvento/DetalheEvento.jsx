import './DetalheEvento.css';
import PerfilOrganizador from "../../assets/perfil-usuario.png";
import Menu from '../../static/Menu/Menu';
import Evento from '../../assets/xamuel.jpg';
import Footer from '../../static/Footer/Footer';
import Coracao from '../../assets/coracao.png';
import Agenda from '../../assets/agenda.png';
import { CiCalendar } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

export default function DetalheEvento(props) {
    return (
        <div className="container-detalhe-evento">
            <div className="detalhe-evento__header">
                <Menu></Menu>
                <figure className="detalhe-evento__imagem">
                    <img src={Evento} alt="Imagem do evento" />
                </figure>
            </div>
            <div className="detalhe-evento__body">
                <span className="detalhe-evento__categoria">#Categoria</span>
                <div className="detalhe-evento__titulo">
                    <h2>titulo do evento</h2>
                    <div className="detalhe-evento__icones">
                        <span>
                            <img src={Coracao} alt="" />
                        </span>
                        <span>
                            <img src={Agenda} alt="" />
                        </span>
                    </div>
                </div>

                <div className="detalhe-evento__prog-info">
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                    <div className="detalhe-evento__programacao">
                        <span>Detalhes</span>
                        <div className="programacao__info">
                            <div className="programacao__item">
                                <div className="programacao__icone">
                                    <CiCalendar />
                                    <span>Prorgamacao</span>
                                </div>
                            </div>
                            <div className="programacao__item">
                                <div className="programacao__icone">
                                    <CiLocationOn />
                                    <span>Prorgamacao</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


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
            </div>
            <Footer></Footer>
        </div>
    );
}