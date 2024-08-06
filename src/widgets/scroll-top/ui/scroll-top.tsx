import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { GoArrowUp } from 'react-icons/go'

export const ScrollTop = () => {
  const [scrollY, setScrollY] = useState<number>(0)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    setScrollY(window.scrollY)
  }

  const handleClickScrollTop = () => {
    if (scrollY) {
      window.scrollTo(0, 0)
    }
  }

  const classesScrollTop = clsx({
    ['scroll-top fixed bottom-[108px] right-[24px] z-50 flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-xl bg-white opacity-[.88] shadow-[0_0_10px_rgba(0,0,0,.25)] transition-all']:
      true,
    ['hidden']: scrollY === 0 ? true : false,
  })

  return (
    <div className={classesScrollTop} onClick={handleClickScrollTop}>
      <GoArrowUp className='h-[22px] w-[22px] text-[rgb(175,175,175)] transition-all hover:text-[#000]' />
    </div>
  )
}
