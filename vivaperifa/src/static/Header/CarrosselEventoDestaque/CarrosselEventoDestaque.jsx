import EventoDestaque from '../EventoDestaque/EventoDestaque';

import Xamuel from '../../../assets/xamuel.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css/bundle';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.css';
import './CarrosselEventoDestaque.css';


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
            <div className='container-fixed'>
                <Swiper
                   slidesPerView={1}
                   navigation
                   modules={[Navigation, Pagination, Scrollbar, A11y]}

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

                
            </div>
        </div>
    );
}