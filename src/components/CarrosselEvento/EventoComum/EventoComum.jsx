import './EventoComum.css';
import Coracao from '../../../assets/coracao.png';
import Agenda from '../../../assets/agenda.png';

export default function EventoComum(props) {
    return (
        <div className="container-evento-comum">
            <div className="evento-comum">

                <figure className="evento-comum__imagem">
                    <img src={props.fotoEvento} alt="" />
                </figure>

                <div className="evento-comum__dados">
                    <div className="evento-comum__titulo">
                        <h2>
                            {props.tituloEvento}
                        </h2>
                    </div>

                    <div className='evento-comum__icones'>
                        <span>
                            <img src={Coracao} alt="" />
                        </span>

                        <span>
                            <img src={Agenda} alt="" />
                        </span>
                    </div>
                </div>

                <div className="evento-comum__data">
                    <span style={{color:"#D9043E"}}>
                        {props.quantidadeComentarios}
                    </span>
                    <span style={{color:"#033E8C"}}>
                        {props.dataEvento}
                    </span>
                </div>

                <div className="evento-comum__descricao">
                    <p>
                        {props.descricaoEvento}
                    </p>
                </div>

                <div className={`evento-comum__local  ${props.quantidadeComentarios != null ? 'cor-azul' : 'cor-laranja'}`}>
                    <span>
                        {props.localEvento}
                    </span>
                </div>
            </div>
        </div>

        
    )
}