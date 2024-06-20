import CarrosselEvento from '../../components/CarrosselEvento/CarrosselEvento';
import './Comunidade.css';

import Evento1 from "../../assets/evento_1.png";
import Evento2 from "../../assets/evento_2.png";
import Evento3 from "../../assets/evento_3.png";
import Evento4 from "../../assets/evento_4.png";
import Evento5 from "../../assets/evento_5.png";
import Evento6 from "../../assets/evento_6.png";
import Evento7 from "../../assets/evento_7.png";
import Evento8 from "../../assets/evento_8.png";
import Evento9 from "../../assets/evento_9.png";
import Evento10 from "../../assets/evento_10.png";

import Evento12 from "../../assets/evento_12.png";
import Evento13 from "../../assets/evento_13.png";
import Evento14 from "../../assets/evento_14.png";

import Evento11 from "../../assets/evento_feira.png";
import Menu from '../../static/Menu/Menu';

export default function Comunidade(){
    const primeiraListaEvento = [
        {
            id:1,
            imagem: Evento11,
            titulo: "Tenda de História",
            comentarios: "1200 comentários",
            local:"Guaianases",
            descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla purus sed purus ornare malesuada...",
        },
        {
            id:2,
            imagem: Evento7,
            titulo: "Literatura",
            comentarios: "1200 comentários",
            local:"Cidade Tiradentes",
            descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla purus sed purus ornare malesuada...",
        },
        {
            id:3,
            imagem: Evento5,
            titulo: "Batalha de Rima",
            comentarios: "1200 comentários",
            local:"Itaquera",
            descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla purus sed purus ornare malesuada...",
        }
    ];

    const segundaListaEvento = [
        {
            id:1,
            imagem: Evento14,
            titulo: "Tenda de História",
            comentarios: "1200 comentários",
            local:"Guaianases",
            descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla purus sed purus ornare malesuada...",
        },
        {
            id:2,
            imagem: Evento13,
            titulo: "Literatura",
            comentarios: "1200 comentários",
            local:"Cidade Tiradentes",
            descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla purus sed purus ornare malesuada...",
        },
        {
            id:3,
            imagem: Evento12,
            titulo: "Batalha de Rima",
            comentarios: "1200 comentários",
            local:"Itaquera",
            descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla purus sed purus ornare malesuada...",
        }
    ];
    return (
        <div className="container-comunidade">
            <div className="comunidade-header">
                <Menu></Menu>
                <h2>Explore a comunidade de eventos da sua qubrada!</h2>
            </div>
            <CarrosselEvento
                tituloCarrossel="histórico de eventos em são paulo"
                listaEvento={primeiraListaEvento}
            />
            <CarrosselEvento
                listaEvento={segundaListaEvento}
            />
        </div>
    );
}