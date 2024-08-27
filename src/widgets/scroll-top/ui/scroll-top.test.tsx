import { render, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { ScrollTop } from './scroll-top'

describe('ScrollTop', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'scrollTo', {
      value: vi.fn(),
      writable: true,
    })
  })

  afterAll(() => {
    Object.defineProperty(window, 'scrollTo', {
      value: vi.fn(),
      writable: true,
    })
  })

  it('отображается правильно', () => {
    render(<ScrollTop />)
    const button = document.querySelector('.scroll-top')
    expect(button).toBeTruthy()
  })

  it('скрыт, когда страница находится вверху', () => {
    render(<ScrollTop />)
    const button = document.querySelector('.scroll-top')
    expect(button?.classList.contains('hidden')).toBe(true)
  })

  it('становится видимым, когда страница прокручивается вниз', () => {
    render(<ScrollTop />)
    fireEvent.scroll(window, { target: { scrollY: 500 } })
    const button = document.querySelector('.scroll-top')
    expect(button).not.toBeNull()

    if (button) {
      const computedStyle = window.getComputedStyle(button)
      expect(computedStyle.display).not.toBe('none')
    }
  })

  it('прокручивает страницу вверх при нажатии', () => {
    render(<ScrollTop />)
    fireEvent.scroll(window, { target: { scrollY: 500 } })
    const button = document.querySelector('.scroll-top')
    expect(button).not.toBeNull()

    if (button) {
      fireEvent.click(button)
      expect(window.scrollTo).toHaveBeenCalledWith(0, 0)
    }
  })
})
