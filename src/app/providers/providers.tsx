import { Provider } from 'react-redux'

import { store } from '@/shared/redux/store'

interface IProviders {
  readonly children: JSX.Element
}

export const Providers: React.FC<IProviders> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}
