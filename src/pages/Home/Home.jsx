import CarrosselEvento from "../../components/CarrosselEvento/CarrosselEvento";
import Footer from "../../static/Footer/Footer";
import ContainerPlanos from "../../components/ContainerPlanos/ContainerPlanos";
import './Home.css';
import BannerCrescimento from '../../components/BannerCrescimento/BannerCrescimento';
import DisclaimerImpulsionarEvento from "../../components/DisclaimerImpulsionarEvento/DisclaimerImpulsionarEvento";
import ContainerDepoimentos from '../../components/ContainerDepoimentos/ContainerDepoimento';
import DisclaimerCookies from '../../components/DisclaimerCookies/DisclaimerCookies';
import DisclaimerDivulgueSeuEvento from "../../components/DisclaimerDivulgueSeuEvento/DisclaimerDivulgueSeuEvento";

import Mapa from '../../components/Mapa/Mapa';
import { useState, useEffect } from 'react';
import api from '../../services/api';
import Menu from '../../static/Menu/Menu';
import BatalhaRima from '../../assets/batalha_rima.png';
import Arte from '../../assets/arte.png';
import CarrosselEventoDestaque from '../../components/CarrosselEventoDestaque/CarrosselEventoDestaque';
import EventoRua from '../../assets/evento_rua.png';

//miniaturas
import Museu from '../../assets/miniaturas_eventos/museu.png';
import Teatro from '../../assets/miniaturas_eventos/teatro.png';
import Poema from '../../assets/miniaturas_eventos/poema.png';
import TeatroCultural from '../../assets/miniaturas_eventos/tearo_cultural.jpg';
import FestasTradiconais from '../../assets/miniaturas_eventos/festas_tradicionais.png';
import FabricasCultura from '../../assets/miniaturas_eventos/fabricas_cultura.jpg';
import FabricaCultura from '../../assets/miniaturas_eventos/fabrica_cultura.jpg';

/*organizadores */
import MuseuArteModerna from '../../assets/miniaturas_eventos/museu_arte_moderna.jpg';
import FabricaCulturaTiradentes from '../../assets/miniaturas_eventos/fabrica_cultura_tiradentes.jpg';
import FabricaCulturaSapobemba from '../../assets/miniaturas_eventos/fabrica_cultura_sapobemba.jpg';
import CeuParqueBristol from '../../assets/miniaturas_eventos/ceu_parque_bristol.jpg';

import { useTranslation } from 'react-i18next';

export default function Home() {
    const { t } = useTranslation();

    const eventosRecentes = [
        {
            id: 1,
            imagem: Museu,
            titulo: t("Museu do Ipiranga"),
            data: "30 de Jun a 31 de Ago, 9h às 16h",
            local: {
                rua: "R. dos Patriotas",
                bairro: "Ipiranga",
                numero: "20",
                cidade: "São Paulo",
                estado: "SP"
            },
            categorias: [
                {
                    categoria: "Cultura",
                    cor:"var(--cor-rosa)"
                },
                {
                    categoria: "Arte",
                    cor:"var(--cor-laranja)"
                },
                {
                    categoria: "Museu",
                    cor:"var(--cor-azul)"
                }
            ],
            paragrafos: [
                {
                    descricao: "O Museu de Arte Contemporânea é um espaço cultural vibrante localizado no coração da cidade. Fundado em 1990, o museu destaca-se por sua arquitetura moderna e arrojada, que por si só já é uma obra de arte."
                },
                {
                    descricao: "Ele abriga uma vasta coleção de obras de artistas renomados e emergentes, abrangendo diversas formas de expressão, como pintura, escultura, fotografia, instalação e arte digital. Além das exposições permanentes, o museu organiza mostras temporárias, oficinas, palestras e debates, promovendo um diálogo constante entre a arte e a sociedade."
                }
            ],
            faixaEtaria: "Livre para todos os públicos",
            organizador: {
                imagem: Museu,
                nome: "Museu do Ipiranga",
                eventos: 12
            }
        },
        {
            id: 2,
            imagem: Teatro,
            titulo: "Circus, A Nova Tournée",
            data: "06 a 14 de Jul, 11h às 16h",
            local: {
                rua: "Av. Pedro Álvares Cabral",
                bairro: "Vila Mariana",
                numero: "1301",
                cidade: "São Paulo",
                estado: "SP"
            },
            categorias: [
                {
                    categoria: "Cultura",
                    cor:"var(--cor-rosa)"
                },
                {
                    categoria: "Arte",
                    cor:"var(--cor-laranja)"
                },
                {
                    categoria: "Teatro",
                    cor:"var(--cor-azul)"
                }
            ],
            paragrafos: [
                {
                    descricao: "Dois clowns entram em cena para divertir a plateia. Mas nada funciona direito. Está dada a medida do que veremos quando abrirem as cortinas do pequeno palco: todos os números estão condenados a uma série divertidíssima de fracassos. A dupla clownesca dá vida aos bonecos, mostrando habilidades e grande domínio nas técnicas de manipulação ao mesmo tempo que estabelece com a plateia um intenso movimento de colaboração."
                },
                {
                    descricao: "Números clássicos do circo são recriados por personagens conhecidos ou figuras inusitadas: uma mosca dançarina, uma família de ovos equilibristas e duas minhocas trapezistas estão entre os companheiros de palco. Todos carismáticos, todos capazes de manterem crianças e adultos atentos do início ao fim dessa peculiar jornada circense."
                }
            ],
            faixaEtaria: "Livre para todos os públicos",
            organizador: {
                imagem: MuseuArteModerna,
                nome: "Museu da Arte Moderna de São Paulo",
                eventos: 23
            }
        },
        {
            id: 3,
            imagem: TeatroCultural,
            titulo: "Além do Rio Há o Mar",
            data: "Quarta, 03 de Jul, às 14:30h",
            local: {
                rua: "R. Henriqueta Noguez Bieba",
                bairro: "Fazenda do Carmo",
                numero: "281",
                cidade: "Cidade Tiradentes",
                estado: "SP"
            },
            categorias: [
                {
                    categoria: "Cultura",
                    cor:"var(--cor-rosa)"
                },
                {
                    categoria: "Arte",
                    cor:"var(--cor-laranja)"
                },
                {
                    categoria: "Teatro",
                    cor:"var(--cor-azul)"
                }
            ],
            paragrafos: [
                {
                    descricao: "Espetáculo de Teatro: Além do Rio Há o Mar - Grupo Puveita. Júlio sempre deslizou pelas águas do Rio Amazonas, atravessando pessoas e suas histórias. Até que um dia encontra-se com uma divertida senhora que lhe conta histórias para além daquelas águas, ela revela a ele segredos do Mar. Júlio parte para uma grande aventura em busca destas “ondas altas e fortes."
                }
            ],
            faixaEtaria: "Livre para todos os públicos",
            organizador: {
                imagem: FabricaCulturaTiradentes,
                nome: "Fábrica de Cultura da Cidade Tiradantes",
                eventos: 10
            }
        }
    ];

    const handleTeste = () => {
        console.log('testando');
    }

    const eventosSaoPaulo = [
        {
            id: 4,
            imagem: Poema,
            titulo: "Poemas para Brincar",
            data: "Domingo, 30 de Jun, 11h às 16h",
            local: {
                rua: "Av. Pedro Álvares Cabral",
                bairro: "Vila Mariana",
                numero: "1301",
                cidade: "São Paulo",
                estado: "SP"
            },
            categorias: [
                {
                    categoria: "Cultura",
                    cor:"var(--cor-rosa)"
                },
                {
                    categoria: "Arte",
                    cor:"var(--cor-laranja)"
                },
                {
                    categoria: "Poema",
                    cor:"var(--cor-azul)"
                }
            ],
            paragrafos: [
                {
                    descricao: "Poemas para Brincar é um espetáculo de bonecos baseado no livro homônimo de poesias para criança do poeta José Paulo Paes e ilustrado pelo artista plástico Luiz Maia. O espetáculo aborda as brincadeiras de criança: a pipa, o rio, o medo do cemitério e os bicho, é conta a história de Ana e Juca que depois de perderem sua pipa, inventam uma nova brincadeira: através do jogo de palavras, descobrem como brincar de poesia."
                }
            ],
            faixaEtaria: "Livre para todos os públicos",
            organizador: {
                imagem: MuseuArteModerna,
                nome: "Museu da Arte Moderna de São Paulo",
                eventos: 20
            }
        },
        {
            id: 5,
            imagem: FabricaCultura,
            titulo: "Fábrica de Cultura Sapobemba",
            data: "Terça e Quarta, 9h às 21h.",
            local: {
                rua: "R. Agostin Luberti",
                bairro: "Sapobemba",
                numero: "300",
                cidade: "São Paulo",
                estado: "SP"
            },
            categorias: [
                {
                    categoria: "Cultura",
                    cor:"var(--cor-rosa)"
                },
                {
                    categoria: "Arte",
                    cor:"var(--cor-laranja)"
                },
                {
                    categoria: "Fábrica de Cultura",
                    cor:"var(--cor-azul)"
                }
            ],
            paragrafos: [
                {
                    descricao: "A Fábrica de Cultura em Sapopemba é um vibrante centro de atividades culturais e educacionais, dedicado a promover a arte e a inclusão social na comunidade. Oferecendo uma vasta gama de oficinas gratuitas de música, dança, teatro, artes visuais e tecnologia, a fábrica se destaca como um espaço acolhedor para todas as idades. Com infraestrutura moderna e acessível, incentiva a expressão artística e o desenvolvimento de talentos locais."
                },
                {
                    descricao: "Além das oficinas, realiza eventos, exposições e apresentações regulares, fortalecendo o laço comunitário e o acesso à cultura. É um verdadeiro polo de criatividade e transformação social na região."
                }
            ],
            faixaEtaria: "Livre para todos os públicos",
            organizador: {
                imagem: FabricaCulturaSapobemba,
                nome: "Fábrica de Cultura de Sapobemba",
                eventos: 8
            }
        },
        {
            id: 5,
            imagem: FestasTradiconais,
            titulo: "Festas Tradicionais Brasileiras 2024",
            data: "01 a 30 de Jun",
            local: {
                rua: "R. Prof. Artur Primavesi",
                bairro: "Jardim Clímax",
                numero: "S/N",
                cidade: "São Paulo",
                estado: "SP"
            },
            categorias: [
                {
                    categoria: "Música",
                    cor:"var(--cor-rosa)"
                },
                {
                    categoria: "Teatro",
                    cor:"var(--cor-laranja)"
                },
                {
                    categoria: "Circo",
                    cor:"var(--cor-azul)"
                }
            ],
            paragrafos: [
                {
                    descricao: "A Coordenadoria dos Centros Educacionais Unificados, por meio da Divisão de Cultura, preparou uma programação recheada de atividades culturais para enriquecer ainda mais as festas tradicionais de junho."
                },
                {
                    descricao: "Folias de São João – Grupo Folias e Folguedos / Inimar dos Reis."
                },
                {
                    descricao: "Caruru Teatro-Bailinho – CIA. TEATRO DA INVESTIGAÇÃO."
                },
                {
                    descricao: "Forró Vila do Sossego – Coletivo Setãoperifa."
                },
                {
                    descricao: "Piá – Lili Flor & Paulo Pixu."
                },
                {
                    descricao: "CircoXoteBaião – Cia Mimicalado."
                },
                {
                    descricao: "Jornada Sertaneja – Adriano Martins."
                }
            ],
            faixaEtaria: "Livre para todos os públicos",
            organizador: {
                imagem: CeuParqueBristol,
                nome: "CEU Parque Bristol",
                eventos: 24
            }
        }
    ]

    const eventosDestaque = [
        {
            id: 1,
            imagem: BatalhaRima,
            titulo: "Batalha de Rima",
            data: "Sábado, 20 de Jul, 21h às 23h, São Paulo - SP"
        },
        {
            id: 2,
            imagem: Arte,
            titulo: "Museu de Arte e Cultura",
            data: "30 a 16 de Jul, 9h às 15h, São Paulo - SP"
        },
        {
            id: 3,
            imagem: EventoRua,
            titulo: "Palestra Periferia",
            data: "Domingo, 05 de Ago, 17h ás 19h, São Paulo - SP"
        }
    ];

    // const [eventos, setEventos] = useState([]);

    // useEffect(() => {
    //     api.get("/eventos")
    //         .then((response) => {
    //             setEventos(response);
    //         })
    //         .catch((error) => {
    //             console.log("Erro ao buscar dados dos eventos " + error);
    //         });
    // }, []);

    return (
        <div className="container-homepage">
            <div className="homepage-header">
                <Menu></Menu>
                <CarrosselEventoDestaque listaEventoDestaque={eventosDestaque}></CarrosselEventoDestaque>
            </div>

            <div className="homepage-carrossel-evento">
                <CarrosselEvento
                    tituloCarrossel={t('home.adicionados_recentemente')}
                    listaEvento={eventosRecentes}
                />
                <CarrosselEvento
                    tituloCarrossel={t('home.acontece_em_sao_paulo')}
                    listaEvento={eventosSaoPaulo}
                />
            </div>

            <div className="mapa-home">
                <h2>{t("home.encontre_eventos_no_mapa")}</h2>
                <Mapa larguraMapa="100%" alturaMapa="500px"></Mapa>
            </div>

            <BannerCrescimento></BannerCrescimento>
            <DisclaimerDivulgueSeuEvento></DisclaimerDivulgueSeuEvento>
            <DisclaimerImpulsionarEvento></DisclaimerImpulsionarEvento>
            <ContainerPlanos></ContainerPlanos>
            <div className="planos-footer">
                <ContainerDepoimentos></ContainerDepoimentos>
                <Footer></Footer>
            </div>
        </div>
    );
}