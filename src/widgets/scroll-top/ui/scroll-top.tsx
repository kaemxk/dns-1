import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { IconContext } from 'react-icons'
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
    ['scroll-top fixed bottom-[108px] right-[24px] z-[1000] flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-xl bg-white opacity-[.88] shadow-[0_0_10px_rgba(0,0,0,.25)] transition-all']:
      true,
    ['hidden']: !scrollY,
  })

  return (
    <IconContext.Provider
      value={{
        className: 'text-[rgb(175,175,175)] w-[22px] h-[22px] transition-all hover:text-[#000]',
      }}
    >
      <div className={classesScrollTop} onClick={handleClickScrollTop}>
        <GoArrowUp />
      </div>
    </IconContext.Provider>
  )
}
