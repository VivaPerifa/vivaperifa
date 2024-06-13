import CadastrarEvento from "./CadastrarEvento/CadastrarEvento";
import MenuLateralPerfil from "./MenuLateralPerfil/MenuLateralPerfil";
import './GerenciadorPerfil.css';
import EditarPerfilOrganizador from './EditarPerfilOrganizador/EditarPerfilOrganizador';
import Detalhes from './CadastrarEvento/DetalhesEvento/DetalhesEvento';
import Localização from './CadastrarEvento/LocalizacaoEvento/Localizacao';
import ProgramaçãoEvento from "./CadastrarEvento/ProgramacaoEvento/ProgramacaoEvento";

export default function GerenciadorPerfil() {
    return (
        <div className="gerenciar-perfil">
            {/* <CadastrarEvento></CadastrarEvento> */}
            <MenuLateralPerfil></MenuLateralPerfil>
            {/* <ProgramaçãoEvento></ProgramaçãoEvento> */}
            {/* <Localização></Localização> */}
            {/* <Detalhes></Detalhes> */}
            {/* <EditarPerfilOrganizador></EditarPerfilOrganizador> */}
        </div>
    );
}