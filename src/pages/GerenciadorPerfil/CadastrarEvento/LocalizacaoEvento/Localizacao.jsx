import './Localizacao.css';
import CampoForm from '../../../../components/CampoForm/CampoForm';
import Botao from '../../../../components/Botao/Botao';
import Mapa from '../../../../components/Mapa/Mapa'

export default function Localização() {
    return (
        <div className="container-local">
            <div className="local-evento">
                <h2>Localização do evento</h2>

                <h4>Adicione a localização do seu evento, essa informação é importante para que os participantes possam encontrá-lo. Seu evento será indexado na plataforma de acordo com a localização.</h4>

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

                <Mapa></Mapa>

                <div className="btn-local">
                    <a href='#'><h4>Voltar</h4></a>
                    <Botao
                        legenda="Avançar"
                        gradiente="var(--cor-laranja)"
                        bordaRaio="10px"
                        grossuraBorda="50px"
                        espacamento="10px"
                        largura="100%"
                    />
                </div>
            </div>
        </div>
    )
}