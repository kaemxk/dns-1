import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect, vi } from 'vitest'

import { TopBlock } from '@/pages/main-page/components/top-block'
import { useResize } from '@/shared/hooks/use-resize'

import { personalItemBlock } from '../model/features-block'


vi.mock('@/shared/hooks/use-resize', () => ({
  useResize: vi.fn(),
}))

describe('TopBlock', () => {
  it('renders TopBlockMobile when window width is less than 992', () => {
    vi.mocked(useResize).mockReturnValue(500)

    render(
      <MemoryRouter>
        <TopBlock />
      </MemoryRouter>,
    )

    // Проверяем, что мобильная версия рендерится
    expect(screen.getByText('Как выбрать держатель для смартфона')).to.exist
    expect(screen.queryByText('Каталог')).to.exist

    // Проверяем, что кнопки рендерятся
    personalItemBlock.buttons.forEach(button => {
      expect(screen.getByText(button.text)).to.exist
    })
  })

  it('renders TopBlockDesktop when window width is 992 or more', () => {
    vi.mocked(useResize).mockReturnValue(1024)

    render(
      <MemoryRouter>
        <TopBlock />
      </MemoryRouter>,
    )

    // Предположим, что в десктопной версии есть уникальный текст "Готовые сборки"
    expect(screen.getByText('Готовые сборки')).to.exist
  })

  it('switches between mobile and desktop versions based on window width', () => {
    const { rerender } = render(
      <MemoryRouter>
        <TopBlock />
      </MemoryRouter>,
    )

    // Устанавливаем ширину для мобильной версии
    vi.mocked(useResize).mockReturnValue(500)
    rerender(
      <MemoryRouter>
        <TopBlock />
      </MemoryRouter>,
    )
    expect(screen.getByText('Как выбрать держатель для смартфона')).to.exist

    // Устанавливаем ширину для десктопной версии
    vi.mocked(useResize).mockReturnValue(1024)
    rerender(
      <MemoryRouter>
        <TopBlock />
      </MemoryRouter>,
    )
    expect(screen.getByText('Готовые сборки')).to.exist
  })
})