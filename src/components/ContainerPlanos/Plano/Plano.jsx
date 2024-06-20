import './Plano.css';
import { IoIosStar } from "react-icons/io";
import BotaoColorido from '../../BotaoColorido/BotaoColorido';

export default function PlanoComponente(props) {
    const listItem = props.listaBeneficios;

    return (
        <div className="plano">
            <div className="tipo-plano">
                <span>{props.tipoPlano}</span>
            </div>
            <div className={`periodo-plano ${props.periodoPlano == null ? 'hidden' : 'show'}`}>
                <span>{props.periodoPlano}</span>
            </div>
            <div className="valor-plano">
                <h2>{props.valorPlano}</h2>
            </div>
            <div className="beneficios">
                {
                    listItem.map((item, index) => (
                        <div className='item-beneficio' key={index}>
                            <span>
                                <IoIosStar style={{ color: '#D90504' }}></IoIosStar>
                            </span>
                            {item.beneficio}
                        </div>
                    ))
                }
            </div>
            <div className={`botao-plano ${props.tipoPlano === "Humildade" ? 'hidden' : 'show'}`}>
                <hr />
                <BotaoColorido
                    legendaBotao="Assinar"
                    larguraBotao="100%"
                />
            </div>
        </div>
    );
}
