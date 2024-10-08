import { FC, useEffect, useState } from 'react'

import { PopupStageOne } from './popup-stage-1'
import { PopupStageTwo } from './popup-stage-2'

interface IUserPopupProps {
  popupClosed: boolean
}

export const UserPopup: FC<IUserPopupProps> = ({ popupClosed }) => {
  const [stageOneDone, setStageOneDone] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => setStageOneDone(true), 60)
  }, [])

  return (
    <>
      <PopupStageOne popupClosed={popupClosed} />
      {stageOneDone && <PopupStageTwo popupClosed={popupClosed} />}
    </>
  )
}
