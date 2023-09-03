import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import './index.css'
import { AuthLayout, RootLayout } from './components'
import { ErrorPage, HomePage, LoginPage, SignupPage } from './pages'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },
    {
      path: '/auth',
      element: <AuthLayout />,
      children: [
        { index: true, element: <Navigate replace to="/auth/login" /> },
        { path: 'signup', element: <SignupPage /> },
        { path: 'login', element: <LoginPage /> },
      ],
    },
  ],
  { basename: import.meta.env.DEV ? '/' : '/react-vite-gh-pages/' },
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
