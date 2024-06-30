import CampoForm from '../../components/CampoForm/CampoForm';
import "./PerfilParticipante.css";
import Menu from '../../static/Menu/Menu';
import Perfil from '../../assets/perfil-participante.png';
import Comentario from '../../components/Comentario/Comentario';
import { Link } from 'react-router-dom';
import Footer from '../../static/Footer/Footer';
import { useEffect, useState } from 'react';

export default function PerfilParticipante() {
    const [aba, setAba] = useState("comentários");

    useEffect(() => {
        var titulo_comentarios = document.getElementById('titulo_comentarios');
        var titulo_favoritos = document.getElementById('titulo_favoritos');
        var titulo_seguindo = document.getElementById('titulo_seguindo');

        if(aba=="comentários"){
            /*atvivando aba */
            titulo_comentarios.classList.add('guia-ativo');
            titulo_favoritos.classList.remove('guia-ativo');
            titulo_seguindo.classList.remove('guia-ativo');
        }
        if(aba=="favoritos"){
            /*atvivando aba */
            titulo_favoritos.classList.add('guia-ativo');
            titulo_comentarios.classList.remove('guia-ativo');
            titulo_seguindo.classList.remove('guia-ativo');
        }
        if(aba=="seguindo"){
            /*atvivando aba */
            titulo_seguindo.classList.add('guia-ativo');
            titulo_favoritos.classList.remove('guia-ativo');
            titulo_comentarios.classList.remove('guia-ativo');
        }   
    },[aba]);

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
    ]
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
                            <span>2 seguindo</span>
                        </div>
                    </div>
                </div>
                <div className="perfil-participante__guia">
                    <div id='titulo_comentarios'>
                        <span onClick={() => setAba((prevAba) => "comentários")}>Comentários</span>
                    </div>
                    <div id='titulo_favoritos'>
                        <span onClick={() => setAba((prevAba) => "favoritos")}>Favoritos</span>
                    </div>
                    <div id='titulo_seguindo'>
                        <span onClick={() => setAba((prevAba) => "seguindo")}>Seguindo</span>
                    </div>
                </div>
            </div>
            <div className="perfil-participante__comentarios">
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
            <Footer></Footer>
        </div>
    );
}
