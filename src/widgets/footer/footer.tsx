import FooterLogoSection from '../footer/footerLogoSection/footerLogoSection.tsx'
import FooterNavSection from '../footer/footerNavSection/footerNavSection.tsx'
import FooterLoadIcon from '../footer/footerLoadIcon/footerLoadIcon.tsx'

const Footer = () => {
  return (
    <footer className='mt-8 bg-gray-900 p-0 text-base text-white'>
      <div className='mx-auto flex max-w-[1380px] flex-col px-4'>
        <FooterLogoSection />
        <div className='mt-8 flex flex-col justify-between md:flex-row xl:mt-0'>
          <FooterNavSection />
        </div>
        <FooterLoadIcon />
        <div>
          © 2002–2024 Компания DNS. Администрация Сайта не несет ответственности за размещаемые
          Пользователями материалы (в т.ч. информацию и изображения), их содержание и качество.
        </div>
      </div>
    </footer>
  )
}

export default Footer
