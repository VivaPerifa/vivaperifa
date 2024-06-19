import './LocalizacaoEvento.css';
import CampoForm from '../../../../components/CampoForm/CampoForm';
import Botao from '../../../../components/Botao/Botao';
import Mapa from '../../../../components/Mapa/Mapa';
import { Link } from 'react-router-dom';
import MenuLateralPerfil from '../../../GerenciadorPerfil/MenuLateralPerfil/MenuLateralPerfil';

export default function LocalizacaoEvento() {
    return (
        <div className="container-local">
            <MenuLateralPerfil></MenuLateralPerfil>

            <div className='local-evento-scroll'>
                <div className="local-evento">
                    <h2>Localização do evento</h2>

                    <p>Adicione a localização do seu evento, essa informação é importante para que os participantes possam encontrá-lo. Seu evento será indexado na plataforma de acordo com a localização.</p>

                    <div className="local-form">
                        <CampoForm id='rua-local' tipo='text' legenda='' tamanhoCampo='100%' tituloForm="Rua" />

                        <CampoForm id='bairro-local' tipo='text' legenda='' tamanhoCampo='100%' tituloForm="Bairro" />
                    </div>

                    <div className="local-form">
                        <CampoForm id='numero-local' tipo='text' legenda='' tamanhoCampo='100%' tituloForm="Número" />

                        <CampoForm id='cidade-local' tipo='text' legenda='' tamanhoCampo='100%' tituloForm="Cidade" />
                    </div>

                    <div className="local-form">
                        <CampoForm id='cep-local' tipo='text' legenda='' tamanhoCampo='100%' tituloForm="CEP" />

                        <CampoForm id='complemento-local' tipo='text' legenda='' tamanhoCampo='100%' tituloForm="Complemento" />
                    </div>

                    <h4 className='teste-laranja'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>

                    <Mapa tamanhoMapa='100%'></Mapa>

                    <div className="btn-local">
                        <Link to="/programacao-evento">
                            <span>Voltar</span>
                        </Link>
                        <Link to="/visibilidade-evento">
                            <Botao
                                legenda="Avançar"
                                gradiente="var(--cor-laranja)"
                                bordaRaio="10px"
                                grossuraBorda="50px"
                                espacamento="10px"
                                largura="180px"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}