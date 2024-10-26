import { FC } from 'react'

import { CompanyFeatures } from './company-features'
import { CompanyHistory } from './company-history'
import { CompanyInfo } from './company-info'

const AboutCompany: FC = () => {
  return (
    <div
      className='mb-10 min-h-96 rounded-[8px] bg-[#fff] p-6'
      style={{ width: 'calc(100% - 296px)', boxShadow: '0 1px 2px #0000002e' }}
    >
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
      <div className='flex w-[100%] items-center justify-between rounded-2xl bg-[#f7f7f7] px-7 py-9'>
        <div>
          <h3 className='mb-2 text-xl font-bold'>Стань частью команды DNS</h3>
          <p className='text-sm'>
            Вокруг нас люди, с которыми приятно работать и достигать
            <br />
            амбициозных целей, мы стараемся нанимать единомышленников.
          </p>
        </div>
        <button
          className='h-[64px] rounded-lg px-[19px] py-[10px] font-bold text-[#fff] outline-none hover:brightness-105'
          style={{ backgroundImage: 'linear-gradient(to top, #fc8507, #ffa218)' }}
        >
          <a href='about/career'>Начать карьеру в DNS</a>
        </button>
      </div>
    </div>
  )
}

export default AboutCompany
