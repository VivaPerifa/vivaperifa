import './App.css';
import SobreNos from './pages/SobreNos/SobreNos';
import Footer from './static/Footer/Footer';
import Menu from './static/Menu/Menu';
import Home from './pages/Home/Home';
import Explorar from './pages/Explorar/Explorar';
import Comunidade from './pages/Comunidade/Comunidade';
import Contato from './pages/Contato/Contato';
import Cadastro from './pages/CadastroOrganizador/CadastroOrganizador'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import "./i18n";
import CadastroOrganizador from './pages/CadastroOrganizador/CadastroOrganizador';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Mapa from './components/Mapa/Mapa';
import DescricaoEvento from './pages/GerenciadorPerfil/CadastrarEvento/DescricaoEvento/DescricaoEvento.jsx';

import ImagemEvento from './pages/GerenciadorPerfil/CadastrarEvento/ImagemEvento/ImagemEvento';
import MenuLateralPerfil from './pages/GerenciadorPerfil/MenuLateralPerfil/MenuLateralPerfil';
import DetalheEvento from './pages/DetalheEvento/DetalheEvento';
import Xamuel from './assets/evento_6.png';

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
// import VisualizarEvento from './pages/GerenciadorPerfil/CadastrarEvento/VisualizarEvento/VisualizarEvento.jsx';
import EditarPerfilOrganizador from './pages/GerenciadorPerfil/EditarPerfilOrganizador/EditarPerfilOrganizador.jsx';

function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }
  
  return (
    
    <BrowserRouter>
    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
      {children}
    </LocalizationProvider> */}
    {/* <LocationRequest></LocationRequest> */}
    <DisclaimerCookies></DisclaimerCookies>
      <div>
        {/* <Tradutor changeLanguage={changeLanguage} />  Botão de Tradução */}
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/sobre-nos' element={<SobreNos/>} />
          <Route path='/explorar' element={<Explorar/>} />
          <Route path='/comunidade' element={<Comunidade/>} />
          <Route path='/contato' element={<Contato/>} />
          <Route path='/login' element={<CadastroOrganizador />}/>
          <Route path='/descricao-evento' element={<DescricaoEvento />}/>
          <Route path='/gerenciador-perfil' element={<GerenciadorPerfil />}></Route>
          <Route path='/imagem-evento' element={<ImagemEvento />}></Route>
          <Route path='/criar-evento' element={<InicioCadastro />}></Route>
          <Route path='/localizacao-evento' element={<LocalizacaoEvento />}></Route>
          <Route path='/programacao-evento' element={<ProgramacaoEvento />}></Route>
          <Route path='/visibilidade-evento' element={<VisibilidadeEvento />}></Route>
          <Route path='/visualizar-evento' element={<VisualizarEvento />}></Route>
          <Route path='/editar-perfil' element={<EditarPerfilOrganizador />}></Route>
        </Routes>
      </div>
      {/* <Footer></Footer> */}
    </BrowserRouter>
  );
}

export default App;
