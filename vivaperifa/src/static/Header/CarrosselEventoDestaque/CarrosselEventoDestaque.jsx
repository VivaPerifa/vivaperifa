import EventoDestaque from '../EventoDestaque/EventoDestaque';
import './CarrosselEventoDestaque.css';
import Xamuel from '../../../assets/xamuel.jpg';

export default function CarrosselEventoDestaque(){
    const listItem = [
        {
            imagem: Xamuel,
            titulo: "Batalha de Rima em SP",
            data: "Sábado, dia 20/04 às 9h - 12h, SP Jardim Clímax"
        },
        {
            imagem: Xamuel,
            titulo: "Batalha de Rima em SP",
            data: "Sábado, dia 20/04 às 9h - 12h, SP Jardim Clímax"
        }
    ]

    var itens = document.querySelectorAll("itens");
    var currentItem = 0;

    console.log(itens);
    function scroll(){
        currentItem++;
        itens[currentItem].scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "center"
        });
    }
    return(
        <div className='evento-destaque-scroll'>
            <div className='container-fixed itens'>
                {
                    listItem.map((item, index) => {
                        return <EventoDestaque tituloEventoDestaque={item.titulo} imagemEventoDestaque={item.imagem} dataEventoDestaque={item.data}></EventoDestaque>
                    })
                }
            </div>
            <button id='arrow-right' onClick={scroll}>Direita</button>
            <button id='arrow-left'>Esquerda</button>
        </div>
    );
}