import './BotaoAzul.css'

export default function BotaoLaranja(props){
    return(
        <div className="botao-azul" style={{width: props.larguraBotao}}>
            <button>{props.legendaBotao}</button>
        </div>
    );
}