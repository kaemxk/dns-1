import '@testing-library/jest-dom'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './footer'

vi.mock('./footerLogoSection.tsx', () => ({
  __esModule: true,
  default: () => <div>FooterLogoSection</div>,
}))

vi.mock('./footerNavSection.tsx', () => ({
  __esModule: true,
  default: () => <div>FooterNavSection</div>,
}))

vi.mock('./footerLoadIcon.tsx', () => ({
  __esModule: true,
  default: () => <div>FooterLoadIcon</div>,
}))

describe('Footer component', () => {
  it('renders FooterLogoSection component', () => {
    render(<Footer />)
    expect(screen.getByText('FooterLogoSection')).toBeInTheDocument()
  })

  it('renders FooterNavSection component', () => {
    render(<Footer />)
    expect(screen.getByText('FooterNavSection')).toBeInTheDocument()
  })

  it('renders FooterLoadIcon component', () => {
    render(<Footer />)
    expect(screen.getByText('FooterLoadIcon')).toBeInTheDocument()
  })

  it('renders the copyright text', () => {
    render(<Footer />)
    expect(
      screen.getByText(
        '© 2002–2024 Компания DNS. Администрация Сайта не несет ответственности за размещаемые Пользователями материалы (в т.ч. информацию и изображения), их содержание и качество.',
      ),
    ).toBeInTheDocument()
  })
})
