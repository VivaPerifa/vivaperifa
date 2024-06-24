import './ComentariosEvento.css';
import { Link } from 'react-router-dom';
import MenuLateralPerfil from '../MenuLateralPerfil/MenuLateralPerfil';


export default function ComentariosEvento() {
    return (
        <div className="container-comentarios-evento">
            <MenuLateralPerfil></MenuLateralPerfil>

            <div className="comentarios-evento-scroll">
                <div className="conteudo-comentarios-evento">
                    <div className="comentarios-evento">
                        <h2>Comentários e referências ao perfil</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
