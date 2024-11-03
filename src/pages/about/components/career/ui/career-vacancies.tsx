import clsx from 'clsx'
import { FC, useEffect, useMemo, useState } from 'react'
import { CiSearch } from 'react-icons/ci'

import { useResize } from '@/shared/hooks'
import { useGetVacanciesQuery } from '@/shared/redux/api/baseApi'

import { IVacancies } from '../model/types/career.types'

const CareerVacancies: FC = () => {
  const { data } = useGetVacanciesQuery()
  const [vacancies, setVacansies] = useState<IVacancies | undefined>()

  const windowWidth = useResize()
  const isMobile = useMemo(() => windowWidth <= 1023, [windowWidth])

  useEffect(() => data && setVacansies(data), [data])

  const cardContainerStyle = clsx('flex justify-between', { 'flex-col': isMobile })
  return (
    <div className='flex flex-col'>
      <div className='mb-4'>
        <p className='font- text-xl font-bold'>
          Вакансии по городу:
          <span className='ml-2 text-[#0645AD]'>Москва</span>
        </p>
      </div>

      {/* Поисковое поле */}
      <label className='input flex max-w-full items-center gap-2 bg-[#f2f2f2]'>
        <CiSearch size={30} color='#8c8c8c' />
        <input placeholder='Найти вакансию' className='w-full bg-transparent outline-none'></input>
      </label>

      {/* Список вакансий */}
      {vacancies && vacancies.data.length > 0 ? (
        <ul className='mt-4 flex flex-col gap-1'>
          {vacancies.data.map(vacancy => (
            <li key={vacancy.guid} className='text-x1 [&:not(:last-child)]:mb-4'>
              <a
                className='link text-[#0d61af] hover:text-[#FC8507]'
                style={{ textDecoration: 'none' }}
              >
                <div className={cardContainerStyle}>
                  <h2>{vacancy.name}</h2>
                  <div className='text-[#8c8c8c]'>{vacancy.salary}</div>
                </div>
                <div className='text-xs text-[#4e4e4e]'>г.{vacancy.cityName}</div>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className='mt-4 text-gray-500'>Нет доступных вакансий</p>
      )}
    </div>
  )
}

export default CareerVacancies
