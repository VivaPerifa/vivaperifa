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


export default function SobreNos() {
    return (
        <div className="corpo-sobreNos">
            
            <div className="container-sobreNos">
                    <div id="square">
                        <div className="conteudo-sobreNos">
                            <div className="missao">
                                <div className="icone">
                                    <img src={Missao} alt="" />
                                </div>
                                <div className="descricao">
                                    <h1 className="title">Missão</h1>
                                    <p className="texto">Promover a inclusão e valorização da cultura <br /> e dos talentos locais,  viabilizando o <br /> desenvolvimento social e fortalecendo o <br /> senso de comunidade na periferia.</p>
                                </div>
                            </div>

                            <div className="visao">
                                <div className="icone">
                                    <img src={Visao} alt="" />
                                </div>
                                <div className="descricao">
                                    <h1 className="title">Visão</h1>
                                    <p className="texto">Ser referência como a principal plataforma de <br /> eventos das periferias do mundo, com foco no <br /> desenvolvimento das oportunidades culturais e <br />empreendedoras da região, aplicando estratégias <br /> de divulgação únicas.</p>
                                </div>
                            </div>

                            <div className="valores">
                                <div className="icone">
                                    <img src={Valores} alt="" />
                                </div>
                                <div className="descricao">
                                    <h1 className="title">Valores</h1>
                                    <p className="texto">Integridade, comunicação, colaboração, <br /> criatividade e inclusão.</p>
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
                        <p className="funcao-equipe">product Owner & Dev FullStack</p>
                    </div>

                    <div className="item-equipe">
                        <img src={Raquel} alt="" />
                        <div className="descricao-equipe">
                            <h1 className="nomes">Raquel Costa</h1>
                            <p className="funcao-equipe">Scrum Master & Dev FullStack</p>
                        </div>
                    </div>

                    <div className="item-equipe">
                        <img src={Larissa} alt="" />
                        <h1 className="nomes">Larissa Dias</h1>
                        <p className="funcao-equipe">Financeiro & Dev Front-End</p>
                    </div>

                    <div className="item-equipe">
                        <img src={Erick} alt="" />
                        <h1 className="nomes">Erick Gabriel</h1>
                        <p className="funcao-equipe">Dev Front-End</p>
                    </div>
                </div>


                <div className="equipe-2">
                    <div className="item-equipe">
                        <img src={Nathan} alt="" />
                        <h1 className="nomes">Nathan Rabelo</h1>
                        <p className="funcao-equipe" >Dev FullStack</p>
                    </div>

                    <div className="item-equipe">
                        <img src={Renan} alt="" />
                        <h1 className="nomes">Renan Anacleto</h1>
                        <p className="funcao-equipe">Dev FullStack & Designer</p>
                    </div>

                    <div className="item-equipe">
                        <img src={Diego} alt="" />
                        <h1 className="nomes">Diego Guarnieri</h1>
                        <p className="funcao-equipe">Dev Front-end & Designer</p>
                    </div>

                    <div className="item-equipe">
                        <img src={Kaue} alt="" />
                        <h1 className="nomes">Kaue Souza</h1>
                        <p className="funcao-equipe">Dev Back-End</p>
                    </div>
                </div>
            </div>

        </div>


    )
}