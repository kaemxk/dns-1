import { useState } from 'react'
import clsx from 'clsx'
import { SlLocationPin } from 'react-icons/sl'
import { IoIosSearch, IoIosCloseCircle } from 'react-icons/io'
import { VscCommentDiscussion } from 'react-icons/vsc'
import { AiOutlineScan } from 'react-icons/ai'

export const HeaderMobile = () => {
  const [inputSearch, setInputSearch] = useState<string>('')
  const [isFocusedSearch, setIsFocusedSearch] = useState<boolean>(false)

  const classesIconClearMobile = clsx(
    'presearch-mobile__icon-clear absolute right-0 top-0 flex h-11 w-11 cursor-pointer items-center justify-center',
    { hidden: inputSearch.length === 0 },
  )

  const classesIconScan = clsx(
    'presearch-mobile__icon-scan absolute right-[13px] top-[9px] h-[25px] w-[25px]',
    { hidden: inputSearch.length > 0 },
  )

  const classesPresearchMobile = clsx('presearch-mobile box-border max-h-11 w-full p-0', {
    'transition-[all_.2s_ease-in-out_0s] fixed flex items-center justify-center w-full top-0 left-0 z-[10] bg-white max-h-[70px]':
      isFocusedSearch,
  })

  const classesNotificationButton = clsx('header-mobile__notification-button', {
    'inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#f7f7f7]': !isFocusedSearch,
    hidden: isFocusedSearch,
  })

  const classesPresearchMobileWrapper = clsx(
    'presearch-mobile__wrapper relative z-[2] mr-0 flex h-auto w-full items-center gap-4 rounded-lg border-none bg-white text-[16px]',
    {
      'max-h-[58px] rounded-[0] p-[7px_16px] shadow-[0_1px_2px_rgba(0,0,0,.1)]': isFocusedSearch,
    },
  )

  const classesSuggests = clsx(
    'presearch-mobile__suggests absolute left-0 top-[58px] z-[1] block h-[100vh] w-full overflow-hidden bg-white',
    { hidden: !isFocusedSearch },
  )

  const handleClickSearchClear = () => setInputSearch('')

  const handleOnFocusSearch = () => setIsFocusedSearch(true)

  const handleCancelFocusSearch = () => setIsFocusedSearch(false)

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
                  <SlLocationPin className='inline-block align-baseline' />
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
                    value={inputSearch}
                  />
                  <span className={classesIconScan}>
                    <AiOutlineScan className='z-[4] h-6 w-6 text-[#AFAFAF]' />
                  </span>
                  <div className='presearch-mobile__controls'>
                    <div className={classesIconClearMobile}>
                      <IoIosCloseCircle
                        onClick={handleClickSearchClear}
                        className='z-[4] h-6 w-6 text-[#AFAFAF]'
                      />
                    </div>
                    <div className='presearch-mobile__icon-search absolute left-0 top-0 flex h-11 w-11 items-center justify-center'>
                      <IoIosSearch className='z-[4] h-6 w-6 text-[#AFAFAF]' />
                    </div>
                  </div>
                </div>
                <button
                  className={isFocusedSearch ? 'presearch-mobile__cancel text-[14px]' : 'hidden'}
                  onClick={handleCancelFocusSearch}
                >
                  Отмена
                </button>
              </div>
              <div className={classesSuggests}></div>
            </div>
          </div>
          <div className={classesNotificationButton}>
            <div className='notification-center-mobile'>
              <div className='notification-center-mobile__button relative h-6 w-6'>
                <VscCommentDiscussion className='z-[4] h-6 w-6 text-[#AFAFAF]' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
