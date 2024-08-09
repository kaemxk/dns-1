import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg'
import { GrCatalog } from 'react-icons/gr'
import { IoHomeOutline } from 'react-icons/io5'
import { LiaStoreSolid } from 'react-icons/lia'
import { MdOutlineLocalGroceryStore } from 'react-icons/md'
import clsx from 'clsx'

export const TapBar = () => {
  const [activeTab, setActiveTab] = useState<string>('home')

  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
  }

  const linkClass = (tab: string) =>
    clsx('flex flex-col items-center', activeTab === tab && 'text-primary')

  return (
    <nav className='bg-white fixed bottom-0 left-0 h-[50px] w-screen shadow-[0_-2px_8px_rgba(0,0,0,0.15)] lg:hidden'>
      <ul className='flex h-full items-center justify-around'>
        <li>
          <Link to='/' className={linkClass('home')} onClick={() => handleTabClick('home')}>
            <IoHomeOutline />
            <span className='text-[12px] font-normal leading-[14px]'>Главная</span>
          </Link>
        </li>
        <li>
          <Link
            to='/stores'
            className={linkClass('stores')}
            onClick={() => handleTabClick('stores')}
          >
            <LiaStoreSolid />
            <span className='text-[12px] font-normal leading-[14px]'>Магазины</span>
          </Link>
        </li>
        <li>
          <Link
            to='/catalog'
            className={linkClass('catalog')}
            onClick={() => handleTabClick('catalog')}
          >
            <GrCatalog />
            <span className='text-[12px] font-normal leading-[14px]'>Каталог</span>
          </Link>
        </li>
        <li>
          <Link to='/cart' className={linkClass('cart')} onClick={() => handleTabClick('cart')}>
            <MdOutlineLocalGroceryStore />
            <span className='text-[12px] font-normal leading-[14px]'>Корзина</span>
          </Link>
        </li>
        <li>
          <Link
            to='/profile/menu'
            className={linkClass('profile')}
            onClick={() => handleTabClick('profile')}
          >
            <CgProfile />
            <span className='text-[12px] font-normal leading-[14px]'>Войти</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
