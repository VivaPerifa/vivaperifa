import React from 'react';
import './Header.css';
import CarrosselEventoDestaque from './CarrosselEventoDestaque/CarrosselEventoDestaque';
import Menu from './Menu/Menu';
import EventoDestaque from './EventoDestaque/EventoDestaque';
import BatalhaRima from '../../assets/batalha_rima.png';
import Arte from '../../assets/arte.png';
import EventoRua from '../../assets/evento_rua.png';
import Comunidade from '../../assets/fundo_comunidade.png';

export default function Header(props){
    const listItem = [
        {
            id: 1,
            imagem: BatalhaRima,
            titulo: "Batalha de Rima em SP",
            data: "Sábado, dia 20/04 às 9h - 12h, SP Jardim Clímax"
        },
        {
            id: 2,
            imagem: Arte,
            titulo: "Batalha de Rima em SP",
            data: "Sábado, dia 20/04 às 9h - 12h, SP Jardim Clímax"
        },
        {
            id: 3,
            imagem: EventoRua,
            titulo: "Batalha de Rima em SP",
            data: "Sábado, dia 20/04 às 9h - 12h, SP Jardim Clímax"
        }
    ];
    return(
        <div className='container-header'>
            <Menu></Menu>
            <div>Ola mundo</div>
            <div className={`destaques ${props.mostrarCarrosselDestaque ? 'show' : 'hidden'}`}>
                <CarrosselEventoDestaque listaEventoDestaque={listItem}></CarrosselEventoDestaque>
            </div>
            {/* <div className={`comunidade titulo-header fundo-comunidade ${props.mostrarTitulo ? 'show' : 'hidden'}`}>
                {props.tituloHeader}
            </div>
            <div className={`explorar fundo-explorar ${props.mostrarDestaque ? 'show' : 'hidden'}`}>
                <EventoDestaque
                    imagemEventoDestaque={props.imagemEventoDestaque}
                    tituloEventoDestaque={props.tituloEventoDestaque}
                    dataEventoDestaque={props.dataEventoDestaque}
                />
            </div> */}
        </div>
    );
}