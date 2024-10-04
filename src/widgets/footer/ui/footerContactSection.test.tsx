import { render, screen } from '@testing-library/react'

import FooterContactSection from './footerContactSection'
import '@testing-library/jest-dom'

describe('FooterContactSection', () => {
  test('renders FooterContactSection component', () => {
    render(
      <FooterContactSection
        phone={{ timeFrom: '09:00', timeTo: '18:00', number: '+1234567890' }}
        cityName='Moscow'
      />,
    )

    expect(screen.getByText('+1234567890')).toBeInTheDocument()
    expect(screen.getByText(/с 09:00 до 18:00/i)).toBeInTheDocument()
    expect(screen.getByText(/Адреса магазинов в г. Moscow/i)).toBeInTheDocument()
  })
})
