import CampoForm from '../../components/CampoForm/CampoForm';
import "./PerfilParticipante.css";
import Menu from '../../static/Menu/Menu';
import Perfil from '../../assets/perfil-participante.png';
import Comentario from '../../components/Comentario/Comentario';
import { Link } from 'react-router-dom';
import Footer from '../../static/Footer/Footer';
import { useEffect, useState } from 'react';

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
import CarrosselMiniEventoComum from '../../components/CarrosselMiniEventoComum/CarrosselMiniEventoComum';
import Eccoa from '../../assets/miniaturas_eventos/eccoa.jpg';

export default function PerfilParticipante() {
    const [aba, setAba] = useState("comentarios");

    const eventosFavoritos = [
        {
            id: 1,
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
                    cor: "var(--cor-rosa)"
                },
                {
                    categoria: "Arte",
                    cor: "var(--cor-laranja)"
                },
                {
                    categoria: "Poema",
                    cor: "var(--cor-azul)"
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
            id: 2,
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
                    cor: "var(--cor-rosa)"
                },
                {
                    categoria: "Arte",
                    cor: "var(--cor-laranja)"
                },
                {
                    categoria: "Fábrica de Cultura",
                    cor: "var(--cor-azul)"
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
            id: 3,
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
                    cor: "var(--cor-rosa)"
                },
                {
                    categoria: "Teatro",
                    cor: "var(--cor-laranja)"
                },
                {
                    categoria: "Circo",
                    cor: "var(--cor-azul)"
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

    useEffect(() => {
        var titulo_comentarios = document.getElementById('titulo_comentarios');
        var titulo_favoritos = document.getElementById('titulo_favoritos');
        var titulo_seguindo = document.getElementById('titulo_seguindo');

        var container_comentarios = document.getElementById('container_comentarios');
        var container_favoritos = document.getElementById('container_favoritos');
        var container_seguindo = document.getElementById('container_seguindo');

        if (aba == "comentarios") {
            /*atvivando aba */
            titulo_comentarios.classList.add('guia-ativo');
            titulo_favoritos.classList.remove('guia-ativo');
            titulo_seguindo.classList.remove('guia-ativo');

            /*mostrando os comentários */
            container_comentarios.classList.add('show-container');
            container_comentarios.classList.remove('hidden-container');

            /*escondendo os favoritos */
            container_favoritos.classList.add('hidden-container');
            container_favoritos.classList.remove('show-container');

            /*escondendo o seguindo */
            container_seguindo.classList.add('hidden-container');
            container_seguindo.classList.remove('show-container');
        
        }
        if (aba == "favoritos") {
            /*atvivando aba */
            titulo_favoritos.classList.add('guia-ativo');
            titulo_comentarios.classList.remove('guia-ativo');
            titulo_seguindo.classList.remove('guia-ativo');

            /*mostrando os favoritos */
            container_favoritos.classList.add('show-container');
            container_favoritos.classList.remove('hidden-container');

            /*escondendo os comentários */
            container_comentarios.classList.remove('show-container');
            container_comentarios.classList.add('hidden-container');

            /*escondendo o seguindo */
            container_seguindo.classList.add('hidden-container');
            container_seguindo.classList.remove('show-container');

        }
        if (aba == "seguindo") {
            /*atvivando aba */
            titulo_seguindo.classList.add('guia-ativo');
            titulo_favoritos.classList.remove('guia-ativo');
            titulo_comentarios.classList.remove('guia-ativo');

            /*mostrando os seguindo */
            container_seguindo.classList.add('show-container');
            container_seguindo.classList.remove('hidden-container');

            /*escondendo os favoritos */
            container_favoritos.classList.add('hidden-container');
            container_favoritos.classList.remove('show-container');

            /*escondendo os comentários */
            container_comentarios.classList.add('hidden-container');
            container_comentarios.classList.remove('show-container');
        }
    }, [aba]);

    const comentarios = [
        {
            perfil: Perfil,
            usuario: "Guilherme",
            comentario: "Adorei a oficina de dança! Os instrutores são extremamente profissionais e as aulas são muito divertidas. Senti uma grande evolução na minha técnica.",
            nota: "4.8",
            tempo: "20 min"
        },
        {
            perfil: Perfil,
            usuario: "Guilherme",
            comentario: "Foi um curso muito enriquecedor, com professores experientes e conteúdo atualizado. A metodologia de ensino incentivou bastante a participação e o debate entre os alunos.",
            nota: "4.5",
            tempo: "30 min"
        },
        {
            perfil: Perfil,
            usuario: "Guilherme",
            comentario: "Foi uma noite incrível! A produção do show estava impecável e os artistas deram um verdadeiro espetáculo. Só gostaria que tivesse mais opções de alimentação no local.",
            nota: "4.7",
            tempo: "1h"
        }
    ];

    return (
        <div className="container-perfil-participante">
            <div className="perfil-participante__header">
                <Menu />
                <div className="perfil-participante__info">
                    <figure className="perfil-participante__foto">
                        <img src={Perfil} alt="Foto de perfil" />
                    </figure>
                    <div className="participante__editar">
                        <div className="nome-participante">
                            <h2>Guilherme</h2>
                            <Link to="/editar-perfil-participante">
                                <button>Editar perfil</button>
                            </Link>
                        </div>
                        <div className="dados-participante">
                            <span>3 comentários</span>
                            <span>1 seguindo</span>
                        </div>
                    </div>
                </div>
                <div className="perfil-participante__guia">
                    <div className="titulo-comentarios">
                        <span onClick={() => setAba((prevAba) => "comentarios")} id="titulo_comentarios">Comentários</span>
                    </div>
                    <div className="titulo-favoritos">
                        <span onClick={() => setAba((prevAba) => "favoritos")} id="titulo_favoritos">Favoritos</span>
                    </div>
                    <div className="titulo-seguindo">
                        <span onClick={() => setAba((prevAba) => "seguindo")} id="titulo_seguindo">Seguindo</span>
                    </div>
                </div>
            </div>
            <div className="perfil-participante__comentarios" id="container_comentarios">
                {
                    comentarios.map((item, index) => (
                        <div className="comentario__item" key={index}>
                            <Comentario
                                nome={item.usuario}
                                perfil={item.perfil}
                                nota={item.nota}
                                comentario={item.comentario}
                                tempo={item.tempo}
                            />
                        </div>
                    ))
                }
            </div>
            <div className="perfil-participante__carrossel hidden-container" id="container_favoritos">
                <CarrosselMiniEventoComum 
                    listaMiniEvento={eventosFavoritos}
                />
            </div>
            <div className="perfil-participante__seguindo" id="container_seguindo">
                <figure>
                    <img src={Eccoa} alt="Ícone do perfil do organizador"/>
                </figure>
                <div className="seguindo__descricao">
                    <span>Eccoa</span>
                    <span>12 eventos</span>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}
