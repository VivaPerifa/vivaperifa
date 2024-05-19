import './EventoComum.css';
import FotoEvento from '../../../assets/imagem-evento.jpg';
import Coracao from '../../../assets/coracao.png';
import Agenda from '../../../assets/agenda.png';

export default function EventoComum() {
    return (
        <div className="container-evento">
            <div className="evento-comum">

                <figure className="imagem-evento-comum">
                    <img src={FotoEvento} alt="" />
                </figure>

                <div className="dados-evento-comum">
                    <div className='titulo-evento-comum'>
                        <h2>
                            Tenda de historia
                        </h2>
                    </div>

                    <div className='icones-evento-comum'>
                        <span>
                            <img src={Coracao} alt="" />
                        </span>

                        <span>
                            <img src={Agenda} alt="" />
                        </span>
                    </div>
                </div>

                <div className="data-evento-comum">
                    <span>
                        data
                    </span>
                </div>

                <div className='descricao-evento-comum'>
                    <p>
                        descricao
                    </p>
                </div>

                <div className='local-evento-comum'>
                    <span>
                        local
                    </span>
                </div>
            </div>
        </div>
    )
}