import clsx from 'clsx'
import { FC, useEffect, useMemo, useState } from 'react'

import { useResize } from '@/shared/hooks'
import { useGetCompanyInfoQuery } from '@/shared/redux/api/baseApi'

import { ICompanyInfo } from '../model/types/about-company.types'

export const CompanyInfo: FC = () => {
  const { data } = useGetCompanyInfoQuery()
  const [info, setInfo] = useState<ICompanyInfo>()
  useEffect(() => data && setInfo(data), [data])

  const windowWidth = useResize()
  const isMobileXS = useMemo(() => windowWidth <= 610, [windowWidth])

  const infoStyle = clsx('mt-2 flex  w-[100%] rounded-[16px]  text-white', {
    'justify-around items-center h-[149px] text-center': !isMobileXS,
    'flex-col p-2': isMobileXS,
  })

  const infoItemStyle = clsx('', { 'flex items-center': isMobileXS })

  const infoItemTextStyle = clsx('', {
    'text-[48px] font-bold': !isMobileXS,
    'text-2xl font-semibold mr-2 p-2': isMobileXS,
  })

  return (
    <div>
      <h3 className='text-2xl font-semibold'>DNS сегодня</h3>
      <div
        className={infoStyle}
        style={{
          background: 'linear-gradient(0deg, #fc8507 0%, #ffa218 100%)',
          boxShadow: '0 14px 44px #fc9a0747',
        }}
      >
        <div className={infoItemStyle}>
          <p className={infoItemTextStyle}>{info?.data.shopsCount}</p>
          <p>Магазинов по всей России</p>
        </div>
        <div className={infoItemStyle}>
          <p className={infoItemTextStyle}>{info?.data.employeesCount}</p>
          <p>Сотрудников в штате</p>
        </div>
        <div className={infoItemStyle}>
          <p className={infoItemTextStyle}>{info?.data.citiesCount}</p>
          <p>Городов с магазинами DNS</p>
        </div>
      </div>
    </div>
  )
}
