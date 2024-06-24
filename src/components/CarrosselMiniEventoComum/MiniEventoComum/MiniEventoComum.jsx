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
                    <span style={{color:"#D9043E"}}>
                        {props.comentarios}
                    </span>
                    <span style={{color:"#033E8C"}}>
                        {props.data}
                    </span>
                </div>
                <div className="mini-evento-comum__descricao">
                    <p>
                        {props.descricao}
                    </p>
                </div>
                <div className={`mini-evento-comum__local ${props.comentarios != null ? 'cor-azul' : 'cor-laranja'}`}>
                    <span>{props.local}</span>
                </div>
            </div>
        </div>
    );
}