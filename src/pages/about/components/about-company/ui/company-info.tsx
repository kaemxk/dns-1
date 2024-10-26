import { FC, useEffect, useState } from 'react'

import { useGetCompanyInfoQuery } from '@/shared/redux/api/baseApi'

import { ICompanyInfo } from '../model/types/about-company.types'

export const CompanyInfo: FC = () => {
  const { data } = useGetCompanyInfoQuery()
  const [info, setInfo] = useState<ICompanyInfo>()
  useEffect(() => data && setInfo(data), [data])

  return (
    <div>
      <h3 className='text-2xl font-semibold'>DNS сегодня</h3>
      <div
        className='mt-2 flex h-[149px] w-[100%] items-center justify-around rounded-[16px] text-center text-white'
        style={{
          background: 'linear-gradient(0deg, #fc8507 0%, #ffa218 100%)',
          boxShadow: '0 14px 44px #fc9a0747',
        }}
      >
        <div>
          <p className='text-[48px] font-bold'>{info?.data.shopsCount}</p>
          <p className='text-md'>Магазинов по всей России</p>
        </div>
        <div>
          <p className='text-[48px] font-bold'>{info?.data.employeesCount}</p>
          <p>Сотрудников в штате</p>
        </div>
        <div>
          <p className='text-[48px] font-bold'>{info?.data.citiesCount}</p>
          <p>Городов с магазинами DNS</p>
        </div>
      </div>
    </div>
  )
}
