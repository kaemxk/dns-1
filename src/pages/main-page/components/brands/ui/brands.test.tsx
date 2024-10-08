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
      expect(el.className).includes('w-[132px]')
      expect(el.children.item(0)?.querySelector('div')!.getAttribute('style')).toBe('height: 69px;')
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
      expect(el.className).includes('w-[112px]')
      expect(el.children.item(0)?.querySelector('div')!.getAttribute('style')).toBe('height: 57px;')
    })
  })
})
