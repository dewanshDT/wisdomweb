import PhoneInput from 'react-phone-input-2'
import { Button, Field } from '../components'
import { useState } from 'react'
import { Helmet } from 'react-helmet'

const SignupPage = () => {
  const [value, setValue] = useState('')
  return (
    <>
      <Helmet>
        <title>Sign Up: Wisdom Circle</title>
        <meta name="description" content="Wisdom Circle sign up page" />
      </Helmet>
      <div className="flex flex-col justify-center items-center h-full w-full">
        <div className="w-full max-w-sm gap-4 flex flex-col">
          <div className="gap-4">
            <h3 className="font-bold text-2xl w-full text-neutral-black">
              Create an account
            </h3>
            <p className="text-neutral-grey">
              Already have an account?{' '}
              <a href="/auth/login" className="font-semibold">
                Sign In
              </a>
            </p>
          </div>
          <form className="flex gap-4 w-full flex-col">
            <div className="gap-4 flex flex-col w-full">
              <Field placeholder="First Name" required />
              <Field placeholder="Last Name" required />
              <Field placeholder="Email Address" required type="email" />
              <PhoneInput
                country="in"
                value={value}
                onChange={(value) => {
                  setValue(value as string)
                }}
              />
              <div className="flex flex-col gap-2 w-full">
                <Field
                  required
                  placeholder="Password"
                  autoComplete="new-password"
                  type="password"
                />
                <div className="text-xs text-neutral-grey">
                  Password must be at least 8 characters
                </div>
              </div>
            </div>
            <p className="text-neutral-grey text-xs my-2">
              By clicking Sign Up you are indicating that you have read and
              acknowledged the <a href="/terms">Terms of Service</a> and{' '}
              <a href="/privacy">Privacy Notice</a>
            </p>
            <Button>Sign Up</Button>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignupPage
