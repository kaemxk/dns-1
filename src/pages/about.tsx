import { FC } from 'react'

import { AboutCompany } from './about/components/about-company'

// добавляйте компоненты под или над <AboutCompany />
const About: FC = () => {
  return (
    <div>
      <div className='mb-3'>
        <h2 className='text-3xl font-bold'>О компании - DNS</h2>
      </div>
      <AboutCompany />
    </div>
  )
}

export default About
