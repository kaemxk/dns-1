import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter, useLocation } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import { TapBar } from './tap-bar'

// Вспомогательный компонент для проверки текущего URL
const CurrentPathDisplay = () => {
  const location = useLocation()
  return <div data-testid='current-path'>{location.pathname}</div>
}

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

  it('изначально стоит состояние active на табе', () => {
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

  const setup = (initialRoute = '/') => {
    return render(
      <MemoryRouter initialEntries={[initialRoute]}>
        <TapBar />
        <CurrentPathDisplay />
      </MemoryRouter>,
    )
  }

  it('навигация по клику на главную работает правильно', () => {
    setup('/stores')
    fireEvent.click(screen.getByText('Главная'))
    const currentPath = screen.getByTestId('current-path')
    expect(currentPath.textContent).toBe('/')
  })

  it('навигация по клику на табы работает правильно', () => {
    setup()
    fireEvent.click(screen.getByText(/магазины/i).parentElement!)
    const currentPath = screen.getByTestId('current-path')
    expect(currentPath.textContent).toBe('/stores')

    fireEvent.click(screen.getByText(/каталог/i).parentElement!)
    const currentPathtwo = screen.getByTestId('current-path')
    expect(currentPathtwo.textContent).toBe('/catalog')

    fireEvent.click(screen.getByText(/корзина/i).parentElement!)
    const currentPathThree = screen.getByTestId('current-path')
    expect(currentPathThree.textContent).toBe('/cart')

    fireEvent.click(screen.getByText(/войти/i).parentElement!)
    const currentPathFour = screen.getByTestId('current-path')
    expect(currentPathFour.textContent).toBe('/profile/menu')
  })
})
