import './CampoForm.css';

export default function CampoForm(props){
    return(
        <div className='campo-formulario' >
            <input id={props.id} type={props.tipo} placeholder={props.legenda} style={{width:props.tamanhoCampo}}></input>
        </div>
    );
}