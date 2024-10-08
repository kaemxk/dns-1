import { Swiper, SwiperSlide } from 'swiper/react';
import { features } from '../model/features-block';
import { Navigation } from 'swiper/modules';

const TopBlockMobile = () => {
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
  };
  
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

      <div className='swiper-container md:ml-4 mt-4'>
        <Swiper className='pl-4 pr-4'
          modules={[Navigation]}
          spaceBetween={8}
          slidesPerView='auto'
          navigation>
          {features.map((feature, index) => (
            <SwiperSlide key={index} className='h-[110px] w-[100px] overflow-hidden rounded-[15px]'>
              <div className='relative flex h-full flex-col items-center justify-center'>
                <div className='absolute left-0 top-0 w-full text-center'>
                  <div className='text-[12px] font-bold leading-[16px] text-black mb-0 text-left ml-3 mt-4'>
                    {feature.naming}
                  </div>
                </div>
                <div className='bg-cover bg-center w-f'
                  style={{ backgroundImage: `url(${feature.image})` }}>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopBlockMobile;
