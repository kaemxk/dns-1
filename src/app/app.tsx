import { IconButton } from './widgets'
import { BsBarChartLine, BsCart3, BsHeart, BsPersonCircle } from 'react-icons/bs'

const App = () => (
  <div className='text-9xl font-extrabold text-primary'>
    <div className='header-bottom__nav-wrapper flex h-full'>
      <IconButton title='Сравнение' icon={<BsBarChartLine />} counter={5} />
      <IconButton title='Избранное' icon={<BsHeart />} counter={7} />
      <IconButton title='Корзина' icon={<BsCart3 />} counter={33} sum={11677} />
      <IconButton title='Войти' icon={<BsPersonCircle />} />
    </div>
  </div>
)

export default App
