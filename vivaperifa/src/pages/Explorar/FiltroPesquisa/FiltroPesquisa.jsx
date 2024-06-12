import './FiltroPesquisa.css';
export default function FiltroPesquisa(props){
    
    return(
        <div className="filtro-pesquisa" style={{borderColor:props.corFiltro,color:props.corFiltro}}>
            {props.nomeFiltro} 
        </div>
    )
}