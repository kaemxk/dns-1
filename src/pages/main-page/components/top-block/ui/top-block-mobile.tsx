import SwiperHOC from '@/shared/ui/swiper-hoc/swiper-hoc'

import { features, personalItemBlock } from '../model/features-block'

const TopBlockMobile = () => {
  return (
    <div>
      <div className='personal-block relative mx-[16px] flex h-[146px] min-h-[146px] flex-col rounded-[16px] bg-[#FFF7DA] p-[16px]'>
        <h2 className='mb-[4px] text-[16px] font-bold leading-[22px] text-[#333] opacity-90'>
          {personalItemBlock.label}
        </h2>
        <p className='z-5 relative mb-[4px] max-w-[213px] text-[12px] leading-[20px] text-[#333] opacity-70'>
          {personalItemBlock.description}
        </p>
        <img
          src={personalItemBlock.imageUrl}
          alt={personalItemBlock.label}
          className='absolute bottom-0 right-[-30px] h-[120px] w-[170px] bg-transparent object-cover'
          style={{ mixBlendMode: 'darken' }}
        />
        {personalItemBlock.buttons.map((button, index) => (
          <a
            key={index}
            href={button.url}
            className='border-gray self-start rounded-[8px] border bg-white px-4 py-2 text-[12px] text-black'
          >
            {button.text}
          </a>
        ))}
      </div>

      <div className='swiper-container mt-4 md:ml-4'>
        <SwiperHOC
          data={features}
          id='top-block-mobile'
          isMobile={true}
          swiperSlideClassName='h-[110px] w-[100px]'
        >
          {(feature, index) => (
            <div key={index} className='h-[110px] w-[100px] overflow-hidden rounded-[15px]'>
              <div className='relative flex h-full flex-col items-center justify-center'>
                <div className='absolute left-0 top-0 w-full text-center'>
                  <div className='mb-0 ml-3 mt-4 text-left text-[12px] font-bold leading-[16px] text-black'>
                    {feature.naming}
                  </div>
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

export default TopBlockMobile
