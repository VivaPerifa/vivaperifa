import './Plano.css';
import { IoIosStar } from "react-icons/io";
import Botao from '../../Botao/Botao';

export default function Plano(props){
    const listItem = props.listaBeneficios;
    
    return(
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
                    listItem.map((item) => (
                        <div className='item-beneficio'>
                            <span>
                                <IoIosStar style={{color:'#D90504'}}></IoIosStar>
                            </span>
                                {item.beneficio}
                        </div>
                    ))
                }
            </div>
            <div className={`botao-plano ${props.tipoPlano == "Básico" ? 'hidden' : 'show'}`}>
                <hr></hr>
                <button>Assinar</button>
            </div>
        </div>
    );
}