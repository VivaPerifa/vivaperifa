import './App.css';
import SobreNos from './pages/SobreNos/SobreNos';
import Footer from './static/Footer/Footer';
import Home from './pages/Home/Home';
import Explorar from './pages/Explorar/Explorar';
import Comunidade from './pages/Comunidade/Comunidade';
import Contato from './pages/Contato/Contato';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/sobre-nos' element={<SobreNos/>} />
          <Route path='/explorar' element={<Explorar/>} />
          <Route path='/comunidade' element={<Comunidade/>} />
          <Route path='/contato' element={<Contato/>} />
        </Routes>
      </div>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
