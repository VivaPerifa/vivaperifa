import MenuLateralPerfil from "../MenuLateralPerfil/MenuLateralPerfil";
import "./EventosCadastrados.css";
import Evento1 from "../../../assets/evento_1.png";
import Evento2 from "../../../assets/evento_2.png";
import Evento3 from "../../../assets/evento_3.png";
import Evento4 from "../../../assets/evento_4.png";
import Evento5 from "../../../assets/evento_5.png";
import Evento6 from "../../../assets/evento_6.png";
import Evento7 from "../../../assets/evento_7.png";
import Evento8 from "../../../assets/evento_8.png";
import Evento9 from "../../../assets/evento_9.png";
import Evento10 from "../../../assets/evento_10.png";

import Evento12 from "../../../assets/evento_12.png";
import Evento13 from "../../../assets/evento_13.png";
import Evento14 from "../../../assets/evento_14.png";
import Evento11 from "../../../assets/evento_feira.png";

import CarrosselEventoDestaque from '../../../components/CarrosselEventoDestaque/CarrosselEventoDestaque';
import CarrosselEvento from "../../../components/CarrosselEvento/CarrosselEvento";
import { useState, useEffect } from 'react';
import CarrosselMiniEventoComum from "../../../components/CarrosselMiniEventoComum/CarrosselMiniEventoComum";

/*miniaturas eventos */
import OficinaDancaComunidade from '../../../assets/miniaturas_eventos/oficina_danca_comunidade.jpg';
import TendaHistoria from '../../../assets/miniaturas_eventos/tenda_historia.png';
import FeriasEscolares from '../../../assets/miniaturas_eventos/ferias_escolares.png';
import Sarau from '../../../assets/miniaturas_eventos/sarau.png';
import Piseiro from '../../../assets/miniaturas_eventos/piseiro.jpg';
import Curso from '../../../assets/miniaturas_eventos/curso.png';
import Museu from '../../../assets/miniaturas_eventos/museu.png';
import Teatro from '../../../assets/miniaturas_eventos/teatro.png';
import TeatroCultural from '../../../assets/miniaturas_eventos/tearo_cultural.jpg';
import BatalhaRima from '../../../assets/miniaturas_eventos/batalha_rima.png';

/*organizadores*/
import Eccoa from '../../../assets/miniaturas_eventos/eccoa.jpg';
import CTN from '../../../assets/miniaturas_eventos/ctn.jpg';
import CasaAkueran from '../../../assets/miniaturas_eventos/casa_akueran.jpg';
import GalpaoBoneco from '../../../assets/miniaturas_eventos/galpao_boneco.webp';
// import EscolaMamaeAntonia from '../../assets/miniaturas_eventos/escola_mamae_antonia.jpg';
import CeuVilaAlpina from '../../../assets/miniaturas_eventos/ceu_vila_alpina.png';
import MuseuArteModerna from '../../../assets/miniaturas_eventos/museu_arte_moderna.jpg';
import FabricaCulturaTiradentes from '../../../assets/miniaturas_eventos/fabrica_cultura_tiradentes.jpg';

/*perfis */
import AnaClaudia from '../../../assets/perfis/ana_claudia.png';
import CarlosMenezes from '../../../assets/perfis/carlos_menezes.png';
import Eliza from '../../../assets/perfis/eliza.png';
import LucianaMartins from '../../../assets/perfis/luciana_martins.png';
import FelipeSouza from '../../../assets/perfis/felipe_souza.png';
import JoaoPereira from '../../../assets/perfis/joao_pereira.png';
import RicardoAlmeida from '../../../assets/perfis/ricardo_almeida.png';
import MarianaLopes from '../../../assets/perfis/marina_lopes.png';
import GuilhermeGiovanni from '../../../assets/perfis/guilherme.png';
import ThiagoCosta from '../../../assets/perfis/thiago_costa.png';
import LarissaPereira from '../../../assets/perfis/larissa_pereira.png';
import SandraNunes from '../../../assets/perfis/sandra_nunes.png';
import AndreSouza from '../../../assets/perfis/andre_souza.png';
import FernandoLima from '../../../assets/perfis/fernando_lima.png';
import MarcoAurelio from '../../../assets/perfis/marco_aurelio.png';
import AnaOliveira from '../../../assets/perfis/ana_oliveira.png';
import RafaelSantos from '../../../assets/perfis/rafael_santos.png';
import CarlaMedonca from '../../../assets/perfis/carla_medonca.png';

export default function EventosCadastrados() {

    const eventosPendentes = [
        {
            id: 1,
            imagem: Museu,
            titulo: "Museu do Ipiranga",
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
                    cor: "var(--cor-rosa)"
                },
                {
                    categoria: "Arte",
                    cor: "var(--cor-laranja)"
                },
                {
                    categoria: "Museu",
                    cor: "var(--cor-azul)"
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
                    cor: "var(--cor-rosa)"
                },
                {
                    categoria: "Arte",
                    cor: "var(--cor-laranja)"
                },
                {
                    categoria: "Teatro",
                    cor: "var(--cor-azul)"
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
                    cor: "var(--cor-rosa)"
                },
                {
                    categoria: "Arte",
                    cor: "var(--cor-laranja)"
                },
                {
                    categoria: "Teatro",
                    cor: "var(--cor-azul)"
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

    const eventosEncerrados = [
        {
            id: 4,
            imagem: Sarau,
            titulo: "Sarau - Ecos do Coração",
            data: "Quarta, 14 de dez, 16h às 22h",
            local: {
                rua: "R. Graham Bell",
                bairro: "Alto da Boa Vista",
                numero: "430",
                cidade: "São Paulo",
                estado: "SP"
            },
            categorias: [
                {
                    categoria: "Sarau",
                    cor:"var(--cor-rosa)"
                },
                {
                    categoria: "Arte",
                    cor:"var(--cor-laranja)"
                }
            ],
            paragrafos: [
                {
                    descricao: "Ecos do Coração nasceu da pulsante vontade de criar um espaço colaborativo para celebrarmos a arte e a diversidade, impulsionados pelo ritmo que anima nossos corações e da vida aos nossos movimentos."
                },
                {
                    descricao: "Criamos uma roda onde juntos vamos cantar, contar histórias, ouvir, apredender e ensinar. Inspirados pela vontade de sair um pouco melhor do que chegamos."
                },
                {
                    descricao: "Dentro dessa roda todos são como pedaços de um grande quebra-cabeça, cada um trazendo uma parte única de si para compartilhar com os outros: historias e emoções que se traduzem na arte."
                },
                {
                    descricao: "O encontro é um convite para todas as idades. Com atividades sendo oferecidas, opções de alimentação saudável, artesanato, pinturas, exposições e etc."
                },
                {
                    descricao: "Cada encontro é unico e vai oferecer caminhos diferentes de acordo com os próprios participantes."
                }
            ],
            faixaEtaria: "Livre para todos os públicos",
            organizador: {
                imagem: CasaAkueran,
                nome: "Casa Akueran",
                eventos: 10
            },
            qtdComentarios: "80",
            comentarios: [
                {
                    perfil: LarissaPereira,
                    usuario: "Larissa Pereira",
                    comentario: "O sarau foi simplesmente encantador! A variedade de apresentações, desde poesia até música ao vivo, fez com que a noite fosse inesquecível. Mal posso esperar pelo próximo.",
                    nota: "4.9",
                    tempo: "10 min"
                },
                {
                    perfil: ThiagoCosta,
                    usuario: "Thiago Costa",
                    comentario: "Foi uma ótima experiência cultural, com talentos locais se apresentando. O ambiente era muito acolhedor e intimista. Apenas achei que o evento poderia ter sido melhor divulgado.",
                    nota: "4.4",
                    tempo: "15 min"
                },
                {
                    perfil: SandraNunes,
                    usuario: "Sandra Nunes",
                    comentario: "Adorei participar do sarau! A diversidade de temas e estilos foi inspiradora. Foi uma noite de muita arte e emoção. Uma pena que o espaço estava um pouco lotado.",
                    nota: "4.5",
                    tempo: "45 min"
                }
            ]   
        },
        {
            id: 5,
            imagem: Piseiro,
            titulo: "Tardezinha do Arrocha",
            data: "Terça, 09 de Mai, às 14h",
            local: {
                rua: "R. Jacofer",
                bairro: "Bairro do Limão",
                numero: "615",
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
                    descricao: "A Tardezinha do Arrocha é um evento imperdível para os amantes do arrocha e da música sertaneja. Realizado em um ambiente ao ar livre, com vista deslumbrante para o pôr do sol, o evento promete uma tarde repleta de animação, dança e boa música. Com apresentações ao vivo de artistas consagrados e novos talentos do gênero, os participantes podem desfrutar de uma experiência musical autêntica e envolvente. Além disso, a Tardezinha do Arrocha oferece opções gastronômicas variadas e bebidas refrescantes, garantindo diversão para todos. Venha curtir essa festa inesquecível com amigos e família!"
                }
            ],
            faixaEtaria: "Maiores de 16 anos",
            organizador: {
                imagem: CTN,
                nome: "CTN - Centro de Tradições Nordestinas",
                eventos: 9
            },
            qtdComentarios: "52",
            comentarios: [
                {
                    perfil: AndreSouza,
                    usuario: "André Souza",
                    comentario: "O show de sertanejo foi sensacional! A energia dos artistas era contagiante e a seleção de músicas fez todo mundo cantar junto. Com certeza, uma das melhores noites que já tive.",
                    nota: "5.0",
                    tempo: "2 min"
                },
                {
                    perfil: FernandoLima,
                    usuario: "Fernanda Lima",
                    comentario: "Adorei o show, a dupla cantou todos os sucessos que eu queria ouvir. Só achei que o som estava um pouco alto demais em alguns momentos, mas no geral foi uma ótima experiência.",
                    nota: "4.6",
                    tempo: "30 min"
                },
                {
                    perfil: MarcoAurelio,
                    usuario: "Marco Aurélio",
                    comentario: "Foi uma noite incrível! A produção do show estava impecável e os artistas deram um verdadeiro espetáculo. Só gostaria que tivesse mais opções de alimentação no local.",
                    nota: "4.7",
                    tempo: "50 min"
                }
            ]   
        },
        {
            id: 6,
            imagem: Curso,
            titulo: "Curso Online - Projetos Socioambientais Elaboração e Gestão",
            data: "05 a 07 de Fev, 19h às 23h",
            local: {
                rua: "Av. Paulista",
                bairro: "Bela Vista",
                numero: "2073",
                cidade: "São Paulo",
                estado: "SP"
            },
            categorias: [
                {
                    categoria: "Educação",
                    cor:"var(--cor-rosa)"
                }
            ],
            paragrafos: [
                {
                    descricao: "Curso Online Ao Vivo: Elaboração e Gestão de Projetos Socioambientais - Da Ideia à Realidade"
                },
                {
                    descricao: "Domine a elaboração e gestão de projetos socioambientais e transforme sua comunidade, sua empresa, sua escola, seu meio!"
                },
                {
                    descricao: "Neste curso intensivo, você irá dominar as ferramentas e estratégias para criar e gerenciar projetos socioambientais de impacto. Abordaremos desde a identificação de problemas locais e globais até a captação de recursos e a avaliação de resultados, com foco na aplicação prática e na geração de resultados concretos."
                }
            ],
            faixaEtaria: "Maiores de 16 anos",
            organizador: {
                imagem: Eccoa,
                nome: "ECCOA",
                eventos: 90
            },
            qtdComentarios: "20",
            comentarios: [
                {
                    perfil: AnaOliveira,
                    usuario: "Ana Oliveira",
                    comentario: "O curso de gestão de projetos socioambientais foi extremamente informativo e prático. Aprendi muitas técnicas que já estou aplicando em projetos reais. Recomendo!",
                    nota: "4.8",
                    tempo: "12 min"
                },
                {
                    perfil: RafaelSantos,
                    usuario: "Rafael Santos",
                    comentario: "Foi um curso muito enriquecedor, com professores experientes e conteúdo atualizado. A metodologia de ensino incentivou bastante a participação e o debate entre os alunos.",
                    nota: "4.5",
                    tempo: "25 min"
                },
                {
                    perfil: CarlaMedonca,
                    usuario: "Carla Medonça",
                    comentario: "Gostei do curso, mas achei que faltou um pouco mais de ênfase em estudos de caso práticos. No entanto, os materiais complementares foram muito úteis.",
                    nota: "3.9",
                    tempo: "3h"
                }
            ]   
        }
    ];

    const [container, setContainer] = useState(true);

    const handleContainerEncerrados = () => {
        setContainer(false);
    }

    const handleContainerPendentes = () => {
        setContainer(true);
    }

    useEffect(() => {
        var carrossel_pendentes = document.getElementById('carrossel_pendentes');
        var carrossel_encerrados = document.getElementById('carrossel_encerrados');
        
        var titulo_pendentes = document.getElementById('titulo_pendentes');
        var titulo_encerrados = document.getElementById('titulo_encerrados');

        if(container){
            /*ativando titulo*/
            titulo_pendentes.classList.add('ativo');
            titulo_encerrados.classList.remove('ativo');

            /*escondendo container anterior*/
            carrossel_encerrados.classList.remove('show-container');
            carrossel_encerrados.classList.add('hidden-container');

            /*mostrando atual*/
            carrossel_pendentes.classList.remove('hidden-container');
            carrossel_pendentes.classList.add('show-container');
        }

        if(!container){
            /*ativando titulo*/
            titulo_encerrados.classList.add('ativo');
            titulo_pendentes.classList.remove('ativo');

            /*escondendo container anterior*/
            carrossel_pendentes.classList.remove('show-container');
            carrossel_pendentes.classList.add('hidden-container');

            /*mostrando container atual*/
            carrossel_encerrados.classList.remove('hidden-container');
            carrossel_encerrados.classList.add('show-container');
        }
        
    },[container]);

    return (
        <div className="container-eventos-cadastrados">
            <MenuLateralPerfil></MenuLateralPerfil>

            <div className="eventos-cadastrados-scroll" id="eventos_cadastrados_scroll">
                <div className="conteudo-eventos-cadastrados pendentes">
                    <div className="eventos-cadastrados__header">
                        <h2>Meus eventos</h2>
                        <p>Veja todos os eventos que você já publicou, desde aqueles que ainda não ocorreram (pendentes) até os que já aconteceram (histórico).</p>
                    </div>
                    <div className="eventos-cadastrados__guia">
                        <div className="eventos-cadastrados__pendentes">
                            <span onClick={handleContainerPendentes} id="titulo_pendentes">Pendentes</span>
                        </div>
                        <div className="eventos-cadastrados__encerrados">
                            <span onClick={handleContainerEncerrados} id="titulo_encerrados">Encerrados</span>
                        </div>
                    </div>

                    <div className="eventos-cadastrados__body">
                        <div className="eventos-cadastrados__carrossel" id="carrossel_pendentes">
                            <CarrosselMiniEventoComum
                                listaMiniEvento={eventosPendentes}
                            />
                        </div>
                        <div className="eventos-cadastrados__carrossel" id="carrossel_encerrados">
                            <CarrosselMiniEventoComum
                                listaMiniEvento={eventosEncerrados}
                            />
                        </div>
                    </div>
                </div>

                {/* <div className="conteudo-eventos-cadastrados encerrados">
                    <div className="eventos-cadastrados__guia">
                        <div className="eventos-cadastrados__pendentes">
                            <span className="troca-pendente" id="troca_pendente">Pendentes</span>
                        </div>
                        <div className="eventos-cadastrados__encerrados">
                            <span>Encerrados</span>
                        </div>
                    </div>
                    <div className="eventos-cadastrados__body">
                        <div className="eventos-cadastrados__carrossel">
                            <CarrosselMiniEventoComum
                                listaMiniEvento={primeiraListaEvento}
                            />
                        </div>

                    </div>
                </div> */}
            </div>

        </div>
    );
}

