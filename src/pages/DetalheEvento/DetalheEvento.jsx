import EventoDestaque from "../../static/Header/EventoDestaque/EventoDestaque";
import './DetalheEvento.css';
import PerfilOrganizador from "../../assets/perfil-usuario.png";

export default function DetalheEvento(props){
    return(
        <div className="container-detalhe-evento">
            <div className="detalhe-evento">
            <figure className="detalhe-evento__imagem">
                <img src={props.imagemDetalheEvento} alt="Imagem do evento" />
            </figure>
            <h1 className="titulo-evento">{props.tituloEvento}</h1>

            <p className="descricao-evento">{props.descricaoEvento}</p>

            <div className="mini-perfil-organizador">
               <div className="mini-perfil-dados">
                  <figure>

                    <img src={PerfilOrganizador} alt="" />

                
                  </figure>

                <div className="detalhes-mini-perfil">

                  <span>Paulo Briff Cado</span>
                  <span>90 eventos</span>

                </div>
            </div>
                <div className="botao-mini-perfil">

                    <button>Seguir</button>

                </div>
            </div>
        </div>
        </div>
    );
}