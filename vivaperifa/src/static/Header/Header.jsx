import React from 'react';
import './Header.css';
import CarrosselEventoDestaque from './CarrosselEventoDestaque/CarrosselEventoDestaque';
import Menu from './Menu/Menu';
import EventoDestaque from './EventoDestaque/EventoDestaque';
import BatalhaRima from '../../assets/batalha_rima.png';
import Arte from '../../assets/arte.png';
import EventoRua from '../../assets/evento_rua.png';
import Xamuel from '../../assets/xamuel.jpg';

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

    const itemEventoExplorar = {
        id: 1,
        imagem: Xamuel,
        titulo: "Batalha de Rima do Xamuel em SP",
        data: "Sábado, dia 20/04 às 9h - 12h, SP Jardim Clímax"
    }

    return(
        <div className='container-header'>
            <div className={`fundo-home ${props.tipoCabecalho == 'home' ? 'show' : 'hidden'}`}>
                <Menu></Menu>
                <CarrosselEventoDestaque listaEventoDestaque={listItem}></CarrosselEventoDestaque>
            </div>
            <div className={`fundo-comunidade ${props.tipoCabecalho == 'comunidade' ? 'show' : 'hidden'}`}>
                <Menu></Menu>
                <h2>Bem vindo a comunidade!</h2>
            </div>
            <div className={`fundo-explorar ${props.tipoCabecalho == 'explorar' ? 'show' : 'hidden'}`}>
                <Menu></Menu>
                <EventoDestaque
                    className='destaque-explorar'
                    imagemEventoDestaque={itemEventoExplorar.imagem}
                    tituloEventoDestaque={itemEventoExplorar.titulo}
                    dataEventoDestaque={itemEventoExplorar.data}
                />
            </div>
            <div className={`fundo-detalhe-evento ${props.tipoCabecalho == 'detalhe-evento' ? 'show' : 'hidden'}`}>
                <img src={props.imagemDetalheEvento} alt="" className='detalhe-evento__imagem' />
            </div>  
        </div>
    );
}