import { CiHeart } from 'react-icons/ci'
import { FaRegTrashAlt } from 'react-icons/fa'
import { HiOutlineInformationCircle } from 'react-icons/hi'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { Link } from 'react-router-dom'

import SwiperHOC from '@/shared/ui/swiper-hoc/swiper-hoc'

import { ProductsProps } from '../interfaces'
import { ProductsStars } from './products-stars'

export const ProductsDesktop = ({ data, onDelete }: ProductsProps) => {
  return (
    <div className='rounded-[10px] bg-white py-[24px] shadow-[0_1px_2px_0_rgba(0,0,0,0.1)]'>
      <SwiperHOC
        data={data}
        id='slider-products'
        swiperClassName='group relative'
        swiperSlideClassName='flex h-[400px] w-[260px] flex-col justify-between'
      >
        {product => (
          <>
            <div className='flex h-[120px] w-full'>
              <Link to='#' className='h-full w-full'>
                <div
                  className='h-full w-full bg-contain bg-center bg-no-repeat'
                  style={{ backgroundImage: `url(${product.imageUrl})` }}
                />
              </Link>
              <div className='flex h-[32px] min-w-[32px] cursor-pointer items-center justify-center rounded-full bg-[#f7f7f7]'>
                <FaRegTrashAlt
                  className='text-[20px] text-[#d9d9d9] hover:text-orange-500'
                  onClick={() => {
                    onDelete(product.id)
                  }}
                />
              </div>
            </div>
            <Link
              to='#'
              className='h-[60px] overflow-hidden text-[14px] leading-[20px] opacity-90 hover:text-orange-500'
            >
              {product.title}
              {product.specs}
            </Link>
            <div className='flex flex-col gap-[10px]'>
              <div className='flex items-center gap-[10px]'>
                <label
                  htmlFor={`compare-${product.id}`}
                  className='flex h-[32px] cursor-pointer items-center gap-[10px] rounded-[8px] border border-[#eee] p-[6px] hover:border-orange-500'
                >
                  <input
                    type='checkbox'
                    name=''
                    id={`compare-${product.id}`}
                    className='h-[16px] w-[16px] cursor-pointer'
                  />
                  <span className='text-[14px]'>Сравнить</span>
                </label>
                <ProductsStars rating={product.rating} opinionsCount={product.opinionsCount} />
              </div>
              <div className='flex items-center justify-between gap-[4px]'>
                <Link
                  to='#'
                  className='flex flex-grow items-center justify-between rounded-lg bg-gradient-to-r from-[#f6f6f6] p-1.5'
                >
                  <div>
                    <div className='text-[18px] font-bold'>{product.price} ₽</div>
                    <div className='text-[12px] opacity-90'>
                      от {product.creditMonthlyPayment} ₽/мес
                    </div>
                  </div>
                  <HiOutlineInformationCircle className='text-[25px] text-[#d9d9d9]' />
                </Link>
                <button className='flex h-[44px] w-[44px] items-center justify-center rounded-[10px] border hover:bg-[#d9d9d9]'>
                  <CiHeart className='text-[24px] text-[#afafaf]' />
                </button>
                <button className='flex h-[44px] w-[44px] items-center justify-center rounded-[10px] border hover:bg-[#d9d9d9]'>
                  <MdOutlineShoppingCart className='text-[24px] text-[#afafaf]' />
                </button>
              </div>
            </div>
          </>
        )}
      </SwiperHOC>
    </div>
  )
}
