import Coracao from '../../../assets/coracao.png';
import Agenda from '../../../assets/agenda.png';
import './MiniEventoComum.css';

export default function MiniEventoComum(props) {
    return (
        <div className="container-mini-evento-comum">
            <div className="mini-evento-comum">
                <figure>
                    <img src={props.imagem} alt="" />
                </figure>
                <div className="mini-evento-comum__dados">
                    <div className="mini-evento-comum__titulo">
                        <h2>{props.titulo}</h2>
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
                    <span>{props.data}</span>
                </div>
                <div className="mini-evento-comum__descricao">
                    <p>
                        {props.descricao}
                    </p>
                </div>
                <div className="mini-evento-comum__local">
                    <span>{props.local}</span>
                </div>
            </div>
        </div>
    );
}