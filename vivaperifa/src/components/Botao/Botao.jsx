import './Botao.css';

export default function Botao(props){
    return(
        <div>
            <div className="botao" style={{width: props.largura}}>
                <button style={{
                    padding: props.espacamento, 
                    backgroundColor: props.corFundo, 
                    borderColor: props.corBorda, 
                    borderWidth: props.grossuraBorda,
                    borderRadius: props.bordaRaio,
                    fontSize: props.tamanhoFonte}}>{props.legenda}</button>
            </div>
        </div>
    );
}