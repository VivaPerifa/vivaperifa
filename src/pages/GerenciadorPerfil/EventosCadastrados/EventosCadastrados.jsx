import MenuLateralPerfil from "../MenuLateralPerfil/MenuLateralPerfil";
import "./EventosCadastrados.css";
import Evento1 from "../../../assets/evento_1.png";
import Evento2 from "../../../assets/evento_2.png";
import Evento3 from "../../../assets/evento_3.png";
import Evento4 from "../../../assets/evento_4.png";
import Evento5 from "../../../assets/evento_5.png";
import Evento6 from "../../../assets/evento_6.png";
import Evento7 from "../../../assets/evento_7.png";
import Evento8 from "../../../assets/evento_8.png";
import Evento9 from "../../../assets/evento_9.png";
import Evento10 from "../../../assets/evento_10.png";
import CarrosselEventoDestaque from '../../../components/CarrosselEventoDestaque/CarrosselEventoDestaque';
import CarrosselEvento from "../../../components/CarrosselEvento/CarrosselEvento";
import { useState, useEffect } from 'react';
import CarrosselMiniEventoComum from "../../../components/CarrosselMiniEventoComum/CarrosselMiniEventoComum";


export default function EventosCadastrados() {

    const primeiraListaEvento = [
        {
            id: 1,
            imagem: Evento10,
            titulo: "Tenda de História",
            data: "Sábado, dia 29/04 às 9h - 12h",
            local: "Guaianases",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla purus sed purus ornare malesuada...",
        },
        {
            id: 2,
            imagem: Evento5,
            titulo: "Literatura",
            data: "Sábado, dia 20/04 às 09h - 12h",
            local: "Cidade Tiradentes",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla purus sed purus ornare malesuada...",
        },
        {
            id: 3,
            imagem: Evento8,
            titulo: "Batalha de Rima",
            data: "Sábado, dia 20/04 às 09h - 12h",
            local: "Itaquera",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla purus sed purus ornare malesuada...",
        }
    ];

    const [container, setContainer] = useState(true);

    const handleContainerEncerrados = () => {
        setContainer(false);
    }

    const handleContainerPendentes = () => {
        setContainer(true);
    }

    useEffect(() => {
        var carrossel_pendentes = document.getElementById('carrossel_pendentes');
        var carrossel_encerrados = document.getElementById('carrossel_encerrados');
        var titulo_pendentes = document.getElementById('titulo_pendentes');
        var titulo_encerrados = document.getElementById('titulo_encerrados');

        if(container){
            carrossel_pendentes.classList.add('hidden-container');
            carrossel_encerrados.classList.remove('hidden-container');
            carrossel_encerrados.classList.add('show-container');
        }
        if(!container){
            carrossel_pendentes.classList.remove('hidden-container');
            carrossel_encerrados.classList.remove('show-container');
            carrossel_encerrados.classList.add('hidden-container');
            carrossel_pendentes.classList.add('show-container');
        }
        
    },[container])

    return (
        <div className="container-eventos-cadastrados">
            <MenuLateralPerfil></MenuLateralPerfil>

            <div className="eventos-cadastrados-scroll" id="eventos_cadastrados_scroll">
                <div className="conteudo-eventos-cadastrados pendentes">
                    <div className="eventos-cadastrados__header">
                        <h2>Meus eventos</h2>
                        <p>Veja todos os eventos que você já publicou, desde aqueles que ainda não ocorreram (pendentes) até os que já aconteceram (histórico).</p>
                    </div>
                    <div className="eventos-cadastrados__guia">
                        <div className="eventos-cadastrados__pendentes">
                            <span className="ativo" onClick={handleContainerPendentes} id="titulo_pendentes">Pendentes</span>
                        </div>
                        <div className="eventos-cadastrados__encerrados">
                            <span onClick={handleContainerEncerrados} id="titulo_encerrados">Encerrados</span>
                        </div>
                    </div>

                    <div className="eventos-cadastrados__body">
                        <div className="eventos-cadastrados__carrossel" id="carrossel_pendentes">
                            <CarrosselMiniEventoComum
                                listaMiniEvento={primeiraListaEvento}
                            />
                        </div>
                        <div className="eventos-cadastrados__carrossel hidden-container" id="carrossel_encerrados">
                            Carrossel ne pai
                        </div>
                    </div>
                </div>

                {/* <div className="conteudo-eventos-cadastrados encerrados">
                    <div className="eventos-cadastrados__guia">
                        <div className="eventos-cadastrados__pendentes">
                            <span className="troca-pendente" id="troca_pendente">Pendentes</span>
                        </div>
                        <div className="eventos-cadastrados__encerrados">
                            <span>Encerrados</span>
                        </div>
                    </div>
                    <div className="eventos-cadastrados__body">
                        <div className="eventos-cadastrados__carrossel">
                            <CarrosselMiniEventoComum
                                listaMiniEvento={primeiraListaEvento}
                            />
                        </div>

                    </div>
                </div> */}
            </div>

        </div>
    );
}

