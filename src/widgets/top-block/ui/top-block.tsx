import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import { features } from '../model/features-block'
import { useResize } from '../../../shared/hooks/use-resize'
import { Navigation } from 'swiper/modules'
import '@/widgets/top-block/model/swiper-container-desktop.css'

export const TopBlock = () => {
  const windowWidth = useResize()
  const personalItemBlock = {
    id: 'e77de38b-23ec-41b3-a585-960b0d5caa8f',
    label: 'Как выбрать держатель для смартфона',
    description: 'Интересные гайды и советы по выбору',
    color: '#FFF7DA',
    imageUrl: '/widgets/top-block/images/personalBlockDerjatel.svg',
    contentType: 'content',
    buttons: [
      {
        url: '/guide/17a8a1f9-1640-11e5-a679-00259074e77d/',
        type: 'content_hub_open',
        text: 'Прочитать',
      },
    ],
  }

  return (
    <>
      {windowWidth < 992 ? (
        <div className=''>
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

          <div className='swiper-container md:ml-4' style={{ marginTop: '24px' }}>
            <Swiper
              modules={[Navigation]}
              spaceBetween={8}
              slidesPerView='auto'
              navigation={windowWidth > 992}
              style={{ paddingLeft: '16px', paddingRight: '16px' }}
            >
              {features.map((feature, index) => (
                <SwiperSlide
                  key={index}
                  className='h-[110px] w-[100px] overflow-hidden rounded-[15px]'
                >
                  <div className='relative flex h-full flex-col items-center justify-center'>
                    <div className='absolute left-0 top-0 w-full text-center'>
                      <div
                        className='mb-0 text-[12px] font-bold leading-[16px] text-black'
                        style={{
                          marginBottom: 0,
                          textAlign: 'left',
                          marginLeft: '12px',
                          marginTop: '16px',
                        }}
                      >
                        {feature.naming}
                      </div>
                    </div>
                    <div
                      style={{
                        backgroundImage: `url(${feature.image})`,
                        width: '100%',
                        height: '100%',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                      }}
                    ></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      ) : (
        <div className='mb-[60px] flex w-full gap-4'>
          <div
            className='personal-block-desktop relative flex h-[206px] w-[283px] flex-col overflow-hidden rounded-[16px] bg-[#FFF7DA] p-[24px_14px_24px_20px]'
            style={{ minWidth: '283px' }}
          >
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
            <Swiper modules={[Navigation]} spaceBetween={15} slidesPerView='auto' navigation>
              {features.map((feature, index) => (
                <SwiperSlide
                  key={index}
                  className='h-[206px] w-[183px] overflow-hidden rounded-[15px]'
                >
                  <div className='relative flex h-full flex-col items-center justify-center'>
                    <div className='absolute left-0 top-0 w-full text-center'>
                      <div
                        className='mb-2 text-lg font-bold leading-5'
                        style={{ textAlign: 'left', marginLeft: '12px', marginTop: '16px' }}
                      >
                        {feature.naming}
                      </div>
                      <div
                        className='text-[14px]'
                        style={{ textAlign: 'left', marginLeft: '12px', marginTop: '16px' }}
                      >
                        {feature.description}
                      </div>
                    </div>
                    <div
                      style={{
                        backgroundImage: `url(${feature.image})`,
                        width: '100%',
                        height: '100%',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                      }}
                    ></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  )
}

export default TopBlock
