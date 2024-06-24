import Menu from '../../static/Menu/Menu';
import './PerfilOrganizador.css';

import Footer from '../../static/Footer/Footer';
import CarrosselEvento from "../../components/CarrosselEvento/CarrosselEvento";
import { useTranslation } from 'react-i18next';
import { Link  }from 'react-router-dom';

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
import Evento11 from "../../assets/evento_feira.png";
import Evento12 from "../../assets/evento_12.png";
import Evento13 from "../../assets/evento_13.png";
import Evento14 from "../../assets/evento_14.png";
import Evento15 from "../../assets/evento_15.png";
import BotaoLaranja from '../../components/BotaoLaranja/BotaoLaranja';
import BotaoAzul from "../../components/BotaoAzul/BotaoAzul";
import EventoDestaque from '../../components/CarrosselEventoDestaque/EventoDestaque/EventoDestaque';
import Xamuel from '../../assets/xamuel.jpg';
import Perfil from "../../assets/foto-organizador.png";

export default function PerfilOrganizador() {
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

    return (
        <div className="container-perfil-organizador">
            <div className="perfil-organizador__header">
                <div className="perfil-organizador__menu">
                    <Menu
                        corFundo="rgb(0,0,0,0.8)"
                    />
                </div>
                <div className='perfil-organizador__dados'>
                    <figure>
                        <img src={Perfil} alt="Perfil do organizador" />
                    </figure>
                    <div className='perfil-organizador__botoes'>
                        <Link to='/editar-perfil'><BotaoLaranja
                            legendaBotao="Editar Perfil"
                            larguraBotao="150px"
                        /></Link>

                        <Link to='/eventos-cadastrados'><BotaoAzul
                            legendaBotao="Gerenciar Eventos"
                            larguraBotao="180px"
                        /></Link>
                    </div>
                </div>
            </div>
            
            <div className='perfil-organizador__info'>
                <h4>Nome do produtor</h4>
                <span>10 eventos</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer risus augue, finibus id laoreet nec, ullamcorper eu libero. In mollis, risus elementum aliquet cursus, ex lacus suscipit lectus, imperdiet tincidunt nibh metus et risus. Nam venenatis aliquam iaculis. Vivamus quis velit metus. Quisque blandit efficitur nisi ut ultricies. </p>
            </div>

            <div className='perfil-organizador__body'>
                <EventoDestaque
                    className='destaque-perfil'
                    imagemEventoDestaque={Xamuel}
                    tituloEventoDestaque="BATALHA DE RIMA DO XAMUEL EM SP"
                    dataEventoDestaque="Sábado, dia 20/04 às 9h - 12h, SP Jardim Clímax"
                    largura="80vw"
                    altura="40vw"
                    corTexto="#033E8C"
                />
                <hr></hr>
                <CarrosselEvento
                    tituloCarrossel={t("home.acontece_em_sao_paulo")}
                    listaEvento={primeiraListaEvento}
                />
                <CarrosselEvento
                    tituloCarrossel={t("home.adicionados_recentemente")}
                    listaEvento={segundaListaEvento}
                />
            </div>
            <Footer></Footer>
        </div>
    );
}