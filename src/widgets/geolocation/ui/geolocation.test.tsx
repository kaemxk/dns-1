import { describe, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Geolocation } from './geolocation'
import { Provider } from 'react-redux'
import { store } from '@/shared/redux'
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

const renderGeolocation = () => {
  return render(
    <Provider store={store}>
      <MemoryRouter>
        <Geolocation />
      </MemoryRouter>
    </Provider>,
  )
}

const mockSlice = () => {
  vi.spyOn(slice, 'useGetCityQuery').mockReturnValue({
    data: 'Смоленск',
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

describe('Geolocation', () => {
  it('Рендерим компонент без модального окна', () => {
    renderGeolocation()
    expect(screen.getByTestId('icon-location')).not.toBeNull()
    expect(screen.getByTestId('city')).not.toBeNull()
    expect(screen.queryByTestId('modal')).toBeNull()
  })

  it('Отображение названия города из localstorage', () => {
    vi.spyOn(window.localStorage, 'getItem').mockReturnValue('Владивосток')
    renderGeolocation()
    expect(screen.getByText(/Владивосток/i))
  })

  it('Отображение названия города по умолчанию', () => {
    vi.spyOn(window.localStorage, 'getItem').mockReturnValue(null)
    renderGeolocation()
    expect(screen.getByText(/Москва/i))
  })

  it('Рендеринг компонента с модальным окном', () => {
    mockSlice()
    renderGeolocation()
    expect(screen.getByTestId('icon-location')).not.toBeNull()
    expect(screen.getByTestId('city')).not.toBeNull()
    expect(screen.getByTestId('modal')).not.toBeNull()
    expect(screen.getByTestId('modal-btn-success')).not.toBeNull()
    expect(screen.getByTestId('modal-btn-cancel')).not.toBeNull()
  })

  it('Проверяем работу кнопки "Все верно"', () => {
    mockSlice()
    renderGeolocation()
    const city = screen.getByTestId('city').innerHTML
    expect(screen.getByText(city))
    expect(screen.getByTestId('modal')).not.toBeNull()
    const btnSuccess = screen.getByTestId('modal-btn-success')
    fireEvent.click(btnSuccess)
    expect(screen.queryByTestId('modal')).toBeNull()
    expect(screen.getByText(/Смоленск/i))
  })

  it('проверяем работу кнопки "Сменить город"', () => {
    mockSlice()
    renderGeolocation()
    const city = screen.getByTestId('city').innerHTML
    expect(screen.getByText(city))
    expect(screen.getByTestId('modal')).not.toBeNull()
    const btnCancel = screen.getByTestId('modal-btn-cancel')
    fireEvent.click(btnCancel)
    expect(screen.queryByTestId('modal')).toBeNull()
    expect(screen.getByText(city))
  })
})
