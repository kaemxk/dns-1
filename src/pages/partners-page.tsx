import { FC } from 'react'

import { Partners } from './about/components/partners'

const PartnersPage: FC = () => {
  return (
    <div className='mb-3'>
      <h2 className='text-3xl font-bold'>Сотрудничество</h2>
      <Partners />
    </div>
  )
}

export default PartnersPage
