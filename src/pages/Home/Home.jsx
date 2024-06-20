import CarrosselEvento from "../../components/CarrosselEvento/CarrosselEvento";
import Header from "../../static/Header/Header";
import Footer from "../../static/Footer/Footer";
import ContainerPlanos from "../../components/ContainerPlanos/ContainerPlanos";
import './Home.css';
import BannerCrescimento from '../../components/BannerCrescimento/BannerCrescimento';
import DisclaimerImpulsionarEvento from "../../components/DisclaimerImpulsionarEvento/DisclaimerImpulsionarEvento";
import ContainerDepoimentos from '../../components/ContainerDepoimentos/ContainerDepoimento';
import DisclaimerCookies from '../../components/DisclaimerCookies/DisclaimerCookies';
import DisclaimerDivulgueSeuEvento from "../../components/DisclaimerDivulgueSeuEvento/DisclaimerDivulgueSeuEvento";

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
// import Evento11 from "../../assets/evento_11.png";
// import Evento12 from "../../assets/evento_12.png";
// import Evento13 from "../../assets/evento_13.png";
import Mapa from '../../components/Mapa/Mapa';
import { useState, useEffect } from 'react';
import api from  '../../services/api';
import Menu from '../../static/Menu/Menu';
import BatalhaRima from '../../assets/batalha_rima.png';
import Arte from '../../assets/arte.png';
import CarrosselEventoDestaque from '../../components/CarrosselEventoDestaque/CarrosselEventoDestaque';
import EventoRua from '../../assets/evento_rua.png';

export default function Home() {
    const primeiraListaEvento = [
        {
            id: 1,
            imagem: Evento10,
            titulo: "Tenda de História",
            data: "Sábado, dia 29/04 às 9h - 12h",
            local: "Guaianases",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla purus sed purus ornare malesuada...",
        },
        {
            id: 2,
            imagem: Evento5,
            titulo: "Literatura",
            data: "Sábado, dia 20/04 às 09h - 12h",
            local: "Cidade Tiradentes",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla purus sed purus ornare malesuada...",
        },
        {
            id: 3,
            imagem: Evento8,
            titulo: "Batalha de Rima",
            data: "Sábado, dia 20/04 às 09h - 12h",
            local: "Itaquera",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla purus sed purus ornare malesuada...",
        }
    ];

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

    
    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        api.get("/eventos")
            .then((response) => {
                setEventos(response);
            })
            .catch((error) => {
                console.log("Erro ao buscar dados dos eventos "+error);
            });
    }, []);
    
    return (
        <div className="container-homepage">
            {/* <Header
                tipoCabecalho="home"
            /> */}
            <div className="homepage-header">
                <Menu></Menu>
                <CarrosselEventoDestaque listaEventoDestaque={listItem}></CarrosselEventoDestaque>
            </div>

            <div className="homepage-carrossel-evento">
                <CarrosselEvento
                    tituloCarrossel="acontece em são paulo"
                    listaEvento={primeiraListaEvento}
                />
            </div>

            <div className="mapa-home">
                <h2>Encontre os eventos no mapa</h2>
                <Mapa tamanhoMapa='100%'></Mapa>
            </div>

            <BannerCrescimento></BannerCrescimento>
            <DisclaimerDivulgueSeuEvento></DisclaimerDivulgueSeuEvento>
            <DisclaimerImpulsionarEvento></DisclaimerImpulsionarEvento>
            <ContainerPlanos></ContainerPlanos>
            <ContainerDepoimentos></ContainerDepoimentos>
            <Footer></Footer>
        </div>
    );
}