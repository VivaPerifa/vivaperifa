import EventoDestaque from '../EventoDestaque/EventoDestaque';
import Xamuel from '../../../assets/xamuel.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';

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
        <div className='container-evento-destaque'>
            <div className='container-scroll'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    slidesPerView={1}
                    navigation
                >
                    
                    {
                        listItem.map((item) => (
                            <SwiperSlide>
                                <div className='item'>
                                    <EventoDestaque 
                                        imagemEventoDestaque={item.imagem} 
                                        tituloEventoDestaque={item.titulo} 
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