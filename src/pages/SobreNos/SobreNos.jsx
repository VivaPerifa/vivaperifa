import Missao from "../../assets/iconeMissao.png";
import Visao from "../../assets/iconeVissao.png";
import Valores from "../../assets/iconeValores.png";
import Logo from "../../assets/logoVivaPerifa.png";
import ImagemPerifa from "../../assets/ImagemPerifa.png";
import Jessica from "../../assets/jessica.png";
import Raquel from "../../assets/raquel.png";
import Larissa from "../../assets/larissa.png";
import Erick from "../../assets/erick.png";
import Nathan from "../../assets/nathan.png";
import Renan from "../../assets/renan.png";
import Diego from "../../assets/diego.png";
import Kaue from "../../assets/kaue.png";
import './SobreNos.css';
import Menu from '../../static/Menu/Menu';
import Footer from '../../static/Footer/Footer';


export default function SobreNos() {
    return (
        <div className="corpo-sobre-nos">
            <div className="sobre-nos-header">
                <Menu></Menu>
            </div>

            <div className="principal-sobre-nos">
                <div className="container-sobre-nos">
                    <div className="square-sobre-nos">
                        <div className="bloco-sobre-nos">
                            <div className="sobre-nos-flex">
                                <div className="icone-sobre-nos">
                                    <img src={Missao} alt="Missão" />
                                </div>
                                <div className="conteudo-sobre-nos">
                                    <h1 className="title-sobre-nos">Nosso Corre</h1>
                                    <p className="texto-sobre-nos">Nosso corre é fortalecer as quebradas. Queremos mostrar pro mundo o talento e a garra do povo da periferia.</p>
                                </div>
                            </div>

                            <div className="sobre-nos-flex">
                                <div className="icone-sobre-nos">
                                    <img src={Visao} alt="Visão" />
                                </div>
                                <div className="conteudo-sobre-nos">
                                    <h1 className="title-sobre-nos"> Nosso Sonho</h1>
                                    <p className="texto-sobre-nos">Nosso sonho é transformar as periferias em lugares de referência, onde todos têm orgulho de viver e cresce.</p>
                                </div>
                            </div>

                            <div className="sobre-nos-flex">
                                <div className="icone-sobre-nos">
                                    <img src={Valores} alt="Valores" />
                                </div>
                                <div className="conteudo-sobre-nos">
                                    <h1 className="title-sobre-nos">Nossa Postura</h1>
                                    <p className="texto-sobre-nos">Respeitar as diferenças e lutar por um mundo mais igual. Valorizando cada história e cada conquista da nossa gente.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-perifa">

                <div className="vivaperifa">
                    <div className="titulo-perifa">
                        <h1 className="vivaperifa-title" >O que é o</h1>
                        <img className="logo-vivaperifa" src={Logo} alt="" />
                        <h1 className="vivaperifa-title2">?</h1>
                    </div>

                    <p className="vivaperifa-texto">O VivaPerifa é uma plataforma digital que conecta e fortalece a vida  cultural e comunitária nas periferias. Nosso objetivo é proporcionar oportunidades de participação, aprendizado e engajamento em diversas atividades locais. Através do VivaPerifa, moradores das periferias podem  descobrir, compartilhar e participar dessas atividades, promovendo  inclusão, desenvolvimento comunitário e empoderamento.</p>
                </div>

                <div className="imagem-vivaperifa">
                    <figure className="imagem-vivaperifa">
                        <img src={ImagemPerifa} alt="" />
                    </figure>
                </div>

            </div>

            <div className="titulo-equipe">
                <h2>Equipe</h2>
            </div>

            <div className="conteudo-equipe">
                <div className="equipe-1">

                    <div className="item-equipe">
                        <img src={Jessica} alt="" />
                        <h1 className="nomes">Jéssica Souza</h1>
                        <div className="icones-sobre-nos">
                            <a href="https://www.linkedin.com/in/j%c3%a9ssica-souza-590590224" className="linkedin-icon" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/JessiSouza03" className="github-icon" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>

                    <div className="item-equipe">
                        <img src={Raquel} alt="" />
                        <div className="descricao-equipe">
                            <h1 className="nomes">Raquel Costa</h1>
                            <div className="icones-sobre-nos">
                                <a href="https://www.linkedin.com/in/raquel-moreira-da-costa-372383236" className="linkedin-icon" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="https://github.com/Leuquary" className="github-icon" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="item-equipe">
                        <img src={Larissa} alt="" />
                        <h1 className="nomes">Larissa Dias</h1>
                        <div className="icones-sobre-nos">
                            <a href="https://www.linkedin.com/in/larissa-rocha-dias" className="linkedin-icon" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/larissadias-dev" className="github-icon" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>

                    <div className="item-equipe">
                        <img src={Erick} alt="" />
                        <h1 className="nomes">Erick Gabriel</h1>
                        <div className="icones-sobre-nos">
                            <a href="https://www.linkedin.com/in/erick-agostinho-644187276" className="linkedin-icon" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/ErickGabrielDev" className="github-icon" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>


                <div className="equipe-2">
                    <div className="item-equipe">
                        <img src={Nathan} alt="" />
                        <h1 className="nomes">Nathan Rabelo</h1>
                        <div className="icones-sobre-nos">
                            <a href="https://www.linkedin.com/in/nathan-viana-rabelo-67a616b3" className="linkedin-icon" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/NathanVianaDev" className="github-icon" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>

                    <div className="item-equipe">
                        <img src={Renan} alt="" />
                        <h1 className="nomes">Renan Anacleto</h1>
                        <div className="icones-sobre-nos">
                            <a href="https://www.linkedin.com/in/renan-oliveira-4368192bb" className="linkedin-icon" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/anacletorenan" className="github-icon" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>

                    <div className="item-equipe">
                        <img src={Diego} alt="" />
                        <h1 className="nomes">Diego Guarnieri</h1>
                        <div className="icones-sobre-nos">
                            <a href="https://www.linkedin.com/in/diegoguarnieri" className="linkedin-icon" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/DiegoEmmanuelDev" className="github-icon" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>

                    <div className="item-equipe">
                        <img src={Kaue} alt="" />
                        <h1 className="nomes">Kaue Souza</h1>
                        <div className="icones-sobre-nos">
                            <a href="https://www.linkedin.com/in/kaue-caires" className="linkedin-icon" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/kauecodify" className="github-icon" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-identidade">
                <div>
                    <div className="titulo-identidade">
                        <h2 className="title-identidade">Identidade </h2>
                        <h2 className="title-visual"> Visual</h2>
                    </div>
                    <p className="texto-identidade">A identidade visual do VivaPerifa é uma expressão vibrante da energia e diversidade das periferias. Com tons de vermelho, Rosa, amarelo, laranja e azul, nossa marca transmite dinamismo, otimismo, alegria e confiança. Essas cores refletem a vontade de agir, a atmosfera positiva e acolhedora, e a serenidade que buscamos proporcionar aos nossos usuários.</p>
                </div>

                <div className="logo-identidade">
                    <figure className="imagem-identidade">
                        <img src={Logo} alt="" />
                    </figure>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}