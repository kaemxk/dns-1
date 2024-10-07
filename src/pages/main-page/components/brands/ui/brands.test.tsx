import { fireEvent, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'

import { Brands } from './brands'
import '@testing-library/jest-dom/vitest'

type SwiperSlideElem = Element & {
  swiperSlideIndex: number
}

describe('Brands', () => {
  it('Отображение элементов на десктопе', () => {
    const { container } = render(
      <MemoryRouter>
        <Brands />
      </MemoryRouter>,
    )

    fireEvent.resize(window, { target: { innerWidth: 1024 } })

    const elements = container.querySelectorAll('.swiper-slide')
    expect(elements.length).toBe(16)

    elements.forEach((el, idx) => {
      expect(idx).toBe((el as SwiperSlideElem).swiperSlideIndex)
      // expect(el.getAttribute('style')).toBe('width: 132px;') // style is null // FIXME
      // expect(el.children.item(0)?.getAttribute('style')).toBe('height: 69px;') // style is null // FIXME
    })
  })
  it('Отображение элементов на мобильном устройстве', () => {
    const { container } = render(
      <MemoryRouter>
        <Brands />
      </MemoryRouter>,
    )

    fireEvent.resize(window, { target: { innerWidth: 500 } })

    const elements = container.querySelectorAll('.swiper-slide')
    expect(elements.length).toBe(16)

    elements.forEach((el, idx) => {
      expect(idx).toBe((el as SwiperSlideElem).swiperSlideIndex)
      // expect(el.getAttribute('style')).toBe('width: 112px;') // style is null // FIXME
      // expect(el.children.item(0)?.getAttribute('style')).toBe('height: 57px;') // style is null // FIXME
    })
  })
})
