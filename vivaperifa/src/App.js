import './App.css';
import SobreNos from './pages/SobreNos/SobreNos';
import EventoComum from './components/CarrosselEvento/EventoComum/EventoComum';
import Header from './static/Header/Header';
import FormFaleConosco from './components/FormFaleConosco/FormFaleConosco';
import CarrosselEvento from './components/CarrosselEvento/CarrosselEvento';
import Depoimento from './components/ContainerDepoimentos/Depoimento/Depoimento';
import fotoUsuario from './assets/fotoUsuario.png';
import Cookies from './components/DisclaimerCookies/DisclaimerCookies';
import Footer from './static/Footer/Footer';
import BannerCrescimento from './components/BannerCrescimento/BannerCrescimento';
import FiltroPesquisa from './pages/Explorar/FiltroPesquisa/FiltroPesquisa';

function App() {

  return (
    <div className='container'>

      {/*Componente header*/}
      <Header 
        tipoCabecalho="home"
      />

      {/*Componente evento comum*/}
      <CarrosselEvento tituloCarrossel="Acontece Na Zona Leste">
        
      </CarrosselEvento>
      {/*Componente sobre nós*/}
      <SobreNos></SobreNos>

      <Depoimento fotoUsuario= {fotoUsuario}></Depoimento>

      {/*Componente Banner Crescimento*/}
      <BannerCrescimento></BannerCrescimento>

      {/*Componente Formulario Fale Conosco*/}
      <FormFaleConosco></FormFaleConosco>

      {/*Componente Cookies*/}
      <Cookies></Cookies>

      {/*Componente Footer*/}
      <Footer></Footer>

      {/*Filtro Pesquisa*/}
      <div className='filtros'>
          <FiltroPesquisa nomeFiltro='Feira de artesanato' corFiltro='#033E8C'></FiltroPesquisa>
          <FiltroPesquisa nomeFiltro='Feira de artesanato' corFiltro='#F28705'></FiltroPesquisa>
          <FiltroPesquisa nomeFiltro='Feira de artesanato' corFiltro='#D9043E'></FiltroPesquisa>
      </div>
    </div>
    
  );
}

export default App;
