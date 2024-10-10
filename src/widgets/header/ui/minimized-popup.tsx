import clsx from 'clsx'
import { FC } from 'react'

interface IMinimizedPopup {
  popupClosed: boolean
}

export const MinimizedPopup: FC<IMinimizedPopup> = ({ popupClosed }) => {
  const animationClass = clsx('transform transition-all duration-200', {
    'animate-fadeIn': !popupClosed,
    'animate-fadeOut': popupClosed,
  })

  return (
    <div className={animationClass}>
      <div className='absolute -left-[550px] top-[0] z-50 -translate-y-[62px] translate-x-[20px]'>
        <div className='fixed z-50 flex w-[620px] rounded-xl border bg-white shadow-lg'>
          <div className='flex w-[55%] flex-col justify-between'>
            <p className='p-5 pb-0 font-semibold'>
              Получайте бонусы, сохраняйте и отслеживайте заказы
            </p>
            <div className='p-5'>
              <button className='w-2/3 rounded-lg bg-gradient-to-t from-[#fc8507] to-[#ffa218] py-3 font-semibold text-white transition-all hover:shadow-md'>
                Войти
              </button>
            </div>
            <div className='flex flex-col space-y-2 p-5 pt-0 text-sm text-gray-600'>
              <a href='#' className='hover:underline'>
                Узнать статус заказа
              </a>
              <a href='#' className='hover:underline'>
                Обратная связь
              </a>
              <a href='#' className='hover:underline'>
                Обмен, возврат, гарантия
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
