import './Botao.css';

export default function Botao(props){
    return(
        <div>
            <div className="botao" style={{width: props.largura}}>
                <button style={{
                    paddingTop: props.espacamento, 
                    paddingBottom: props.espacamento, 
                    backgroundColor: props.corFundo, 
                    borderColor: props.corBorda, 
                    borderWidth: props.grossuraBorda,
                    border: props.borda}}>{props.legenda}</button>
            </div>
        </div>
    );
}