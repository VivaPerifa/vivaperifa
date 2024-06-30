import MiniEventoComum from "./MiniEventoComum/MiniEventoComum";
import './CarrosselMiniEventoComum.css';

export default function CarrosselMiniEventoComum(props){
    const listItem = props.listaMiniEvento;

    return(
        <div className="carrossel-mini-evento-comum">
            {
                listItem.map((item, index) => (
                    <div className="item-mini-evento" key={index}>
                        <MiniEventoComum 
                            imagem={item.imagem}
                            titulo={item.titulo}
                            paragrafos={item.paragrafos}
                            data={item.data}
                            local={item.local}
                            comentarios={item.comentarios}
                            quantidadeComentarios={item.qtdComentarios}
                        />
                    </div>
                ))
            }
        </div>
    );
}