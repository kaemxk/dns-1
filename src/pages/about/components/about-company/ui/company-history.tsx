import { FC, useEffect, useState } from 'react'

import { useGetCompanyInfoQuery } from '@/shared/redux/api/baseApi'
import SwiperHOC from '@/shared/ui/swiper-hoc/swiper-hoc'

import { ICompanyHistory } from '../model/types/about-company.types'

export const CompanyHistory: FC = () => {
  const { data } = useGetCompanyInfoQuery()
  const [companyHistory, setCompanyHistory] = useState<ICompanyHistory[]>()
  useEffect(() => data && setCompanyHistory(data.data.companyHistory), [data])

  return (
    <div
      className='my-5'
      style={{
        background:
          'url(https://www.dns-shop.ru/about/assets/bg-28ff4a73.svg) top center no-repeat',
        backgroundSize: '75%',
      }}
    >
      <h3 className='absolute text-2xl font-semibold'>Наша история</h3>
      <div className='mt-5'>
        <SwiperHOC
          id='company-history'
          data={companyHistory}
          swiperSlideClassName='h-[300px] w-[200px]'
        >
          {item => {
            return (
              <div className='relative mx-10 flex h-[180px] min-w-[200px] translate-y-[50%] flex-col items-center justify-center rounded-[16px] bg-white px-3 py-4 shadow hover:shadow-2xl'>
                <div className='flex'>
                  <p className='absolute left-3 top-4 mr-auto text-2xl font-semibold'>
                    {item.year} г.
                  </p>
                  <img
                    className='absolute right-3 top-4 ml-auto'
                    src={item.icon}
                    width={28}
                    height={28}
                  />
                </div>
                <p className='absolute bottom-4 left-3 right-3 text-xs text-[#8c8c8c]'>
                  {item.description}
                </p>
              </div>
            )
          }}
        </SwiperHOC>
      </div>
    </div>
  )
}
