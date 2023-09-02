import { Button, Field } from '../components'

const SignupPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <div className="min-w-[384px] gap-4 flex flex-col">
        <div className="gap-2">
          <h3 className="font-bold text-2xl w-full text-neutral-black">
            Create an account
          </h3>
          <p className="text-neutral-grey">Already have an account? Sign In</p>
        </div>
        <form className="flex gap-4 w-full flex-col">
          <div className="gap-4 flex flex-col w-full">
            <Field placeholder="First Name" />
            <Field placeholder="Last Name" />
            <Field placeholder="Email Address" type="email" />
            <Field placeholder="Password" type="password" />
          </div>
          <Button>Sign Up</Button>
        </form>
      </div>
    </div>
  )
}

export default SignupPage
