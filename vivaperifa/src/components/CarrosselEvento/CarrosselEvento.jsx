import EventoComum from "./EventoComum/EventoComum";
import FotoEvento from "../../assets/imagem-evento.jpg";

import './CarrosselEvento.css'; 

export default function CarrosselEvento(props){
    const listItem = props.listaEvento;
    
    return(
        <div className="carrossel-evento">

             <div className="conteudo-eventos">
                <div className="header-carrossel">
                    <h2>
                        {props.tituloCarrossel}
                    </h2>

                    <span className={`${props.tituloCarrossel != null ? 'show' : 'hidden'}`}>
                        Ver todos
                    </span>
                </div>
                
                <div className="eventos">
                {
                    listItem.map((item, index)=>(
                        <div className="item-evento" key={index}>
                            <EventoComum 
                                fotoEvento={item.imagem}
                                tituloEvento={item.titulo}
                                descricaoEvento={item.descricao}
                                dataEvento={item.data}
                                localEvento={item.local}
                                quantidadeComentarios={item.comentarios}
                            />
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}