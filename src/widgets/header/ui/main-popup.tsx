import clsx from 'clsx'
import { FC } from 'react'

interface IMainPopup {
  popupClosed: boolean
}

export const MainPopup: FC<IMainPopup> = ({ popupClosed }) => {
  const animationClass = clsx('transform transition-all duration-200', {
    'animate-showMain': !popupClosed,
    'animate-hideMain': popupClosed,
  })

  return (
    <div className={animationClass}>
      <div className='absolute -left-[550px] top-[0] z-[100] -translate-y-[62px] translate-x-[20px]'>
        <div className='fixed z-[100] flex h-[590px] w-[620px] rounded-xl border bg-white shadow-lg'>
          <div className='flex w-[55%] flex-col justify-between border-r border-gray-300 bg-[#f7f7f7]'>
            <h2 className='p-4 text-lg font-semibold'>Уведомления</h2>
            <div className='mt-4 flex flex-grow flex-col items-center justify-center'>
              <div className='relative z-[100]'>
                <img
                  src='/img/Bell.png'
                  alt='bell'
                  className='mb-2 h-[70px] w-[78px] bg-contain drop-shadow-[0px_15px_44px_rgba(0,0,0,0.08)] filter'
                />
              </div>
              <p className='mt-2 font-semibold'>Пока пусто</p>
              <p className='w-4/5 text-center text-sm text-gray-500'>
                Здесь будут храниться уведомления о событиях
              </p>
            </div>
          </div>

          <div className='flex w-[45%] flex-col justify-start bg-white p-6'>
            <p className='mb-4 text-center text-sm font-semibold'>
              Получайте бонусы, сохраняйте и отслеживайте заказы
            </p>

            <button className='w-full rounded-lg bg-gradient-to-t from-[#fc8507] to-[#ffa218] py-3 text-lg font-semibold text-white transition-all hover:shadow-md'>
              Войти
            </button>

            <div className='mt-6 flex flex-col space-y-2 text-sm text-gray-600'>
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
