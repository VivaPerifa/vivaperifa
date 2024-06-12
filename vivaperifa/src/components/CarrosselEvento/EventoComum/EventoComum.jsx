import './EventoComum.css';
import Coracao from '../../../assets/coracao.png';
import Agenda from '../../../assets/agenda.png';

export default function EventoComum(props) {
    return (
        <div className="container-evento">
            <div className="evento-comum">

                <figure className="imagem-evento-comum">
                    <img src={props.fotoEvento} alt="" />
                </figure>

                <div className="dados-evento-comum">
                    <div className='titulo-evento-comum'>
                        <h2>
                            {props.tituloEvento}
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
                    <span style={{color:"#D9043E"}}>
                        {props.quantidadeComentarios}
                    </span>
                    <span style={{color:"#033E8C"}}>
                        {props.dataEvento}
                    </span>
                </div>

                <div className='descricao-evento-comum'>
                    <p>
                        {props.descricaoEvento}
                    </p>
                </div>

                <div className={`local-evento-comum  ${props.quantidadeComentarios != null ? 'cor-azul' : 'cor-laranja'}`}>
                    <span>
                        {props.localEvento}
                    </span>
                </div>
            </div>
        </div>

        
    )
}