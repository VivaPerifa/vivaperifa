import './CampoForm.css';

export default function CampoForm(props){
    return(
        <div className='campo-formulario' style={{width:props.tamanhoCampo, height:props.alturaCampo}}>
            <label>{props.tituloForm}</label>
            <input id={props.id} type={props.tipo} placeholder={props.legenda}></input>
        </div>
    );
}