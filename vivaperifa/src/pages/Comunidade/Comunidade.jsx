import Header from '../../static/Header/Header';
import CarrosselEvento from '../../components/CarrosselEvento/CarrosselEvento';
import './Comunidade.css';

export default function Comunidade(){
    return (
        <div className="container-comunidade">
            <Header 
                tipoCabecalho="comunidade"
            />
            <CarrosselEvento
                tituloCarrossel="histórico de eventos em são paulo"
            />
        </div>
    );
}