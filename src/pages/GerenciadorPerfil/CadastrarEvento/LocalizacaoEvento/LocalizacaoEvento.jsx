import './LocalizacaoEvento.css';
import CampoForm from '../../../../components/CampoForm/CampoForm';
import Mapa from '../../../../components/Mapa/Mapa';
import { Link } from 'react-router-dom';
import MenuLateralPerfil from '../../../GerenciadorPerfil/MenuLateralPerfil/MenuLateralPerfil';
import BotaoLaranja from '../../../../components/BotaoLaranja/BotaoLaranja';

export default function LocalizacaoEvento() {
    return (
        <div className="container-local-evento">
            <MenuLateralPerfil></MenuLateralPerfil>

            <div className="local-evento-scroll">
                <div className="conteudo-local-evento">
                    <div className="local-evento__header">
                        <h2>Localização do evento</h2>
                        <p>Adicione a localização do seu evento, essa informação é importante para que os participantes possam encontrá-lo. Seu evento será indexado na plataforma de acordo com a localização.</p>
                    </div>
                    <div className="local-evento__form">
                        <div className="local-evento__left">
                            <CampoForm id='rua-local' tipo='text' legenda='Digite a rua' tamanhoCampo='100%' tituloForm="Rua" />
                            <CampoForm id='bairro-local' tipo='text' legenda='Digite o bairro' tamanhoCampo='100%' tituloForm="Bairro" />
                            <CampoForm id='numero-local' tipo='text' legenda='Digite o número' tamanhoCampo='100%' tituloForm="Número" />
                        </div>
                        <div className="local-evento__right">
                            <CampoForm id='cidade-local' tipo='text' legenda='Digite a cidade' tamanhoCampo='100%' tituloForm="Cidade" />
                            <CampoForm id='cep-local' tipo='text' legenda='Digite o CEP' tamanhoCampo='100%' tituloForm="CEP" />
                        <CampoForm id='complemento-local' tipo='text' legenda='Digite o complemento' tamanhoCampo='100%' tituloForm="Complemento" />
                        </div>
                    </div>
                    <div className="local-evento__legenda">
                        <span>Lorem Ipsum</span>
                    </div>  

                    <Mapa tamanhoMapa='100%'></Mapa>

                    <div className="local-evento__botao">
                        <Link to="/programacao-evento">
                            <span>Voltar</span>
                        </Link>
                        <Link to="/visibilidade-evento">
                            <BotaoLaranja
                                legendaBotao="Avançar"
                                larguraBotao="150px"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}