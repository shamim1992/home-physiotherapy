import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {persistor, store} from './app/store'
import { PersistGate } from 'redux-persist/integration/react'
import ThemeProvider from './components/ThemeProvider.jsx'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <PersistGate persistor = {persistor}>
    <Provider store={store}>
      <ThemeProvider>
         <App />
      </ThemeProvider>
    </Provider>
  </PersistGate>
)
