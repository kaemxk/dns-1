import React, { useState, useEffect } from 'react';
import FooterLoadIcon from '@/widgets/footer/footerLoadIcon/footerLoadIcon.tsx';

type MenuLinks = {
  [key: string]: string;
};

type Data = {
  phone: {
    timeFrom: string;
    timeTo: string;
    number: string;
  };
  cityName: string;
  menu: {
    Компания: MenuLinks;
    Покупателям: MenuLinks;
  };
  languages: string[];
};

const FooterNavSection: React.FC = () => {
  const [isMobileView, setIsMobileView] = useState<boolean>(window.innerWidth <= 768);
  const [data, setData] = useState<Data | null>(null);
  const [isCompanyLinksVisible, setIsCompanyLinksVisible] = useState<boolean>(false);
  const [isCustomerLinksVisible, setIsCustomerLinksVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    fetch('http://localhost:4000/data')
        .then(response => response.json())
        .then((data: Data) => setData(data))
        .catch(error => console.error('Error fetching data:', error));
  }, []);

  const toggleCompanyLinks = () => {
    setIsCompanyLinksVisible(!isCompanyLinksVisible);
    setIsCustomerLinksVisible(false);
  };

  const toggleCustomerLinks = () => {
    setIsCustomerLinksVisible(!isCustomerLinksVisible);
    setIsCompanyLinksVisible(false);
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  const companyLinks = data.menu['Компания'];
  const customerLinks = data.menu['Покупателям'];

  return (
      <section className={`flex flex-wrap ${isMobileView ? 'md:hidden' : 'hidden md:flex'}`}>
        {/* Десктопная версия */}
        {!isMobileView && (
            <div className="w-full mb-8 md:mb-0 flex">
              <div className="mb-8 sm:mr-0 md:mr-1 lg:mr-14" style={{width: 250}}>
                <h6 className="text-white font-bold  mb-5 border-b border-gray-600 pb-5 text-lg">Компания</h6>
                <ul className="text-white">
                  {Object.keys(companyLinks).map((link, index) => (
                      <li key={index} className="mb-2">
                        <a href={companyLinks[link]} className="text-white no-underline hover:underline">{link}</a>
                      </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-[64]2xl:w-[523px] md:mb-0">
                <h6 className="text-white font-bold  mb-5 border-b border-gray-600 pb-5 text-lg">Покупателям</h6>
                <ul className="text-white md:columns-1 lg:columns-2">
                  {Object.keys(customerLinks).map((link, index) => (
                      <li key={index} className="mb-2">
                        <a href={customerLinks[link]} className="text-white no-underline hover:underline">{link}</a>
                      </li>
                  ))}
                </ul>
              </div>
            </div>
        )}

        {/* Мобильная версия */}
        {isMobileView && (
            <div className=" mb-4">
              <div className=" mb-4 flex">
                <div className=" mb-4 mr-5">
                  <button
                      className="cursor-pointer flex justify-between items-center w-full text-white text-base mb-4 "
                      style={{backgroundColor: 'hsla(0, 0%, 100%, .06)', borderRadius:8, padding: '8px 30px 8px 8px', fontSize: 14}}
                      onClick={toggleCompanyLinks}
                  >
                    Компания
                    <span className={`text-lg ml-2 transform transition-transform ${isCompanyLinksVisible ? 'rotate-180' : 'rotate-0'}`}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M.782.69c.22-.22.576-.22.795 0l4.425 4.424L10.426.69a.563.563 0 11.796.795L6.4 6.308a.562.562 0 01-.796 0L.782 1.485a.562.562 0 010-.795z" fill="#AFAFAF"/></svg>
                    </span>
                  </button>
                </div>
                <div>
                  <button
                      className="cursor-pointer flex justify-between items-center w-full text-white text-base mb-4 "
                      style={{backgroundColor: 'hsla(0, 0%, 100%, .06)', borderRadius:8, padding: '8px 30px 8px 8px', fontSize: 14}}
                      onClick={toggleCustomerLinks}
                  >
                    Покупателям
                    <span className={`text-lg ml-2 transform transition-transform ${isCustomerLinksVisible ? 'rotate-180' : 'rotate-0'}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M.782.69c.22-.22.576-.22.795 0l4.425 4.424L10.426.69a.563.563 0 11.796.795L6.4 6.308a.562.562 0 01-.796 0L.782 1.485a.562.562 0 010-.795z" fill="#AFAFAF"/></svg>
                    </span>
                  </button>
                </div>
              </div>
              <ul className="list-none p-0 m-0">
                {isCompanyLinksVisible &&
                    Object.keys(companyLinks).map((link, index) => (
                        <li key={index} className="mb-2">
                          <a href={companyLinks[link]} className="no-underline text-white">{link}</a>
                        </li>
                    ))}
                {isCustomerLinksVisible &&
                    Object.keys(customerLinks).map((link, index) => (
                        <li key={index} className="mb-2">
                          <a href={customerLinks[link]} className="no-underline text-white">{link}</a>
                        </li>
                    ))}
              </ul>
            </div>
        )}
      </section>
  );
};

export default FooterNavSection;
