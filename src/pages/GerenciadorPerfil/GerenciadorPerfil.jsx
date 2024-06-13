import CadastrarEvento from "./CadastrarEvento/CadastrarEvento";
import MenuLateralPerfil from "./MenuLateralPerfil/MenuLateralPerfil";
import './GerenciadorPerfil.css';
import EditarPerfilOrganizador from './EditarPerfilOrganizador/EditarPerfilOrganizador';
import Detalhes from './CadastrarEvento/DetalhesEvento/DetalhesEvento';
import Localização from './CadastrarEvento/LocalizacaoEvento/Localizacao';
import ProgramaçãoEvento from "./CadastrarEvento/ProgramacaoEvento/ProgramacaoEvento";
import InicioCadastro from "./CadastrarEvento/InicioCadastro/InicioCadastro";
import VisibilidadeEvento from './CadastrarEvento/VisibilidadeEvento/VisibilidadeEvento';
import ImagemEvento from './CadastrarEvento/ImagemEvento/ImagemEvento'

export default function GerenciadorPerfil() {
    return (
        <div className="gerenciar-perfil">
            {/* <CadastrarEvento></CadastrarEvento> */}
            <MenuLateralPerfil></MenuLateralPerfil>
            <ImagemEvento></ImagemEvento>
            <InicioCadastro></InicioCadastro>
            <VisibilidadeEvento></VisibilidadeEvento>
            {/* <ProgramaçãoEvento></ProgramaçãoEvento> */}
            {/* <Localização></Localização> */}
            {/* <Detalhes></Detalhes> */}
            <EditarPerfilOrganizador></EditarPerfilOrganizador>
        </div>
    );
}