import { useGetSliderProductsQuery } from "@/shared/redux/api/baseApi";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ProductsStars } from './products-stars';
import { FaRegTrashAlt } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import 'swiper/swiper-bundle.css';

export const ProductsDesktop = () => {
    const { data } = useGetSliderProductsQuery();

    return (
        <div className='mb-[50px] py-[24px] rounded-[10px] bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.1)]'>
            <Swiper
                   spaceBetween={20}
                   slidesPerView="auto"
                   modules={[Navigation]}
                   navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                   className="relative group"
               >
                   {data && data.map((product) => (
                       <SwiperSlide key={product.id} className="flex flex-col justify-between w-[260px] h-[400px]">
                            <div className="flex w-full h-[120px]">
                                <Link to='#' className="w-full h-full">
                                    <div 
                                    className="w-full h-full bg-contain bg-no-repeat bg-center"
                                    style={{ backgroundImage: `url(${product.imageUrl})`}} 
                                    />
                                </Link>
                                <div className="cursor-pointer min-w-[32px] h-[32px] bg-[#f7f7f7] rounded-full flex items-center justify-center">
                                    <FaRegTrashAlt className='text-[#d9d9d9] text-[20px] hover:text-orange-500' />
                                </div>
                            </div>
                            <Link to='#' className="text-[14px] opacity-90 leading-[20px] h-[60px] overflow-hidden hover:text-orange-500">
                                {product.title}{product.specs}
                            </Link>
                            <div className="flex flex-col gap-[10px]">
                                <div className="flex items-center gap-[10px]">
                                    <label htmlFor={`compare-${product.id}`} className="flex items-center cursor-pointer gap-[10px] h-[32px] border border-[#eee] rounded-[8px] p-[6px] hover:border-orange-500">
                                        <input type="checkbox" name="" id={`compare-${product.id}`} className="cursor-pointer h-[16px] w-[16px]" />
                                        <span className="text-[14px]">Сравнить</span>
                                    </label>
                                    <ProductsStars rating={product.rating} opinionsCount={product.opinionsCount} />
                                </div>
                                <div className="flex justify-between items-center gap-[4px]">
                                    <Link to='#' className='flex flex-grow justify-between items-center bg-gradient-to-r from-[#f6f6f6] rounded-lg p-1.5'>
                                        <div>
                                            <div className='text-[18px] font-bold'>{product.price} ₽</div>
                                            <div className='text-[12px] opacity-90'>от {product.creditMonthlyPayment} ₽/мес</div>
                                        </div>
                                        <HiOutlineInformationCircle className='text-[25px] text-[#d9d9d9]' />
                                    </Link>
                                    <button className="flex items-center justify-center w-[44px] h-[44px] border rounded-[10px] hover:bg-[#d9d9d9]"><CiHeart className='text-[24px] text-[#afafaf]' /></button>
                                    <button className="flex items-center justify-center w-[44px] h-[44px] border rounded-[10px] hover:bg-[#d9d9d9]"><MdOutlineShoppingCart className='text-[24px] text-[#afafaf]' /></button>
                                </div>
                            </div>
                       </SwiperSlide>
                   ))}
                   <div className="swiper-button-prev bg-white w-[48px] h-[48px] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-105 hover:shadow-lg after:text-gray-500 hover:after:text-orange-500 after:content-['\003C'] after:text-[20px]" />
                   <div className="swiper-button-next bg-white w-[48px] h-[48px] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-105 hover:shadow-lg after:text-gray-500 hover:after:text-orange-500 after:content-['\003E'] after:text-[20px]" />
               </Swiper>
        </div>
    )
}
