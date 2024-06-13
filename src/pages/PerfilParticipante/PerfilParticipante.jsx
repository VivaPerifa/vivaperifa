import CampoForm from '../../components/CampoForm/CampoForm'
export default function PerfilParticipante() {
    return(
        <div className="container-PerfilParticipante">
            <div className="campo-PerfilParticipante">
                
            </div>
            <div className='campo-formulario'>
                
                <CampoForm id='nome-user-nomecompleto' tipo='text' legenda='Digite seu nome' tamanhoCampo='80%' tituloForm="Nome Completo"/>
                
                <CampoForm id='nome-user-nomedeusuario' tipo='text' legenda='Digite seu nome de usuário' tamanhoCampo='80%' tituloForm="Nome de usuário"/>
                
                <CampoForm id='nome-user-email' tipo='text' legenda='Digite o seu e-mail' tamanhoCampo='80%' tituloForm="E-mail"/>

                <CampoForm id='nome-user-senha' tipo='text' legenda='digite sua senha' tamanhoCampo='80%' tituloForm="Senha"/>
            </div>
        </div>
    )
}