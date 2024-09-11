import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import FooterNavSection from './footerNavSection'
import { vi } from 'vitest'

const mockFooterInfo = {
  phone: {
    timeFrom: '09:00',
    timeTo: '18:00',
    number: '+1234567890',
  },
  cityName: 'Москва',
  menu: {
    Компания: {
      'О нас': 'https://example.com/about',
      Контакты: 'https://example.com/contact',
    },
    Покупателям: {
      Доставка: 'https://example.com/delivery',
      Возврат: 'https://example.com/return',
    },
  },
  languages: ['ru', 'en'],
}

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockFooterInfo),
  }),
) as unknown as typeof global.fetch

describe('FooterNavSection', () => {
  it('should render loading state initially', () => {
    render(<FooterNavSection />)
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('should render footer info after data is fetched', async () => {
    render(<FooterNavSection />)
    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
      expect(screen.getByText('Компания')).toBeInTheDocument()
      expect(screen.getByText('Покупателям')).toBeInTheDocument()
    })
  })

  it('should show mobile view on small screens', async () => {
    global.innerWidth = 500
    render(<FooterNavSection />)
    await waitFor(() => {
      expect(screen.getByText('Компания')).toBeInTheDocument()
      expect(screen.getByText('Покупателям')).toBeInTheDocument()
    })
  })

  it('should show desktop view on large screens', async () => {
    global.innerWidth = 1200
    render(<FooterNavSection />)
    await waitFor(() => {
      expect(screen.getByText('Компания')).toBeInTheDocument()
      expect(screen.getByText('Покупателям')).toBeInTheDocument()
    })
  })

  it('should toggle company links visibility on button click', async () => {
    render(<FooterNavSection />)
    await waitFor(() => {
      expect(screen.getByText('Компания')).toBeInTheDocument()
    })

    const companyButton = screen.getByText('Компания')
    fireEvent.click(companyButton)

    await waitFor(() => {
      expect(screen.getByText('О нас')).toBeInTheDocument()
      expect(screen.getByText('Контакты')).toBeInTheDocument()
    })
  })

  it('should toggle customer links visibility on button click', async () => {
    render(<FooterNavSection />)
    await waitFor(() => {
      expect(screen.getByText('Покупателям')).toBeInTheDocument()
    })

    const customerButton = screen.getByText('Покупателям')
    fireEvent.click(customerButton)

    await waitFor(() => {
      expect(screen.getByText('Доставка')).toBeInTheDocument()
      expect(screen.getByText('Возврат')).toBeInTheDocument()
    })
  })
})
