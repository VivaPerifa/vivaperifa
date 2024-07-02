import './App.css';
import SobreNos from './pages/SobreNos/SobreNos';
import Footer from './static/Footer/Footer';
import Menu from './static/Menu/Menu';
import Home from './pages/Home/Home';
import Explorar from './pages/Explorar/Explorar';
import Comunidade from './pages/Comunidade/Comunidade';
import Contato from './pages/Contato/Contato';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import '@fortawesome/fontawesome-free/css/all.min.css';
import Mapa from './components/Mapa/Mapa';
import DescricaoEvento from './pages/GerenciadorPerfil/CadastrarEvento/DescricaoEvento/DescricaoEvento.jsx';

import ImagemEvento from './pages/GerenciadorPerfil/CadastrarEvento/ImagemEvento/ImagemEvento';
import MenuLateralPerfil from './pages/GerenciadorPerfil/MenuLateralPerfil/MenuLateralPerfil';
import DetalheEvento from './pages/DetalheEvento/DetalheEvento';

// import Comentario from './components/Comentario/Comentario';
import GerenciadorPerfil from './pages/GerenciadorPerfil/GerenciadorPerfil';
import PerfilParticipante from './pages/PerfilParticipante/PerfilParticipante';
import VisibilidadeEvento from './pages/GerenciadorPerfil/CadastrarEvento/VisibilidadeEvento/VisibilidadeEvento';
import InicioCadastro from './pages/GerenciadorPerfil/CadastrarEvento/InicioCadastro/InicioCadastro.jsx';
import ProgramacaoEvento from './pages/GerenciadorPerfil/CadastrarEvento/ProgramacaoEvento/ProgramacaoEvento.jsx';
import LocalizacaoEvento from './pages/GerenciadorPerfil/CadastrarEvento/LocalizacaoEvento/LocalizacaoEvento.jsx';
import Tradutor from './components/Tradutor/tradutor';
import BotaoTopo from './components/BotaoTopo/BotaoTopo';
import EventosCadastrados from './pages/GerenciadorPerfil/EventosCadastrados/EventosCadastrados.jsx';
import DisclaimerCookies from './components/DisclaimerCookies/DisclaimerCookies';
import LocationRequest from './components/LocationRequest/LocationRequest.jsx';
import VisualizarEvento from './pages/GerenciadorPerfil/CadastrarEvento/VisualizarEvento/VisualizarEvento.jsx';
import PerfilOrganizador from './pages/PerfilOrganizador/PerfilOrganizador.jsx';

// import { LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import "./i18n";
import { useTranslation } from 'react-i18next';

import EditarPerfilOrganizador from './pages/GerenciadorPerfil/EditarPerfilOrganizador/EditarPerfilOrganizador.jsx';
import FormCadastroUsuario from './pages/FormCadastroUsuario/FormCadastroUsuario.jsx';
import Comentario from './components/Comentario/Comentario.jsx';
import ComentariosEvento from './pages/GerenciadorPerfil/ComentariosEvento/ComentariosEvento.jsx';
import SuporteEvento from './pages/GerenciadorPerfil/SuporteEvento/SuporteEvento.jsx';
import EditarPerfilParticipante from './pages/EditarPerfilParticipante/EditarPerfilParticipante.jsx';
import { Chart } from "react-google-charts";
import DashboardPerfil from './pages/GerenciadorPerfil/DashboardPerfil/DashboardPerfil.jsx';

function App() {
  return (

    <BrowserRouter>
      <div>
        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
            {children} 
        </LocalizationProvider>  */}
        <LocationRequest></LocationRequest>
        <DisclaimerCookies></DisclaimerCookies>
        {/* <Tradutor changeLanguage={changeLanguage} />   */}
        <BotaoTopo></BotaoTopo>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/sobre-nos' element={<SobreNos />} />
          <Route path='/explorar' element={<Explorar />} />
          <Route path='/comunidade' element={<Comunidade />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/descricao-evento' element={<DescricaoEvento />} />
          <Route path='/gerenciador-perfil' element={<GerenciadorPerfil />}></Route>
          <Route path='/imagem-evento' element={<ImagemEvento />}></Route>
          <Route path='/criar-evento' element={<InicioCadastro />}></Route>
          <Route path='/localizacao-evento' element={<LocalizacaoEvento />}></Route>
          <Route path='/programacao-evento' element={<ProgramacaoEvento />}></Route>
          <Route path='/visibilidade-evento' element={<VisibilidadeEvento />}></Route>
          <Route path='/visualizar-evento' element={<VisualizarEvento />}></Route>
          <Route path='/editar-perfil' element={<EditarPerfilOrganizador />}></Route>
          <Route path='/detalhe-evento' element={<DetalheEvento></DetalheEvento>}></Route>
          <Route path='/eventos-cadastrados' element={<EventosCadastrados></EventosCadastrados>}></Route>
          <Route path='/perfil-organizador' element={<PerfilOrganizador></PerfilOrganizador>}></Route>
          <Route path='/perfil-participante' element={<PerfilParticipante></PerfilParticipante>}></Route>
          <Route path='/form-cadastro' element={<FormCadastroUsuario></FormCadastroUsuario>}></Route>
          <Route path='/comentarios-evento' element={<ComentariosEvento></ComentariosEvento>}></Route>
          <Route path='/suporte-evento' element={<SuporteEvento></SuporteEvento>}></Route>
          <Route path='/editar-perfil-participante' element={<EditarPerfilParticipante></EditarPerfilParticipante>}></Route>
          <Route path='/dashboard' element={<DashboardPerfil></DashboardPerfil>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
