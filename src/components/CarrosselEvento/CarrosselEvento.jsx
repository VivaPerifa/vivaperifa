import EventoComum from "./EventoComum/EventoComum";

import './CarrosselEvento.css';
import { useState, useEffect } from 'react';
import api from '../../services/api';
import Evento from '../../assets/evento_feira.png';
import { Link, useNavigate } from 'react-router-dom';

export default function CarrosselEvento(props) {
    const listItem = props.listaEvento;

    // const [eventos, setEventos] = useState([]);

    // useEffect(() => {
    //     api.get('/eventos')
    //         .then(response => {
    //             console.log(response.data);
    //             setEventos(response.data);
    //         })
    //         .catch(error => {
    //             console.error("Erro ao buscar dados "+error);
    //         });
    // }, []);

    const navigate = useNavigate();
    const handleEventoClick = (evento) => {
        navigate(`/detalhe-evento`,{state: { evento }})
    }

    return (
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
                        listItem.map((item, index) => (
                            <div className="item-evento" key={index} onClick={() => handleEventoClick(item)}>
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