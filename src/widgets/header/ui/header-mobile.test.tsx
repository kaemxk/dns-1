import { describe, it, expect } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { HeaderMobile } from './header-mobile'
import { MemoryRouter } from 'react-router-dom'
import * as slice from '../../../shared/redux/api/configSlice'
import {
  QueryActionCreatorResult,
  QueryDefinition,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query'

const mockSlice = () => {
  vi.spyOn(slice, 'useGetCityQuery').mockReturnValue({
    data: undefined,
    isLoading: false,
    refetch: function (): QueryActionCreatorResult<
      QueryDefinition<
        { lat: number; lon: number },
        BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, object, FetchBaseQueryMeta>,
        never,
        string,
        'configApi'
      >
    > {
      throw new Error('Function not implemented.')
    },
  })
}

const renderMobile = () =>
  render(
    <MemoryRouter>
      <HeaderMobile />
    </MemoryRouter>,
  )

describe('HeaderMobile', () => {
  it('Отображение элементов когда input не в фокусе', () => {
    mockSlice()
    renderMobile()

    const container = document.querySelector('.presearch-mobile')
    expect(container).not.toBeNull()
    expect(container?.classList).not.toContain('fixed')

    const headerLogo = document.querySelector('.header-mobile__logo')
    expect(headerLogo).not.toBeNull()

    const input = document.querySelector('.presearch-mobile__input')
    expect(input).not.toBeNull()

    const iconScan = document.querySelector('.presearch-mobile__icon-scan')
    expect(iconScan).not.toBeNull()

    const iconClear = document.querySelector('.presearch-mobile__icon-clear')
    expect(iconClear).not.toBeNull()
    expect(iconClear?.classList).toContain('hidden')

    const btnCancel = document.querySelector('.presearch-mobile__cancel')
    expect(btnCancel).toBeNull()

    const btnNotification = document.querySelector('.header-mobile__notification-button')
    expect(btnNotification).not.toBeNull()
  })

  it('Отображение элементов когда input в фокусе', () => {
    mockSlice()
    renderMobile()

    const input: HTMLInputElement = screen.getByPlaceholderText('Поиск по сайту')
    expect(input).not.toBeNull()

    fireEvent.focus(input)

    const container = document.querySelector('.presearch-mobile')
    expect(container).not.toBeNull()
    expect(container?.classList).toContain('fixed')

    const headerLogo = document.querySelector('.header-mobile__logo')
    expect(headerLogo).not.toBeNull()

    const iconScan = document.querySelector('.presearch-mobile__icon-scan')
    expect(iconScan).not.toBeNull()

    const iconClear = document.querySelector('.presearch-mobile__icon-clear')
    expect(iconClear).not.toBeNull()
    expect(iconClear?.classList).toContain('hidden')

    const btnCancel = document.querySelector('.presearch-mobile__cancel')
    expect(btnCancel).not.toBeNull()

    const btnNotification = document.querySelector('.header-mobile__notification-button')
    expect(btnNotification).not.toBeNull()
  })

  it('Отображение кнопки clear и очистка input', () => {
    mockSlice()
    renderMobile()

    const input: HTMLInputElement = screen.getByPlaceholderText('Поиск по сайту')
    expect(input).not.toBeNull()

    const iconClear = document.querySelector('.presearch-mobile__icon-clear')
    expect(iconClear).not.toBeNull()
    expect(iconClear?.classList).toContain('hidden')
    const btnClear = screen.getByTestId('btn-clear')

    expect(input.value).toBe('')

    fireEvent.focus(input)
    fireEvent.input(input, { target: { value: 'Проверка' } })
    expect(input.value).toBe('Проверка')

    expect(iconClear?.classList).not.toContain('hidden')

    fireEvent.click(btnClear)

    expect(iconClear?.classList).toContain('hidden')
    expect(input.value).toBe('')
  })

  it('Работа кнопки отмена', () => {
    mockSlice()
    renderMobile()

    const input: HTMLInputElement = screen.getByPlaceholderText('Поиск по сайту')
    expect(input).not.toBeNull()

    fireEvent.focus(input)

    const container = document.querySelector('.presearch-mobile')
    expect(container).not.toBeNull()
    expect(container?.classList).toContain('fixed')

    const btnCancel = screen.getByRole('button')
    expect(btnCancel).not.toBeNull()

    fireEvent.click(btnCancel)

    expect(container?.classList).not.toContain('fixed')
  })
})
