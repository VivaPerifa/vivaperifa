import CarrosselEvento from '../../components/CarrosselEvento/CarrosselEvento';
import './Comunidade.css';

import Evento11 from "../../assets/evento_feira.png";
import Menu from '../../static/Menu/Menu';
import Footer from '../../static/Footer/Footer';

import Perfil from '../../assets/perfil-participante.png';

/*miniaturas eventos */
import FestaJunina from '../../assets/miniaturas_eventos/festa_junina.png';
import FabricaCultura from '../../assets/miniaturas_eventos/fabrica_cultura_itaim.jpg';
import Baile from '../../assets/miniaturas_eventos/baile.png';
import OficinaDanca from '../../assets/miniaturas_eventos/oficina_danca.jpg';
import DancaTeatro from '../../assets/miniaturas_eventos/danca_teatro.png';
import Cemiterio from '../../assets/miniaturas_eventos/cemiterio.png';
import BatalhaRima from '../../assets/miniaturas_eventos/batalha_rima.png';

import OficinaDancaComunidade from '../../assets/miniaturas_eventos/oficina_danca_comunidade.png';

export default function Comunidade(){
    
    const eventosComunidade = [
        {
            id: 1,
            imagem: OficinaDancaComunidade,
            titulo: "Aula de Dança",
            data: "Quinta, 18:30h às 20h",
            local: {
                rua: "R. João Pedro Lecór",
                bairro: "Vila Alpina",
                numero: "144",
                cidade: "São Paulo",
                estado: "SP",
                nomeLocal: "CEU Vila Alpina"
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
            faixaEtaria: "Maiores de 16 anos"
        },
        {
            id: 2,
            imagem: FestaJunina,
            titulo: "O Bailão Festa Junina da Sopro Escola de dança",
            data: "Domingo, 07 de Jul, 16h às 19h",
            local: {
                rua: "R. Três Mosqueteiros",
                bairro: "Santana",
                numero: "50",
                cidade: "São Paulo",
                estado: "SP",
                nomeLocal: "Sopro Escola de Dança"
            },
            categorias: [
                {
                    categoria: "Festa Junina",
                    cor:"var(--cor-rosa)"
                },
                {
                    categoria: "Música",
                    cor:"var(--cor-laranja)"
                }
            ],
            paragrafos: [
                {
                    descricao: "O BAILÃO. espetáculo de Festa Junina da Sopro Escola de Danças, sob a direção de Roberto Amorim e Tatiana Portella, participação dos alunos da Sopro Escola de Danças."
                },
                {
                    descricao: "Cancelamentos de pedidos pagos serão aceitos até 7 dias após a compra, desde que a solicitação seja enviada até 48 horas antes do início do evento."
                },
                {
                    descricao: "Você poderá editar o participante de um ingresso apenas uma vez. Essa opção ficará disponível até 24 horas antes do início do evento."
                }
            ],
            faixaEtaria: "Livre para todos os públicos"
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
            faixaEtaria: "Maiores de 18 anos"
        },
        {
            id: 4,
            imagem: OficinaDanca,
            titulo: "Oficina Estúdio de Dança",
            data: "Segunda-feira, às 07h",
            local: {
                rua: "R. Juquis",
                bairro: "Moema",
                numero: "287",
                cidade: "São Paulo",
                estado: "SP",
                nomeLocal: "Moema"
            },
            categorias: [
                {
                    categoria: "Dança",
                    cor:"var(--cor-rosa)"
                },
                {
                    categoria: "Música",
                    cor:"var(--cor-laranja)"
                }
            ],
            paragrafos: [
                {
                    descricao: "A Oficina Estúdio de Dança é uma escola referência na cidade de São Paulo com foco de atuação em formação de bailarinos contemporâneos."
                }
            ],
            faixaEtaria: "Livre para todos os públicos"
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
                estado: "SP",
                nomeLocal: "Centro Cultural São Paulo"
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
            faixaEtaria: "Livre para todos os públicos"
        },
        {
            id: 6,
            imagem: FabricaCultura,
            titulo: "Fábrica de Cultura Itaim Paulista",
            data: "Quinta a Domingo, 9h às 17h.",
            local: {
                rua: "R. Estudantes da China",
                bairro: "Itaim Paulista",
                numero: "500",
                cidade: "São Paulo",
                estado: "SP",
                nomeLocal: "Itaim Paulista"
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
            faixaEtaria: "Livre para todos os públicos"
        }
    ];

    return (
        <div className="container-comunidade">
            <div className="comunidade-header">
                <Menu></Menu>
                <h2>Explore a comunidade de eventos da sua qubrada!</h2>
            </div>
            <CarrosselEvento
                tituloCarrossel="histórico de eventos em são paulo"
                listaEvento={eventosComunidade}
            />
        
            <Footer></Footer>
        </div>
    );
}