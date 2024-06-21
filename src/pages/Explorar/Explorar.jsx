import FiltroPesquisa from "./FiltroPesquisa/FiltroPesquisa";
import './Explorar.css';
import CarrosselEvento from "../../components/CarrosselEvento/CarrosselEvento";
import DisclaimerImpulsionarEvento from "../../components/DisclaimerImpulsionarEvento/DisclaimerImpulsionarEvento";

import Evento1 from "../../assets/evento_1.png";
import Evento2 from "../../assets/evento_2.png";
import Evento3 from "../../assets/evento_3.png";
import Evento4 from "../../assets/evento_4.png";
import Evento5 from "../../assets/evento_5.png";
import Evento6 from "../../assets/evento_6.png";
import Evento7 from "../../assets/evento_7.png";
import Evento8 from "../../assets/evento_8.png";
import Evento9 from "../../assets/evento_9.png";
import Evento10 from "../../assets/evento_10.png";

import Evento12 from "../../assets/evento_12.png";
import Evento13 from "../../assets/evento_13.png";
import Evento14 from "../../assets/evento_14.png";
import Evento11 from "../../assets/evento_feira.png";
import Evento15 from "../../assets/evento_15.png";

import ContainerPlanos from '../../components/ContainerPlanos/ContainerPlanos';
import EventoDestaque from "../../components/CarrosselEventoDestaque/EventoDestaque/EventoDestaque";

import Xamuel from '../../assets/xamuel.jpg';
import Menu from '../../static/Menu/Menu';

export default function Explorar(){
    const filtros = [
        {
            nomeFiltro: 'feira de artesanato',
            corFiltro: 'var(--cor-azul)'
        },
        {
            nomeFiltro: 'fábrica de cultura',
            corFiltro: 'var(--cor-rosa)'
        },
        {
            nomeFiltro: 'oficina de dança',
            corFiltro: 'var(--cor-laranja)'
        },
        {
            nomeFiltro: 'oficina de música',
            corFiltro: 'var(--cor-azul)'
        },
        {
            nomeFiltro: 'batalhas de rima',
            corFiltro: 'var(--cor-vermelha)'
        },
        {
            nomeFiltro: 'saraus',
            corFiltro: 'var(--cor-laranja)'
        },
    ];

    const primeiraListaEvento = [
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

    const segundaListaEvento = [
        {
            id:1,
            imagem: Evento4,
            titulo: "Tenda de História",
            data: "Sábado, dia 29/04 às 9h - 12h",
            local:"Guaianases",
            descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla purus sed purus ornare malesuada...",
        },
        {
            id:2,
            imagem: Evento5,
            titulo: "Literatura",
            data: "Sábado, dia 20/04 às 09h - 12h",
            local:"Cidade Tiradentes",
            descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla purus sed purus ornare malesuada...",
        },
        {
            id:3,
            imagem: Evento7,
            titulo: "Batalha de Rima",
            data: "Sábado, dia 20/04 às 09h - 12h",
            local:"Itaquera",
            descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla purus sed purus ornare malesuada...",
        }
    ];

    const terceiraListaEvento = [
        {
            id:1,
            imagem: Evento6,
            titulo: "Tenda de História",
            data: "Sábado, dia 29/04 às 9h - 12h",
            local:"Guaianases",
            descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla purus sed purus ornare malesuada...",
        },
        {
            id:2,
            imagem: Evento8,
            titulo: "Literatura",
            data: "Sábado, dia 20/04 às 09h - 12h",
            local:"Cidade Tiradentes",
            descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla purus sed purus ornare malesuada...",
        },
        {
            id:3,
            imagem: Evento9,
            titulo: "Batalha de Rima",
            data: "Sábado, dia 20/04 às 09h - 12h",
            local:"Itaquera",
            descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla purus sed purus ornare malesuada...",
        }
    ];

    const quartaListaEvento = [
        {
            id:1,
            imagem: Evento13,
            titulo: "Tenda de História",
            data: "Sábado, dia 29/04 às 9h - 12h",
            local:"Guaianases",
            descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla purus sed purus ornare malesuada...",
        },
        {
            id:2,
            imagem: Evento11,
            titulo: "Literatura",
            data: "Sábado, dia 20/04 às 09h - 12h",
            local:"Cidade Tiradentes",
            descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla purus sed purus ornare malesuada...",
        },
        {
            id:3,
            imagem: Evento12,
            titulo: "Batalha de Rima",
            data: "Sábado, dia 20/04 às 09h - 12h",
            local:"Itaquera",
            descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla purus sed purus ornare malesuada...",
        }
    ];

    const itemEventoExplorar = {
        id: 1,
        imagem: Xamuel,
        titulo: "Batalha de Rima do Xamuel em SP",
        data: "Sábado, dia 20/04 às 9h - 12h, SP Jardim Clímax"
    }

    return (
        <div className="container-explorar">
            <div className="explorar-header">
                <Menu></Menu>
                <EventoDestaque
                    className="explorar-header__evento-destaque"
                    imagemEventoDestaque={itemEventoExplorar.imagem}
                    tituloEventoDestaque={itemEventoExplorar.titulo}
                    dataEventoDestaque={itemEventoExplorar.data}
                    largura="60vw"
                    altura="25vw"
                />
            </div>

            <div className="filtros-explorar">
                {
                    filtros.map((item) => (
                        <FiltroPesquisa 
                            nomeFiltro={item.nomeFiltro}
                            corFiltro={item.corFiltro}
                        />
                    ))
                }
            </div>

            <CarrosselEvento
                tituloCarrossel="acontece na zona leste"
                listaEvento={primeiraListaEvento}
            />

            <CarrosselEvento
                tituloCarrossel="acontece na zona sul"
                listaEvento={segundaListaEvento}
            />

            <CarrosselEvento
                tituloCarrossel="acontece na zona norte"
                listaEvento={terceiraListaEvento}
            />

            <CarrosselEvento
                tituloCarrossel="acontece na zona oeste"
                listaEvento={quartaListaEvento}
            />

            <DisclaimerImpulsionarEvento></DisclaimerImpulsionarEvento>

            <ContainerPlanos></ContainerPlanos>
        </div>
    );
}