import TopBlockDesktop from '../ui/top-block-desktop'
import TopBlockMobile from '../ui/top-block-mobile'
import { useResize } from '../../../shared/hooks/use-resize'

export const TopBlock = () => {
  const windowWidth = useResize()

  return windowWidth < 992 ? <TopBlockMobile /> : <TopBlockDesktop />
}

export default TopBlock
