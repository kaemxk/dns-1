import clsx from 'clsx'
import { FC, useMemo } from 'react'
import { Link } from 'react-router-dom'

import { useResize } from '@/shared/hooks'

const PartnersCards: FC = () => {
  const windowWidth = useResize()
  const isMobile = useMemo(() => windowWidth <= 1023, [windowWidth])

  const containerStyle = clsx('p-6 bg-[#F7F7F7] rounded-lg', {
    'flex justify-between items-center': !isMobile,
    'block': isMobile,
  });
  const buttonStyle = clsx('h-[64px] p-2.5 px-5 text-white font-bold rounded-xl bg-gradient-to-b from-[#ffa218] to-[#fc8507]', {
    'w-[218px]' : !isMobile,
    'w-[100%]' : isMobile,
  });
  const descriptionStyle = clsx('mr-[40px]', {
    'mb-[0px]' : !isMobile,
    'mb-[16px]' :  isMobile,
  })
  
  return (
    <div className={containerStyle}>
      <div className={descriptionStyle}>
        <p className='mb-[12px] text-lg font-bold'>Не нашли подходящего раздела?</p>
        <p >Если вы заинтересованы в сотрудничестве, напишите нам.</p>
      </div>
      <Link to='#'>
        <button className={buttonStyle}>
          Написать нам
        </button>
      </Link>
    </div>
  )
}
export default PartnersCards
