import './Plano.css';
import { IoIosStar } from "react-icons/io";

export default function Plano(props){
    const items = [];
    
    return(
        <div className="container-plano">
            <div className="tipo-plano">
                <span>{props.tipoPlano}</span>
            </div>
            <div className="valor-plano">
                <h2>{props.valorPlano}</h2>
            </div>
            <div className="beneficios">
                <div className='item-beneficio'>
                    {
                        props.beneficios.map((item) => {
                            return item.nome;
                        })
                    }
                </div>
            </div>
        </div>
    );
}