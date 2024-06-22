import Coracao from '../../assets/coracao.png';
import Agenda from '../../assets/agenda.png';
import Evento from '../../assets/batalha_rima.png';
import './MiniEventoComum.css';

export default function MiniEventoComum() {
    return (
        <div className="container-mini-evento-comum">
            <div className="mini-evento-comum">
                <figure>
                    <img src={Evento} alt="" />
                </figure>
                <div className="mini-evento-comum__dados">
                    <div className="mini-evento-comum__titulo">
                        <h2>Titulo</h2>
                    </div>
                    <div className="mini-evento-comum__icones">
                        <span>
                            <img src={Coracao} alt="" />
                        </span>
                        <span>
                            <img src={Agenda} alt="" />
                        </span>
                    </div>
                </div>
                <div className="mini-evento-comum__data">
                    <span>Data</span>
                </div>
                <div className="mini-evento-comum__descricao">
                    <p>
                        Descricao
                    </p>
                </div>
                <div className="mini-evento-comum__local">
                    <span>Local</span>
                </div>
            </div>
        </div>
    );
}