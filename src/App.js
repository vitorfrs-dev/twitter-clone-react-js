import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { toast } from 'react-toastify';
import GlobalStyle from './styles/globals';
import Background from './components/Background';
import 'react-toastify/dist/ReactToastify.css';

import Routes from './routes';

import { store, persistor } from './store';

const App = () => {
  toast.configure({ autoClose: 4000 });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Background>
          <GlobalStyle />
          <Routes />
        </Background>
      </PersistGate>
    </Provider>
  );
};

export default App;
