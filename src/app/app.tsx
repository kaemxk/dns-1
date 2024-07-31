import { Provider } from 'react-redux'

import store from './store'

const App = () => (
  <Provider store={store}>
    <div className='text-9xl font-extrabold text-primary'>DNS</div>
  </Provider>
)

export default App
