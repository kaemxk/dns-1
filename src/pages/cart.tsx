import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <div className='cart-page w-100% min-h-[72vh]'>
      <div className='mb-[6px]'>
        <span className='mx-0 w-fit text-[32px] font-bold'>Корзина</span>
      </div>

      <div className='ml-[auto] mr-[auto] rounded-[8px] bg-[#f6f6f6] pb-[60px] pt-[60px] shadow-md transition-transform duration-300'>
        <div className='flex h-[196px] justify-center'>
          <img src='/images/cart.png' alt='cart' />
        </div>
        <div className='flex flex-col items-center'>
          <span className='mx-0 mt-[16px] w-fit text-[24px] font-bold'>Пока пусто</span>
          <span className='mb-[6px] mt-[6px] text-center'>
            <p>
              Воспользуйтесь{' '}
              <Link to='/catalog'>
                <span className='text-blue-500 transition-colors duration-300 hover:text-orange-500'>
                  каталогом
                </span>
              </Link>{' '}
              или поиском
            </p>
            <p>
              Если у вас были товары в корзине –{' '}
              <Link to='/'>
                <span className='text-blue-500 transition-colors duration-300 hover:text-orange-500'>
                  войдите
                </span>
              </Link>{' '}
              в профиль
            </p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Cart
