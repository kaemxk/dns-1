import clsx from 'clsx'
import { useState } from 'react'

export const HeaderDesktopSearch = () => {
  const [inputSearch, setInputSearch] = useState<string>('')
  const [isFocusedSearch, setIsFocusedSearch] = useState<boolean>(false)

  const handleClickSearchClear = () => setInputSearch('')

  const handleOnFocusSearch = () => setIsFocusedSearch(true)

  const handleBlurSearch = () => setIsFocusedSearch(false)

  const classesIconClear = clsx({
    ['presearch__icon-clear absolute right-[70px] top-[10px] flex h-11 w-11 cursor-pointer items-center justify-center z-[4] rounded-lg after:absolute after:right-[-7px] after:top-[10px] after:h-6 after:w-[1px] after:bg-[#d9d9d9] after:bg-cover after:z-[4]']:
      true,
    ['hidden']: inputSearch.length === 0,
  })

  const classesOverlay = clsx({
    ['presearch__overlay fixed left-0 top-0 z-[3] h-screen w-screen bg-[rgba(0,0,0,.1);]']:
      isFocusedSearch,
  })

  return (
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
  )
}
