import { tinders } from '../model/tinder'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { useResize } from '../../../shared/hooks/use-resize'; 
import '@/widgets/action-tinder/model/action-tinder.css'

export const ActionTinder = () => {
    const windowWidth = useResize();

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
                            <button className='flex border solid-#d9d9d9 rounded-lg items-center justify-center hover:bg-gray-50' style={{ width: '128px', height: '44px' }}>Подробнее</button>
                            <div className='relative'>
                                <div className='absolute bottom-[-30px] right-[-5px] h-30 w-30 bg-contain bg-center bg-no-repeat transition-filter duration-300 hover:brightness-110 object-fit-contain' style={{ backgroundImage: `url(${tinder.image})`, width: index === tinders.length - 1 ? '200px' : '120px', height: index === tinders.length - 1 ? '200px' : '120px' }} />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}