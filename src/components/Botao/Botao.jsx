import './Botao.css';

export default function Botao(props){
    return(
        <div>
            <div className="botao" style={{width: props.largura}}>
                <button style={{
                    backgroundColor: props.corFundo, 
                    padding: props.espacamento, 
                    borderWidth: props.grossuraBorda,
                    borderColor: props.corBorda, 
                    borderRadius: props.bordaRaio,
                    width: props.largura,
                    fontSize: props.tamanhoFonte}}>
                        {props.legenda}
                    </button>
            </div>

            <div></div>
        </div>
    );
}