import './Botao.css';

export default function Botao(props){
    return(
        <div>
            <div className="botao" style={{width: props.largura}}>
                <button style={{
                    padding: props.espacamento, 
                    backgroundColor: props.corFundo, 
                    background: props.gradiente,
                    borderColor: props.corBorda, 
                    borderWidth: props.grossuraBorda,
                    borderRadius: props.bordaRaio,
                    width: props.largura,
                    fontSize: props.tamanhoFonte}}>{props.legenda}</button>
            </div>

            <div></div>
        </div>
    );
}