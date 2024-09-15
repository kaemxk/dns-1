import { Link } from "react-router-dom";

interface ProductsStarsProps {
    rating: number;
    opinionsCount: number;
}

export const ProductsStars = ({ rating, opinionsCount }: ProductsStarsProps) => {   

    return (
        <Link to='#' className='flex items-center gap-[2px] w-fit h-[32px] rounded-[8px] p-[6px] border border-[#eee] hover:border-orange-500'>
            {rating ? (
                <>
                    {[...Array(5).keys()].map((index) => (
                        <span key={index} style={{ color: index < rating ? 'orange' : 'gray' }}>
                            ★
                        </span>
                    ))}
                    <span className='text-[14px] opacity-90'>
                        {opinionsCount > 1000 ? `${(opinionsCount / 1000).toFixed(1)}K` : opinionsCount}
                    </span>
                </>
            ) : (
                <>
                    <span style={{ color: 'gray' }}>★</span>
                    <span className='text-[14px] opacity-90'>Нет отзывов</span>
                </>
            )}
        </Link>
    )
}