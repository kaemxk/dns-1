import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from '@/shared/redux/store'

interface IProviders {
  readonly children: React.ReactNode
}

export const Providers: React.FC<IProviders> = ({ children }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  )
}
