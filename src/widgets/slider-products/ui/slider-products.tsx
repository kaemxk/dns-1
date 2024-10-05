import clsx from 'clsx'
import { useMemo } from 'react'
import { useState, useEffect } from 'react'

import { useResize } from '@/shared/hooks/use-resize'
import { useGetSliderProductsQuery } from '@/shared/redux/api/baseApi'

import { ProductsDesktop } from './products-desktop'
import { ProductsMobile } from './products-mobile'

export const SliderProducts = () => {
  const windowWidth = useResize()
  const isMobile = useMemo(() => windowWidth <= 992, [windowWidth])

  const { data: initialData, isLoading, error } = useGetSliderProductsQuery()
  const [data, setData] = useState(initialData || [])
  useEffect(() => {
    if (initialData) {
      setData(initialData)
    }
  }, [initialData])
  const onDelete = (productIdToDelete: string) => {
    setData(prevData => prevData.filter(product => product.id !== productIdToDelete))
  }

  if (error) return <div>error...</div>
  if (isLoading) return <div>Loading...</div>

  return (
    <>
      <div
        className={clsx(
          'mb-[12px] w-fit font-bold',
          isMobile ? 'mx-[16px] text-[18px]' : 'mx-0 text-[24px]',
        )}
      >
        Вы недавно смотрели
      </div>
      {isMobile ? (
        <ProductsMobile data={data} onDelete={onDelete} />
      ) : (
        <ProductsDesktop data={data} onDelete={onDelete} />
      )}
    </>
  )
}
