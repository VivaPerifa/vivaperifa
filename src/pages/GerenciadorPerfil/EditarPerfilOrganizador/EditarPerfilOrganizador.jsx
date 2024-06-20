import './EditarPerfilOrganizador.css'
import CampoForm from '../../../components/CampoForm/CampoForm';
import BotaoColorido from '../../../components/BotaoColorido/BotaoColorido';

export default function EditarPerfilOrganizador() {
    return (
        <div className="editar-perfil">
            <div className="container-editar-perfil">
                <div className="container-editar">
                    <div className="banner-perfil-editar"></div>
                    <div className="perfil-img-editar">
                        <img src="https://cdn.oantagonista.com/uploads/2022/08/reproducao_redessociais.jpeg" alt="Foto de Perfil" className="foto-perfil-menu-lateral" />
                    </div>
                    <div className="info-perfil">
                        <h2>Dados do Perfil</h2>

                        <p>Esses dados ficarão disponíveis para todos os usuários, são informações públicas.</p>

                        <CampoForm id='nome-user-editar' tipo='text' legenda='Digite o nome de usuário' tamanhoCampo='100%' tituloForm="Nome de usuário" />

                        <CampoForm id='descrição-editar' tipo='text' legenda='Digite a descrição do seu perfil' tamanhoCampo='100%' tituloForm="Breve descrição" />

                        <h2>Redes Sociais</h2>

                        <p>Adicione as suas redes sociais se quiser, elas ficarão disponíveis para o público no seu perfil.</p>

                        <CampoForm id='x-editar' tipo='text' legenda='Digite o @ da sua rede social' tamanhoCampo='100%' tituloForm="X" />

                        <CampoForm id='insta-editar' tipo='text' legenda='Digite o @ da sua rede social' tamanhoCampo='100%' tituloForm="Instagram" />

                        <CampoForm id='face-editar' tipo='text' legenda='Digite o @ da sua rede social' tamanhoCampo='100%' tituloForm="Facebook" />

                        <h2>Dados de acesso</h2>

                        <p>Seus dados de acesso são necessárias para possibilitar o acesso a sua conta, essas informações não estarão visíveis no seu perfil.</p>

                        <CampoForm id='email-editar' tipo='text' legenda='Digite o seu melhor e-mail' tamanhoCampo='100%' tituloForm="E-mail" />

                        <CampoForm id='senha-editar' tipo='text' legenda='Digite a sua senha' tamanhoCampo='100%' tituloForm="Senha" />

                        <h2>Dados pessoais</h2>

                        <p>Adicione as informações da sua empresa, para que possamos valida-lo como organizador de eventos. Os seus dados pessoais não estarão disponíveis no seu perfil.</p>

                        <CampoForm id='org-editar' tipo='text' legenda='Digite o nome da organização' tamanhoCampo='100%' tituloForm="Nome da Organização" />

                        <CampoForm id='cnpj-editar' tipo='text' legenda='Digite o CNPJ da organização' tamanhoCampo='100%' tituloForm="CNPJ" />

                        <CampoForm id='tel-editar' tipo='text' legenda='Digite o telefone dfa organização' tamanhoCampo='100%' tituloForm="Telefone" />

                        <div className="btn-editar">
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