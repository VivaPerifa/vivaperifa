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
                            <img src={Coracao} alt="Ícone de Like" />
                        </span>
                        <span>
                            <img src={Agenda} alt="Ícone de Agendar" />
                        </span>
                    </div>
                </div>
                <div className="mini-evento-comum__data">
                    <span style={{ color: "#D9043E" }} className={`${props.quantidadeComentarios!=null?'show':'hidden'}`}>
                        {props.quantidadeComentarios} comentários
                    </span>
                    <span style={{ color: "#033E8C" }} className={`${props.quantidadeComentarios==null?'show':'hidden'}`}>
                        {props.data}
                    </span>
                </div>
                <div className="mini-evento-comum__descricao">
                    {
                        props.paragrafos.map((item) => (
                            <p>{item.descricao}</p>
                        ))
                    }
                </div>
                <div className={`mini-evento-comum__local ${props.comentarios != null ? 'cor-azul' : 'cor-laranja'}`}>
                    <span>{props.local.bairro}</span>
                </div>
            </div>
        </div>
    );
}