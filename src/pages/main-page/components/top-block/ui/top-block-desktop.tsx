import clsx from 'clsx'

import SwiperHOC from '@/shared/ui/swiper-hoc/swiper-hoc'

import { features, personalItemBlock } from '../model/features-block'

const TopBlockDesktop = () => {
  return (
    <div className={clsx('top-block', 'mb-[60px] flex w-full gap-4')}>
      <div className='personal-block-desktop relative flex h-[206px] w-[283px] min-w-[283px] flex-col overflow-hidden rounded-[16px] bg-[#FFF7DA] p-[24px_14px_24px_20px]'>
        <h2 className='mb-[4px] text-[18px] font-bold leading-[22px] text-[#333] opacity-90'>
          {personalItemBlock.label}
        </h2>
        <p className='z-5 relative mb-[30px] max-w-[213px] text-[14px] leading-[20px] text-[#333] opacity-70'>
          {personalItemBlock.description}
        </p>
        <img
          src={personalItemBlock.imageUrl}
          alt={personalItemBlock.label}
          className='absolute bottom-0 bottom-[-35px] right-[-30px] right-[-60px] h-[150px] w-[200px] bg-transparent object-cover'
          style={{ mixBlendMode: 'darken' }}
        />
        {personalItemBlock.buttons.map((button, index) => (
          <a
            key={index}
            href={button.url}
            className='solid-#d9d9d9 flex items-center justify-center rounded-lg border bg-white hover:bg-gray-50'
            style={{ width: '128px', height: '44px' }}
          >
            {button.text}
          </a>
        ))}
      </div>

      <div className='swiper-container-desktop scrollbar-hide group relative h-[206px] w-full snap-x snap-mandatory overflow-x-auto overscroll-contain'>
        <SwiperHOC
          data={features}
          id='top-block-desktop'
          isMobile={false}
          swiperSlideClassName='h-[206px] w-[183px]'
        >
          {(feature, index) => (
            <div key={index} className='h-[206px] w-[183px] overflow-hidden rounded-[15px]'>
              <div className='relative flex h-full flex-col items-center justify-center'>
                <div className='absolute left-0 top-0 w-full text-center'>
                  <div className='mb-2 ml-4 mt-6 text-left text-lg font-bold leading-5'>
                    {feature.naming}
                  </div>
                  <div className='ml-4 mt-4 text-left text-[14px]'>{feature.description}</div>
                </div>
                <div
                  className='h-full w-full bg-cover bg-center'
                  style={{ backgroundImage: `url(${feature.image})` }}
                ></div>
              </div>
            </div>
          )}
        </SwiperHOC>
      </div>
    </div>
  )
}

export default TopBlockDesktop
