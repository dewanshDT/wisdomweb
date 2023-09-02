import PhoneInput from 'react-phone-input-2'
import { Button, Field } from '../components'
import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

const SignupPage = () => {
  const [value, setValue] = useState('')
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
          <form className="flex gap-4 h-full w-full flex-col">
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
              acknowledged the <Link to="/terms">Terms of Service</Link> and{' '}
              <Link to="/privacy">Privacy Notice</Link>
            </p>
            <div className="w-full mt-auto">
              <Button className="w-full">Sign Up</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignupPage
