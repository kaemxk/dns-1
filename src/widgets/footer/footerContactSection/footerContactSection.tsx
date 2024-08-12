import React from 'react'

type FooterContactSectionProps = {
  phone: {
    timeFrom: string
    timeTo: string
    number: string
  }
  cityName: string
}
const FooterContactSection: React.FC<FooterContactSectionProps> = ({ phone, cityName }) => {
  return (
    <section className='flex flex-shrink-0 flex-col items-start justify-start text-sm text-white md:w-[297px]'>
      <h6 className='mb-0 hidden w-full border-b border-gray-600 pb-5 text-lg font-bold md:block'>
        Оставайтесь на связи
      </h6>
      <p className='mb-5 pt-5 font-bold'>
        <a href={`tel:${phone.number}`}>{phone.number}</a>
        <span>
          {' '}
          (с {phone.timeFrom} до {phone.timeTo})
        </span>
      </p>
      <div className='flex w-full items-center justify-between border-b border-t border-solid border-b-gray-200 border-t-gray-200 pb-5 pt-5 md:border-0 md:pb-0 md:pt-0'>
        <a href='#'>Адреса магазинов в г. {cityName}</a>
        <svg
          className='md:hidden'
          xmlns='http://www.w3.org/2000/svg'
          width='7'
          height='12'
          fill='none'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M.48.2a.625.625 0 01.884 0l5.358 5.358a.625.625 0 010 .884L1.364 11.8a.625.625 0 11-.884-.884L5.396 6 .48 1.084A.625.625 0 01.48.2z'
            fill='#AFAFAF'
          />
        </svg>
      </div>
      <div className='-order-1 mb-4 mt-5 flex w-full justify-between pr-4 md:order-1'>
        <div className='flex'>
          <a href='#'>
            <div
              className='transition-filter hover:brightness-115 mr-2 h-9 w-9 bg-contain bg-center bg-no-repeat duration-300'
              style={{ backgroundImage: "url('../widgets/footer/images/VK.svg')" }}
            ></div>
          </a>
          <a href='#'>
            <div
              className='transition-filter hover:brightness-115 h-9 w-9 bg-contain bg-center bg-no-repeat duration-300'
              style={{ backgroundImage: "url('../widgets/footer/images/youtube.svg')" }}
            ></div>
          </a>
        </div>
        <div className='flex gap-6'>
          <a href='#'>
            <div
              className='transition-filter hover:brightness-115 h-9 w-[68px] bg-contain bg-center bg-no-repeat duration-300'
              style={{ backgroundImage: "url('../widgets/footer/images/spb.svg')" }}
            ></div>
          </a>
          <a href='#'>
            <div
              className='transition-filter hover:brightness-115 h-9 w-9 bg-contain bg-center bg-no-repeat duration-300'
              style={{ backgroundImage: "url('../widgets/footer/images/akit.svg')" }}
            ></div>
          </a>
        </div>
      </div>
      <div className='order-1 mb-5 hidden text-sm leading-5 text-gray-400 md:block'>
        Нашли ошибку на сайте? Выделите текст с ошибкой, нажмите Ctrl+Enter и напишите нам
      </div>
    </section>
  )
}

export default FooterContactSection
