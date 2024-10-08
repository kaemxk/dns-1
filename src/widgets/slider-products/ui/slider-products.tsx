import clsx from 'clsx'
import { useMemo } from 'react'

import { useResize } from '@/shared/hooks/use-resize'

// import { ProductsDesktop } from '../../../pages/main-page/components/slider-products/ui/products-desktop'
// import { ProductsMobile } from '../../../pages/main-page/components/slider-products/ui/products-mobile'

export const SliderProducts = () => {
  const windowWidth = useResize()
  const isMobile = useMemo(() => windowWidth <= 992, [windowWidth])

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
      {/* {isMobile ? <ProductsMobile /> : <ProductsDesktop />} */}
    </>
  )
}
