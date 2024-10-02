import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { features } from '../model/features-block';
import { useResize } from '../../../shared/hooks/use-resize'; 
import { Navigation } from 'swiper/modules';
import '@/widgets/top-block/model/swiper-container-desktop.css';

export const PersonalBlock = () => {
    const windowWidth = useResize();
    const personalItemBlock = {
        id: "e77de38b-23ec-41b3-a585-960b0d5caa8f",
        label: "Как выбрать держатель для смартфона",
        description: "Интересные гайды и советы по выбору",
        color: "#FFF7DA",
        imageUrl: "/widgets/top-block/images/personalBlockDerjatel.svg",
        contentType: "content",
        buttons: [
            {
                url: "/guide/17a8a1f9-1640-11e5-a679-00259074e77d/",
                type: "content_hub_open",
                text: "Прочитать"
            }
        ]
    };

    return (
        <>
            {windowWidth < 992 ? (
                <div className=""> 
                    <div className="personal-block rounded-[16px] h-[146px] p-[16px] flex flex-col relative min-h-[146px] bg-[#FFF7DA] mx-[16px]"> 
                        <h2 className="text-[#333] font-bold text-[16px] leading-[22px] opacity-90 mb-[4px]">
                            {personalItemBlock.label}
                        </h2>
                        <p className="text-[#333] opacity-70 text-[12px] leading-[20px] mb-[4px] relative z-5 max-w-[213px]">
                            {personalItemBlock.description}
                        </p>
                        <img 
                            src={personalItemBlock.imageUrl} 
                            alt={personalItemBlock.label} 
                            className="w-[170px] h-[120px] absolute bottom-0 right-[-30px] object-cover bg-transparent" 
                            style={{ mixBlendMode: 'darken' }} 
                        />
                        {personalItemBlock.buttons.map((button, index) => (
                            <a 
                                key={index} 
                                href={button.url} 
                                className="border border-gray rounded-[8px] bg-white text-black py-2 px-4 self-start text-[12px]" 
                            >
                                {button.text}
                            </a>
                        ))}
                    </div>
                    <div className="swiper-container md:ml-4" style={{ marginTop: '24px' }}> 
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={8} 
                            slidesPerView="auto" 
                            navigation={windowWidth > 992} 
                            style={{ paddingLeft: '16px', paddingRight: '16px' }}
                        >
                            {features.map((feature, index) => ( 
                                <SwiperSlide key={index} className="w-[100px] h-[110px] rounded-[15px] overflow-hidden"> 
                                    <div className='flex flex-col items-center justify-center h-full relative'>
                                        <div className='absolute top-0 left-0 w-full text-center'>
                                            <div className="font-bold text-[12px] leading-[16px] mb-0 text-black" 
                                                 style={{ marginBottom: 0, textAlign: 'left', marginLeft: '12px', marginTop: '16px' }}>
                                                {feature.naming}
                                            </div>
                                        </div>
                                        <div style={{ backgroundImage: `url(${feature.image})`, width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center center' }}></div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            ) : (
                <div className='flex w-full gap-4 mb-[60px]'>
                    <div className="personal-block-desktop bg-[#FFF7DA] rounded-[16px] w-[283px] h-[206px] p-[24px_14px_24px_20px] flex flex-col relative overflow-hidden" style={{ minWidth: '283px' }}>
                        <h2 className="text-[#333] font-bold text-[18px] leading-[22px] opacity-90 mb-[4px]">
                            {personalItemBlock.label}
                        </h2>
                        <p className="text-[#333] opacity-70 text-[14px] leading-[20px] mb-[30px] relative z-5 max-w-[213px] ">
                            {personalItemBlock.description}
                        </p>
                        <img 
                            src={personalItemBlock.imageUrl} 
                            alt={personalItemBlock.label} 
                            className="w-[200px] h-[150px] absolute bottom-0 right-[-30px] object-cover bg-transparent bottom-[-35px] right-[-60px]" 
                            style={{ mixBlendMode: 'darken' }} 
                        />
                        {personalItemBlock.buttons.map((button, index) => (
                            <a 
                                key={index} 
                                href={button.url} 
                                className="flex border solid-#d9d9d9 rounded-lg items-center justify-center hover:bg-gray-50 bg-white"
                                style={{ width: '128px', height: '44px' }} 
                            >
                                {button.text}
                            </a>
                        ))}
                    </div>
                    <div className="swiper-container-desktop h-[206px] w-full overflow-x-auto overscroll-contain snap-x snap-mandatory  scrollbar-hide relative group"> 
                        <Swiper
                           modules={[Navigation]}
                           spaceBetween={15}
                           slidesPerView="auto"
                           navigation
                        >
                            {features.map((feature, index) => (
                                <SwiperSlide key={index} className="w-[183px] h-[206px] rounded-[15px] overflow-hidden">
                                    <div className='flex flex-col items-center justify-center h-full relative'>
                                        <div className='absolute top-0 left-0 w-full text-center'>
                                        <div className="font-bold text-lg leading-5 mb-2" style={{ textAlign: 'left', marginLeft: '12px', marginTop: '16px' }}>
                                             {feature.naming}
                                        </div>
                                            <div className='text-[14px]' style={{ textAlign: 'left', marginLeft: '12px', marginTop: '16px'}}>
                                                {feature.description}
                                            </div>
                                        </div>
                                        <div style={{ backgroundImage: `url(${feature.image})`, width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center center' }}></div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            )}
        </>
    );
};

export default PersonalBlock;
