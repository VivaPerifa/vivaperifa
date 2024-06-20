import './BotaoColorido.css'

export default function BotaoColorido(props){
    return(
        <div className="botao-colorido" style={{width: props.larguraBotao}}>
            <button>{props.legendaBotao}</button>
        </div>
    );
}