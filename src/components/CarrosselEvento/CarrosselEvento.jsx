import EventoComum from "./EventoComum/EventoComum";

import './CarrosselEvento.css';
import { useState, useEffect } from 'react';
import api from '../../services/api';
import { Link, useNavigate } from 'react-router-dom';
import Filtro from '../../assets/filtro.png';

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
        navigate(`/detalhe-evento`, { state: { evento } })
    }

    return (
        <div className="carrossel-evento">
            <div className="conteudo-eventos">
                <div className="carrossel-evento__header">
                    <div className="header-carrossel__descricao">
                        <div className="header-carrossel__titulo">
                            <h2>
                                {props.tituloCarrossel}
                            </h2>
                            <div className={`${props.filtro!=null?'show':'hidden'}`}>
                                <img src={Filtro} alt="Ícone de Filtrar" />
                            </div>
                        </div>
                        <span className={`${props.tituloCarrossel != null ? 'show' : 'hidden'}`}>
                            Ver todos
                        </span>
                    </div>
                    <div className={`header-carrossel__filtros ${props.filtro!=null?'show':'hidden'}`}>
                        <span className="filtro-ativo">Hoje</span> <span>Amanhã</span> <span>Nesta semana</span> <span>Próximo mês</span> <span>Recorrentes</span>
                    </div>
                </div>

                <div className="eventos">
                    {
                        listItem.map((item, index) => (
                            <div className="item-evento" key={index} onClick={() => handleEventoClick(item)}>
                                <EventoComum
                                    imagem={item.imagem}
                                    titulo={item.titulo}
                                    paragrafos={item.paragrafos}
                                    data={item.data}
                                    local={item.local}
                                    quantidadeComentarios={item.qtdComentarios}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}