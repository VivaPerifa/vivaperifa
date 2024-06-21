import { Link } from 'react-router-dom';
import miniaturaMaior from '../../../../assets/miniatura-criar-evento.png';
import miniatura1 from '../../../../assets/miniatura-criar-evento-01.png';
import miniatura2 from '../../../../assets/miniatura-criar-evento-02.png';
import miniatura3 from '../../../../assets/miniatura-criar-evento-03.png';
import miniatura4 from '../../../../assets/miniatura-criar-evento-04.png';
import miniatura5 from '../../../../assets/miniatura-criar-evento-05.png';
import miniatura6 from '../../../../assets/miniatura-criar-evento-06.png';
import '../../CadastrarEvento/ImagemEvento/ImagemEvento.css';
import MenuLateralPerfil from '../../MenuLateralPerfil/MenuLateralPerfil';
import BotaoLaranja from '../../../../components/BotaoLaranja/BotaoLaranja';

export default function ImagemEvento() {
    return (
        <div className="container-imagem-evento">
            <MenuLateralPerfil></MenuLateralPerfil>

            <div className="imagem-evento-scroll">
                <div className="conteudo-imagem-evento">
                    <div className="imagem-evento__header">
                        <h2>Miniatura</h2>
                        <p>Selecione ou faça upload de uma imagem que mostre o que há no seu evento. Uma boa miniatura se destaca e chama a atenção público. Você também pode selecionar alguns templates prontos feitos especialmente para você!</p>
                    </div>
                    <div className="imagem-evento__banner">
                        <figure>
                            <img src={miniaturaMaior} alt="" />
                        </figure>
                    </div>
                    <div className="imagem-evento__banners">
                        <div>
                            <img src={miniatura1} alt="" />
                        </div>
                        <div>
                            <img src={miniatura2} alt="" />
                        </div>
                        <div>
                            <img src={miniatura3} alt="" />
                        </div>
                        <div>
                            <img src={miniatura4} alt="" />
                        </div>
                        <div>
                            <img src={miniatura5} alt="" />
                        </div>
                        <div>
                            <img src={miniatura6} alt="" />
                        </div>
                    </div>

                    <div className="imagem-evento__botao">
                        <Link to="/criar-evento">
                            <span>Cancelar</span>
                        </Link>
                        <Link to="/descricao-evento">
                            <BotaoLaranja
                                legendaBotao="Avançar"
                                larguraBotao="150px"
                            />
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}