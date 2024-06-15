import EventoComum from "../../../../components/CarrosselEvento/EventoComum/EventoComum";
import "./VisualizarEvento.css";

const VisualizarEvento = () => {
    return (
        <div className="container-visualizacao">
            <div className="conteudo-visualizacao">
                <div className="conteudo-visualizacao__header">
                    <h1>Pré-visualização</h1>
                    <p>Essa é uma demonstração de como ficará o seu evento publicado ou simplesmente salvo no seu perfil, você pode publica-lo ou apenas manter salvo no rascunho.</p>
                </div>
                <div className="visualizacao-evento">
                    <div className="visualizacao-evento__header">
                        <span>Acontece na zona sul</span>
                        <span>Ver todos</span>
                    </div>
                    <div className="visualizacao-evento__carrossel">
                        <div className="carrossel-visualizacao__item">  
                        </div>
                        <div className="carrossel-visualizacao__item">
                            <EventoComum
                                tituloEvento="Batalha de rim..."
                                descricaoEvento="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla purus sed purus ornare malesuada..."
                                dataEvento="Sábado, dia 20/04 às 09h - 12h"
                                localEvento="Vila Livieiro"
                            />
                        </div>
                        <div className="carrossel-visualizacao__item">
                        </div>
                    </div>
                </div>

                <div className="conteudo-visualizacao__botoes">
                    <span>Cancelar</span>
                    <div className="salvar-publicar">
                        <button>Salvar no Rascunho</button>
                        <button>Publicar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisualizarEvento;