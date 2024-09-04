import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HeaderDesktopDropdown } from './header-desktop-dropdown'
import { MemoryRouter } from 'react-router-dom'

describe('HeaderDesktopDropdown', () => {
  it('Отображение ссылок', () => {
    render(
      <MemoryRouter>
        <HeaderDesktopDropdown open={true} />
      </MemoryRouter>,
    )

    expect(screen.getByText(/Доставка/i)).not.toBeNull()
    expect(screen.getByText(/Бонусная программа/i)).not.toBeNull()
    expect(screen.getByText(/Узнать статус заказа/i)).not.toBeNull()
    expect(screen.getByText(/Обмен, возврат, гарантия/i)).not.toBeNull()
    expect(screen.getByText(/Кредиты/i)).not.toBeNull()
    expect(screen.getByText(/Сервисные центры/i)).not.toBeNull()
  })
})
