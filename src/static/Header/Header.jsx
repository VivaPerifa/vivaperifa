import React from 'react';
import './Header.css';
import CarrosselEventoDestaque from '../../components/CarrosselEventoDestaque/CarrosselEventoDestaque';
import Menu from '../Menu/Menu';
import BatalhaRima from '../../assets/batalha_rima.png';
import Arte from '../../assets/arte.png';
import EventoRua from '../../assets/evento_rua.png';
import Xamuel from '../../assets/xamuel.jpg';
import EventoDestaque from '../../components/CarrosselEventoDestaque/EventoDestaque/EventoDestaque';

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
            
            <div className={`fundo-comunidade header ${props.tipoCabecalho == 'comunidade' ? 'show' : 'hidden'}`}>
                <Menu></Menu>
                <h2>Explore a comunidade de eventos da sua qubrada!</h2>
            </div>
            <div className={`fundo-explorar header ${props.tipoCabecalho == 'explorar' ? 'show' : 'hidden'}`}>
                <Menu></Menu>
                <EventoDestaque
                    className='destaque-explorar'
                    imagemEventoDestaque={itemEventoExplorar.imagem}
                    tituloEventoDestaque={itemEventoExplorar.titulo}
                    dataEventoDestaque={itemEventoExplorar.data}
                    largura="60vw"
                    altura="25vw"
                />
            </div>
            <div className={`fundo-detalhe-evento header ${props.tipoCabecalho == 'detalhe-evento' ? 'show' : 'hidden'}`}>
                <img src={props.imagemDetalheEvento} alt="" className='detalhe-evento__imagem' />
            </div>
            <div className={`fundo-sobre-nos header ${props.tipoCabecalho == 'sobre-nos' ? 'show' : 'hidden'}`}>
                <Menu></Menu>
            </div>  
        </div>
    );
}