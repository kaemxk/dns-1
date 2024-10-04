import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it } from 'vitest'

import { HeaderDesktopSearch } from './header-desktop-search'

const renderSearch = () =>
  render(
    <MemoryRouter>
      <HeaderDesktopSearch />
    </MemoryRouter>,
  )

describe('HeaderDesktopSearch', () => {
  it('Отображение элементов', () => {
    renderSearch()

    expect(screen.getByTestId('search')).not.toBeNull()
    expect(screen.getByTestId('btn-clear')).not.toBeNull()
    expect(screen.getByTestId('icon-search')).not.toBeNull()
    expect(screen.getByTestId('overlay')).not.toBeNull()
  })

  it('Отображение overlay и его закрытие', () => {
    renderSearch()

    const input = screen.getByTestId('search')
    const overlay = screen.getByTestId('overlay')

    expect(overlay.classList).not.toContain('fixed')
    fireEvent.click(input)
    expect(overlay.classList).toContain('fixed')
    fireEvent.blur(input)
    expect(overlay.classList).not.toContain('fixed')
  })

  it('Ввод текста input и очистка input по кнопке', () => {
    renderSearch()

    const input: HTMLInputElement = screen.getByTestId('search')
    const btnClear = screen.getByTestId('btn-clear')

    expect(input.value).toBe('')
    fireEvent.input(input, { target: { value: 'Проверка' } })
    expect(input.value).toBe('Проверка')
    fireEvent.click(btnClear)
    expect(input.value).toBe('')
  })
})
