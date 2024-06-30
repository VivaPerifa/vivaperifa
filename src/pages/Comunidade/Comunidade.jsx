import CarrosselEvento from '../../components/CarrosselEvento/CarrosselEvento';
import './Comunidade.css';

import Evento11 from "../../assets/evento_feira.png";
import Menu from '../../static/Menu/Menu';
import Footer from '../../static/Footer/Footer';

import Perfil from '../../assets/perfil-participante.png';

/*miniaturas eventos */
import OficinaDancaComunidade from '../../assets/miniaturas_eventos/oficina_danca_comunidade.jpg';
import TendaHistoria from '../../assets/miniaturas_eventos/tenda_historia.png';
import FeriasEscolares from '../../assets/miniaturas_eventos/ferias_escolares.png';
import Sarau from '../../assets/miniaturas_eventos/sarau.png';
import Piseiro from '../../assets/miniaturas_eventos/piseiro.jpg';
import Curso from '../../assets/miniaturas_eventos/curso.png';

/*organizadores*/
import Eccoa from '../../assets/miniaturas_eventos/eccoa.jpg';
import CTN from '../../assets/miniaturas_eventos/ctn.jpg';
import CasaAkueran from '../../assets/miniaturas_eventos/casa_akueran.jpg';
import GalpaoBoneco from '../../assets/miniaturas_eventos/galpao_boneco.webp';
// import EscolaMamaeAntonia from '../../assets/miniaturas_eventos/escola_mamae_antonia.jpg';
import CeuVilaAlpina from '../../assets/miniaturas_eventos/ceu_vila_alpina.png';

/*perfis */
import AnaClaudia from '../../assets/perfis/ana_claudia.png';
import CarlosMenezes from '../../assets/perfis/carlos_menezes.png';
import Eliza from '../../assets/perfis/eliza.png';
import LucianaMartins from '../../assets/perfis/luciana_martins.png';
import FelipeSouza from '../../assets/perfis/felipe_souza.png';
import JoaoPereira from '../../assets/perfis/joao_pereira.png';
import RicardoAlmeida from '../../assets/perfis/ricardo_almeida.png';
import MarianaLopes from '../../assets/perfis/marina_lopes.png';
import GuilhermeGiovanni from '../../assets/perfis/guilherme.png';
import ThiagoCosta from '../../assets/perfis/thiago_costa.png';
import LarissaPereira from '../../assets/perfis/larissa_pereira.png';
import SandraNunes from '../../assets/perfis/sandra_nunes.png';
import AndreSouza from '../../assets/perfis/andre_souza.png';
import FernandoLima from '../../assets/perfis/fernando_lima.png';
import MarcoAurelio from '../../assets/perfis/marco_aurelio.png';
import AnaOliveira from '../../assets/perfis/ana_oliveira.png';
import RafaelSantos from '../../assets/perfis/rafael_santos.png';
import CarlaMedonca from '../../assets/perfis/carla_medonca.png';

export default function Comunidade(){
    
    const eventosComunidade = [
        {
            id: 1,
            imagem: OficinaDancaComunidade,
            titulo: "Aula de Dança",
            data: "Quinta, 08 de Mai, 18:30h às 20h",
            local: {
                rua: "R. João Pedro Lecór",
                bairro: "Vila Alpina",
                numero: "144",
                cidade: "São Paulo",
                estado: "SP"
            },
            categorias: [
                {
                    categoria: "Arte",
                    cor:"var(--cor-rosa)"
                },
                {
                    categoria: "Dança",
                    cor:"var(--cor-laranja)"
                }
            ],
            paragrafos: [
                {
                    descricao: "A oficina de dança oferece um espaço vibrante e acolhedor onde participantes de todas as idades e níveis podem explorar diversas modalidades de dança. Com instrutores experientes, as aulas são projetadas para desenvolver habilidades técnicas e expressividade artística. O ambiente colaborativo incentiva a interação social e a criatividade, promovendo bem-estar físico e mental. Além disso, a oficina proporciona oportunidades para apresentações e eventos, enriquecendo a experiência dos participantes. Venha descobrir o prazer e a energia transformadora da dança!"
                }
            ],
            faixaEtaria: "Maiores de 16 anos",
            organizador: {
                imagem: CeuVilaAlpina,
                nome: "CEU Vila Alpina",
                eventos: 34
            },
            qtdComentarios: "50",
            comentarios: [
                {
                    perfil: AnaClaudia,
                    usuario: "Ana Cláudia",
                    comentario: "Adorei a oficina de dança! Os instrutores são extremamente profissionais e as aulas são muito divertidas. Senti uma grande evolução na minha técnica.",
                    nota: "4.8",
                    tempo: "20 min"
                },
                {
                    perfil: CarlosMenezes,
                    usuario: "Carlos Menezes",
                    comentario: "A oficina é boa, mas achei que poderia haver mais variação nos estilos de dança. No entanto, a energia do lugar é incrível e fiz muitos amigos.",
                    nota: "3.7",
                    tempo: "30 min"
                },
                {
                    perfil: Eliza,
                    usuario: "Eliza Rocha",
                    comentario: "Não gostei muito da organização das aulas e senti que os grupos eram muito grandes, dificultando a atenção individual. Espero que melhorem esses pontos.",
                    nota: "2.3",
                    tempo: "1h"
                }
            ]   
        },
        {
            id: 2,
            imagem: TendaHistoria,
            titulo: "Tenda de Histórias",
            data: "Domingo, 07 de Mar, 16h às 19h",
            local: {
                rua: "R. Policial Giovanni",
                bairro: "Jardim Primavera",
                numero: "400",
                cidade: "São Paulo",
                estado: "SP"
            },
            categorias: [
                {
                    categoria: "Contação de histórias",
                    cor:"var(--cor-rosa)"
                }
            ],
            paragrafos: [
                {
                    descricao: "Acreditamos que a escola é um espaço privilegiado de vida e aprendizagem. Que a ludicidade, a brincadeira e o faz de conta devem estar presente no cotidiano escolar. Organizamos a rotina de 140 crianças de 0 a 05 anos a fim de que experimentem situações diversas que a ajude sentir-se segura e acolhida, utilizando este espaço para ampliar suas relações sociais e afetivas,apropriando-se dos mais diferentes tipos de linguagem (oral, escrita, corporal, plástica, musical e outras)de acordo com suas capacidades e necessidades."
                }
            ],
            faixaEtaria: "Livre para todos os públicos",
            organizador: {
                imagem: GalpaoBoneco,
                nome: "Escola Mamãe Antônia",
                eventos: 12
            },
            qtdComentarios: "102",
            comentarios: [
                {
                    perfil: JoaoPereira,
                    usuario: "João Pereira",
                    comentario: "O evento de contação de histórias foi simplesmente mágico! As histórias eram cativantes e os contadores de histórias eram muito expressivos.",
                    nota: "5.0",
                    tempo: "35 min"
                },
                {
                    perfil: LucianaMartins,
                    usuario: "Luciana Martins",
                    comentario: "Achei o evento bem organizado e as histórias eram ótimas. No entanto, o espaço estava um pouco lotado, o que dificultou a visualização em alguns momentos.",
                    nota: "4.2",
                    tempo: "40 min"
                },
                {
                    perfil: FelipeSouza,
                    usuario: "Felipe Souza",
                    comentario: "As crianças adoraram o evento! Foi muito interativo e divertido. Os contadores conseguiram prender a atenção de todos.",
                    nota: "4.8",
                    tempo: "1h"
                }
            ]      
        },
        {
            id: 3,
            imagem: FeriasEscolares,
            titulo: "Férias no Galpão dos Bonecos",
            data: "10 a 17 de Jan, às 17h",
            local: {
                rua: "R. Colariano",
                bairro: "Vila Romana",
                numero: "622",
                cidade: "São Paulo",
                estado: "SP"
            },
            categorias: [
                {
                    categoria: "Férias",
                    cor:"var(--cor-rosa)"
                }
            ],
            paragrafos: [
                {
                    descricao: "As Férias chegaram e aqui no Galpão dos Bonecos a gente vai receber as crianças para uma imersão ao universo do Teatro de Bonecos!"
                },
                {
                    descricao: "O passeio dura 3 horas e você pode deixar seu filho ou sua filha conosco e buscar ao final da visita, para crianças de 5 a 9 anos."
                },
                {
                    descricao: "Visita ao acervo – 1 hora: A gente faz a visita guiada aos mais de 800 bonecos expostos pelo Galpão, com brincadeiras e muitas histórias divertidas."
                },
                {
                    descricao: "Lanche – 30 minutos: Após a visita guiada a gente faz uma pausa para o lanche, que deve ser trazido pela criança – não fornecemos o lanche!"
                },
                {
                    descricao: "Espetáculo – 30 minutos: Depois do lanche é hora do espetáculo, faremos a apresentação da peça Filhotes do Brasil, um sucesso de público e queridinho da Galpão dos Bonecos."
                },
                {
                    descricao: "Oficina – 1 hora: Depois da peça, chegou o momento de colocar a mão na massa e criar seu próprio boneco, que poderá ser levado para casa!"
                }
            ],
            faixaEtaria: "Maiores de 18 anos",
            organizador: {
                imagem: GalpaoBoneco,
                nome: "Galpão dos Bonecos",
                eventos: 22
            },
            qtdComentarios: "150",
            comentarios: [
                {
                    perfil: RicardoAlmeida,
                    usuario: "Ricardo Almeida",
                    comentario: "O teatro com bonecos foi maravilhoso! Os detalhes e a expressão dos bonecos eram incríveis, e a história foi muito envolvente. Recomendo para todas as idades!",
                    nota: "5.0",
                    tempo: "10 min"
                },
                {
                    perfil: MarianaLopes,
                    usuario: "Mariana Lopes",
                    comentario: "Adorei o espetáculo! Os bonecos eram muito bem feitos e a performance foi cheia de emoção e humor. Apenas achei o som um pouco baixo em alguns momentos.",
                    nota: "4.3",
                    tempo: "50 min"
                },
                {
                    perfil: GuilhermeGiovanni,
                    usuario: "Guilherme Giovanni",
                    comentario: "Foi uma experiência encantadora para toda a família. As crianças ficaram fascinadas pelos bonecos e a narrativa foi muito criativa. Só gostaria que fosse um pouco mais longo.",
                    nota: "4.7",
                    tempo: "2h"
                }
            ]   
        },
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