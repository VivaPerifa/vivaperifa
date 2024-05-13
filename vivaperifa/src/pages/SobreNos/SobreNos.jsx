import css from "../SobreNos/SobreNos.css";
import missao from "../../assets/iconeMissao.png";
import visao from "../../assets/iconeVissao.png";
import valores from "../../assets/iconeValores.png";
import logo from "../../assets/logoVivaPerifa.png";
import imagemPerifa from "../../assets/ImagemPerifa.png";


export default function SobreNos() {
    return (
        <div className="conteudo">
            <div className="main">
                <div className="container">
                    <div id="square">
                        <div className="conteudo">
                            <div className="missao">
                                <div className="icone">
                                    <img src={missao} alt="" />
                                </div>
                                <div className="descricao">
                                    <h1 className="title">Missão</h1>
                                    <p className="texto">Promover a inclusão e valorização da cultura <br /> e dos talentos locais,  viabilizando o <br /> desenvolvimento social e fortalecendo o <br /> senso de comunidade na periferia.</p>
                                </div>
                            </div>

                            <div className="visao">
                                <div className="icone">
                                    <img src={visao} alt="" />
                                </div>
                                <div className="descricao">
                                    <h1 className="title">Visão</h1>
                                    <p className="texto">Ser referência como a principal plataforma de <br /> eventos das periferias do mundo, com foco no <br /> desenvolvimento das oportunidades culturais e <br />empreendedoras da região, aplicando estratégias <br /> de divulgação únicas.</p>
                                </div>
                            </div>

                            <div className="valores">
                                <div className="icone">
                                    <img src={valores} alt="" />
                                </div>
                                <div className="descricao">
                                    <h1 className="title">Valores</h1>
                                    <p className="texto">Integridade, comunicação, colaboração, <br /> criatividade e inclusão.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="vivaperifa">
                <h1 className="vivaperifa-title" >O que é o
                    <img className="logo-vivaperifa" src={logo} alt="" />?</h1>

                <p className="vivaperifa-texto">O VivaPerifa é uma plataforma digital que conecta <br /> e fortalece a vida  cultural e comunitária nas periferias. <br /> Nosso objetivo é proporcionar  oportunidades de <br /> participação, aprendizado e engajamento em diversas <br /> atividades locais. Através do VivaPerifa, moradores das <br /> periferias podem  descobrir, compartilhar e participar <br /> dessas atividades, promovendo  inclusão, desenvolvimento <br /> comunitário e empoderamento.</p>

                <div className="imagem-vivaperifa">
                    <img src={imagemPerifa} alt="" />
                </div>
            </div>
        </div>
    )
}