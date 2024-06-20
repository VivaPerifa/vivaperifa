import EventoComum from "../../../../components/CarrosselEvento/EventoComum/EventoComum";
import "./VisualizarEvento.css";
import { Link } from 'react-router-dom';
import Evento from '../../../../assets/batalha_rima.png';
import MenuLateralPerfil from "../../MenuLateralPerfil/MenuLateralPerfil";
import Coracao from '../../../../assets/coracao.png';
import Agenda from '../../../../assets/agenda.png';
import BotaoColorido from "../../../../components/BotaoColorido/BotaoColorido";

const VisualizarEvento = () => {
    return (
        <div className="container-visualizacao">
            <MenuLateralPerfil></MenuLateralPerfil>

            <div className="container-visualizacao-scroll">

                <div className="conteudo-visualizacao">
                    <div className="visualizacao-evento__header">
                        <h2>Pré-visualização</h2>
                        <p>Essa é uma demonstração de como ficará o seu evento publicado ou simplesmente salvo no seu perfil, você pode publica-lo ou apenas manter salvo no rascunho.</p>
                    </div>
                    <div className="visualizacao-evento">
                        <div className="carrossel-visualizacao__header">
                            <span>Acontece na zona sul</span>
                            <span>Ver todos</span>
                        </div>
                        <div className="visualizacao-evento__carrossel">
                            <div className="carrossel-visualizacao__item">
                            </div>
                            <div className="carrossel-visualizacao__item mini-evento-comum">
                                <figure>
                                    <img src={Evento} alt="" />
                                </figure>
                                <div className="mini-evento-comum__dados">
                                    <div className="mini-evento-comum__titulo">
                                        <h2>Batalha de rima</h2>
                                    </div>
                                    <div className="mini-evento-comum__icones">
                                        <span>
                                            <img src={Coracao} alt="" />
                                        </span>
                                        <span>
                                            <img src={Agenda} alt="" />
                                        </span>
                                    </div>
                                </div>
                                <div className="mini-evento-comum__data">
                                    <span>Sábado, dia 20/04 às 09h - 12h</span>
                                </div>
                                <div className="mini-evento-comum__descricao">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla purus sed purus ornare malesuada...
                                    </p>
                                </div>
                            </div>
                            <div className="carrossel-visualizacao__item">
                            </div>
                        </div>
                    </div>

                    <div className="visualizacao-evento__botao">
                        <Link to="/criar-evento">
                            <span>Cancelar</span>
                        </Link>
                        <div className="salvar-publicar">
                            <button className="salvar-publicar__button">Salvar no rascunho</button>
                            <Link to="/perfil-organizador">
                                <BotaoColorido 
                                    legendaBotao="Publicar"
                                    larguraBotao="150px"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisualizarEvento;