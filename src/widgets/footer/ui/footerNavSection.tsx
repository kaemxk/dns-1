import React, { useState, useEffect } from 'react'
import FooterContactSection from './footerContactSection.tsx'

type MenuLinks = {
  [key: string]: string
}

type footerInfo = {
  phone: {
    timeFrom: string
    timeTo: string
    number: string
  }
  cityName: string
  menu: {
    Компания: MenuLinks
    Покупателям: MenuLinks
  }
  languages: string[]
}

const FooterNavSection: React.FC = () => {
  const [isMobileView, setIsMobileView] = useState<boolean>(window.innerWidth <= 768)
  const [footerInfo, setFooterInfo] = useState<footerInfo | null>(null)
  const [isCompanyLinksVisible, setIsCompanyLinksVisible] = useState<boolean>(false)
  const [isCustomerLinksVisible, setIsCustomerLinksVisible] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    fetch('http://localhost:4000/footerInfo')
      .then(response => response.json())
      .then((footerInfo: footerInfo) => setFooterInfo(footerInfo))
      .catch(error => console.error('Error fetching data:', error))
  }, [])

  const toggleCompanyLinks = () => {
    setIsCompanyLinksVisible(!isCompanyLinksVisible)
    setIsCustomerLinksVisible(false)
  }

  const toggleCustomerLinks = () => {
    setIsCustomerLinksVisible(!isCustomerLinksVisible)
    setIsCompanyLinksVisible(false)
  }

  if (!footerInfo) {
    return <div>Loading...</div>
  }

  const companyLinks = footerInfo.menu['Компания']
  const customerLinks = footerInfo.menu['Покупателям']

  return (
    // без contents позиция блоков посыпется
    <section
      data-testid='footer-nav-section'
      className={`flex flex-wrap ${isMobileView ? 'md:hidden' : 'hidden md:flex'}`}
      style={{ display: 'contents' }}
    >
      {/* Десктопная версия */}
      {!isMobileView && (
        <div className='mb-8 flex w-full justify-around md:mb-0 xl:justify-normal'>
          <div className='mw-[246px] mb-8 w-[250px] sm:mr-0 md:mr-1 xl:mr-14'>
            <h6 className='mb-5 border-b border-gray-600 pb-5 text-lg font-bold text-white'>
              Компания
            </h6>
            <ul className='text-white'>
              {Object.keys(companyLinks).map((link, index) => (
                <li key={index} className='mb-2'>
                  <a href={companyLinks[link]} className='text-white no-underline hover:underline'>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='mw-[246px] max-lg:ml-5 max-lg:mr-5 md:mb-0 md:w-[64] lg:mr-16 xl:w-[523px]'>
            <h6 className='mb-5 border-b border-gray-600 pb-5 text-lg font-bold text-white'>
              Покупателям
            </h6>
            <ul className='text-white md:columns-1 xl:columns-2'>
              {Object.keys(customerLinks).map((link, index) => (
                <li key={index} className='mb-2'>
                  <a href={customerLinks[link]} className='text-white no-underline hover:underline'>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Мобильная версия */}
      {isMobileView && (
        <div className='mb-4'>
          <div className='mb-4 flex'>
            <div className='mb-4 mr-5'>
              <button
                className='mb-4 flex w-full cursor-pointer items-center justify-between text-base text-white'
                style={{
                  backgroundColor: 'hsla(0, 0%, 100%, .06)',
                  borderRadius: 8,
                  padding: '8px 30px 8px 8px',
                  fontSize: 14,
                }}
                onClick={toggleCompanyLinks}
              >
                Компания
                <span
                  className={`ml-2 transform text-lg transition-transform ${isCompanyLinksVisible ? 'rotate-180' : 'rotate-0'}`}
                >
                  <svg xmlns='http://www.w3.org/2000/svg' width='12' height='7' fill='none'>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M.782.69c.22-.22.576-.22.795 0l4.425 4.424L10.426.69a.563.563 0 11.796.795L6.4 6.308a.562.562 0 01-.796 0L.782 1.485a.562.562 0 010-.795z'
                      fill='#AFAFAF'
                    />
                  </svg>
                </span>
              </button>
            </div>
            <div>
              <button
                className='mb-4 flex w-full cursor-pointer items-center justify-between text-base text-white'
                style={{
                  backgroundColor: 'hsla(0, 0%, 100%, .06)',
                  borderRadius: 8,
                  padding: '8px 30px 8px 8px',
                  fontSize: 14,
                }}
                onClick={toggleCustomerLinks}
              >
                Покупателям
                <span
                  className={`ml-2 transform text-lg transition-transform ${isCustomerLinksVisible ? 'rotate-180' : 'rotate-0'}`}
                >
                  <svg xmlns='http://www.w3.org/2000/svg' width='12' height='7' fill='none'>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M.782.69c.22-.22.576-.22.795 0l4.425 4.424L10.426.69a.563.563 0 11.796.795L6.4 6.308a.562.562 0 01-.796 0L.782 1.485a.562.562 0 010-.795z'
                      fill='#AFAFAF'
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <ul className='m-0 list-none p-0'>
            {isCompanyLinksVisible &&
              Object.keys(companyLinks).map((link, index) => (
                <li key={index} className='mb-2'>
                  <a href={companyLinks[link]} className='text-white no-underline'>
                    {link}
                  </a>
                </li>
              ))}
            {isCustomerLinksVisible &&
              Object.keys(customerLinks).map((link, index) => (
                <li key={index} className='mb-2'>
                  <a href={customerLinks[link]} className='text-white no-underline'>
                    {link}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      )}
      <FooterContactSection phone={footerInfo.phone} cityName={footerInfo.cityName} />
    </section>
  )
}

export default FooterNavSection
