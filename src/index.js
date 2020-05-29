import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom' ;
import { Provider } from 'react-redux';
import { persistGate } from 'redux-persist/integration/react';
import './index.css';
import App from './App';
import {store, persistor} from './redux/store'

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
      <persistGate persistor={persistor}>
      <App />
      </persistGate>
    </BrowserRouter>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

