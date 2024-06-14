import './App.css';
import SobreNos from './pages/SobreNos/SobreNos';
import Footer from './static/Footer/Footer';
import Menu from './static/Header/Menu/Menu';
import Home from './pages/Home/Home';
import Explorar from './pages/Explorar/Explorar';
import Comunidade from './pages/Comunidade/Comunidade';
import Contato from './pages/Contato/Contato';
import Cadastro from './pages/CadastroOrganizador/CadastroOrganizador'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import "./i18n";
import api from  './services/api';
import CadastroOrganizador from './pages/CadastroOrganizador/CadastroOrganizador';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Mapa from './components/Mapa/Mapa';
import Detalhes from './pages/GerenciadorPerfil/CadastrarEvento/DetalhesEvento/DetalhesEvento';
import GerenciadorPerfil from './pages/GerenciadorPerfil/GerenciadorPerfil';
import InicioCadastro from './pages/GerenciadorPerfil/CadastrarEvento/InicioCadastro/InicioCadastro';
import ImagemEvento from './pages/GerenciadorPerfil/CadastrarEvento/ImagemEvento/ImagemEvento';
import MenuLateralPerfil from './pages/GerenciadorPerfil/MenuLateralPerfil/MenuLateralPerfil';
import DetalheEvento from './pages/DetalheEvento/DetalheEvento';
import Xamuel from './assets/evento_6.png';
// import Comentario from './components/Comentario/Comentario';
import PerfilParticipante from './pages/PerfilParticipante/PerfilParticipante';
import VisibilidadeEvento from './pages/GerenciadorPerfil/CadastrarEvento/VisibilidadeEvento/VisibilidadeEvento';
import imagem from './pages/GerenciadorPerfil/CadastrarEvento/InicioCadastro/InicioCadastro.jsx';
import Tradutor from './components/Tradutor/tradutor';
import BotaoTopo from './components/BotaoTopo/BotaoTopo';

function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }
  // const [user, setUser] = useState();

  // useEffect(() => {
  //   api.get("/participante/123")
  //       .then((response) => {
  //         setUser(response.data);
  //       })
  //       .catch((error) => {
  //         console.log("Erro ao buscar dados dos usuários "+error);
  //       });
  // }, []);
  
  return (
    <BrowserRouter>
      <div>
        {/* <div>
          <p>Usuário: {user?.nomeCompleto}</p>
        </div> */}
        <Tradutor changeLanguage={changeLanguage} />  {/* Botão de Tradução */}
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/sobre-nos' element={<SobreNos/>} />
          <Route path='/explorar' element={<Explorar/>} />
          <Route path='/comunidade' element={<Comunidade/>} />
          <Route path='/contato' element={<Contato/>} />
          <Route path='/login' element={<CadastroOrganizador />}/>
          <Route path='/detalhes' element={<Detalhes />}/>
      
          <Route path='/gerenciador-perfil' element={<GerenciadorPerfil />}></Route>
          <Route path='/imagem-evento' element={<ImagemEvento />}></Route>
        </Routes>
        <DetalheEvento
            imagemDetalheEvento={Xamuel}
            tituloEvento="titulo"
            descricaoEvento="descricao"
        />
        {/* <Comentario></Comentario> */}
        <PerfilParticipante></PerfilParticipante>
      </div>
      <BotaoTopo/>
      <Footer></Footer>
      <MenuLateralPerfil></MenuLateralPerfil>
      <VisibilidadeEvento></VisibilidadeEvento>
      <InicioCadastro></InicioCadastro>
    </BrowserRouter>
    
    
  );
}

export default App;
