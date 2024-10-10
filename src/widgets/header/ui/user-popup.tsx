import { FC, useEffect, useState } from 'react'
import { BsPersonCircle } from 'react-icons/bs'

import { IconButton } from '@/shared/ui/icon-button/icon-button'

import { MainPopup } from './main-popup'
import { MinimizedPopup } from './minimized-popup'

export const UserPopup: FC = () => {
  const [popupOpen, setPopupOpen] = useState<boolean>(false)
  const [popupClosed, setPopupClosed] = useState<boolean>(false)
  const [stageOneDone, setStageOneDone] = useState<boolean>(false)

  const animateClosePopup = () => {
    setPopupClosed(true)

    const closeTimer = setTimeout(() => {
      setPopupOpen(false)
      clearTimeout(closeTimer)
    }, 300)
  }

  useEffect(() => {
    setTimeout(() => setStageOneDone(true), 60)
  }, [stageOneDone])

  return (
    <div
      className='relative'
      onMouseEnter={() => {
        setPopupOpen(true)
        setPopupClosed(false)
      }}
      onMouseLeave={animateClosePopup}
    >
      <IconButton title={'Войти'} href={'/profile/menu'} icon={<BsPersonCircle />} />
      {popupOpen && <MinimizedPopup popupClosed={popupClosed} />}
      {popupOpen && stageOneDone && <MainPopup popupClosed={popupClosed} />}
    </div>
  )
}
