import { HeaderDesktop } from './header-desktop'
import { HeaderMobile } from './header-mobile'

export const Header = () => {
  return (
    <header className='relative z-10 mb-0 text-[14px] lg:mb-6'>
      <HeaderDesktop />
      <HeaderMobile />
    </header>
  )
}
