import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './Routes/router'
import AuthProvider from './contexts/AuthProvider'
import { Provider } from 'react-redux'
import { store } from './store/store'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </Provider>
  </StrictMode>,
)
