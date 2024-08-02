import { useState, useRef, useEffect } from 'react'
import { clsx } from 'clsx'
import { useOnClickOutside } from 'use-hooks'
import './header.css'

export const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false)
  const [inputSearch, setInputSearch] = useState<string>('')
  const [isFocusedSearch, setIsFocusedSearch] = useState<boolean>(false)
  const [scrollTop, setScrollTop] = useState(0)
  const ref = useRef<HTMLDivElement | null>(null)

  useOnClickOutside(ref, () => setDropdownOpen(false))

  const classesDropdownContainer = clsx({
    dropdown: true,
    'dropdown-open': dropdownOpen,
  })

  const classesSvgArrow = clsx({
    ['header-top-menu__arrow-svg absolute right-[-15px] top-0 w-[15px] transition-[all_200ms_0ms] ease-out']:
      true,
    ['catalog-active']: dropdownOpen,
  })

  const classesDropdownList = clsx({
    ['dropdown-content left-[-50px] top-[35px] z-[999] min-w-40 rounded-xl border-t-[#ddd] bg-white p-6 shadow']:
      true,
    ['hidden']: !dropdownOpen,
  })

  const classesIconClear = clsx({
    ['presearch__icon-clear absolute right-[70px] top-[10px] flex h-11 w-11 cursor-pointer items-center justify-center z-[4] rounded-lg after:absolute after:right-[-7px] after:top-[10px] after:h-6 after:w-[1px] after:bg-[#d9d9d9] after:bg-cover after:z-[4]']:
      true,
    ['hidden']: inputSearch.length === 0,
  })

  const classesOverlay = clsx({
    ['presearch__overlay fixed left-0 top-0 z-[3] h-screen w-screen bg-[rgba(0,0,0,.1);]']:
      isFocusedSearch,
  })

  const classesScrollHeader = clsx({
    ['header-bottom box-content flex h-24 items-center bg-white transition-[all_200ms_ease-out_0.1s] text-sm shadow-sm md:pl-[10px] md:pr-[10px] lg:pl-[10px] lg:pr-[10px]']:
      true,
    ['fixed left-0 top-0 right-0']: scrollTop > 49,
  })

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

  const handlerClickDropdownOpen = () => setDropdownOpen(prevState => !prevState)

  const handleClickSearchClear = () => setInputSearch('')

  const handleOnFocusSearch = () => setIsFocusedSearch(true)

  const handleBlurSearch = () => setIsFocusedSearch(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className='relative z-10 mb-0 text-[14px] lg:mb-6'>
      <div id='header-desktop' className='hidden lg:block'>
        <div className='header-top w-full border-none bg-white leading-[21px] text-[#4e4e4e] xl:pl-2.5 xl:pr-2.5'>
          <div className='header-top__container mx-auto my-0 box-content flex min-h-[75%] max-w-[1380px] flex-nowrap justify-between pb-2 pl-0 pt-5 lg:w-[960px] xl:w-full'>
            <div className='header-top-menu flex flex-row'>
              <ul className='header-top-menu__common-list mb-0 ml-0 mr-auto mt-0 flex grow whitespace-nowrap p-0'>
                <li className='first:mr-3 lg:mr-5 lg:w-[165px] xl:w-[270px]'>
                  <div className='city-select'>
                    <a
                      href='#'
                      className='header-top-menu__common-link hover:fill-orange-500 hover:text-orange-500'
                    >
                      <span className='city-select__icon'>
                        <svg
                          className='mr-1 inline-block align-baseline'
                          width='12px'
                          height='12px'
                          viewBox='0 0 32 32'
                          version='1.1'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M16.114-0.011c-6.559 0-12.114 5.587-12.114 12.204 0 6.93 6.439 14.017 10.77 18.998 0.017 0.020 0.717 0.797 1.579 0.797h0.076c0.863 0 1.558-0.777 1.575-0.797 4.064-4.672 10-12.377 10-18.998 0-6.618-4.333-12.204-11.886-12.204zM16.515 29.849c-0.035 0.035-0.086 0.074-0.131 0.107-0.046-0.032-0.096-0.072-0.133-0.107l-0.523-0.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zM16.035 6.044c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.687 6-6-2.686-6-6-6zM16.035 16.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 0.001 2.206-1.747 4.044-3.954 4.044z'></path>
                        </svg>
                      </span>
                      <span className='city-select__text'>Москва</span>
                    </a>
                  </div>
                </li>
                <li className='mr-5 lg:mr-3'>
                  <a href='#' className='header-top-menu__common-link hover:text-orange-500'>
                    Акции
                    <svg
                      className='header-top-menu__dot-svg ml-1 mr-2 inline-block'
                      width='5'
                      height='5'
                      viewBox='0 0 5 5'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect width='5' height='5' rx='2.5' fill='#FFA319'></rect>
                    </svg>
                  </a>
                </li>
                <li className='mr-3 xl:mr-5'>
                  <a href='#' className='header-top-menu__common-link hover:text-orange-500'>
                    Магазины
                  </a>
                </li>
                <li className='mr-3 xl:mr-5'>
                  <a href='#' className='header-top-menu__common-link hover:text-orange-500'>
                    Доставка
                  </a>
                </li>
                <li className='mr-3 pr-[15px] xl:mr-5'>
                  <div className={classesDropdownContainer} ref={ref}>
                    <div
                      onClick={handlerClickDropdownOpen}
                      tabIndex={0}
                      role='button'
                      className='header-top-menu__common-link cursor-pointer select-none hover:text-orange-500'
                    >
                      Покупателям
                      <svg
                        className={classesSvgArrow}
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='black'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M16.594 8.578L18 9.984L12 15.984L6 9.984L7.406 8.578L12 13.172L16.594 8.578Z'
                          fill='#afafaf'
                        ></path>
                      </svg>
                    </div>
                    <ul tabIndex={0} className={classesDropdownList}>
                      <li>
                        <a className='header-top-menu__common-link_child mb-2 block w-full cursor-pointer whitespace-nowrap p-0 leading-6 text-[#333] hover:bg-inherit hover:text-orange-500'>
                          Доставка
                        </a>
                      </li>
                      <li>
                        <a className='header-top-menu__common-link_child mb-2 block w-full cursor-pointer whitespace-nowrap p-0 leading-6 text-[#333] hover:bg-inherit hover:text-orange-500'>
                          Бонусная программа
                        </a>
                      </li>
                      <li>
                        <a className='header-top-menu__common-link_child mb-2 block w-full cursor-pointer whitespace-nowrap p-0 leading-6 text-[#333] hover:bg-inherit hover:text-orange-500'>
                          Узнать статус заказа
                        </a>
                      </li>
                      <li>
                        <a className='header-top-menu__common-link_child mb-2 block w-full cursor-pointer whitespace-nowrap p-0 leading-6 text-[#333] hover:bg-inherit hover:text-orange-500'>
                          Обмен, возврат, гарантия
                        </a>
                      </li>
                      <li>
                        <a className='header-top-menu__common-link_child mb-2 block w-full cursor-pointer whitespace-nowrap p-0 leading-6 text-[#333] hover:bg-inherit hover:text-orange-500'>
                          Кредиты
                        </a>
                      </li>
                      <li>
                        <a className='header-top-menu__common-link_child mb-2 block w-full cursor-pointer whitespace-nowrap p-0 leading-6 text-[#333] hover:bg-inherit hover:text-orange-500'>
                          Сервисные центры
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className='mr-3 xl:mr-5'>
                  <a href='#' className='header-top-menu__common-link hover:text-orange-500'>
                    Юридическим лицам
                  </a>
                </li>
                <li className='mr-3 xl:mr-5'>
                  <a href='#' className='header-top-menu__common-link hover:text-orange-500'>
                    Клуб DNS
                  </a>
                </li>
                <li className='mr-3 xl:mr-5'>
                  <a href='#' className='header-top-menu__common-link hover:text-orange-500'>
                    Вакансии
                  </a>
                </li>
              </ul>
            </div>
            <ul className='header-top-menu__contact whitespace-nowrap pl-2'>
              <li>
                <a href='#' className='header-top-menu__common-link'>
                  8-800-77-07-999
                </a>
              </li>
            </ul>
          </div>
        </div>
        <nav className={classesScrollHeader}>
          <div className='header-bottom__container mx-auto my-0 box-content flex w-full max-w-[1380px] items-center justify-start lg:w-[960px] xl:w-full'>
            <div className='header-bottom__btn-catalog relative float-left box-content flex max-h-16 items-center rounded-xl bg-gradient-to-b from-[#ffa218] to-[#fc8507] pr-3 text-left'>
              <a
                href='#'
                className='header-bottom__logo-container flex h-16 w-auto cursor-pointer items-center rounded-bl-xl rounded-tl-xl pl-5 pr-5 transition-[.3s] hover:bg-white hover:bg-opacity-15'
              >
                <div className='header-bottom__logo relative inline-block w-[67px] align-middle transition-[.3s] xl:w-[80px]'>
                  <svg viewBox='0 0 120 31' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M31.295 15.084a7.529 7.529 0 00-2.22-5.358 7.529 7.529 0 00-5.358-2.22H7.507v15.156h16.21a7.53 7.53 0 005.359-2.22 7.527 7.527 0 002.219-5.357zm7.507 0c0 8.33-6.754 15.084-15.085 15.084H0V0h23.717c8.331 0 15.085 6.753 15.085 15.084zm78.444-.985a9.378 9.378 0 00-6.649-2.754v.012H90.639a1.936 1.936 0 01-1.934-1.934c0-1.066.867-1.934 1.934-1.934h23.655a3.736 3.736 0 100-7.472H90.639c-1.268 0-2.5.25-3.663.741a9.368 9.368 0 00-2.988 2.014 9.375 9.375 0 00-2.014 2.989 9.351 9.351 0 00-.741 3.662c0 1.268.25 2.5.741 3.662a9.366 9.366 0 002.014 2.989 9.374 9.374 0 006.651 2.755h19.958v-.012c1.065 0 1.931.866 1.931 1.93a1.933 1.933 0 01-1.931 1.932H84.969a3.736 3.736 0 100 7.472h25.628a9.376 9.376 0 006.649-2.754 9.37 9.37 0 002.013-2.988 9.336 9.336 0 00.741-3.661 9.375 9.375 0 00-2.754-6.649zM71.876 0h7.472v26.415a3.736 3.736 0 01-6.378 2.641l-24.917-18.01v19.122H40.58V3.753a3.736 3.736 0 016.378-2.641l24.917 18.01V0z'
                      fill='#fff'
                    />
                  </svg>
                </div>
              </a>
              <div className='header-bottom__catalog pt-2\\\\\\\\.5 visible mb-0 ml-5 flex cursor-pointer flex-row rounded-lg bg-white bg-opacity-15 pb-2.5 pl-5 pr-4 pt-2.5 text-center font-bold text-white shadow-md hover:bg-opacity-20'>
                <span className='header-bottom__catalog-title mr-2'>Каталог</span>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M16.594 8.578L18 9.984L12 15.984L6 9.984L7.406 8.578L12 13.172L16.594 8.578Z'
                    fill='#fff'
                  ></path>
                </svg>
              </div>
            </div>
            <div className='header-bottom__presearch-wrapper mb-0 ml-5 mr-5 mt-0 box-border inline-block h-16 w-full max-w-[725px]'>
              <div className='presearch__wrapper relative h-full rounded-lg bg-[#f7f7f7] leading-10'>
                <input
                  className='presearch__input relative z-[4] box-border h-full w-full rounded-xl border border-solid border-white bg-[#f7f7f7] pb-0 pl-5 pr-[120px] pt-0 text-[#333] outline-none transition-[.3s] placeholder:text-[#707070] focus-within:bg-white hover:bg-white hover:shadow-[0px_4px_15px_-2px_rgba(34,60,80,0.2)] focus:bg-white focus:shadow-[0px_4px_15px_-2px_rgba(34,60,80,0.2)]'
                  onChange={e => setInputSearch(e.target.value)}
                  onFocus={handleOnFocusSearch}
                  onBlur={handleBlurSearch}
                  value={inputSearch}
                  type='search'
                  placeholder='Поиск по сайту'
                />
                <div className='presearch__controls'>
                  <span className={classesIconClear}>
                    <svg
                      onClick={handleClickSearchClear}
                      className='z-[4] h-3 w-3'
                      viewBox='0 0 14 14'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M14 1.41L12.59 0 7 5.59 1.41 0 0 1.41 5.59 7 0 12.59 1.41 14 7 8.41 12.59 14 14 12.59 8.41 7 14 1.41z'
                        fill='#AFAFAF'
                      ></path>
                    </svg>
                  </span>
                  <span className='presearch__icon-search absolute right-[12px] top-[10px] flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg'>
                    <svg
                      className='z-[4]'
                      width='24'
                      height='24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M10.828 4.75a6.078 6.078 0 100 12.156 6.078 6.078 0 000-12.156zM3.25 10.828a7.578 7.578 0 1113.441 4.801l4.161 4.162a.75.75 0 11-1.06 1.06l-4.162-4.16a7.578 7.578 0 01-12.38-5.862z'
                        fill='#AFAFAF'
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
              <div className={classesOverlay}></div>
            </div>
            <div className='header-bottom__nav-wrapper flex h-full'>
              <div className='buttons flex'>
                <a
                  className='compare-link-counter relative flex h-full w-[90%] flex-col items-center justify-center rounded-xl p-[11px] text-[14px] leading-[18px] text-[#4e4e4e] transition-[.2s] hover:bg-[#f7f7f7]'
                  href='#'
                >
                  <span className='compare-link-counter__icon relative max-h-6'>
                    <svg
                      width='22'
                      height='22'
                      viewBox='0 0 22 22'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M4.66797 2.41797C3.42518 2.41797 2.41797 3.42518 2.41797 4.66797V17.332C2.41797 18.5748 3.42518 19.582 4.66797 19.582H17.334C18.5767 19.582 19.5842 18.5747 19.585 17.3315V4.66797C19.585 3.42518 18.5778 2.41797 17.335 2.41797H4.66797ZM0.917969 4.66797C0.917969 2.59676 2.59676 0.917969 4.66797 0.917969H17.335C19.4062 0.917969 21.085 2.59676 21.085 4.66797V17.332C21.0837 19.4027 19.4053 21.082 17.334 21.082H4.66797C2.59676 21.082 0.917969 19.4032 0.917969 17.332V4.66797ZM11.001 6.25097C11.4152 6.25097 11.751 6.58675 11.751 7.00097V14.999C11.751 15.4132 11.4152 15.749 11.001 15.749C10.5868 15.749 10.251 15.4132 10.251 14.999V7.00097C10.251 6.58675 10.5868 6.25097 11.001 6.25097ZM15.001 9.24997C15.4152 9.24997 15.751 9.58576 15.751 9.99997L15.751 14.999C15.751 15.4132 15.4152 15.749 15.001 15.749C14.5868 15.749 14.251 15.4132 14.251 14.999L14.251 9.99997C14.251 9.58575 14.5868 9.24997 15.001 9.24997ZM7.00097 11.583C7.41518 11.583 7.75097 11.9188 7.75097 12.333V14.999C7.75097 15.4132 7.41518 15.749 7.00097 15.749C6.58676 15.749 6.25097 15.4132 6.25097 14.999V12.333C6.25097 11.9188 6.58676 11.583 7.00097 11.583Z'
                        fill='#AFAFAF'
                      ></path>
                    </svg>
                  </span>
                  <span className='compare-link-counter__lbl'>Сравнение</span>
                </a>
                <a
                  className='wishlist-link-counter relative flex h-full w-[90%] flex-col items-center justify-center rounded-xl p-[11px] text-[14px] leading-[18px] text-[#4e4e4e] transition-[.2s] hover:bg-[#f7f7f7]'
                  href='#'
                >
                  <span className='wishlist-link-counter__icon relative max-h-6'>
                    <svg
                      width='22'
                      height='22'
                      viewBox='0 0 20 18'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M0.25 6.36912C0.25 3.07041 2.65767 0.25 5.79925 0.25C7.49913 0.25 8.99404 1.08608 10 2.36847C11.0059 1.08613 12.5006 0.25 14.1996 0.25C17.3423 0.25 19.75 3.07167 19.75 6.36912C19.75 7.69532 19.2489 8.97129 18.5251 10.1284C17.7997 11.2883 16.8229 12.3733 15.8015 13.3326C13.7592 15.2508 11.4589 16.7397 10.3901 17.3906C10.1504 17.5365 9.84927 17.5365 9.60965 17.3904C8.54109 16.7391 6.24079 15.2501 4.19851 13.3322C3.17709 12.3729 2.20033 11.288 1.47488 10.1283C0.751138 8.97123 0.25 7.69533 0.25 6.36912ZM5.79925 1.75C3.63983 1.75 1.75 3.73625 1.75 6.36912C1.75 7.31789 2.11117 8.31698 2.74658 9.33278C3.38027 10.3458 4.25947 11.3316 5.22537 12.2387C6.94066 13.8496 8.86662 15.1546 10.0001 15.8678C11.1335 15.1552 13.0594 13.8502 14.7746 12.2392C15.7405 11.3321 16.6197 10.3462 17.2534 9.33299C17.8888 8.31707 18.25 7.3179 18.25 6.36912C18.25 3.73751 16.3602 1.75 14.1996 1.75C12.7203 1.75 11.3843 2.66549 10.6719 4.10155C10.5452 4.35679 10.2849 4.51824 10 4.51824C9.71508 4.51824 9.45476 4.35679 9.32813 4.10155C8.61575 2.66559 7.2798 1.75 5.79925 1.75Z'
                        fill='#AFAFAF'
                      ></path>
                    </svg>
                  </span>
                  <span className='wishlist-link-counter__lbl'>Избранное</span>
                </a>
                <div className='cart-button relative'>
                  <a
                    className='cart-link-counter relative flex h-full w-[90px] flex-col items-center justify-center rounded-xl p-[11px] text-[14px] leading-[18px] text-[#4e4e4e] transition-[.2s] hover:bg-[#f7f7f7]'
                    href='#'
                  >
                    <span className='cart-link-counter__icon relative max-h-6'>
                      <svg
                        data-v-5d9baa8c=''
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          data-v-5d9baa8c=''
                          d='M2.25 3C2.25 2.58579 2.58579 2.25 3 2.25H4.38197C5.04482 2.25 5.65078 2.6245 5.94721 3.21738L5.27639 3.55279L5.94721 3.21738L6.46353 4.25H20.1384C21.0982 4.25 21.6999 5.28685 21.2237 6.12017L17.9391 11.8682C17.6275 12.4135 17.0477 12.75 16.4197 12.75H8.91567L7.59225 14.8675C7.48818 15.034 7.60789 15.25 7.80425 15.25H19C19.4142 15.25 19.75 15.5858 19.75 16C19.75 16.4142 19.4142 16.75 19 16.75H7.80425C6.42974 16.75 5.59176 15.2381 6.32025 14.0725L7.67159 11.9103L5.30898 5.295L4.60557 3.8882C4.56322 3.8035 4.47666 3.75 4.38197 3.75H3C2.58579 3.75 2.25 3.41421 2.25 3ZM7.06427 5.75L9.02855 11.25H16.4197C16.5094 11.25 16.5922 11.2019 16.6368 11.124L19.7076 5.75H7.06427ZM10 19.5C10 20.3284 9.32843 21 8.5 21C7.67157 21 7 20.3284 7 19.5C7 18.6716 7.67157 18 8.5 18C9.32843 18 10 18.6716 10 19.5ZM17.5 21C18.3284 21 19 20.3284 19 19.5C19 18.6716 18.3284 18 17.5 18C16.6716 18 16 18.6716 16 19.5C16 20.3284 16.6716 21 17.5 21Z'
                          fill='#AFAFAF'
                        ></path>
                      </svg>
                    </span>
                    <span className='cart-link-counter__lbl'>Корзина</span>
                  </a>
                </div>
              </div>
              <div className='header-bottom__user-block ml-5 flex w-[46px] items-center justify-center'>
                <span className='compare-link-counter__icon relative h-9 w-9 rounded-[100%] bg-[#f7f7f7]'></span>
              </div>
            </div>
          </div>
        </nav>
      </div>
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
    </header>
  )
}
