import './App.css';
import CarrosselEventoDestaque from './static/Header/CarrosselEventoDestaque/CarrosselEventoDestaque';
import SobreNos from './pages/SobreNos/SobreNos';
import EventoDestaque from './static/Header/EventoDestaque/EventoDestaque';
import Menu from './static/Header/Menu/Menu';
import Header from './static/Header/Header';

function App() {

  return (
    <div className='container'>
      <main>
        
      </main>
      {/* <Header 
        mostrarCarrosselDestaque={true} 
        mostrarTitulo={false} 
        tela={"home"}
        tituloHeader={""}
        mostrarDestaque={false}
      /> */}

      <SobreNos></SobreNos>

      {/* <Header 
        mostrarCarrosselDestaque={false} 
        mostrarTitulo={false} 
        tela={"explorar"}
        tituloHeader={""}
        mostrarDestaque={true}
      /> */}
    </div>
    
  );
}

export default App;
