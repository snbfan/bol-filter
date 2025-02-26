import { Provider } from 'react-redux';

import { Layout } from './components/Layout';
import { ErrorHandler } from './components/ErrorHandler';
import { store } from './redux';

function App() {
  return (
    <ErrorHandler>
      <Provider store={store}>
        <Layout />
      </Provider>
    </ErrorHandler>
  )
}

export default App;