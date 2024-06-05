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
import logoBranca from "../../assets/logoIdentidadeCirculo.png";
import logoAmarela from "../../assets/logoIdentidadeAmarelo.png"
import logoLaranja from "../../assets/logoIdentidadeLaranja.png"
import logoAzul from "../../assets/logoIdentidadeAzul.png";
import adesivos from "../../assets/adesivosIdentidade.png";
import './SobreNos.css';
import Header from '../../static/Header/Header';


export default function SobreNos() {
    return (
        <div className="corpo-sobre-nos">
            <Header
                tipoCabecalho="sobre-nos"
            />

            <div className="principal-sobre-nos">
                <div className="container-sobre-nos">
                    <div className="square-sobre-nos">
                        <div className="bloco-sobre-nos">
                            <div className="icone-sobre-nos">
                                <img src={Missao} alt="Missão" />
                            </div>
                            <div className="conteudo-sobre-nos">
                                <h1 className="title-sobre-nos">Missão</h1>
                                <p className="texto-sobre-nos">Promover a inclusão e valorização da cultura e dos talentos locais, viabilizando o desenvolvimento social e fortalecendo o senso de comunidade na periferia.</p>
                            </div>
                        </div>
                        <div className="bloco-sobre-nos">
                            <div className="icone-sobre-nos">
                                <img src={Visao} alt="Visão" />
                            </div>
                            <div className="conteudo-sobre-nos">
                                <h1 className="title-sobre-nos">Visão</h1>
                                <p className="texto-sobre-nos">Ser referência como a principal plataforma de eventos das periferias do mundo, com foco no desenvolvimento das oportunidades culturais e empreendedoras da região, aplicando estratégias de divulgação únicas.</p>
                            </div>
                        </div>
                        <div className="bloco-sobre-nos">
                            <div className="icone-sobre-nos">
                                <img src={Valores} alt="Valores" />
                            </div>
                            <div className="conteudo-sobre-nos">
                                <h1 className="title-sobre-nos">Valores</h1>
                                <p className="texto-sobre-nos">Integridade, comunicação, colaboração, criatividade e inclusão.</p>
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
                        <a href="https://www.linkedin.com/in/j%c3%a9ssica-souza-590590224" className="linkedin-icon" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                            Linkedin/Jéssica
                        </a>
                    </div>

                    <div className="item-equipe">
                        <img src={Raquel} alt="" />
                        <div className="descricao-equipe">
                            <h1 className="nomes">Raquel Costa</h1>
                            <a href="https://www.linkedin.com/in/raquel-moreira-da-costa-372383236" className="linkedin-icon" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                                Linkedin/Raquel
                            </a>
                        </div>
                    </div>

                    <div className="item-equipe">
                        <img src={Larissa} alt="" />
                        <h1 className="nomes">Larissa Dias</h1>
                        <a href="https://www.linkedin.com/in/larissa-rocha-dias" className="linkedin-icon" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                            Linkedin/Larissa
                        </a>
                    </div>

                    <div className="item-equipe">
                        <img src={Erick} alt="" />
                        <h1 className="nomes">Erick Gabriel</h1>
                        <a href="https://www.linkedin.com/in/erick-agostinho-644187276" className="linkedin-icon" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                            Linkedin/Erick
                        </a>
                    </div>
                </div>


                <div className="equipe-2">
                    <div className="item-equipe">
                        <img src={Nathan} alt="" />
                        <h1 className="nomes">Nathan Rabelo</h1>
                        <a href="https://www.linkedin.com/in/nathan-viana-rabelo-67a616b3" className="linkedin-icon" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                            Linkedin/Nathan
                        </a>
                    </div>

                    <div className="item-equipe">
                        <img src={Renan} alt="" />
                        <h1 className="nomes">Renan Anacleto</h1>
                        <a href="https://www.linkedin.com/in/renan-oliveira-4368192bb" className="linkedin-icon" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                            Linkedin/Renan
                        </a>
                    </div>

                    <div className="item-equipe">
                        <img src={Diego} alt="" />
                        <h1 className="nomes">Diego Guarnieri</h1>
                        <a href="https://www.linkedin.com/in/diegoguarnieri" className="linkedin-icon" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                            Linkedin/Diego
                        </a>
                    </div>

                    <div className="item-equipe">
                        <img src={Kaue} alt="" />
                        <h1 className="nomes">Kaue Souza</h1>
                        <a href="https://www.linkedin.com/in/kaue-caires" className="linkedin-icon" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                            Linkedin/Kaue
                        </a>
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

            <div className="tiposDeLogo-identidade">
                <div className="logoBranca">
                    <figure>
                        <img src={logoBranca} alt="" />
                    </figure>
                </div>

                <div className="3logoIdentidade">
                    <div className="logo-colorida">

                        <figure className="logoAmarela">
                            <img src={logoAmarela} alt="" />
                        </figure>
                        <figure className="logoLaranja">
                            <img src={logoLaranja} alt="" />
                        </figure>
                    </div>
                    <figure className="logoAzul">
                        <img src={logoAzul} alt="" />
                    </figure>
                </div>
            </div>

            <div className="adesivosIdentidade">
                <figure className="brindes-identidade">
                    <img src={adesivos} alt="" />
                </figure>

                <div className="cores">
                    <div className="container-vermelho">
                        <p className="texto-cores">#D90504</p>
                    </div>

                    <div className="container-rosa">
                        <p className="texto-cores">#D9043E</p>
                    </div>

                    <div className="container-laranja">
                        <p className="texto-cores">#F28705</p>
                    </div>

                    <div className="container-amarelo">
                        <p className="texto-cores">#F2B705</p>
                    </div>

                    <div className="container-azul">
                        <p className="texto-cores">#033E8C</p>
                    </div>

                </div>
            </div>
        </div >


    )
}