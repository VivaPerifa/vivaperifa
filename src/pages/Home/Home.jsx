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
import { useTranslation } from 'react-i18next';

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


export default function Home() {
    const { t } = useTranslation();

    const primeiraListaEvento = [
        {
            id: 1,
            imagem: Evento10,
            titulo: t("event.tenda_de_historia"),
            data: t("event.date_format", { date: "29/04", time_start: "9h", time_end: "12h" }),
            local: t("event.location_format", { location: "Guaianases" }),
            descricao: t("event.description"),
        },
        {
            id: 2,
            imagem: Evento5,
            titulo: t("event.literatura"),
            data: t("event.date_format", { date: "20/04", time_start: "9h", time_end: "12h" }),
            local: t("event.location_format", { location: "Cidade Tiradentes" }),
            descricao: t("event.description"),
        },
        {
            id: 3,
            imagem: Evento8,
            titulo: t("event.batalha_de_rima"),
            data: t("event.date_format", { date: "20/04", time_start: "9h", time_end: "12h" }),
            local: t("event.location_format", { location: "Itaquera" }),
            descricao: t("event.description"),
        }
    ];

    
    const [eventos, setEventos] = useState([]);
    
    const segundaListaEvento = [
        {
            id: 1,
            imagem: Evento9,
            titulo: t("event.tenda_de_historia"),
            data: t("event.date_format", { date: "29/04", time_start: "9h", time_end: "12h" }),
            local: t("event.location_format", { location: "Guaianases" }),
            descricao: t("event.description"),
        },
        {
            id: 2,
            imagem: Evento6,
            titulo: t("event.literatura"),
            data: t("event.date_format", { date: "20/04", time_start: "9h", time_end: "12h" }),
            local: t("event.location_format", { location: "Cidade Tiradentes" }),
            descricao: t("event.description"),
        },
        {
            id: 3,
            imagem: Evento7,
            titulo: t("event.batalha_de_rima"),
            data: t("event.date_format", { date: "20/04", time_start: "9h", time_end: "12h" }),
            local: t("event.location_format", { location: "Itaquera" }),
            descricao: t("event.description"),
        }
    ];

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
            <Header tipoCabecalho="home" />

            <CarrosselEvento
                tituloCarrossel={t("home.acontece_em_sao_paulo")}
                listaEvento={primeiraListaEvento}
            />

            <div className="mapa-home">
                <h2>{t("home.encontre_eventos_no_mapa")}</h2>
                <Mapa tamanhoMapa='100%' />
            </div>

            <BannerCrescimento />
            <DisclaimerDivulgueSeuEvento />
            <DisclaimerImpulsionarEvento />
            <ContainerPlanos />
            <ContainerDepoimentos />
            <DisclaimerCookies />
        </div>
    );
}