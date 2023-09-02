import { Button } from '../components'

const LoginPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <div className="flex gap-4 flex-col">
        <Button>Login</Button>
        <Button intent="secondary">Sign up</Button>
      </div>
    </div>
  )
}

export default LoginPage
