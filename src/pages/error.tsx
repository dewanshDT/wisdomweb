import { useRouteError } from 'react-router'

interface RouteError {
  data: string
  error: {
    message: string
    stack: string
  }
  internal: boolean
  status: number
  statusText: string
}

const ErrorPage = () => {
  const error: RouteError = useRouteError() as RouteError
  console.error(error)

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.error.message}</i>
      </p>
    </div>
  )
}

export default ErrorPage
