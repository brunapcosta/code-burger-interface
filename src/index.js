import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import { UserProvider } from './hooks/UserContext'
import Routtes from './routes/routes'
import GlobalStyles from './Styles/globalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <UserProvider>
      <Routtes />
    </UserProvider>
    <ToastContainer autoClose={2000} theme='colored' />
    <GlobalStyles />
  </>
)
