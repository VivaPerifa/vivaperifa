import { Link } from 'react-router-dom';
import CadastroEvento from '../../../../assets/imagem-criar-evento.png';
import '../../CadastrarEvento/InicioCadastro/InicioCadastro.css';

export default function InicioCadastro() {
    return (
        <div className="container-inicio-cadastro">
            <div className='conteudo-inicio-cadastro'>
                <figure>
                    <img src={CadastroEvento} alt="" />
                </figure>

                <div className="texto-cadastro-evento">
                    <p className='texto-cadastro-evento'>
                        Quer saber como seu último evento está alcançando seu público? <br />
                        Para começar, publique esse evento na plataforma!
                    </p>
                </div>

                <button className='botao-cadastro'>
                    <Link to="/imagem-evento" className='link-cadastro'>Criar uma publicação</Link>
                </button>
            </div>
        </div>
    );
}