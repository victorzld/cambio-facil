'use client'

import { register } from 'swiper/element/bundle'

register()
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'
import { Swiper as SwiperComponent } from 'swiper/react'
import { SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

const data = [
    { id: '1', image: '/assets/image1.jpg' },
    { id: '2', image: '/assets/image2.jpg' },
    { id: '3', image: '/assets/image3.jpg' }
]

export function SliderImages() {
    return (
        <div className='flex justify-center items-center'>
            <SwiperComponent
                modules={[Autoplay]}
                slidesPerView={1}
                autoplay={{ delay: 2500 }}
                spaceBetween={50}
                loop={true}
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id} className='h-full w-full'>
                        <img
                            src={item.image}
                            className='w-[650px] h-[650px] rounded-2xl'
                        />
                    </SwiperSlide>
                ))}
            </SwiperComponent>
        </div>
    )
}