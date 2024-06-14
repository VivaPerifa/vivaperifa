import './DescricaoEvento.css';
import CampoForm from '../../../../components/CampoForm/CampoForm';
import Botao from '../../../../components/Botao/Botao';

export default function DescricaoEvento() {
    return (
        <div className="container-detalhes-evento">
            <div className="detalhes-evento">
                <h2>Detalhes</h2>

                <p>Um título chamativo pode ajudar a atrair a atenção do seu público. Ao criar o título e a descrição do seu evento, inclua palavras-chave que seu público provavelmente usaria para procurar pelo seu conteúdo. Adicione as categorias em que seu evento se encaixa para alcançar seu público-alvo.</p>

                <CampoForm id='nome-evento-detalhes' tipo='text' legenda='Escreva o nome do seu evento' tamanhoCampo='100%' tituloForm="Nome do evento" />

                <CampoForm id='descrição-evento' tipo='text' legenda='Escreva uma breve descrição do seu evento' tamanhoCampo='100%' tituloForm="Descrição do evento" alturaCampo='25vh'/>

                <div className='filtros-detalhes'>
                    <span className='detal-laranja'>#Cultura</span>
                    <span className='detal-azul'>#Espressão Artística</span>
                    <span className='detal-rosa'>#Feira</span>
                    <span className='detal-mais'>+</span>
                </div>

                <div className="btn-detalhes">
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
    );
}