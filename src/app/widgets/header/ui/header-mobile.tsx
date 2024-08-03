import { useState } from 'react'
import clsx from 'clsx'

export const HeaderMobile = () => {
  const [inputSearch, setInputSearch] = useState<string>('')
  const [isFocusedSearch, setIsFocusedSearch] = useState<boolean>(false)

  const classesIconClearMobile = clsx({
    ['hidden']: inputSearch.length === 0,
    ['presearch-mobile__icon-clear absolute right-0 top-0 flex h-11 w-11 cursor-pointer items-center justify-center']:
      true,
  })

  const classesIconScan = clsx({
    ['presearch-mobile__icon-scan absolute right-[13px] top-[9px] h-[25px] w-[25px]']: true,
    ['hidden']: inputSearch.length > 0,
  })

  const classesPresearchMobile = clsx({
    ['presearch-mobile box-border max-h-11 w-full p-0']: !isFocusedSearch,
    ['transition-[all_.2s_ease-in-out_0s] fixed flex items-center justify-center w-full top-0 left-0 z-[10] bg-white max-h-[70px]']:
      isFocusedSearch,
  })

  const classesNotificationButton = clsx({
    ['header-mobile__notification-button inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#f7f7f7]']:
      !isFocusedSearch,
    ['hidden']: isFocusedSearch,
  })

  const classesPresearchMobileWrapper = clsx({
    ['presearch-mobile__wrapper relative z-[2] mr-0 flex h-auto w-full items-center gap-4 rounded-lg border-none bg-white text-[16px]']:
      true,
    ['max-h-[58px] rounded-[0] p-[7px_16px] shadow-[0_1px_2px_rgba(0,0,0,.1)]']: isFocusedSearch,
  })

  const handleClickSearchClear = () => setInputSearch('')

  const handleOnFocusSearch = () => setIsFocusedSearch(true)

  const handleBlurSearch = () => setIsFocusedSearch(false)

  return (
    <div className='header-mobile relative top-0 mb-0 block lg:hidden'>
      <div className='header-mobile-inner relative top-0 flex max-h-[110px] min-h-[110px] w-full flex-col bg-white p-4'>
        <div className='header-mobile__top mb-[17px] flex max-h-[18px] w-full justify-between'>
          <a href='/' className='header-mobile__logo h-[17px] w-[68px]'>
            <svg
              width='68'
              height='17'
              viewBox='0 0 120 31'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M31.295 15.084a7.529 7.529 0 00-2.22-5.358 7.529 7.529 0 00-5.358-2.22H7.507V22.662h16.21a7.53 7.53 0 005.359-2.22 7.527 7.527 0 002.219-5.357zm7.507 0c0 8.33-6.754 15.084-15.085 15.084H0V0h23.717c8.331 0 15.085 6.753 15.085 15.084zm78.444-.985a9.378 9.378 0 00-6.649-2.754v.012H90.639a1.936 1.936 0 01-1.934-1.934c0-1.066.867-1.934 1.934-1.934h23.655a3.736 3.736 0 100-7.472H90.639c-1.268 0-2.5.25-3.663.741a9.368 9.368 0 00-2.988 2.014 9.375 9.375 0 00-2.014 2.989 9.351 9.351 0 00-.741 3.662c0 1.268.25 2.5.741 3.662a9.366 9.366 0 002.014 2.989 9.374 9.374 0 006.651 2.755h19.958v-.012c1.065 0 1.931.866 1.931 1.93a1.933 1.933 0 01-1.931 1.932H84.969a3.736 3.736 0 100 7.472h25.628a9.376 9.376 0 006.649-2.754 9.37 9.37 0 002.013-2.988 9.336 9.336 0 00.741-3.661 9.375 9.375 0 00-2.754-6.649zM71.876 0h7.472v26.415a3.736 3.736 0 01-6.378 2.641l-24.917-18.01v19.122H40.58V3.753a3.736 3.736 0 016.378-2.641l24.917 18.01V0z'
                fill='#FC8507'
              />
            </svg>
          </a>
          <div className='header-mobile__select-city-wrap max-w-[calc(100%-68px)] pl-5'>
            <div className='city-select relative w-full'>
              <div className='city-select__label flex min-h-full cursor-pointer items-baseline'>
                <span className='city-select__icon flex text-[14px]'>
                  <svg
                    className='inline-block align-baseline'
                    width='12px'
                    height='12px'
                    viewBox='0 0 32 32'
                    version='1.1'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M16.114-0.011c-6.559 0-12.114 5.587-12.114 12.204 0 6.93 6.439 14.017 10.77 18.998 0.017 0.020 0.717 0.797 1.579 0.797h0.076c0.863 0 1.558-0.777 1.575-0.797 4.064-4.672 10-12.377 10-18.998 0-6.618-4.333-12.204-11.886-12.204zM16.515 29.849c-0.035 0.035-0.086 0.074-0.131 0.107-0.046-0.032-0.096-0.072-0.133-0.107l-0.523-0.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zM16.035 6.044c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.687 6-6-2.686-6-6-6zM16.035 16.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 0.001 2.206-1.747 4.044-3.954 4.044z'></path>
                  </svg>
                </span>
                <span className='city-select__text ml-[5px] inline-block w-full overflow-hidden whitespace-nowrap'>
                  Москва
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='header-mobile__bottom flex w-full justify-between gap-2'>
          <div className='header-mobile__search max-h-11 w-full'>
            <div className={classesPresearchMobile}>
              <div className={classesPresearchMobileWrapper}>
                <div className='presearch-mobile__input-outer relative w-full'>
                  <input
                    className='presearch-mobile__input box-border h-11 w-full rounded-lg border-none bg-[#f7f7f7] p-[0_94px_0_38px] text-[#333] outline-none transition-[background_.3s] placeholder:text-[14px] placeholder:text-[#7c7c7c]'
                    placeholder='Поиск по сайту'
                    onChange={e => setInputSearch(e.target.value)}
                    onFocus={handleOnFocusSearch}
                    onBlur={handleBlurSearch}
                    value={inputSearch}
                  />
                  <span className={classesIconScan}>
                    <svg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M5.667 3.419a2.25 2.25 0 00-2.25 2.25v2.334a.75.75 0 11-1.5 0V5.669a3.75 3.75 0 013.75-3.75H8a.75.75 0 110 1.5H5.667zm9.583-.75a.75.75 0 01.75-.75h2.333a3.75 3.75 0 013.75 3.75v2.333a.75.75 0 01-1.5 0V5.669a2.25 2.25 0 00-2.25-2.25H16a.75.75 0 01-.75-.75zM2.667 15.249a.75.75 0 01.75.75v2.334a2.25 2.25 0 002.25 2.25H8a.75.75 0 010 1.5H5.667a3.75 3.75 0 01-3.75-3.75V16a.75.75 0 01.75-.75zm18.666 0a.75.75 0 01.75.75v2.334a3.75 3.75 0 01-3.75 3.75H16a.75.75 0 110-1.5h2.333a2.25 2.25 0 002.25-2.25V16a.75.75 0 01.75-.75zM4.25 12a.75.75 0 01.75-.75h14a.75.75 0 010 1.5H5a.75.75 0 01-.75-.75zM6.25 7A.75.75 0 017 6.25h10a.75.75 0 01.75.75v1a.75.75 0 01-1.5 0v-.25h-8.5V8a.75.75 0 01-1.5 0V7zM7 15.25a.75.75 0 01.75.75v.25h8.5V16a.75.75 0 011.5 0v1a.75.75 0 01-.75.75H7a.75.75 0 01-.75-.75v-1a.75.75 0 01.75-.75z'
                        fill='#AFAFAF'
                      ></path>
                    </svg>
                  </span>
                  <div className='presearch-mobile__controls'>
                    <div className={classesIconClearMobile}>
                      <svg
                        onClick={handleClickSearchClear}
                        width='24'
                        height='24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.28 8.22a.75.75 0 00-1.06 1.06l2.873 2.874-2.873 2.874a.75.75 0 001.06 1.06l2.874-2.873 2.874 2.873a.75.75 0 001.06-1.06l-2.873-2.874 2.873-2.874a.75.75 0 10-1.06-1.06l-2.874 2.873L9.28 8.22z'
                          fill='#8C8C8C'
                        ></path>
                      </svg>
                    </div>
                    <div className='presearch-mobile__icon-search absolute left-0 top-0 flex h-11 w-11 items-center justify-center'>
                      <svg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M10.828 4.75a6.078 6.078 0 100 12.156 6.078 6.078 0 000-12.156zM3.25 10.828a7.578 7.578 0 1113.441 4.801l4.161 4.162a.75.75 0 11-1.06 1.06l-4.162-4.16a7.578 7.578 0 01-12.38-5.862z'
                          fill='#AFAFAF'
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <button
                  className={isFocusedSearch ? 'presearch-mobile__cancel text-[14px]' : 'hidden'}
                >
                  Отмена
                </button>
              </div>
            </div>
          </div>
          <div className={classesNotificationButton}>
            <div className='notification-center-mobile'>
              <div className='notification-center-mobile__button relative h-6 w-6'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M1.91699 5.66797C1.91699 3.59676 3.59578 1.91797 5.66699 1.91797H15.667C17.7383 1.91797 19.4167 3.59674 19.418 5.66752V10.332C19.418 12.4032 17.7392 14.082 15.668 14.082H11.7429L7.48272 17.7419C7.26076 17.9326 6.94816 17.9767 6.68205 17.855C6.41593 17.7333 6.24491 17.4679 6.244 17.1753L6.23433 14.082H5.66699C3.59578 14.082 1.91699 12.4032 1.91699 10.332V5.66797ZM5.66699 3.41797C4.42421 3.41797 3.41699 4.42518 3.41699 5.66797V10.332C3.41699 11.5748 4.42421 12.582 5.66699 12.582H6.98199C7.39529 12.582 7.7307 12.9163 7.73199 13.3296L7.73891 15.5443L10.9763 12.7631C11.1123 12.6462 11.2857 12.582 11.465 12.582H15.668C16.9108 12.582 17.918 11.5748 17.918 10.332V5.66842C17.9172 4.42519 16.9097 3.41797 15.667 3.41797H5.66699ZM7.89827 7.36182C8.2509 7.57912 8.36061 8.04115 8.14331 8.39378L8.1415 8.39672C7.92419 8.74936 7.46216 8.85906 7.10953 8.64176C6.75689 8.42445 6.64719 7.96242 6.86449 7.60979L6.8663 7.60685C7.08361 7.25422 7.54564 7.14451 7.89827 7.36182ZM11.0584 7.36182C11.4111 7.57912 11.5208 8.04115 11.3035 8.39378L11.3017 8.39672C11.0843 8.74936 10.6223 8.85906 10.2697 8.64176C9.91705 8.42445 9.80734 7.96242 10.0246 7.60979L10.0265 7.60685C10.2438 7.25422 10.7058 7.14451 11.0584 7.36182ZM14.2186 7.36182C14.5712 7.57912 14.6809 8.04115 14.4636 8.39378L14.4618 8.39672C14.2445 8.74936 13.7825 8.85906 13.4298 8.64176C13.0772 8.42445 12.9675 7.96242 13.1848 7.60979L13.1866 7.60685C13.4039 7.25422 13.8659 7.14451 14.2186 7.36182ZM21.333 11.861C21.7472 11.861 22.083 12.1968 22.083 12.611V14.491C22.083 16.5622 20.4042 18.241 18.333 18.241H17.7657L17.756 21.3343C17.7551 21.6269 17.5841 21.8923 17.3179 22.014C17.0518 22.1357 16.7392 22.0916 16.5173 21.9009L12.2571 18.241H10.666C10.2518 18.241 9.91599 17.9052 9.91599 17.491C9.91599 17.0768 10.2518 16.741 10.666 16.741H12.535C12.7143 16.741 12.8877 16.8052 13.0237 16.9221L16.2611 19.7033L16.268 17.4886C16.2693 17.0753 16.6047 16.741 17.018 16.741H18.333C19.5758 16.741 20.583 15.7338 20.583 14.491V12.611C20.583 12.1968 20.9188 11.861 21.333 11.861Z'
                    fill='#8C8C8C'
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
