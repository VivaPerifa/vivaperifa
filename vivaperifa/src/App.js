import './App.css';
import SobreNos from './pages/SobreNos/SobreNos';
import Header from './static/Header/Header';
import FormFaleConosco from './components/FormFaleConosco/FormFaleConosco';
import CarrosselEvento from './components/CarrosselEvento/CarrosselEvento';
import Depoimento from './components/ContainerDepoimentos/Depoimento/Depoimento';
import fotoUsuario from './assets/fotoUsuario.png';
import Cookies from './components/DisclaimerCookies/DisclaimerCookies';
import Footer from './static/Footer/Footer';
import BannerCrescimento from './components/BannerCrescimento/BannerCrescimento';
import FiltroPesquisa from './pages/Explorar/FiltroPesquisa/FiltroPesquisa';
import Xamuel from './assets/xamuel.jpg';
import Plano from './components/ContainerPlanos/Plano/Plano';

function App() {
  const items = [
    {
      nome: "Cadastrar evento"
    },
    {
      nome: "Acesso a comunidade"
    }
  ];

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

      {/*Componente plano*/}
      <Plano tipoPlano="Básico" valorPlano="Gratuito"></Plano>
      <Plano tipoPlano="Premium" valorPlano="39,29" beneficios={items}></Plano>

    </div>
    
  );
}

export default App;
