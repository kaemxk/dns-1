import { FC, useState } from 'react'
import { BsPersonCircle } from 'react-icons/bs'

import { IconButton } from '@/shared/ui/icon-button/icon-button'

import { Popup } from './popup'

export const UserPopup: FC = () => {
  const [popupOpen, setPopupOpen] = useState<boolean>(false)
  const [popupClosed, setPopupClosed] = useState<boolean>(false)

  const animateClosePopup = () => {
    setPopupClosed(true)

    const closeTimer = setTimeout(() => {
      setPopupOpen(false)
      clearTimeout(closeTimer)
    }, 300)
  }

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
      {popupOpen && <Popup popupClosed={popupClosed} />}
    </div>
  )
}
