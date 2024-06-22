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
import MiniEventoComum from "../../../components/CarrosselMiniEventoComum/MiniEventoComum/MiniEventoComum";

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

    return (
        <div className="container-eventos-cadastrados">
            <MenuLateralPerfil></MenuLateralPerfil>

            <div className="eventos-cadastrados-scroll">
                <div className="conteudo-eventos-cadastrados">
                    <div className="eventos-cadastrados__guia">
                        <div className="eventos-cadastrados__pendentes">
                            <span>Pendentes</span>
                        </div>
                        <div className="eventos-cadastrados__encerrados">
                            <span>Encerrados</span>
                        </div>
                    </div>
                    <div className="eventos-cadastrados__body">
                        <div className="eventos-cadastrados__carrossel">
                            <MiniEventoComum></MiniEventoComum>
                            <MiniEventoComum></MiniEventoComum>
                            <MiniEventoComum></MiniEventoComum>
                        </div>
                        <div className="eventos-cadastrados__carrossel">
                            <MiniEventoComum></MiniEventoComum>
                            <MiniEventoComum></MiniEventoComum>
                            <MiniEventoComum></MiniEventoComum>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

