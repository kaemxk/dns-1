import clsx from 'clsx'
import { FC, useEffect, useMemo, useState } from 'react'

import { useResize } from '@/shared/hooks'
import { useGetCompanyInfoQuery } from '@/shared/redux/api/baseApi'

import { ICompanyFeature } from '../model/types/about-company.types'

export const CompanyFeatures: FC = () => {
  const { data } = useGetCompanyInfoQuery()
  const [companyFeatures, setCompanyFetures] = useState<ICompanyFeature[]>()
  useEffect(() => data && setCompanyFetures(data.data.companyFeatures), [data])

  const windowWidth = useResize()
  const isMobile = useMemo(() => windowWidth <= 1023, [windowWidth])

  const featuresStyle = clsx('mb-[40px] mt-8 pl-7', {
    'grid grid-cols-2 gap-4': !isMobile,
    'flex flex-col': isMobile,
  })

  const featureStyle = clsx('', { 'mb-6 mx-auto': isMobile })

  const features: JSX.Element[] | undefined = companyFeatures?.map(feature => {
    return (
      <div className={featureStyle} key={feature.id}>
        <h4 className='relative mb-4 translate-x-3 text-lg font-bold'>
          <span
            className='absolute -left-9 top-1/2 -translate-y-1/2 transform'
            style={{
              content: `url(${feature.icon})`,
              display: 'block',
              width: '24px',
              height: '24px',
            }}
          />
          {feature.header}
        </h4>
        <div className='font-[#333] text-[1em] leading-8'>
          {feature.featureText.map((line, index) => {
            return <p key={index}>{line}</p>
          })}
        </div>
      </div>
    )
  })

  return <div className={featuresStyle}>{features}</div>
}
