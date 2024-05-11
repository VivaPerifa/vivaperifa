import EventoDestaque from '../EventoDestaque/EventoDestaque';
import './CarrosselEventoDestaque.css';
import Xamuel from '../../../assets/xamuel.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function CarrosselEventoDestaque(){
    const listItem = [
        {
            id: 1,
            imagem: Xamuel,
            titulo: "Batalha de Rima em SP",
            data: "Sábado, dia 20/04 às 9h - 12h, SP Jardim Clímax"
        },
        {
            id: 2,
            imagem: Xamuel,
            titulo: "Batalha de Rima em SP",
            data: "Sábado, dia 20/04 às 9h - 12h, SP Jardim Clímax"
        },
        {
            id: 3,
            imagem: Xamuel,
            titulo: "Batalha de Rima em SP",
            data: "Sábado, dia 20/04 às 9h - 12h, SP Jardim Clímax"
        }
    ]
    return(
        <div className='evento-destaque-scroll'>
            {/* <div className='container-fixed itens'>
                {
                    listItem.map((item, index) => {
                        return <EventoDestaque 
                                key={index}
                                tituloEventoDestaque={item.titulo} 
                                imagemEventoDestaque={item.imagem} 
                                dataEventoDestaque={item.data}
                            />
                    })
                }
            </div> */}

            <Swiper
                slidesPerView={1}
                pagination={{clickable:true}}
                navigation
            >
                {
                    listItem.map((item) => (
                        <SwiperSlide ke={item.id}>
                            <div className='item'>
                                <EventoDestaque
                                    tituloEventoDestaque={item.titulo} 
                                    imagemEventoDestaque={item.imagem} 
                                    dataEventoDestaque={item.data}
                                />
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
            <button id='arrow-right'>Direita</button>
            <button id='arrow-left'>Esquerda</button>
        </div>
    );
}