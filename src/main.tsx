import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import "./index.css"
import { RootLayout } from "./components"
import { ErrorPage, HomePage, LoginPage, SignupPage } from "./pages"

const router = createBrowserRouter([
  {
    path: "/",
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
    path: "/auth",
    children: [
      { index: true, element: <Navigate replace to="/auth/login" /> },
      { path: "signup", element: <SignupPage /> },
      { path: "login", element: <LoginPage /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
