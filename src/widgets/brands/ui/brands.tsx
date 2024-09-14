import { useResize } from '@/shared/hooks/use-resize'
import { brands } from "@/widgets/brands/model/brands";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom'
import {Navigation} from "swiper/modules";
import 'swiper/swiper-bundle.css';
import {useMemo} from "react";

export const Brands: React.FC = () => {
    const windowWidth = useResize()
    const isMobile = useMemo(() => windowWidth <= 992, [windowWidth])

    return (
        <div className='flex w-full overflow-x-auto overscroll-contain snap-x snap-mandatory gap-4 pr-4 scrollbar-hide relative group'>
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView="auto"
                style={{ paddingLeft: '16px', paddingRight: '16px' }}
            >
                {brands.map((brand, index) => (
                    <Link
                        to={brand.url}
                        key={index}
                    >
                    <SwiperSlide key={index} style={isMobile ? { width: '112px' } : { width: '132px' }}>
                        <div className='rounded-[16px] border border-white shadow-sm transition-all hover:border-gray-500 lg:hover:border-gray-500 hover:bg-gray-100 cursor-pointer h-80 w-full flex flex-col justify-between shadow-md p-4 transition-transform duration-300 mb-2 overflow-hidden bg-white' style={isMobile ? { height: '57px' } : { height: '69px' }}>
                            {isMobile? (
                                <div className='absolute right-[15px] h-30 w-30 bg-contain bg-center bg-no-repeat transition-filter duration-300 hover:brightness-110 object-fit-contain' style={{ backgroundImage: `url(${brand.image})`, width: '78px', height: '23px' }} />
                            ):(
                                <div className='absolute right-[25px] h-30 w-30 bg-contain bg-center bg-no-repeat transition-filter duration-300 hover:brightness-110 object-fit-contain' style={{ backgroundImage: `url(${brand.image})`, width: '86px', height: '31px' }} />
                            )}
                        </div>
                    </SwiperSlide>
                    </Link>
                ))}
            </Swiper>
        </div>
    )
}