import { FC } from 'react'

import { Career } from './about/components/career'

const CareerPage: FC = () => {
  return (
    <div
      className='mb-6 min-h-[393px] max-w-[1060px] rounded-lg p-6'
      style={{ boxShadow: '0 1px 2px #0000002e' }}
    >
      <Career></Career>
    </div>
  )
}

export default CareerPage
