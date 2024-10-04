import { FaRegTrashAlt } from 'react-icons/fa'
import { HiOutlineInformationCircle } from 'react-icons/hi'
import { Link } from 'react-router-dom'

import { useGetSliderProductsQuery } from '@/shared/redux/api/baseApi'

import { ProductsStars } from './products-stars'

export const ProductsMobile = () => {
  const { data } = useGetSliderProductsQuery()

  return (
    <div className='flex flex-row gap-[16px] overflow-x-scroll pb-[2px] pl-[16px] pr-[16px]'>
      {data?.map(product => (
        <div
          className='box-border flex h-[320px] min-w-[160px] flex-col gap-[10px] rounded-[8px] bg-white p-[8px] shadow-[0_1px_2px_0_rgba(0,0,0,0.1)]'
          key={product.id}
        >
          <div className='flex h-[100px] w-full'>
            <Link to='#' className='h-full w-full'>
              <div
                className='h-full w-full bg-contain bg-center bg-no-repeat'
                style={{ backgroundImage: `url(${product.imageUrl})` }}
              />
            </Link>
            <div className='flex h-[25px] min-w-[25px] cursor-pointer items-center justify-center rounded-full bg-[#f7f7f7]'>
              <FaRegTrashAlt className='text-[#d9d9d9] hover:text-orange-500' />
            </div>
          </div>
          <Link
            to='#'
            className='h-[60px] overflow-hidden text-[14px] leading-[20px] opacity-90 hover:text-orange-500'
          >
            {product.title}
          </Link>
          <ProductsStars rating={product.rating} opinionsCount={product.opinionsCount} />
          <Link
            to='#'
            className='flex flex-grow items-center justify-between rounded-lg bg-gradient-to-r from-[#f6f6f6] to-transparent p-1.5'
          >
            <div>
              <div className='text-[18px] font-bold'>{product.price} ₽</div>
              <div className='text-[14px] opacity-90'>от {product.creditMonthlyPayment} ₽/мес</div>
            </div>
            <HiOutlineInformationCircle className='text-[25px] text-[#d9d9d9]' />
          </Link>
        </div>
      ))}
    </div>
  )
}
