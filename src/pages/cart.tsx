import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div className='cart-page w-100% min-h-[72vh]'>
      <div className='mb-[6px]'>
        <span className='w-fit font-bold mx-0 text-[32px]'>Корзина</span>
      </div>

      <div className='ml-[auto] mr-[auto] pt-[60px] pb-[60px] rounded-[8px] shadow-md transition-transform duration-300 bg-[#f6f6f6]'>
        <div className='flex justify-center h-[196px]'>
          <img src='/images/cart.png'/>
        </div>
        <div className='flex flex-col items-center'>
          <span className='w-fit font-bold mx-0 text-[24px] mt-[16px]'>Пока пусто</span>
          <span className='mt-[6px] mb-[6px] text-center'>
            <p>Воспользуйтесь <Link to= '/catalog'><span className='text-blue-500 transition-colors duration-300 hover:text-orange-500'>каталогом</span></Link> или поиском</p>
            <p>Если у вас были товары в корзине – <Link to= '/'><span className='text-blue-500 transition-colors duration-300 hover:text-orange-500'>войдите</span></Link> в профиль</p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Cart