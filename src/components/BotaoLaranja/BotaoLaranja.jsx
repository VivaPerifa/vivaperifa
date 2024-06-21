import './BotaoLaranja.css'

export default function BotaoLaranja(props){
    return(
        <div className="botao-laranja" style={{width: props.larguraBotao}}>
            <button>{props.legendaBotao}</button>
        </div>
    );
}