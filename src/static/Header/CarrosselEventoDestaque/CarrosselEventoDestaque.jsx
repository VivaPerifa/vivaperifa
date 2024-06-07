import EventoDestaque from '../EventoDestaque/EventoDestaque';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';

import './CarrosselEventoDestaque.css';

export default function CarrosselEventoDestaque(props) {
    const listItem = props.listaEventoDestaque;

    return(
        <div className='container-evento-destaque'>
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
                        listItem.map((item, index) => (
                            <SwiperSlide
                                className='swiper-item'
                                key={index}
                            >
                                {({ isPrev, isNext }) => (
                                    <div className={ isPrev || isNext ? 'slide-blur' : ''}>
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