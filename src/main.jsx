import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react';
import store from './redux/store.jsx'
import { Provider } from 'react-redux'
import MoneyState from './context/MoneyState.jsx';
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
