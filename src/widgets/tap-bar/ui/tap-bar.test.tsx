import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import { TapBar } from './tap-bar'

describe('tap-bar component', () => {
  it('все табы отображаются', () => {
    render(
      <MemoryRouter>
        <TapBar />
      </MemoryRouter>,
    )

    expect(screen.getByText(/главная/i)).not.toBeNull()
    expect(screen.getByText(/магазины/i)).not.toBeNull()
    expect(screen.getByText(/каталог/i)).not.toBeNull()
    expect(screen.getByText(/корзина/i)).not.toBeNull()
    expect(screen.getByText(/войти/i)).not.toBeNull()
  })

  it('иззначально стоит состояние active на табе', () => {
    render(
      <MemoryRouter>
        <TapBar />
      </MemoryRouter>,
    )

    const mainTab = screen.getByText(/главная/i).closest('a')
    const storesTab = screen.getByText(/магазины/i).closest('a')

    // Изначально таб активен
    expect(mainTab?.classList.contains('text-primary')).toBe(true)
    expect(storesTab?.classList.contains('text-primary')).toBe(false)
  })

  it('по клику таб становится active', () => {
    render(
      <MemoryRouter>
        <TapBar />
      </MemoryRouter>,
    )

    const mainTab = screen.getByText(/главная/i).parentElement!
    const storesTab = screen.getByText(/магазины/i).parentElement!

    fireEvent.click(storesTab)
    expect(storesTab.classList.contains('text-primary')).toBe(true)
    expect(mainTab?.classList.contains('text-primary')).toBe(false)
  })

  it('навигация работает правильно', () => {
    render(
      <MemoryRouter>
        <TapBar />
      </MemoryRouter>,
    )

    expect(
      screen
        .getByText(/главная/i)
        .closest('a')!
        .getAttribute('href'),
    ).toBe('/')
    expect(
      screen
        .getByText(/магазины/i)
        .closest('a')!
        .getAttribute('href'),
    ).toBe('/stores')
    expect(
      screen
        .getByText(/каталог/i)
        .closest('a')!
        .getAttribute('href'),
    ).toBe('/catalog')
    expect(
      screen
        .getByText(/корзина/i)
        .closest('a')!
        .getAttribute('href'),
    ).toBe('/cart')
    expect(screen.getByText(/войти/i).closest('a')!.getAttribute('href')).toBe('/profile/menu')
  })
})
