import './App.css';
import CarrosselEventoDestaque from './static/Header/CarrosselEventoDestaque/CarrosselEventoDestaque';
import SobreNos from './pages/SobreNos/SobreNos';
import EventoDestaque from './static/Header/EventoDestaque/EventoDestaque';
import Menu from './static/Header/Menu/Menu';
import EventoComum from './components/CarrosselEvento/EventoComum/EventoComum';

function App() {
  return (
    <div className='container'>
      <CarrosselEventoDestaque></CarrosselEventoDestaque>
      <SobreNos></SobreNos> 
      <EventoComum>giu</EventoComum>
    </div>
    
  );
}

export default App;
