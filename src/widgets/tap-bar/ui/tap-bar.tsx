import { useState } from 'react'

export const TapBar = () => {
  const [activeTab, setActiveTab] = useState('home')

  const handleTabClick = (tab: string, event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    setActiveTab(tab)
  }
  const getLinkClass = (tab: string) => {
    return tab === activeTab ? 'text-primary' : 'text-#AFAFAF'
  }

  const getIconFill = (tab: string) => {
    return tab === activeTab ? 'fill-current fill-primary' : 'fill-current fill-[#AFAFAF]'
  }
  return (
    <nav className='fixed bottom-0 left-0 h-[50px] w-screen bg-white shadow-[0_-2px_8px_rgba(0,0,0,0.15)] min-[992px]:hidden'>
      <ul className='flex h-full items-center justify-around'>
        <li>
          <a
            href=''
            className={`flex flex-col items-center ${getLinkClass('home')}`}
            onClick={event => handleTabClick('home', event)}
          >
            <svg
              width='19'
              height='20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='fill-current'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                className='fill-current'
                d='M8.397 2.481a2.25 2.25 0 012.206 0l5 2.812a2.25 2.25 0 011.147 1.962V16a2.25 2.25 0 01-2.25 2.25h-1.25V13a2.75 2.75 0 00-2.75-2.75h-2A2.75 2.75 0 005.75 13v5.25H4.5A2.25 2.25 0 012.25 16V7.255a2.25 2.25 0 011.147-1.962l5-2.812zM11.75 18.25h-4.5V13c0-.69.56-1.25 1.25-1.25h2c.69 0 1.25.56 1.25 1.25v5.25zm-6 1.5H4.5A3.75 3.75 0 01.75 16V7.255a3.75 3.75 0 011.912-3.269l5-2.812a3.75 3.75 0 013.676 0l5 2.812a3.75 3.75 0 011.912 3.269V16a3.75 3.75 0 01-3.75 3.75H5.75z'
                fill={getIconFill('home')}
              ></path>
            </svg>
            <span className='text-[12px] font-normal leading-[14px]'>Home</span>
          </a>
        </li>
        <li>
          <a
            href=''
            className={`flex flex-col items-center ${getLinkClass('stores')}`}
            onClick={event => handleTabClick('stores', event)}
          >
            <svg
              width='17'
              height='20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='fill-current'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M2.25 8.5c0-3.778 2.846-6.75 6.25-6.75s6.25 2.972 6.25 6.75c0 2.714-1.595 5.161-3.304 6.988a20.769 20.769 0 01-2.958 2.6 20.732 20.732 0 01-2.946-2.6C3.84 13.663 2.25 11.217 2.25 8.501zm5.83 11.13l.407-.63.405.631a.75.75 0 01-.811 0zm0 0l.407-.63c.405.631.406.63.406.63h.002l.005-.004.019-.012.065-.043.236-.162a22.277 22.277 0 003.322-2.896c1.797-1.922 3.708-4.726 3.708-8.013 0-4.507-3.422-8.25-7.75-8.25C4.172.25.75 3.993.75 8.5c0 3.286 1.904 6.09 3.695 8.012a22.22 22.22 0 003.31 2.896 13.497 13.497 0 00.3.205l.018.012.006.004.002.001zM6.25 8a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM8.5 4.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z'
                fill={getIconFill('stores')}
              ></path>
            </svg>
            <span className='text-[12px] font-normal leading-[14px]'>Магазины</span>
          </a>
        </li>
        <li>
          <a
            href='/catalog'
            className={`flex flex-col items-center ${getLinkClass('catalog')}`}
            onClick={event => handleTabClick('catalog', event)}
          >
            <svg
              width='24'
              height='17'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='fill-current'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1.5.25a.75.75 0 000 1.5h13a.75.75 0 000-1.5h-13zm9.75 8.77a4.27 4.27 0 117.299 3.01l-.01.01-.008.009a4.27 4.27 0 01-7.28-3.029zm10.04 0a5.745 5.745 0 01-1.194 3.515l2.934 2.935a.75.75 0 01-1.06 1.06l-2.934-2.934A5.77 5.77 0 1121.29 9.02zM.75 7a.75.75 0 01.75-.75h4a.75.75 0 010 1.5h-4A.75.75 0 01.75 7zm.75 5.25a.75.75 0 000 1.5h6a.75.75 0 000-1.5h-6z'
                fill={getIconFill('catalog')}
              ></path>
            </svg>
            <span className='text-[12px] font-normal leading-[14px]'>Каталог</span>
          </a>
        </li>
        <li>
          <a
            href='/cart'
            className={`flex flex-col items-center ${getLinkClass('cart')}`}
            onClick={event => handleTabClick('cart', event)}
          >
            <svg
              width='20'
              height='19'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='fill-current'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M.75 1A.75.75 0 011.5.25h1.382a1.75 1.75 0 011.565.967l-.67.336.67-.336.517 1.033h13.674a1.25 1.25 0 011.086 1.87l-3.285 5.748a1.75 1.75 0 01-1.52.882H7.417l-1.324 2.117a.25.25 0 00.212.383H17.5a.75.75 0 010 1.5H6.304c-1.374 0-2.212-1.512-1.484-2.678L6.172 9.91 3.809 3.295l-.703-1.407a.25.25 0 00-.224-.138H1.5A.75.75 0 01.75 1zm4.814 2.75l1.965 5.5h7.39a.25.25 0 00.218-.126l3.07-5.374H5.565zM8.5 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM16 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'
                fill={getIconFill('cart')}
              ></path>
            </svg>
            <span className='text-[12px] font-normal leading-[14px]'>Корзина</span>
          </a>
        </li>
        <li>
          <a
            href='/profile/menu'
            className={`flex flex-col items-center ${getLinkClass('profile')}`}
            onClick={event => handleTabClick('profile', event)}
          >
            <svg
              width='21'
              height='20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='fill-current'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M10.5 1.75a8.25 8.25 0 00-6.35 13.517c1.447-1.48 3.392-2.701 6.35-2.701 2.957 0 4.902 1.21 6.351 2.7A8.25 8.25 0 0010.5 1.75zm5.293 14.579c-1.244-1.285-2.83-2.263-5.293-2.263-2.46 0-4.047.984-5.292 2.263A8.217 8.217 0 0010.5 18.25c2.014 0 3.86-.722 5.293-1.921zM.75 10C.75 4.615 5.115.25 10.5.25s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S.75 15.385.75 10zm9.75-4.46a2.566 2.566 0 100 5.131 2.566 2.566 0 000-5.132zM6.434 8.104a4.066 4.066 0 118.132 0 4.066 4.066 0 01-8.132 0z'
                fill={getIconFill('profile')}
              ></path>
            </svg>
            <span className='text-[12px] font-normal leading-[14px]'>Войти</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}
