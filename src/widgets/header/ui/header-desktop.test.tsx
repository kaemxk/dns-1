import { describe, it, expect } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { HeaderDesktop } from './header-desktop'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import * as slice from '../../../shared/redux/api/configSlice'
import * as baseApi from '../../../shared/redux/api/baseApi'
import {
  QueryActionCreatorResult,
  QueryDefinition,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query'
import { CatalogItem } from './header-desktop-catalog'
import { store } from '@/shared/redux'

const mockBaseApi = () => {
  vi.spyOn(baseApi, 'useGetCatalogMenuQuery').mockReturnValue({
    data: undefined,
    isLoading: false,
    refetch: function (): QueryActionCreatorResult<
      QueryDefinition<
        void,
        BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, object, FetchBaseQueryMeta>,
        never,
        CatalogItem[],
        'serviceAPI'
      >
    > {
      throw new Error('Function not implemented.')
    },
  })
}

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

const renderDesktop = () =>
  render(
    <Provider store={store}>
      <MemoryRouter>
        <HeaderDesktop />
      </MemoryRouter>
    </Provider>,
  )

describe('HeaderDesktop', () => {
  it('Отображение ссылок и кнопок', () => {
    mockBaseApi()
    mockSlice()
    renderDesktop()

    expect(screen.getByText(/Акции/i)).not.toBeNull()
    expect(screen.getByText(/Магазины/i)).not.toBeNull()
    expect(screen.getByText(/Покупателям/i)).not.toBeNull()
    expect(screen.getByText(/Юридическим лицам/i)).not.toBeNull()
    expect(screen.getByText(/Клуб DNS/i)).not.toBeNull()
    expect(screen.getByText(/Вакансии/i)).not.toBeNull()
    expect(screen.getByText(/8-800-77-07-999/i)).not.toBeNull()
    expect(screen.getByText(/Сравнение/i)).not.toBeNull()
    expect(screen.getByText(/Избранное/i)).not.toBeNull()
    expect(screen.getByText(/13550/i)).not.toBeNull()
    expect(screen.getByText(/Войти/i)).not.toBeNull()
  })

  it('При прокрутке scroll больше 50px, header фиксируется сверху страницы', () => {
    mockBaseApi()
    mockSlice()
    renderDesktop()

    const header = document.querySelector('.header-bottom')

    expect(header?.classList).not.toContain('fixed')
    fireEvent.scroll(window, { target: { scrollY: 100 } })
    expect(header?.classList).toContain('fixed')
  })
})
