import EventoComum from "../../../../components/CarrosselEvento/EventoComum/EventoComum";
import "./VisualizarEvento.css";
import { Link } from 'react-router-dom';
import BatalhaRima from '../../../../assets/batalha_rima.png';
import MenuLateralPerfil from "../../MenuLateralPerfil/MenuLateralPerfil";
import Coracao from '../../../../assets/coracao.png';
import Agenda from '../../../../assets/agenda.png';
import BotaoColorido from "../../../../components/BotaoColorido/BotaoColorido";
import MiniEventoComum from "../../../../components/CarrosselMiniEventoComum/MiniEventoComum/MiniEventoComum";

export default function VisualizarEvento(){
    const evento = {
        id: 1,
        imagem: BatalhaRima,
        titulo: "Batalha de Rima",
        data: "Sábado, 20 de Jul, 21h às 23h",
        paragrafos: [
            {
                descricao: "A batalha de rima é um evento dinâmico e eletrizante, onde MCs se enfrentam em duelos verbais improvisados, exibindo criatividade, inteligência e rapidez de raciocínio. Realizada em um ambiente vibrante e acolhedor, a batalha promove uma atmosfera de competição saudável e respeito mútuo. Os participantes utilizam suas habilidades líricas para criar rimas afiadas e respostas rápidas, enquanto o público vibra e participa ativamente, incentivando os artistas. Com jurados especializados e a energia contagiante da plateia, a batalha de rima celebra a cultura hip-hop e o talento dos MCs, proporcionando uma experiência única e envolvente."
            }
        ],
        local: {
            rua: "R. Graham Bell",
            bairro: "Alto da Boa Vista",
            numero: "430",
            cidade: "São Paulo",
            estado: "SP"
        }
    }

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
                            <MiniEventoComum 
                                className="carrossel-visualizacao__item"
                                imagem={BatalhaRima}
                                titulo={evento.titulo}
                                paragrafos={evento.paragrafos}
                                data={evento.data}
                                local={evento.local}
                            />
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