import EventoDestaque from '../EventoDestaque/EventoDestaque';
import BatalhaRima from '../../../assets/batalha_rima.png';
import Arte from '../../../assets/arte.png';
import EventoRua from '../../../assets/evento_rua.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import Menu from '../Menu/Menu';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';

import './CarrosselEventoDestaque.css';

export default function CarrosselEventoDestaque(){
    const listItem = [
        {
            id: 1,
            imagem: BatalhaRima,
            titulo: "Batalha de Rima em SP",
            data: "Sábado, dia 20/04 às 9h - 12h, SP Jardim Clímax"
        },
        {
            id: 2,
            imagem: Arte,
            titulo: "Batalha de Rima em SP",
            data: "Sábado, dia 20/04 às 9h - 12h, SP Jardim Clímax"
        },
        {
            id: 3,
            imagem: EventoRua,
            titulo: "Batalha de Rima em SP",
            data: "Sábado, dia 20/04 às 9h - 12h, SP Jardim Clímax"
        }
    ]

    return(
        <div className='container-evento-destaque'>
            <Menu></Menu>
            <div className='container-scroll'>
                <Swiper
                    modules={[EffectCoverflow, Navigation]}
                    slidesPerView={'auto'}
                    effect='coverflow'
                    centeredSlides={true}
                    loop={true}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: -100,
                        depth: 200,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    navigation
                    className='swiper-container'
                >   
                    {
                        listItem.map((item) => (
                            <SwiperSlide
                                className='swiper-item'
                            >
                                {({ isPrev, isNext }) => (
                                    <div className={ isPrev || isNext ? 'slide-blur' : ''} >
                                        <EventoDestaque 
                                            imagemEventoDestaque={item.imagem} 
                                            tituloEventoDestaque={item.titulo} 
                                            dataEventoDestaque={item.data}
                                        />
                                    </div>
                                )}
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
}