import './DescricaoEvento.css';
import CampoForm from '../../../../components/CampoForm/CampoForm';
import Botao from '../../../../components/Botao/Botao';
import MenuLateralPerfil from '../../MenuLateralPerfil/MenuLateralPerfil';
import { Link } from 'react-router-dom';

export default function DescricaoEvento() {
    return (
        <div className="container-detalhes-evento">
            <MenuLateralPerfil></MenuLateralPerfil>
            <div className="detalhes-evento">
                <div className='detalhes-evento__header'>
                    <h2>Detalhes</h2>
                    <p>Um título chamativo pode ajudar a atrair a atenção do seu público. Ao criar o título e a descrição do seu evento, inclua palavras-chave que seu público provavelmente usaria para procurar pelo seu conteúdo. Adicione as categorias em que seu evento se encaixa para alcançar seu público-alvo.</p>
                </div>

                <div className='detalhes-evento__info'>
                    <CampoForm id='nome-evento-detalhes' tipo='text' legenda='Escreva o nome do seu evento' tamanhoCampo='100%' tituloForm="Nome do evento" />
                    <CampoForm id='descrição-evento' tipo='text' legenda='Escreva uma breve descrição do seu evento' tamanhoCampo='100%' tituloForm="Descrição do evento" alturaCampo='25vh'/>
                </div>
                
                <div className='categorias-evento'>
                    <span className='detal-laranja'>#Cultura</span>
                    <span className='detal-azul'>#Espressão Artística</span>
                    <span className='detal-rosa'>#Feira</span>
                    <span className='detal-mais'>+</span>
                </div>

                <div className="btn-detalhes">
                    <Link to="/imagem-evento">
                        <span>Voltar</span>
                    </Link>
                    <Link to="/programacao-evento">
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
    );
}