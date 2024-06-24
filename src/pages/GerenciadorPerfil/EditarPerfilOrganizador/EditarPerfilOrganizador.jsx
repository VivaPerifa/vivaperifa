import './EditarPerfilOrganizador.css'
import CampoForm from '../../../components/CampoForm/CampoForm';
import BotaoColorido from '../../../components/BotaoColorido/BotaoColorido';
import MenuLateralPerfil from '../MenuLateralPerfil/MenuLateralPerfil';
import Perfil from "../../../assets/foto-organizador.png";

export default function EditarPerfilOrganizador() {
    return (
        <div className="container-editar-perfil">
            <MenuLateralPerfil></MenuLateralPerfil>

            <div className="editar-perfil-scroll">
                <div className="conteudo-editar-perfil">
                    <div className="editar-perfil__header">
                        <figure>
                            <img src={Perfil} alt="Perfil do organizador" />
                        </figure>
                    </div>
                    <div className="editar-perfil__body">
                        <div className="editar-perfil__description">
                            <h2>Dados do Perfil</h2>
                            <p>Esses dados ficarão disponíveis para todos os usuários, são informações públicas.</p>
                        </div>

                        <CampoForm id='nome-user-editar' tipo='text' legenda='Digite o nome de usuário' tamanhoCampo='100%' tituloForm="Nome de usuário" />
                        <CampoForm id='descrição-editar' tipo='text' legenda='Digite a descrição do seu perfil' tamanhoCampo='100%' tituloForm="Breve descrição" />

                        <div className="editar-perfil__description">
                            <h2>Redes Sociais</h2>
                            <p>Adicione as suas redes sociais se quiser, elas ficarão disponíveis para o público no seu perfil.</p>
                        </div>

                        <CampoForm id='x-editar' tipo='text' legenda='Digite o @ da sua rede social' tamanhoCampo='100%' tituloForm="X" />
                        <CampoForm id='insta-editar' tipo='text' legenda='Digite o @ da sua rede social' tamanhoCampo='100%' tituloForm="Instagram" />
                        <CampoForm id='face-editar' tipo='text' legenda='Digite o @ da sua rede social' tamanhoCampo='100%' tituloForm="Facebook" />

                        <div className="editar-perfil__description">
                            <h2>Dados de acesso</h2>
                            <p>Seus dados de acesso são necessárias para possibilitar o acesso a sua conta, essas informações não estarão visíveis no seu perfil.</p>
                        </div>

                        <CampoForm id='email-editar' tipo='text' legenda='Digite o seu melhor e-mail' tamanhoCampo='100%' tituloForm="E-mail" />
                        <CampoForm id='senha-editar' tipo='text' legenda='Digite a sua senha' tamanhoCampo='100%' tituloForm="Senha" />
                        
                        <div className="editar-perfil__description">
                            <h2>Dados pessoais</h2>
                            <p>Adicione as informações da sua empresa, para que possamos valida-lo como organizador de eventos. Os seus dados pessoais não estarão disponíveis no seu perfil.</p>
                        </div>
                        
                        <CampoForm id='org-editar' tipo='text' legenda='Digite o nome da organização' tamanhoCampo='100%' tituloForm="Nome da Organização" />
                        <CampoForm id='cnpj-editar' tipo='text' legenda='Digite o CNPJ da organização' tamanhoCampo='100%' tituloForm="CNPJ" />
                        <CampoForm id='tel-editar' tipo='text' legenda='Digite o telefone dfa organização' tamanhoCampo='100%' tituloForm="Telefone" />

                        <div className="editar-perfil__botoes">
                            <BotaoColorido
                                legendaBotao="Descartar"
                                larguraBotao="180px"
                            />
                            <BotaoColorido
                                legendaBotao="Salvar"
                                larguraBotao="180px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}