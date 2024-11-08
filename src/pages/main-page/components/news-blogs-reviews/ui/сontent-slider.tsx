import { nanoid } from '@reduxjs/toolkit'
import { useState } from 'react'

import { useGetSliderContentQuery } from '@/shared/redux/api/baseApi'
import SwiperHOC from '@/shared/ui/swiper-hoc/swiper-hoc'

import { Card } from './card'
import { Item } from './content-slider.types'
import { FilterButton } from './filter-button'
import { NeedMore } from './need-more'
import { Skeletons } from './skeletons'

export const ContentSlider = () => {
  const { data: contentData, isLoading: isContentLoading, error } = useGetSliderContentQuery()

  const [filter, setFilter] = useState('Все')

  const dataFilter = (data: Item[]) => {
    return data.filter(item => (filter === 'Все' ? true : item.groupName === filter))
  }

  if (isContentLoading) {
    return <Skeletons />
  }
  if (error) {
    return <div>Что то пошло не так...</div>
  }
  if (!contentData) {
    return null
  }

  return (
    <>
      <div className='content-slider__bottoms-container ml-5 mt-5 flex gap-2 !mb-5'>
        {Object.values(contentData.data.tabs).map(buttonLabel => {
          return (
            <FilterButton
              key={nanoid()}
              filter={filter}
              setFilter={setFilter}
              buttonLabel={buttonLabel}
            />
          )
        })}
      </div>
      <div className='swiper-wrapper content-slider__cards-container ml-3 mr-5 mt-5 flex gap-4'>
        <SwiperHOC
          data={dataFilter(contentData.data.items)}
          id='slider-content'
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
