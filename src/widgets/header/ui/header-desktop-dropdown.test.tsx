import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it } from 'vitest'

import { HeaderDesktopDropdown } from './header-desktop-dropdown'

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
