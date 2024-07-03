import CampoForm from '../../components/CampoForm/CampoForm';
import Perfil from '../../assets/perfil-participante.png';
import "./EditarPerfilParticipante.css";
import Menu from '../../static/Menu/Menu';
import Footer from '../../static/Footer/Footer';
import {Link} from 'react-router-dom';

export default function EditarPerfilParticipante() {
    return (
        <div className="editar-perfil-participante">
            <Menu corFundo="linear-gradient(90deg, #D9043E 0%, #F28705 100%)"></Menu>
            <div className="editar-perfil-participante__conteudo">
                <div className="editar-foto-participante">
                    <div className="foto-e-dados">
                        <div className="foto-perfil">
                            <img src={Perfil} alt="Foto do Participante" />
                        </div>
                        <div className="dados-perfil">
                            <h2>Guilherme</h2>
                            <p>@guizini2024</p>
                        </div>
                        <button className="alterar-foto-button">Alterar Foto</button>
                    </div>
                </div>
                <div className="campo-formulario">
                    <CampoForm id='nome-user-nomecompleto' tipo='text' legenda='Digite seu nome' tamanhoCampo='80%' tituloForm="Nome Completo" />
                    <CampoForm id='nome-user-nomedeusuario' tipo='text' legenda='Digite seu nome de usuário' tamanhoCampo='80%' tituloForm="Nome de usuário" />
                    <CampoForm id='nome-user-email' tipo='text' legenda='Digite o seu e-mail' tamanhoCampo='80%' tituloForm="E-mail" />
                    <CampoForm id='nome-user-senha' tipo='text' legenda='Digite sua senha' tamanhoCampo='80%' tituloForm="Senha" />
                    <div className="botoes-perfil-participante">
                        <Link to="/perfil-participante">
                            <button>Descartar</button>
                        </Link>
                        <button>Salvar</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}
