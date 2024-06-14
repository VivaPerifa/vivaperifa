import EventoComum from "./EventoComum/EventoComum";

import './CarrosselEvento.css'; 
import { useState, useEffect } from 'react';
import api from '../../services/api';
import Evento from '../../assets/evento_feira.png';

export default function CarrosselEvento(props){
    const listItem = props.listaEvento;

    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        api.get('/eventos')
            .then(response => {
                console.log(response.data);
                setEventos(response.data);
            })
            .catch(error => {
                console.error("Erro ao buscar dados "+error);
            });
    }, []);
    
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
                    eventos.map((item, index)=>(
                        <div className="item-evento" key={index}>
                            <EventoComum 
                                fotoEvento={Evento}
                                tituloEvento={item.titulo}
                                descricaoEvento={item.descricao}
                                dataEvento={item.dataInicio.diaSemana+", dia "+item.dataInicio.dia+"/"+item.dataInicio.mes+" "+item.horarioInicio.hora+"h às "+item.horarioFim.hora+"h"}
                                localEvento={item.endereco.bairro}
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