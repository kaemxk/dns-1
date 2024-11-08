import clsx from 'clsx'
import { FC, useMemo } from 'react'

import { useResize } from '@/shared/hooks'

import PartnersCards from './partners-cards'
import PartnersQuestion from './partners-question'
import PartnersTitle from './partners-title'

const Partners: FC = () => {
  const windowWidth = useResize()
  const isMobile = useMemo(() => windowWidth <= 1023, [windowWidth])

  const contentStyle = clsx('mb-10 min-h-96 rounded-[8px] bg-[#fff] p-6', {
    'ml-auto min-w-[1030px] max-w-[1084px]': !isMobile,
    'mx-auto w-[96%]': isMobile,
  })

  return (
    <div className={contentStyle} style={{ boxShadow: '0 1px 2px #0000002e' }}>
      <PartnersTitle />
      <PartnersCards />
      <PartnersQuestion />
    </div>
  )
}

export default Partners