import EventoComum from "./EventoComum/EventoComum";
import FotoEvento from "../../assets/imagem-evento.jpg";
import Evento1 from "../../assets/Evento1.png";
import Evento2 from "../../assets/Evento2.png";
import Evento3 from "../../assets/Evento3.png";

import './CarrosselEvento.css'; 

export default function CarrosselEvento(props){
    const listEventoComum = [
        {
            id:1,
            imagem: Evento1,
            titulo: "Tenda de História",
            data: "Sábado, dia 29/04 às 9h - 12h",
            local:"Guaianases",
            descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla purus sed purus ornare malesuada...",
        },
        {
            id:2,
            imagem: Evento2,
            titulo: "Literatura",
            data: "Sábado, dia 20/04 às 09h - 12h",
            local:"Cidade Tiradentes",
            descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla purus sed purus ornare malesuada...",
        },
        {
            id:3,
            imagem: Evento3,
            titulo: "Batalha de Rima",
            data: "Sábado, dia 20/04 às 09h - 12h",
            local:"Itaquera",
            descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla purus sed purus ornare malesuada...",
        }
    ];
    
    return(
        <div className="carrossel-evento">

             <div className="conteudo-eventos">
                <div className="header-carrossel">
                    <h2>
                          {props.tituloCarrossel}
                    </h2>

                    <span>
                        Ver todos
                    </span>
                </div>
                
                <div className="eventos">
                {
                    listEventoComum.map((item)=>(
                        <div className="item-evento">
                            <EventoComum 
                                fotoEvento={item.imagem}
                                tituloEvento={item.titulo}
                                descricaoEvento={item.descricao}
                                dataEvento={item.data}
                                localEvento={item.local}
                            />
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}