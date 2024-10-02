import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { ActualOffers } from './actual-offers'
import { offers } from '../model/offers'
import { MemoryRouter } from 'react-router-dom'

vi.mock('@/shared/hooks/use-resize', () => ({
  useResize: vi.fn(),
}))

describe('ActualOffers', () => {
  it('renders correctly on mobile', () => {
    render(
      <MemoryRouter>
        <ActualOffers />
      </MemoryRouter>,
    )
    fireEvent.resize(window, { target: { innerWidth: 500 } })

    offers.forEach(offer => {
      expect(screen.getByText(offer.text)).toBeTruthy()
    })
  })

  it('renders correctly on desktop', () => {
    render(
      <MemoryRouter>
        <ActualOffers />
      </MemoryRouter>,
    )
    fireEvent.resize(window, { target: { innerWidth: 1024 } })

    offers.forEach(offer => {
      expect(screen.getByText(offer.text)).toBeTruthy()
    })
  })

  it('updates offers on window resize', () => {
    render(
      <MemoryRouter>
        <ActualOffers />
      </MemoryRouter>,
    )

    fireEvent.resize(window, { target: { innerWidth: 1024 } })
    offers.forEach(offer => {
      expect(screen.getByText(offer.text)).toBeTruthy()
    })

    fireEvent.resize(window, { target: { innerWidth: 500 } })
    offers.forEach(offer => {
      expect(screen.getByText(offer.text)).toBeTruthy()
    })
  })
})
