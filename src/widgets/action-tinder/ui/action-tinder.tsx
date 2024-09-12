import { tinders } from '../model/tinder'
import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

export const ActionTinder = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div className='flex w-full overflow-x-auto overscroll-contain snap-x snap-mandatory gap-4 pr-4 scrollbar-hide relative group'>
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView="auto"
                navigation={windowWidth > 992}
                style={{ paddingLeft: '16px', paddingRight: '16px' }}
            >
                {tinders.map((tinder, index) => (
                    <SwiperSlide key={index} style={{ width: '314px' }}>
                        <div className='h-80 w-full flex flex-col justify-between rounded-lg shadow-md p-4 transition-transform duration-300 mb-2 overflow-hidden' style={{ height: '206px' }}>
                            <div className='font-weight-700 font-size-18 line-height-22 color-#333 whitespace-pre-line mb-0.5'>
                                <strong>{tinder.discount}</strong>
                            </div>
                            <div className='max-h-40 overflow-hidden text-sm line-height-20 color-#333 text-decoration-none mb-0.5'>{tinder.naming}</div>
                            <div className='flex items-baseline mb-0.5'>
                                <div className='text-xl font-bold text-orange-500'>{tinder.price}</div>
                                <div className='text-sm text-gray-400 line-through ml-2'>{tinder.priceDiscount}</div>
                            </div>
                            <button className='flex border solid-#d9d9d9 rounded-lg items-center justify-center' style={{ width: '128px', height: '44px' }}>Подробнее</button>
                            <div className='relative'>
                                <div className='absolute bottom-[-30px] right-[-5px] h-30 w-30 bg-contain bg-center bg-no-repeat transition-filter duration-300 hover:brightness-110 object-fit-contain' style={{ backgroundImage: `url(${tinder.image})`, width: index === tinders.length - 1 ? '200px' : '120px', height: index === tinders.length - 1 ? '200px' : '120px' }} />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <style>{`
                .swiper-button-next, .swiper-button-prev {
                    background-color: #fff;
                    border-radius: 50%;
                    width: 48px;
                    height: 48px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transition: opacity 0.3s, background-color 0.3s, transform 0.3s;
                    visibility: hidden;
                }
                .group:hover .swiper-button-next, .group:hover .swiper-button-prev {
                    opacity: 1;
                    visibility: visible;
                }
                .swiper-button-next:hover, .swiper-button-prev:hover,
                .swiper-button-next:active, .swiper-button-prev:active {
                    transform: scale(1.1);
                }
                .swiper-button-next::after, .swiper-button-prev::after {
                    content: '';
                    display: block;
                    width: 8px;
                    height: 8px;
                    border: solid gray;
                    border-width: 0 1px 1px 0;
                }
                .swiper-button-next::after {
                    transform: rotate(-45deg);
                }
                .swiper-button-prev::after {
                    transform: rotate(135deg);
                }
                .swiper-button-disabled {
                    background-color: #ccc;
                }
                .swiper-button-next.swiper-button-disabled, .swiper-button-prev.swiper-button-disabled {
                    display: none;
                }
            `}</style>
        </div>
    )
}