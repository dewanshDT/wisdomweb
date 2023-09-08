import PhoneInput from 'react-phone-input-2'
import { Button, Field } from '../components'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import clsx from 'clsx'
import { RegisterInputs } from '../api/auth/types'
import { useAuth } from '../api/auth'

const SignupPage = () => {
  const [phoneValue, setPhoneValue] = useState('')
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm<RegisterInputs>()

  const { signup } = useAuth()

  const onSubmit: SubmitHandler<RegisterInputs> = (data) => {
    console.log(data)
    signup(data)
  }

  useEffect(() => {
    console.log(errors)
  }, [errors])

  return (
    <>
      <Helmet>
        <title>Sign Up: Wisdom Circle</title>
        <meta name="description" content="Wisdom Circle sign up page" />
      </Helmet>
      <div className="flex flex-col justify-center p-6 items-center h-full w-full">
        <div className="w-full lg:h-auto h-full lg:max-w-sm sm:max-w-lg gap-4 flex flex-col">
          <div className="gap-4">
            <h3 className="font-bold text-2xl w-full text-neutral-black">
              Create an account
            </h3>
            <p className="text-neutral-grey">
              Already have an account?{' '}
              <Link to="/auth/login" className="font-semibold">
                Sign In
              </Link>
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex gap-4 h-full w-full flex-col"
          >
            <div className="gap-4 flex flex-col w-full">
              <Field
                {...register('firstName', { required: true })}
                placeholder="First Name"
                error={errors.firstName}
              />
              <Field
                {...register('lastName', { required: true })}
                placeholder="Last Name"
                error={errors.lastName}
              />
              <Field
                {...register('email', {
                  required: true,
                  pattern: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                })}
                placeholder="Email Address"
                type="email"
                error={errors.email}
              />
              <div
                className={clsx(
                  { error: errors.mobileNumber },
                  'flex flex-col gap-2',
                )}
              >
                <PhoneInput
                  {...register('mobileNumber', { required: true })}
                  country="in"
                  value={phoneValue}
                  onChange={(value) => {
                    setPhoneValue(value)
                    setValue('mobileNumber', value)
                  }}
                />
                {errors.mobileNumber && (
                  <div className="text-danger-500 text-sm">
                    this is required
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-2 w-full">
                <Field
                  {...register('password', {
                    required: true,
                    pattern: /^(?=.*[A-Za-z\d]).{8,}$/,
                  })}
                  placeholder="Password"
                  autoComplete="new-password"
                  type="password"
                  error={errors.password}
                />
                <div className="text-xs text-neutral-grey">
                  Password must be at least 8 characters
                </div>
              </div>
            </div>
            <p className="text-neutral-grey text-xs my-2">
              By clicking Sign Up you are indicating that you have read and
              acknowledged the <Link to="/terms">Terms of Service</Link> and{' '}
              <Link to="/privacy">Privacy Notice</Link>
            </p>
            <div className="w-full mt-auto">
              <Button className="w-full" type="submit">
                Sign Up
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignupPage
