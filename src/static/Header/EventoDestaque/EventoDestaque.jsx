import './EventoDestaque.css';

export default function EventoDestaque(props){
    return(
        <div className="evento-destaque">
            <figure className='evento-destaque__imagem'>
                <img src={props.imagemEventoDestaque} alt="Evento em Destaque" />
            </figure>
            <div className='evento-destaque__descricao'>
                <h2>{props.tituloEventoDestaque}</h2>
                <span>{props.dataEventoDestaque}</span>
            </div>
        </div>
    );
}