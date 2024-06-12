import CadastrarEvento from "./CadastrarEvento/CadastrarEvento";
import MenuLateralPerfil from "./MenuLateralPerfil/MenuLateralPerfil";
import './GerenciadorPerfil.css';

export default function GerenciadorPerfil() {
    return (
        <div className="gerenciar-perfil">
            <CadastrarEvento></CadastrarEvento>
            <MenuLateralPerfil></MenuLateralPerfil>

        </div>
    );
}