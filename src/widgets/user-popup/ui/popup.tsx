import { FC } from 'react'

import { PopupStageOne } from './popup-stage-1'
import { PopupStageTwo } from './popup-stage-2'

export const Popup: FC = () => {
  return (
    <>
      <PopupStageOne />
      <PopupStageTwo />
    </>
  )
}
