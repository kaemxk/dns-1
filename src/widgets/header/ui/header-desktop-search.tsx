import clsx from 'clsx'
import { useState } from 'react'
import { IoMdClose, IoIosSearch } from 'react-icons/io'

export const HeaderDesktopSearch = () => {
  const [inputSearch, setInputSearch] = useState<string>('')
  const [isFocusedSearch, setIsFocusedSearch] = useState<boolean>(false)

  const handleClickSearchClear = () => setInputSearch('')

  const handleOnFocusSearch = () => setIsFocusedSearch(true)

  const handleBlurSearch = () => setIsFocusedSearch(false)

  const classesIconClear = clsx(
    'presearch__icon-clear absolute right-[70px] top-[10px] flex h-11 w-11 cursor-pointer items-center justify-center z-[4] rounded-lg after:absolute after:right-[-7px] after:top-[10px] after:h-6 after:w-[1px] after:bg-[#d9d9d9] after:bg-cover after:z-[4]',
    { hidden: inputSearch.length === 0 },
  )

  const classesOverlay = clsx('presearch__overlay', {
    'fixed left-0 top-0 z-[3] h-screen w-screen bg-[rgba(0,0,0,.1);]': isFocusedSearch,
  })

  return (
    <div className='header-bottom__presearch-wrapper mb-0 ml-5 mr-5 mt-0 box-border inline-block h-16 w-full max-w-[725px]'>
      <div className='presearch__wrapper relative h-full rounded-lg bg-[#f7f7f7] leading-10'>
        <input
          data-testid='search'
          className='presearch__input relative z-[4] box-border h-full w-full rounded-xl border border-solid border-white bg-[#f7f7f7] pb-0 pl-5 pr-[120px] pt-0 text-[#333] outline-none transition-[.3s] placeholder:text-[#707070] focus-within:bg-white hover:bg-white hover:shadow-[0px_4px_15px_-2px_rgba(34,60,80,0.2)] focus:bg-white focus:shadow-[0px_4px_15px_-2px_rgba(34,60,80,0.2)]'
          onChange={e => setInputSearch(e.target.value)}
          onClick={handleOnFocusSearch}
          onBlur={handleBlurSearch}
          value={inputSearch}
          type='search'
          placeholder='Поиск по сайту'
        />
        <div className='presearch__controls'>
          <span className={classesIconClear}>
            <IoMdClose
              data-testid='btn-clear'
              onClick={handleClickSearchClear}
              className='z-[4] h-5 w-5 text-[#AFAFAF]'
            />
          </span>
          <span className='presearch__icon-search absolute right-[12px] top-[10px] flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg'>
            <IoIosSearch data-testid='icon-search' className='z-[4] h-6 w-6 text-[#AFAFAF]' />
          </span>
        </div>
      </div>
      <div data-testid='overlay' className={classesOverlay}></div>
    </div>
  )
}
