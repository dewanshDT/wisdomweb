import { Helmet } from 'react-helmet'
import { Button, Field } from '../components'

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Sign In: Wisdom Circle</title>
        <meta name="description" content="Wisdom Circle sign in page" />
      </Helmet>
      <div className="flex flex-col justify-center items-center h-full w-full">
        <div className="w-full max-w-sm gap-4 flex flex-col">
          <div className="gap-4">
            <h3 className="font-bold text-2xl w-full text-neutral-black">
              Sign In to WisdomCircle
            </h3>
            <p className="text-neutral-grey">
              Don’t have an account?{' '}
              <a href="/auth/signup" className="font-semibold">
                Sign Up
              </a>
            </p>
          </div>
          <form className="flex gap-4 w-full flex-col">
            <div className="gap-4 flex flex-col w-full">
              <Field placeholder="Email Address" required type="email" />

              <div className="flex flex-col gap-2 w-full">
                <Field
                  required
                  placeholder="Password"
                  autoComplete="current-password"
                  type="password"
                />
                <a href="/forgot" className="font-semibold ml-auto">
                  Forgot Password
                </a>
              </div>
            </div>
            <Button>Sign Up</Button>
          </form>
        </div>
      </div>
    </>
  )
}

export default LoginPage
