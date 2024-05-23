import './FiltroPesquisa.css';
export default function FiltroPesquisa(props){
    
    return(
        <div className="container-filtro-pesquisa" style={{borderColor:props.corFiltro,color:props.corFiltro}}>
            {props.nomeFiltro} 
        </div>
    )
}