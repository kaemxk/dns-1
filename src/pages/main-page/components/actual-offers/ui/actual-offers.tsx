import { FC, useMemo } from 'react'
import { Link } from 'react-router-dom'

import { useResize } from '@/shared/hooks'

import { offers, Offer } from '../model/offers'

export const ActualOffers: FC = () => {
  const windowWidth = useResize()
  const isMobile = useMemo(() => windowWidth <= 992, [windowWidth])

  const filteredOffers: Offer[] =
    windowWidth >= 992 && windowWidth <= 1200 ? offers.filter((_, index) => index !== 2) : offers
  // чтобы работали ссылки перейдите по ссылкам в файле offers.ts и вставьте url на который будет переадресация Link'a :)
  return (
    <div className='actual-offers'>
      {isMobile ? (
        <div className='scroll-snap-x-mandatory scrollbar-none flex w-full gap-2 overflow-x-auto overflow-y-hidden overscroll-contain'>
          {filteredOffers.map((offer, index) => (
            <Link
              to={offer.url}
              key={index}
              className='m-[1px] flex h-auto w-full min-w-[130px] flex-col items-start gap-3 self-stretch rounded-[16px] bg-white p-3 shadow-sm'
            >
              <div className='image-container flex h-[60px] w-[60px] cursor-pointer items-center justify-center transition-all duration-200'>
                <div
                  className='transition-filter hover:brightness-115 h-10 w-[135px] bg-contain bg-center bg-no-repeat duration-300'
                  style={{ backgroundImage: `url(${offer.image})` }}
                />
              </div>
              <div className='block cursor-default text-sm font-bold text-gray-800 hover:text-orange-500'>
                {offer.text}
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className='relative flex h-[160px] w-full justify-between gap-4'>
          {filteredOffers.map((offer, index) => (
            <div key={index} className='h-full w-full flex-grow'>
              <Link
                to={offer.url}
                className='block cursor-pointer text-lg font-bold text-[#4e4e4e] hover:text-orange-500'
              >
                {offer.text}
              </Link>
              <div className='mt-4 flex'>
                <div className='mr-4 flex h-[110px] w-[110px] cursor-pointer items-center justify-center rounded-[16px] border border-white bg-white shadow-sm transition-all duration-200 hover:border-gray-500 lg:hover:border-gray-500'>
                  <Link to={offer.url}>
                    <div
                      className='transition-filter hover:brightness-115 h-10 w-[135px] bg-contain bg-center bg-no-repeat duration-300'
                      style={{ backgroundImage: `url(${offer.image})` }}
                    />
                  </Link>
                </div>
                <div className='flex flex-col gap-2'>
                  {offer.anchors.map((anchor, index) => (
                    <Link
                      to={anchor.url}
                      key={index}
                      className='flex max-h-[120px] w-auto max-w-[250px] cursor-pointer flex-col gap-2.5 overflow-hidden text-sm leading-4 text-[#8c8c8c] hover:text-orange-500'
                    >
                      {anchor.text}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
