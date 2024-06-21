import { Link } from 'react-router-dom';
import CadastroEvento from '../../../../assets/imagem-criar-evento.png';
import '../../CadastrarEvento/InicioCadastro/InicioCadastro.css';
import MenuLateralPerfil from '../../MenuLateralPerfil/MenuLateralPerfil';

export default function InicioCadastro() {
    return (
        <div className="container-inicio-cadastro">
            <MenuLateralPerfil></MenuLateralPerfil>

            <div className="conteudo-inicio-cadastro">
                <figure>
                    <img src={CadastroEvento} alt="" />
                </figure>

                <div className="inicio-cadastro__descricao">
                    <p>
                        Quer saber como seu último evento está alcançando seu público? <br />
                        Para começar, publique esse evento na plataforma!
                    </p>
                </div>

                <button className="inicio-cadastro__botao">
                    <Link to="/imagem-evento">Criar uma publicação</Link>
                </button>
            </div>
        </div>
    );
}