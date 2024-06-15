import CadastrarEvento from "./CadastrarEvento/CadastrarEvento";
import MenuLateralPerfil from "./MenuLateralPerfil/MenuLateralPerfil";
import './GerenciadorPerfil.css';
import EditarPerfilOrganizador from './EditarPerfilOrganizador/EditarPerfilOrganizador';
import Detalhes from './CadastrarEvento/DescricaoEvento/DescricaoEvento';
import LocalizacaoEvento from './CadastrarEvento/LocalizacaoEvento/LocalizacaoEvento';
import ProgramacaoEvento from "./CadastrarEvento/ProgramacaoEvento/ProgramacaoEvento";
import InicioCadastro from "./CadastrarEvento/InicioCadastro/InicioCadastro";
import VisibilidadeEvento from './CadastrarEvento/VisibilidadeEvento/VisibilidadeEvento';
import ImagemEvento from './CadastrarEvento/ImagemEvento/ImagemEvento';
import './GerenciadorPerfil.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function GerenciadorPerfil() {
    return (     
        <div className="gerenciar-perfil">
            
            <CadastrarEvento></CadastrarEvento>
        </div>
    );
}