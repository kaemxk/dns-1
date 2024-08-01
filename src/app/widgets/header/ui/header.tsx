export const Header = () => (
  <header className='mb-24'>
    <div className='w-full bg-white'>
      <div className='header-top__container mx-auto my-0 box-content flex min-h-[75%] w-[960px] max-w-[1380px] flex-nowrap justify-between pb-2 pl-0 pt-5'>
        <div className='header-top-menu flex flex-row text-base'>
          <ul className='header-top-menu__common-list mb-0 ml-0 mr-auto mt-0 flex grow whitespace-nowrap p-0'>
            <li className='first:mr-5.5 mr-2.5 first:w-[165px]'>
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
            <li className='mr-2.5'>
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
            <li className='mr-2.5'>
              <a href='#' className='header-top-menu__common-link hover:text-orange-500'>
                Магазины
              </a>
            </li>
            <li className='mr-2.5'>
              <a href='#' className='header-top-menu__common-link hover:text-orange-500'>
                Доставка
              </a>
            </li>
            <li className='mr-2.5'>
              <a href='#' className='header-top-menu__common-link hover:text-orange-500'>
                Покупателям
              </a>
            </li>
            <li className='mr-2.5'>
              <a href='#' className='header-top-menu__common-link hover:text-orange-500'>
                Юридическим лицам
              </a>
            </li>
            <li className='mr-2.5'>
              <a href='#' className='header-top-menu__common-link hover:text-orange-500'>
                Клуб DNS
              </a>
            </li>
            <li className='mr-2.5'>
              <a href='#' className='header-top-menu__common-link hover:text-orange-500'>
                Вакансии
              </a>
            </li>
          </ul>
          <ul className='header-top-menu__contact whitespace-nowrap pl-4'>
            <a href='#' className='header-top-menu__common-link'>
              8-800-77-07-999
            </a>
          </ul>
        </div>
      </div>
    </div>
    <nav className='header-bottom box-content flex h-24 items-center bg-white text-sm shadow-sm'>
      <div className='header-bottom__container mx-auto my-0 box-content flex w-[960px] max-w-[1380px] items-center justify-start'>
        <div className='header-bottom__btn-catalog relative float-left box-content flex max-h-16 items-center rounded-xl bg-gradient-to-b from-yellow-500 to-orange-500 pr-3 text-left'>
          <a
            href='#'
            className='header-bottom__logo-container flex h-16 w-auto cursor-pointer items-center rounded-bl-xl rounded-tl-xl pl-5 pr-5 hover:bg-white hover:bg-opacity-15'
          >
            <div className='header-bottom__logo relative inline-block w-[67px] align-middle'>
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
        <div className='header-bottom__presearch-wrapper'></div>
        <div className='header-bottom__nav-wrapper'></div>
      </div>
    </nav>
  </header>
)
