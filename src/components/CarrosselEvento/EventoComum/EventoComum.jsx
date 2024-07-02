import './EventoComum.css';
import Coracao from '../../../assets/coracao.png';
import Agenda from '../../../assets/agenda.png';
import { CiCalendar } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import CoracaoVazado from '../../../assets/coracao_vazado.png';
import CoracaoPreenchido from '../../../assets/coracao_preenchido.png';
import { useEffect, useState } from 'react';

export default function EventoComum(props) {
    const [click, setClick] = useState(false);

    return (
        <div className="container-evento-comum">
            <div className="evento-comum">

                <figure className="evento-comum__imagem">
                    <img src={props.imagem} alt="" />
                </figure>

                <div className="evento-comum__dados">
                    <div className="evento-comum__titulo">
                        <h2>
                            {props.titulo}
                        </h2>
                    </div>

                    <div className='evento-comum__icones'>
                        <span className="evento-comum__coracao">
                            <img src={Coracao} alt="Ícone de Like" id="coracao"/>
                        </span>

                        <span>
                            <CiCalendar style={{width:"2.3rem",height:"2.3rem",color:"var(--cor-azul)"}}/>
                        </span>
                    </div>
                </div>

                <div className="evento-comum__data">
                    <span style={{ color: "#D9043E" }} className={`${props.quantidadeComentarios!=null?'show':'hidden'}`}>
                        {props.quantidadeComentarios} comentários
                    </span>
                    <span style={{ color: "#033E8C" }} className={`${props.quantidadeComentarios==null?'show':'hidden'}`}>
                        {props.data}
                    </span>
                </div>

                <div className="evento-comum__descricao">
                    {
                        props.paragrafos.map((item) => (
                            <p>{item.descricao}</p>
                        ))
                    }
                </div>

                <div className={`evento-comum__local  ${props.quantidadeComentarios!=null?'cor-azul':'cor-laranja'}`}>
                    <span>
                        {props.local.bairro}
                    </span>
                </div>
            </div>
        </div>


    )
}