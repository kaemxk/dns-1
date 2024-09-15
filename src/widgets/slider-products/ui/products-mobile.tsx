import { useGetSliderProductsQuery } from '@/shared/redux/api/baseApi';
import { HiOutlineInformationCircle } from "react-icons/hi";
import { ProductsStars } from "./products-stars";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export const ProductsMobile = () => {
    const { data } = useGetSliderProductsQuery();

    return (
        <div className="flex flex-row overflow-x-scroll gap-[16px] pl-[16px] pr-[16px] pb-[2px]">
            {data?.map((product) => (
                <div className="flex flex-col gap-[10px] h-[320px] min-w-[160px] p-[8px] bg-white box-border rounded-[8px] shadow-[0_1px_2px_0_rgba(0,0,0,0.1)]" key={product.id}>
                    <div className="flex w-full h-[100px]">
                        <Link to='#' className="w-full h-full">
                            <div 
                            className="w-full h-full bg-contain bg-no-repeat bg-center"
                            style={{ backgroundImage: `url(${product.imageUrl})`}} 
                            />
                        </Link>
                        <div className="cursor-pointer min-w-[25px] h-[25px] bg-[#f7f7f7] rounded-full flex items-center justify-center">
                            <FaRegTrashAlt className='text-[#d9d9d9] hover:text-orange-500' />
                        </div>
                    </div>
                    <Link to='#' className="text-[14px] opacity-90 leading-[20px] h-[60px] overflow-hidden hover:text-orange-500">
                        {product.title}
                    </Link>
                    <ProductsStars rating={product.rating} opinionsCount={product.opinionsCount} />
                    <Link to='#' className='flex flex-grow justify-between items-center bg-gradient-to-r from-[#f6f6f6] to-transparent rounded-lg p-1.5'>
                        <div>
                            <div className='text-[18px] font-bold'>{product.price} ₽</div>
                            <div className='text-[14px] opacity-90'>от {product.creditMonthlyPayment} ₽/мес</div>
                        </div>
                        <HiOutlineInformationCircle className='text-[25px] text-[#d9d9d9]' />
                    </Link>
                </div>
            ))}
        </div>
    );
};