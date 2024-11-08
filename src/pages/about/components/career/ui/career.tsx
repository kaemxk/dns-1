import { FC } from 'react'

import CareerIntro from './career-intro'
import CareerOutro from './career-outro'
import CareerVacancies from './career-vacancies'

const Career: FC = () => {
  return (
    <div className='mx-0 my-auto'>
      <CareerIntro />
      <CareerVacancies />
      <CareerOutro />
    </div>
  )
}

export default Career
