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
        <div className='flex justify-center items-center mt-8'>
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
                <div className='flex gap-1 justify-end mt-2 text-xs mr-[50px]'>
                    <p className='text-zinc-950'>Designed by</p>
                    <a className='text-zinc-950 font-semibold hover:text-blue-300 transition duration-300 hover:underline' rel="noopener noreferrer" href="https://www.freepik.com" target='_blank'>Freepik </a>
                </div>
            </SwiperComponent>
        </div>
    )
}