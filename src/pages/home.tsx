import { useAuth } from '../api/auth'
import { Link } from 'react-router-dom'
import { Button } from '../components'

const HomePage = () => {
  const { user, logout, sendVerificationEmail } = useAuth()

  return (
    <div className="flex items-center mx-6 h-screen justify-center">
      <div className="flex flex-col gap-4">
        {user ? (
          <>
            <h2 className="text-xl">👋 Hello {user.firstName}</h2>
            {!user.isEmailVerified && (
              <>
                <div className="flex flex-col gap-2">
                  <h2 className="text-xl">Please verify your email</h2>
                  <p className="text-sm text-gray-700">
                    please check your registered email for verification link
                  </p>
                </div>
                <Button
                  intent="secondary"
                  className="mt-4"
                  onClick={() => sendVerificationEmail()}
                >
                  Send verification link
                </Button>
              </>
            )}
            <Button onClick={() => logout()}>Log Out</Button>
          </>
        ) : (
          <>
            <h2 className="text-xl">to continue</h2>
            <Link to="/auth/login">
              <Button className="w-full">Log In</Button>
            </Link>
            <Link to="/auth/signup">
              <Button className="w-full" intent="secondary">
                Sign Up
              </Button>
            </Link>
          </>
        )}
      </div>
    </div>
  )
}

export default HomePage
