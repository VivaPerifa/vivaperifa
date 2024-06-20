import './EventoDestaque.css';

export default function EventoDestaque(props){
    return(
        <div className="evento-destaque" style={{width:props.largura}}>
            <figure className='evento-destaque__imagem' style={{height:props.altura}}>
                <img src={props.imagemEventoDestaque} alt="Evento em Destaque" />
            </figure>
            <div className='evento-destaque__descricao'>
                <h2>{props.tituloEventoDestaque}</h2>
                <span style={{color:props.corTexto}}>{props.dataEventoDestaque}</span>
            </div>
        </div>
    );
}