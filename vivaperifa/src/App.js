import './App.css';
import SobreNos from './pages/SobreNos/SobreNos';
import EventoComum from './components/CarrosselEvento/EventoComum/EventoComum';
import Header from './static/Header/Header';
import FormFaleConosco from './components/FormFaleConosco/FormFaleConosco';
import CarrosselEvento from './components/CarrosselEvento/CarrosselEvento';


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

      {/*Componente Formulario Fale Conosco*/}
      <FormFaleConosco></FormFaleConosco>

    </div>
    
  );
}

export default App;
