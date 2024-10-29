import clsx from 'clsx'
import { FC, useMemo } from 'react'

import { useResize } from '@/shared/hooks'

import { CompanyFeatures } from './company-features'
import { CompanyHistory } from './company-history'
import { CompanyInfo } from './company-info'

const AboutCompany: FC = () => {
  const windowWidth = useResize()
  const isMobile = useMemo(() => windowWidth <= 1023, [windowWidth])

  const contentStyle = clsx('mb-10 min-h-96 rounded-[8px] bg-[#fff] p-6', {
    'ml-auto min-w-[1030px] max-w-[1084px]': !isMobile,
    'mx-auto w-[96%]': isMobile,
  })

  const careerStyle = clsx('flex w-[100%] items-center rounded-2xl bg-[#f7f7f7] px-7 py-9', {
    'justify-between': !isMobile,
    'flex-col': isMobile,
  })

  const careerButtonStyle = clsx(
    'h-[64px] text-sm rounded-lg px-[19px] py-[10px] font-bold text-[#fff] outline-none hover:brightness-105',
    { 'mt-2': isMobile },
  )

  return (
    <div className={contentStyle} style={{ boxShadow: '0 1px 2px #0000002e' }}>
      <div>
        <h2 className='text-3xl font-bold'>
          DNS – один из лидеров рынка по продаже цифровой и бытовой техники в России
        </h2>
        <p className='mt-6 max-w-[692px]'>
          Наша цель изменить жизнь людей, сделав простым доступ к огромному количеству качественных
          и недорогих товаров, предоставляя лучший сервис.
        </p>
      </div>
      <CompanyHistory />
      <CompanyInfo />
      <CompanyFeatures />
      <div className={careerStyle}>
        <div>
          <h3 className='mb-2 text-xl font-bold'>Стань частью команды DNS</h3>
          <p className='text-sm'>
            Вокруг нас люди, с которыми приятно работать и достигать
            <br />
            амбициозных целей, мы стараемся нанимать единомышленников.
          </p>
        </div>
        <button
          className={careerButtonStyle}
          style={{ backgroundImage: 'linear-gradient(to top, #fc8507, #ffa218)' }}
        >
          <a href='about/career'>Начать карьеру в DNS</a>
        </button>
      </div>
    </div>
  )
}

export default AboutCompany
