import clsx from 'clsx'
import { FC, useMemo } from 'react'

import { useResize } from '@/shared/hooks'

const PartnersTitle: FC = () => {
  const windowWidth = useResize()
  const isMobile = useMemo(() => windowWidth <= 1023, [windowWidth])

  return (
    <div className='mr-[70px]'>
      <h2 className='mb-3 pb-[16px] text-[24px] font-bold'>Компания DNS всегда готова к сотрудничеству</h2>
      <span>
        <p className={clsx('mb-3', { 'hidden': isMobile })}>
          Компания DNS является крупнейшей специализированной розницей по продаже цифровой техники, представленной более чем в 1 000 городах страны.
        </p>
        <p className={clsx('mb-3', { 'hidden': isMobile })}>
          Наша основная задача - быть лучшим проводником товара от производителя к покупателю.
        </p>
        <p className={clsx('mb-3', { 'block': isMobile, 'hidden': !isMobile })}>
          Если Вы еще не зарегистрированы на нашем портале и готовы начать с нами работать, напишите нам. С Вами свяжется наш менеджер.
        </p>
      </span>
    </div>
  )
}
export default PartnersTitle