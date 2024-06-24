import './SuporteEvento.css';
import MenuLateralPerfil from '../MenuLateralPerfil/MenuLateralPerfil';
import CampoForm from '../../../components/CampoForm/CampoForm';
import BotaoLaranja from '../../../components/BotaoLaranja/BotaoLaranja';

export default function SuporteEvento() {
    return (
        <div className="container-suporte-evento">
            <MenuLateralPerfil></MenuLateralPerfil>

            <div className="suporte-evento">
                <div className="conteudo-suporte-evento">
                    <div className="conteudo-suporte-evento__header">
                        <h2>Suporte do Evento</h2>

                        <p>Teve algum problema com o seu evento? Mande uma mensagem para nós que responderemos assim que possível.</p>
                    </div>

                    <div className="conteudo-suporte-evento__guia">
                        <CampoForm id='nome' tipo='text' legenda='Nome' tamanhoCampo='100%' />

                        <CampoForm id='email' tipo='text' legenda='Email' tamanhoCampo='100%' />

                        <CampoForm id='assunto' tipo='text' legenda='Assunto' tamanhoCampo='100%' />

                        <CampoForm id='mensagem' tipo='text' legenda='Mensagem' tamanhoCampo='100%' />

                        <BotaoLaranja legendaBotao="Enviar" larguraBotao="100%"></BotaoLaranja>
                    </div>
                </div>
            </div>
        </div>
    )
}