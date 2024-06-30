import FiltroPesquisa from "./FiltroPesquisa/FiltroPesquisa";
import './Explorar.css';
import CarrosselEvento from "../../components/CarrosselEvento/CarrosselEvento";
import DisclaimerImpulsionarEvento from "../../components/DisclaimerImpulsionarEvento/DisclaimerImpulsionarEvento";

import ContainerPlanos from '../../components/ContainerPlanos/ContainerPlanos';
import EventoDestaque from "../../components/CarrosselEventoDestaque/EventoDestaque/EventoDestaque";

import Menu from '../../static/Menu/Menu';
import Footer from "../../static/Footer/Footer";

/*miniaturas eventos */
import FestaJunina from '../../assets/miniaturas_eventos/festa_junina.png';
import OficinaBonecos from '../../assets/miniaturas_eventos/oficina_bonecos.png';
import FabricaCulturaItaim from '../../assets/miniaturas_eventos/fabrica_cultura_itaim.jpg';
import Baile from '../../assets/miniaturas_eventos/baile.png';
import DancaTeatro from '../../assets/miniaturas_eventos/danca_teatro.png';
import Cemiterio from '../../assets/miniaturas_eventos/cemiterio.png';
import BatalhaRima from '../../assets/miniaturas_eventos/batalha_rima.png';
import FeiraArtesanal from '../../assets/miniaturas_eventos/feira_artesanal.png';
import FabricasCultura from '../../assets/miniaturas_eventos/fabricas_cultura.jpg';

/*organizadores*/
import CeuVilaAlpina from '../../assets/miniaturas_eventos/ceu_vila_alpina.png';
import TinTin from '../../assets/miniaturas_eventos/tintin.png';
import FeirasCongressos from '../../assets/miniaturas_eventos/feiras_congressos.png';
import CentroCultural from '../../assets/miniaturas_eventos/centro_cultural.jpg';
import Consolare from '../../assets/miniaturas_eventos/consolare.png';

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

    const eventosZonaSul = [
        {
            id: 1,
            imagem: Baile,
            titulo: "Baile de Lançamento: Encontro Contemporâneo de Dança de Salão",
            data: "Domingo, 07 de Jul, 15h às 19h",
            local: {
                rua: "R. João Pedro Lecór",
                bairro: "Vila Alpina",
                numero: "144",
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
                    descricao: "É chegada a hora do lançamento do ENCONTRO CONTEMPORÂNEO DE DANÇA DE SALÃO em 2024! E nada melhor para este marco que um baile, não é mesmo? O convite está lançado, venha conhecer o Encontro, saber tudo que vai rolar no festival em 2024 e, de quebra, dançar coladinho com a gente."
                },
                {
                    descricao: "O que é o Baile Contemporâneo de Dança de Salão: É um formato de baile pioneiro e inovador idealizado pela Dois Rumos Cia de Dança e que desde Maio de 2017 já conta com mais de 50 edições. O projeto nasceu com o intuito de acolher o que é diverso, refletir sobre padrões patriarcais e cisheteronormativos dentro da dança de salão, estimular a criatividade em suas mais variadas formas e ressignificar o espaço do baile, buscando assim, facilitar outras formas de manifestações dos corpos e assegurar sua liberdade de expressão e existência."
                }
            ],
            faixaEtaria: "Maiores de 16 anos",
            organizador: {
                imagem: CeuVilaAlpina,
                nome: "CEU Vila Alpina",
                eventos: 30
            }
        },
        {
            id: 2,
            imagem: OficinaBonecos,
            titulo: "TinTinTins - Oficina de Bonecos no PAM",
            data: "08 a 22 de Jul, 14h às 18h",
            local: {
                rua: "R. Pamplona",
                bairro: "Jardim Paulista",
                numero: "1704",
                cidade: "São Paulo",
                estado: "SP"
            },
            categorias: [
                {
                    categoria: "Arte",
                    cor:"var(--cor-rosa)"
                },
                {
                    categoria: "Oficina",
                    cor:"var(--cor-laranja)"
                }
            ],
            paragrafos: [
                {
                    descricao: "PAM e TinTinTins Apresentam: Férias Artísticas Inesquecíveis - Descubra o ponto onde a criatividade infantil se transforma em arte tangível nas oficinas TinTinTins no Jardim Pamplona Shopping. Sob a orientação da renomada artista Graziella Poffo, essas oficinas oferecem às crianças a chance de dar vida aos seus sonhos através de bonecos únicos, criados a partir de seus próprios desenhos. Cada sessão das oficinas TinTinTins é uma porta aberta para a imaginação, permitindo que as crianças explorem suas habilidades artísticas e criem sem limites, utilizando o design exclusivo dos nossos bonecos patenteado. Essas criações não são apenas brinquedos, mas embaixadores de histórias e sonhos, cada um refletindo a visão única de seu criador mirim."
                }
            ],
            faixaEtaria: "Livre para todos os públicos",
            organizador: {
                imagem: TinTin,
                nome: "TinTinTins",
                eventos: 2
            }
        },
        {
            id: 3,
            imagem: Cemiterio,
            titulo: "Visita mediada - Cemitério da Consolação",
            data: "Segunda, 15 de Jul, 14h às 16h",
            local: {
                rua: "R. da Consolação",
                bairro: "Consolação",
                numero: "1660",
                cidade: "São Paulo",
                estado: "SP",
                nomeLocal: "Cemitério Consolação"
            },
            categorias: [
                {
                    categoria: "Pessio",
                    cor:"var(--cor-rosa)"
                }
            ],
            paragrafos: [
                {
                    descricao: "A visita é gratuita e mediada pelo carismático Francivaldo Gomes, conhecido como Popó."
                },
                {
                    descricao: "Popó é funcionário da prefeitura e realiza o tour mediado há mais de 20 anos no cemitério da Consolação."
                },
                {
                    descricao: "Nesse encontro você irá aprender e conhecer mais sobre as personalidades que fizeram parte da história de São Paulo e do país que estão sepultadas no cemitério, com muita história e informação."
                },
                {
                    descricao: "Nesse encontro você irá aprender e conhecer mais sobre as personalidades que fizeram parte da história de São Paulo e do país que estão sepultadas no cemitério, com muita história e informação."
                }
            ],
            faixaEtaria: "Maiores de 18 anos",
            organizador: {
                imagem: Consolare,
                nome: "Consolare",
                eventos: 34
            }
        },
        {
            id: 4,
            imagem: FeiraArtesanal,
            titulo: "Mega Artesanal",
            data: "27 a 31 de Jul, 10h às 18h",
            local: {
                rua: "Rodovia dos Imigrantes",
                bairro: "Água Funda",
                numero: "234",
                cidade: "São Paulo",
                estado: "SP"
            },
            categorias: [
                {
                    categoria: "Feira de Artesanato",
                    cor:"var(--cor-rosa)"
                }
            ],
            paragrafos: [
                {
                    descricao: "A Mega Artesanal é uma feira completa, realizada há mais de 15 anos, com a participação da Indústria, do Comércio, dos Ateliês, Confeiteiros e Artesãos.  Oferece infinitas oportunidades para quem gosta e faz arte, artesanato e artes manuais. Milhares de cursos e demonstrações são oferecidos, além dos lançamentos e  venda de produtos, matérias primas, projetos, desafios, exposições, premiações, encontros, negócios e muito mais!"
                }
            ],
            faixaEtaria: "Maiores de 12 anos",
            organizador: {
                imagem: FeirasCongressos,
                nome: "São Paulo Feiras e Congressos",
                eventos: 8
            }
        },
        {
            id: 5,
            imagem: DancaTeatro,
            titulo: "Teia De Renda",
            data: "Quinta a Domingo, 9h às 17h.",
            local: {
                rua: "R. Vergueiro",
                bairro: "Paraíso",
                numero: "1000",
                cidade: "São Paulo",
                estado: "SP"
            },
            categorias: [
                {
                    categoria: "Cultura",
                    cor:"var(--cor-rosa)"
                },
                {
                    categoria: "Museu",
                    cor:"var(--cor-laranja)"
                }
            ],
            paragrafos: [
                {
                    descricao: "Essa obra integrou o projeto Ensejos, uma parceria com o Centro Cultural São Paulo, que tem curadoria de dança de Mark Van Loo e direção geral de Rodolfo Beltrão."
                },
                {
                    descricao: "Teia de Renda, de Arilton Assunção, que parte de temas como a literatura, a poesia, a dramaturgia, a política e a religiosidade em movimento para construir a obra. A coreografia encontra nas composições “Teia de Renda” e “Evocação das Montanhas”, a inspiração e a liberdade de sua concepção. “Uma teia que sustenta, que alimenta, que une e separa relações”, diz Arilton. "
                },
                {
                    descricao: "No teatro, além de shows de artistas e grupos locais e sessões de cinema, apresentações de espetáculos como Ballet Stagium, Cia. Cisne Negro, São Paulo Companhia de Dança, Cia. Vagalum Tum Tum, Grupo das Dores de Teatro Ltda-ME, OAK Educação e Meio Ambiente Ltda, Grupo Capézio, Samba 7, Mandallas.com entre outros."
                }
            ],
            faixaEtaria: "Livre para todos os públicos",
            organizador: {
                imagem: CentroCultural,
                nome: "Centro Cultural de São Paulo",
                eventos: 14
            }
        },
        {
            id: 6,
            imagem: FabricasCultura,
            titulo: "Fábrica de Cultura Itaim Paulista",
            data: "Quinta a Domingo, 9h às 17h.",
            local: {
                rua: "R. Estudantes da China",
                bairro: "Itaim Paulista",
                numero: "500",
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
                    descricao: "A Fábrica de Cultura taim Paulista foi inaugurada em setembro de 2011 e está localizada na região da Encosta Norte e instalada em um edifício com 4.500m², planta horizontal e conta com um teatro com 300 lugares, totalmente equipado para apresentações, salas de aula, biblioteca e estúdio de som."
                },
                {
                    descricao: "Tem 16 salas de aulas para as atividades, entre as quais se destacam: cursos de teatro, dança, música, circo, multimeios, artes plásticas e xadrez, além de saraus, feiras culturais e exposições de conclusão de cursos."
                },
                {
                    descricao: "No teatro, além de shows de artistas e grupos locais e sessões de cinema, apresentações de espetáculos como Ballet Stagium, Cia. Cisne Negro, São Paulo Companhia de Dança, Cia. Vagalum Tum Tum, Grupo das Dores de Teatro Ltda-ME, OAK Educação e Meio Ambiente Ltda, Grupo Capézio, Samba 7, Mandallas.com entre outros."
                }
            ],
            faixaEtaria: "Livre para todos os públicos",
            organizador: {
                imagem: FabricaCulturaItaim,
                nome: "Fábrica de Cultura de Itaim",
                eventos: 15
            }
        }
    ];

    const itemEventoExplorar = {
        id: 1,
        imagem: BatalhaRima,
        titulo: "Batalha de Rima: Encontro Icônico",
        data: "Sexta, 12 de Jul, 20h às 23h, São Paulo - SP"
    }

    return (
        <div className="container-explorar">
            <div className="explorar-header">
                <Menu></Menu>
                <EventoDestaque
                    className="explorar-evento-destaque"
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
                tituloCarrossel="acontece na zona sul"
                listaEvento={eventosZonaSul}
                filtro="true"
            />

            <DisclaimerImpulsionarEvento></DisclaimerImpulsionarEvento>
            <ContainerPlanos></ContainerPlanos>
            <Footer></Footer>
        </div>
    );
}