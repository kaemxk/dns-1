import { render, screen } from '@testing-library/react'
import FooterLogoSection from './footerLogoSection'
import '@testing-library/jest-dom'

describe('FooterLogoSection', () => {
  test('renders all logos with links', () => {
    render(<FooterLogoSection />)

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(4)

    links.forEach(link => {
      expect(link.firstChild).toHaveStyle({
        backgroundImage: expect.stringContaining('url('),
      })
    })
  })
})
