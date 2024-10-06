import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import FooterLoadIcon from './footerLoadIcon'

describe('FooterLoadIcon component', () => {
  it('renders FooterLoadIcon component without errors', () => {
    render(<FooterLoadIcon />)

    const container = screen.getByTestId('footer-load-icon')
    expect(container).toBeInTheDocument()

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(4)

    const divs = screen.getAllByTestId('footer-load-icon-item')
    expect(divs).toHaveLength(4)
  })
})
