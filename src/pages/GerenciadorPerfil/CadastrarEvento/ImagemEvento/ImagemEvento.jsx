import { Link } from 'react-router-dom';
import miniaturaMaior from '../../../../assets/miniatura-criar-evento.png';
import miniatura1 from '../../../../assets/miniatura-criar-evento-01.png';
import miniatura2 from '../../../../assets/miniatura-criar-evento-02.png';
import miniatura3 from '../../../../assets/miniatura-criar-evento-03.png';
import miniatura4 from '../../../../assets/miniatura-criar-evento-04.png';
import miniatura5 from '../../../../assets/miniatura-criar-evento-05.png';
import miniatura6 from '../../../../assets/miniatura-criar-evento-06.png';
import Botao from '../../../../components/Botao/Botao';
import '../../CadastrarEvento/ImagemEvento/ImagemEvento.css';
import MenuLateralPerfil from '../../MenuLateralPerfil/MenuLateralPerfil';

export default function ImagemEvento() {
    return (
        <div className="container-imagem-evento">
            <MenuLateralPerfil></MenuLateralPerfil>
            <div className="conteudo-imagem-evento">
                <div className="title-imagem-evento">
                    <h1 className='title-imagem-evento'>Miniatura</h1>
                </div>
                <div className="texto-imagem-evento">
                    <p className='texto-imagem-evento'>Selecione ou faça upload de uma imagem que mostre o que há no seu evento. Uma boa miniatura se destaca e chama a atenção público. Você também pode selecionar alguns templates prontos feitos especialmente para você!</p>
                </div>
                <div className="miniatura-maior-imagem-evento">
                    <figure>
                        <img src={miniaturaMaior} alt="" />
                    </figure>
                </div>
                <div className="miniaturas-menores-imagem-eventos">
                    <figure>
                        <img src={miniatura1} alt="" />
                        <img src={miniatura2} alt="" />
                        <img src={miniatura3} alt="" />
                        <img src={miniatura4} alt="" />
                        <img src={miniatura5} alt="" />
                        <img src={miniatura6} alt="" />
                    </figure>
                </div>

                <div className="btn-imagem-eventos">
                    <Link to="/criar-evento">
                        <span>Cancelar</span>
                    </Link>
                    <Link to="/descricao-evento">
                        <Botao
                            legenda="Avançar"
                            gradiente="var(--cor-laranja)"
                            bordaRaio="10px"
                            grossuraBorda="50px"
                            espacamento="10px"
                            largura="100%"
                        />
                    </Link>
                </div>

            </div>
        </div>
    );
}