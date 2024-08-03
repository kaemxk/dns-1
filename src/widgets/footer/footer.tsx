import React from 'react'

import FooterLogoSection from '@/widgets/footer/footerLogoSection/footerLogoSection.tsx'
import FooterNavSection from '@/widgets/footer/footerNavSection/footerNavSection.tsx'
import FooterContactSection from '@/widgets/footer/footerContactSection/footerContactSection.tsx'
import FooterLoadIcon from "@/widgets/footer/footerLoadIcon/footerLoadIcon.tsx";

const Footer = () => {
  return (
    <footer style={{ margin: '30px 0 0', padding: 0, background: '#333', fontSize: 16, minWidth: 409 }}>
      <div
        style={{
          maxWidth: 1380,
          display: 'flex',
          flexDirection: 'column',
          margin: '0 auto',
          padding: '0 16px',
        }}
      >
        <FooterLogoSection />
        <div className='flex justify-between flex-col md:flex-row' >
          <FooterNavSection />
          <FooterContactSection />
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
