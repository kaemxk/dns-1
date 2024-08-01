import { useState } from 'react'

export const Header = () => {
  const [catalogActive, setCatalogActive] = useState(false)

  const styleCatalogActive = {
    transform: 'rotate(180deg)',
    transition: 'all 200ms ease-out 0ms',
  }

  const styleDropdown = {
    visibility: 'hidden',
    opacity: '0',
  }

  const handlerCatalogActive = () => setCatalogActive(prevState => !prevState)

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
                  <div className='dropdown'>
                    <div
                      onClick={handlerCatalogActive}
                      tabIndex={0}
                      role='button'
                      className='header-top-menu__common-link cursor-pointer select-none hover:text-orange-500'
                    >
                      Покупателям
                      <svg
                        className='header-top-menu__arrow-svg transition-[all 200ms 0ms] absolute right-[-15px] top-0 w-[15px] ease-out'
                        style={catalogActive ? styleCatalogActive : undefined}
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
                    <ul
                      tabIndex={0}
                      style={!catalogActive ? styleDropdown : undefined}
                      className='menu dropdown-content left-[-50px] top-[35px] z-[999] min-w-40 rounded-xl border-t-[#ddd] bg-white p-6 text-center shadow'
                    >
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
            <ul className='header-top-menu__contact whitespace-nowrap pl-4'>
              <li>
                <a href='#' className='header-top-menu__common-link'>
                  8-800-77-07-999
                </a>
              </li>
            </ul>
          </div>
        </div>
        <nav className='header-bottom box-content flex h-24 items-center bg-white text-sm shadow-sm md:pl-[10px] md:pr-[10px] lg:pl-[10px] lg:pr-[10px]'>
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
                  className='presearch__input box-border h-full w-full rounded-xl border border-solid border-white bg-[#f7f7f7] pb-0 pl-5 pr-[120px] pt-0 text-[#333] outline-none transition-[.3s] placeholder:text-[#707070] hover:bg-white hover:shadow-[0px_4px_15px_-2px_rgba(34,60,80,0.2)]'
                  type='search'
                  placeholder='Поиск по сайту'
                />
                <div className='presearch__controls'>
                  <span className='presearch__icon-clear absolute right-[70px] top-[10px] flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg after:absolute after:right-[-7px] after:top-[10px] after:h-6 after:w-[1px] after:bg-[#d9d9d9] after:bg-cover'>
                    <svg
                      className='h-3 w-3'
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
                    <svg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M10.828 4.75a6.078 6.078 0 100 12.156 6.078 6.078 0 000-12.156zM3.25 10.828a7.578 7.578 0 1113.441 4.801l4.161 4.162a.75.75 0 11-1.06 1.06l-4.162-4.16a7.578 7.578 0 01-12.38-5.862z'
                        fill='#AFAFAF'
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
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
    </header>
  )
}
