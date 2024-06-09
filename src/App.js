import './App.css';
import SobreNos from './pages/SobreNos/SobreNos';
import Footer from './static/Footer/Footer';
import Home from './pages/Home/Home';
import Explorar from './pages/Explorar/Explorar';
import Comunidade from './pages/Comunidade/Comunidade';
import Contato from './pages/Contato/Contato';
import Cadastro from './pages/CadastroOrganizador/CadastroOrganizador'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import api from  './services/api';
import CadastroOrganizador from './pages/CadastroOrganizador/CadastroOrganizador';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
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
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/sobre-nos' element={<SobreNos/>} />
          <Route path='/explorar' element={<Explorar/>} />
          <Route path='/comunidade' element={<Comunidade/>} />
          <Route path='/contato' element={<Contato/>} />
          <Route path='/login' element={<CadastroOrganizador />}/>
        </Routes>
      </div>
      <Footer></Footer>
    </BrowserRouter>
    
  );
}

export default App;