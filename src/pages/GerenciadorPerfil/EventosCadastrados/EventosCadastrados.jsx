import "./EventosCadastrados.css";

const EventosCadastrados = () => {
    return (
        <div className="container-eventos-cadastrado">
            <div className="conteudo-eventos-cadastrado">
                <div className="titulo-eventos-cadastrado">
                    <h1>Pré-visualização</h1>
                </div>
                <div className="texto-eventos-cadastrados">
                    <p>Essa é uma demonstração de como ficará o seu evento publicado ou simplesmente <br /> salvo no seu perfil, você pode publica-lo ou apenas manter salvo no rascunho.</p>
                </div>
                <div className="container-square-eventos-cadastrados">
                    <div className="topo-container-square">
                        <span className="texto-zona-sul">Acontece na zona sul</span>
                        <span className="ver-todos">Ver todos</span>
                    </div>
                </div>
                <div className="botoes-eventos-cadastrados">
                    <span className="botao-cancelar-evento-cadastrado">Cancelar</span>
                    <div className="botoes-direita-evento-cadastrado">
                        <span className="botao-salvar-evento-cadastrado">Salvar no Rascunho</span>
                        <span className="botao-publicar-evento-cadastrado">Publicar</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventosCadastrados;



