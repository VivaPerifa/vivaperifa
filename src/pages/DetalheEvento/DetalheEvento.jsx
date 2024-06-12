import EventoDestaque from "../../static/Header/EventoDestaque/EventoDestaque";
import './DetalheEvento.css';

export default function DetalheEvento(props){
    return(
        <div className="detalhe-evento">
            <figure className="detalhe-evento__imagem">
                <img src={props.imagemDetalheEvento} alt="Imagem do evento" />
            </figure>
            <h1>{props.tituloEvento}</h1>
        </div>
    );
}