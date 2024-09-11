import '@testing-library/jest-dom'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from './footer'

vi.mock('../footer/footerLogoSection/footerLogoSection.tsx', () => ({
  default: () => <div>FooterLogoSection</div>,
}))
vi.mock('../footer/footerNavSection/footerNavSection.tsx', () => ({
  default: () => <div>FooterNavSection</div>,
}))
vi.mock('../footer/footerLoadIcon/footerLoadIcon.tsx', () => ({
  default: () => <div>FooterLoadIcon</div>,
}))

describe('Footer component', () => {
  it('renders Footer component without errors', () => {
    render(<Footer />)
    expect(screen.getByText('FooterLogoSection')).toBeInTheDocument()
    expect(screen.getByText('FooterNavSection')).toBeInTheDocument()
    expect(screen.getByText('FooterLoadIcon')).toBeInTheDocument()
    expect(
      screen.getByText(
        '© 2002–2024 Компания DNS. Администрация Сайта не несет ответственности за размещаемые Пользователями материалы (в т.ч. информацию и изображения), их содержание и качество.',
      ),
    ).toBeInTheDocument()
  })
})
