import { Card } from './card'
import { NeedMore } from './need-more'
import { Skeletons } from './skeletons'

import { useGetSliderContentQuery } from '@/shared/redux/api/baseApi'
import { useState } from 'react'
import { clsx } from 'clsx'

import 'swiper/css'
import 'swiper/css/navigation'

import SwiperHOC from '@/shared/ui/swiper-hoc/swiper-hoc'

export const ContentSlider = () => {
  const { data: contentData, isLoading: isContentLoading, error } = useGetSliderContentQuery()

  const [filter, setFilter] = useState('Все')

  if (isContentLoading) {
    return <Skeletons />
  }
  if (error) {
    return <div>Что то пошло не так...</div>
  }
  if (!contentData) {
    return null
  }

  if (contentData)
    return (
      <>
        <div className='content-slider__bottoms-container ml-5 mt-5 flex gap-2'>
          <div
            onClick={() => setFilter('Все')}
            className={clsx(
              'content-slider-bottom__catalog mb-0 flex h-[36px] cursor-pointer flex-row rounded-lg py-[7px] pl-5 pr-4 text-center text-white',
              {
                'bg-white bg-opacity-15 font-bold shadow-xl hover:bg-opacity-20': filter === 'Все',
              },
              { 'bg-gray-100 hover:bg-gray-200': filter !== 'Все' },
            )}
          >
            <span className='content-slider__bottom-title mr-0 select-none text-black'>Все</span>
          </div>
          <div
            onClick={() => setFilter('Новости')}
            className={clsx(
              'content-slider-bottom__catalog mb-0 flex h-[36px] cursor-pointer flex-row rounded-lg py-[7px] pl-5 pr-4 text-center text-white',
              {
                'bg-white bg-opacity-15 font-bold shadow-xl hover:bg-opacity-20':
                  filter === 'Новости',
              },
              { 'bg-gray-100 hover:bg-gray-200': filter !== 'Новости' },
            )}
          >
            <span className='content-slider__bottom-title mr-0 select-none text-black'>
              Новости
            </span>
          </div>
          <div
            onClick={() => setFilter('Блоги')}
            className={clsx(
              'content-slider-bottom__catalog mb-0 flex h-[36px] cursor-pointer flex-row rounded-lg py-[7px] pl-5 pr-4 text-center text-white',
              {
                'bg-white bg-opacity-15 font-bold shadow-xl hover:bg-opacity-20':
                  filter === 'Блоги',
              },
              { 'bg-gray-100 hover:bg-gray-200': filter !== 'Блоги' },
            )}
          >
            <span className='content-slider__bottom-title mr-0 select-none text-black'>Блоги</span>
          </div>
          <div
            onClick={() => setFilter('Обзоры')}
            className={clsx(
              'content-slider-bottom__catalog mb-0 flex h-[36px] cursor-pointer flex-row rounded-lg py-[7px] pl-5 pr-4 text-center text-white',
              {
                'bg-white bg-opacity-15 font-bold shadow-xl hover:bg-opacity-20':
                  filter === 'Обзоры',
              },
              { 'bg-gray-100 hover:bg-gray-200': filter !== 'Обзоры' },
            )}
          >
            <span className='content-slider__bottom-title tex mr-0 select-none text-black'>
              Обзоры
            </span>
          </div>
        </div>
        <div className='swiper-wrapper content-slider__cards-container ml-3 mr-5 mt-5 flex gap-4'>
          <SwiperHOC
            data={contentData.data.items.filter(item => {
              if (filter === 'Все') return true
              return item.groupName === filter
            })}
            id='slider-content'
            swiperClassName='group relative'
            swiperSlideClassName='flex h-[220px] w-[186px] flex-col justify-between'
            optionalContent={<NeedMore />}
            swiperSlideOptContentClassName='flex h-[220px] w-[296px]  mr-6'
          >
            {product => <Card contentData={product} />}
          </SwiperHOC>
        </div>
      </>
    )
}
