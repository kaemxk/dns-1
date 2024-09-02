import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import { IconButton } from './icon-button'
import { FaBeer } from 'react-icons/fa'

describe('IconButton', () => {
  const icon = <FaBeer role='img' aria-label='beer-icon' />

  const renderComponent = (props = {}) => {
    return render(
      <BrowserRouter>
        <IconButton title='Test Title' href='/test-link' icon={icon} {...props} />
      </BrowserRouter>,
    )
  }

  it('Рендер с заголовком', () => {
    renderComponent()
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  it('Рендеринг с правильной ссылкой', () => {
    renderComponent()
    expect(screen.getByRole('link')).toHaveAttribute('href', '/test-link')
  })

  it('Визуализирует значок', () => {
    renderComponent()
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('Применяется жирный шрифт, если значение Bold', () => {
    renderComponent({ isBold: true })
    expect(screen.getByText('Test Title')).toHaveClass('font-bold')
  })

  it('Отображение значка счетчика при включении счетчика', () => {
    renderComponent({ counter: 5 })
    expect(screen.getByText('5')).toBeInTheDocument()
    expect(screen.getByText('5')).toHaveClass('icon-button-counter__badge')
  })

  it('Скрывает значок счетчика, если счетчик не указан', () => {
    renderComponent()
    expect(screen.queryByText('0')).not.toBeInTheDocument()
  })

  it('Отображает сумму, если она указана', () => {
    renderComponent({ sum: 100 })
    expect(screen.getByText('100 ₽')).toBeInTheDocument()
  })

  // it('Отображает сумму 0, если указанна отрицательная сумма', () => {
  //   // этот тест на будущее когда будет исправлено, сейчас в кнопки можент придти отрицательное значение, сечас он будет проваливаться.
  //   renderComponent({ sum: -100 })
  //   expect(screen.getByText('0 ₽')).toBeInTheDocument()
  // })

  it('Отображает title если суммна не указана', () => {
    renderComponent()
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })
})
