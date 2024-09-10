import { useEffect, useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

export const ActualOffers = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const isMobile = useMemo(() => windowWidth <= 992, [windowWidth])

  // Определение размера экрана :)
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Массив с предложениями, вставьте url для того чтобы ссылка работала, обратите внимания на названия после url! :)
  const offers = [
    {
      url: '#',
      image: '../widgets/actual-offers/images/tv.png',
      text: 'Смотреть кино',
      anchors: [
        { url: '#', text: 'Телевизоры' },
        { url: '#', text: 'Кранштейны для телевизоров' },
        { url: '#', text: 'Тумбы и стойки для ТВ' },
        { url: '#', text: 'Приставка для цифрового ТВ' },
      ],
    },
    {
      url: '#',
      image: '../widgets/actual-offers/images/iron.jpg',
      text: 'Отдых на природе',
      anchors: [
        { url: '#', text: 'SUP-доски' },
        { url: '#', text: 'Изометрические сумки' },
        { url: '#', text: 'Аксессуары для SUP-досок' },
        { url: '#', text: 'Квадрокоптеры и дроны' },
        { url: '#', text: 'Настольные игры' },
      ],
    },
    {
      url: '#',
      image: '../widgets/actual-offers/images/coffeemachine.jpg',
      text: 'Согревающие напитки',
      anchors: [
        { url: '#', text: 'Кофемашины автоматические' },
        { url: '#', text: 'Кофемашины капсульные' },
        { url: '#', text: 'Электрочайники' },
        { url: '#', text: 'Турки' },
        { url: '#', text: 'Чайники для плит' },
      ],
    },
    {
      url: '#',
      image: '../widgets/actual-offers/images/heater.jpg',
      text: 'Тепло в доме',
      anchors: [
        { url: '#', text: 'Конвекторы' },
        { url: '#', text: 'Электрокамины' },
        { url: '#', text: 'Масляные обогреватели' },
        { url: '#', text: 'Электрические инфракрасные обогреватели' },
      ],
    },
  ]

  const filteredOffers =
    windowWidth >= 992 && windowWidth <= 1200 ? offers.filter((_, index) => index !== 2) : offers

  return (
    <div className={clsx(isMobile ? 'mb-6 pl-4 pr-4' : 'mb-[60px]')}>
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
              <div className='block cursor-default text-sm font-bold text-gray-800'>
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
                className='block cursor-pointer text-lg font-bold text-[#4e4e4e]'
              >
                {offer.text}
              </Link>
              <div className='mt-4 flex'>
                <div className='mr-4 flex h-[110px] w-[110px] cursor-pointer items-center justify-center rounded-[16px] border border-white bg-white shadow-sm transition-all duration-200'>
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
                      className='flex max-h-[120px] w-auto max-w-[250px] cursor-pointer flex-col gap-2.5 overflow-hidden text-sm leading-4 text-[#8c8c8c]'
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
