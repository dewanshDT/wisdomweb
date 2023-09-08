import { Helmet } from 'react-helmet'
import { Button, Field } from '../components'
import { Link } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useAuth } from '../api/auth'

interface Inputs {
  email: string
  password: string
}

const LoginPage = () => {
  const { login } = useAuth()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
    login(data.email, data.password)
  }
  return (
    <>
      <Helmet>
        <title>Sign In: Wisdom Circle</title>
        <meta name="description" content="Wisdom Circle sign in page" />
      </Helmet>
      <div className="flex flex-col justify-center p-6 items-center h-full w-full">
        <div className="w-full lg:h-auto h-full lg:max-w-sm sm:max-w-lg gap-4 flex flex-col">
          <div className="gap-4">
            <h3 className="font-bold text-2xl w-full text-neutral-black">
              Sign In to WisdomCircle
            </h3>
            <p className="text-neutral-grey">
              Don't have an account?{' '}
              <Link to="/auth/signup" className="font-semibold">
                Sign Up
              </Link>
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex gap-4 h-full w-full flex-col"
          >
            <div className="gap-4 flex flex-col w-full">
              <Field
                {...register('email', { required: true })}
                placeholder="Email Address"
                type="email"
                error={errors.email && 'this field is required'}
              />

              <div className="flex flex-col gap-2 w-full">
                <Field
                  {...register('password', { required: true })}
                  placeholder="Password"
                  autoComplete="current-password"
                  type="password"
                  error={errors.password && 'this field is required'}
                />
                <Link to="/forgot" className="font-semibold ml-auto">
                  Forgot Password
                </Link>
              </div>
            </div>
            <div className="w-full mt-auto">
              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default LoginPage
