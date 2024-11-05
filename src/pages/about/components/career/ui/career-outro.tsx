import clsx from 'clsx'
import { FC, useMemo } from 'react'

import { useResize } from '@/shared/hooks'

const CareerOutro: FC = () => {
  const windowWidth = useResize()
  const isMobile = useMemo(() => windowWidth <= 1023, [windowWidth])

  const containerStyle = clsx(
    'flex justify-between items-center px-6 py-7 mt-6 rounded-2xl bg-[#f7f7f7] mb-4',
    { 'flex-col gap-5': isMobile },
  )

  const buttonStyle = clsx('btn btn-lg text-white bg-[#FC8507] hover:bg-[#FFA907] glass', {
    'btn-block': isMobile,
  })

  return (
    <div className={containerStyle}>
      <div className='mr-10 text-xl'>
        <h5 className='font-bold text-[#333]'>Мы будем рады с вами сотрудничать</h5>
        <p className='text-[14px]'>
          Расскажите нам о себе, возможно, вы именно тот, кто нам нужен!
        </p>
      </div>
      <button type='button' className={buttonStyle}>
        Заполнить анкету
      </button>
    </div>
  )
}

export default CareerOutro
