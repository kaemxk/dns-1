import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { BsBarChartLine, BsCart3, BsHeart } from 'react-icons/bs'
import { IoIosArrowDown } from 'react-icons/io'
import { TbPointFilled } from 'react-icons/tb'
import { Link } from 'react-router-dom'

import { useOutsideClick } from '@/shared/hooks'
import { useGetMenuHeaderQuery } from '@/shared/redux/api/baseApi'
import { IconButton } from '@/shared/ui/icon-button/icon-button'
import { Geolocation } from '@/widgets/geolocation'

import { HeaderDesktopCatalog } from './header-desktop-catalog'
import { HeaderDesktopDropdown } from './header-desktop-dropdown'
import { HeaderDesktopSearch } from './header-desktop-search'
import { UserPopup } from './user-popup'

export type DNSSupportData = {
  data: {
    phone: string
    work: string
  }
}

export const HeaderDesktop = () => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false)
  const [catalogOpen, setCatalogOpen] = useState<boolean>(false)
  const [scrollTop, setScrollTop] = useState<number>(0)
  const [phone, setPhone] = useState('8-800-77-07-999')
  const [workHours, setWorkHours] = useState('(с 03:00 до 22:00)')
  const { data } = useGetMenuHeaderQuery()

  const refDropdown = useOutsideClick(() => {
    setDropdownOpen(false)
  })

  const refCatalog = useOutsideClick(() => {
    setCatalogOpen(false)
  })

  const handlerClickCatalogOpen = () => {
    setCatalogOpen(prevState => !prevState)
  }

  useEffect(() => {
    if (data) {
      const headerData = data.data
      if (headerData.phone != phone || headerData.work != workHours) {
        setPhone(headerData.phone)
        setWorkHours(headerData.work)
      }
    }
  }, [data, phone, workHours])

  const handlerClickDropdownOpen = () => setDropdownOpen(prevState => !prevState)

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const classesDropdownContainer = clsx('dropdown', { 'dropdown-open': dropdownOpen })

  const classesSvgArrow = clsx(
    'header-top-menu__arrow-svg absolute right-[-15px] top-[3px] transition-[all_200ms_0ms] ease-out',
    { 'rotate-180 transition-[all_200ms_ease-out_0ms]': dropdownOpen },
  )

  const classesScrollHeader = clsx(
    'header-bottom box-content flex h-24 items-center bg-white transition-[all_200ms_ease-out_0.1s] text-sm shadow-sm md:pl-[10px] md:pr-[10px] lg:pl-[10px] lg:pr-[10px]',
    { 'fixed left-0 top-0 right-0': scrollTop > 49 },
  )

  const classesSvgArrowCatalog = clsx('h-[20px] w-[20px] transition-[all_200ms_0ms] ease-out', {
    'rotate-180 transition-[all_200ms_ease-out_0ms]': catalogOpen,
  })

  const classesCatalogMenu = clsx(
    'catalog-menu min-w-[960px] absolute top-[66px] z-[1002] flex max-w-[1180px] rounded-xl bg-white shadow-[rgba(0,0,0,0.1)_0px_0px_0px_calc(100*(1vh-1vmin+1vw))] transition-[all_200ms_0ms] ease-out',
    { hidden: !catalogOpen },
  )

  return (
    <div className='header-desktop hidden lg:block'>
      <div className='header-top w-full border-none bg-white leading-[21px] text-[#4e4e4e] xl:pl-2.5 xl:pr-2.5'>
        <div className='header-top__container mx-auto my-0 box-content flex min-h-[75%] max-w-[1380px] flex-nowrap justify-between pb-2 pl-0 pt-5 lg:w-[960px] xl:w-full'>
          <div className='header-top-menu flex flex-row'>
            <ul className='header-top-menu__common-list mb-0 ml-0 mr-auto mt-0 flex grow whitespace-nowrap p-0'>
              <li className='first:mr-3 lg:mr-5 lg:w-[165px] xl:w-[270px]'>
                <Geolocation />
              </li>
              <li className='mr-5 lg:mr-3'>
                <Link to='#' className='header-top-menu__common-link hover:text-orange-500'>
                  Акции
                  <TbPointFilled className='header-top-menu__dot-svg ml-1 mr-1 inline-block text-orange-500' />
                </Link>
              </li>
              <li className='mr-3 xl:mr-5'>
                <Link to='/stores' className='header-top-menu__common-link hover:text-orange-500'>
                  Магазины
                </Link>
              </li>
              <li className='mr-3 xl:mr-5'>
                <Link to='#' className='header-top-menu__common-link hover:text-orange-500'>
                  Доставка
                </Link>
              </li>
              <li className='mr-3 pr-[15px] xl:mr-5'>
                <div className={classesDropdownContainer} ref={refDropdown}>
                  <div
                    onClick={handlerClickDropdownOpen}
                    tabIndex={0}
                    role='button'
                    className='header-top-menu__common-link cursor-pointer select-none hover:text-orange-500'
                  >
                    Покупателям
                    <IoIosArrowDown className={classesSvgArrow} />
                  </div>
                  <HeaderDesktopDropdown open={dropdownOpen} />
                </div>
              </li>
              <li className='mr-3 xl:mr-5'>
                <Link to='#' className='header-top-menu__common-link hover:text-orange-500'>
                  Юридическим лицам
                </Link>
              </li>
              <li className='mr-3 xl:mr-5'>
                <Link to='#' className='header-top-menu__common-link hover:text-orange-500'>
                  Клуб DNS
                </Link>
              </li>
              <li className='mr-3 xl:mr-5'>
                <Link to='#' className='header-top-menu__common-link hover:text-orange-500'>
                  Вакансии
                </Link>
              </li>
            </ul>
          </div>
          <ul className='header-top-menu__contact whitespace-nowrap pl-2'>
            <li>
              <Link to='#' className='header-top-menu__common-link'>
                <div className='tooltip tooltip-bottom' data-tip={workHours}>
                  <a href={`tel:${phone}`}>{phone}</a>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <nav className={classesScrollHeader}>
        <div className='header-bottom__container relative mx-auto my-0 box-content flex w-full max-w-[1380px] items-center justify-start lg:w-[960px] xl:w-full'>
          <div
            ref={refCatalog}
            className='header-bottom__btn-catalog relative float-left box-content flex max-h-16 items-center rounded-xl bg-gradient-to-b from-[#ffa218] to-[#fc8507] pr-3 text-left'
          >
            <Link
              to='/'
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
            </Link>
            <div
              onClick={handlerClickCatalogOpen}
              className='header-bottom__catalog visible mb-0 ml-5 flex cursor-pointer flex-row rounded-lg bg-white bg-opacity-15 pb-2.5 pl-5 pr-4 pt-2.5 text-center font-bold text-white shadow-md hover:bg-opacity-20'
            >
              <span className='header-bottom__catalog-title mr-2 select-none'>Каталог</span>
              <IoIosArrowDown className={classesSvgArrowCatalog} />
            </div>
            <div className={classesCatalogMenu}>
              <HeaderDesktopCatalog />
            </div>
          </div>
          <HeaderDesktopSearch />
          <div className='header-bottom__nav-wrapper flex h-full'>
            <div className='buttons flex'>
              <IconButton title={'Сравнение'} href={'#'} icon={<BsBarChartLine />} counter={2} />
              <IconButton title={'Избранное'} href={'/profile-wishlist'} icon={<BsHeart />} />
              <IconButton
                title={'Корзина'}
                href={'/cart'}
                icon={<BsCart3 />}
                isBold
                counter={5}
                sum={13550}
              />
              <UserPopup />
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
