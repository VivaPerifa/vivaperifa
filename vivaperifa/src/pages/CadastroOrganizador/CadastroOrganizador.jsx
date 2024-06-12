import CampoForm from '../../components/CampoForm/CampoForm';
import './CadastroOrganizador.css';
import './CadastroOrganizadorScript.js'
import LogoCadastro from '../../assets/logo.png'

export default function CadastroOrganizador() {
    return (
        <div className='container_cadastro' id='container_cadastro'>

            <div className='container-cadastro-box'>

                <div className='form-container-cadastro form-user'>
                    <form action=''>
                        <h2>Usuário</h2>

                        <h4>Nome</h4>
                        <CampoForm id='nome-user' tipo='text' legenda='Digite seu nome' tamanhoCampo='20vw' />

                        <h4>Telefone</h4>
                        <CampoForm id='tel-user' tipo='text' legenda='Digite seu telefone' tamanhoCampo='20vw' />

                        <h4>E-mail</h4>
                        <CampoForm id='email-user' tipo='text' legenda='Digite seu e-mail' tamanhoCampo='20vw' />

                        <h4>Senha</h4>
                        <CampoForm id='senha-user' tipo='text' legenda='Crie uma senha' tamanhoCampo='20vw' />

                        <div className='btn-cadastro'>
                            <button>Cadastrar</button>
                        </div>

                    </form>
                </div>

                <div className='form-container-cadastro form-org'>
                    <form action=''>
                        <h2>Organizador</h2>

                        <h4>Nome da empresa</h4>
                        <CampoForm id='nome-org' tipo='text' legenda='Digite o nome da empresa' tamanhoCampo='20vw' />

                        <h4>CNPJ</h4>
                        <CampoForm id='cnpj-org' tipo='text' legenda='Digite o CNPJ da empresa' tamanhoCampo='20vw' />

                        <h4>Telefone</h4>
                        <CampoForm id='tel-org' tipo='text' legenda='Digite seu telefone' tamanhoCampo='20vw' />

                        <h4>E-mail</h4>
                        <CampoForm id='email-org' tipo='text' legenda='Digite seu e-mail' tamanhoCampo='20vw' />

                        <h4>Senha</h4>
                        <CampoForm id='senha-org' tipo='text' legenda='Crie uma senha' tamanhoCampo='20vw' />

                        <div className='btn-cadastro'>
                            <button>Cadastrar</button>
                        </div>

                    </form>
                </div>

                <div className='toggle-container'>
                    <div className='toggle'>
                        <div className='toggle-panel toggle-left'>

                            <img className='logo_cadastro' src={LogoCadastro} alt='' />

                            <h2>Cadastre-se</h2>

                            <p>Deseja cadastrar-se como usuário comum?</p>

                            <div className='btn-cadastro'>
                                <button className='btn-user-org' id='btn_user'>Usuário</button>
                            </div>

                        </div>

                        <div className='toggle-panel toggle-right'>

                            <img className='logo_cadastro' src={LogoCadastro} alt=''/>

                            <h2>Cadastre-se</h2>

                            <p>Deseja cadastrar-se como organizador?</p>

                            <div className='btn-cadastro'>
                                <button className='btn-user-org' id='btn_org'>Organizador</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}