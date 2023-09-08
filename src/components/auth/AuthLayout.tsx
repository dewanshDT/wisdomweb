import { Outlet, useNavigate } from 'react-router-dom'
import logo from '../../assets/vectors/Logo.svg'
import figurine from '../../assets/POSE.png'
import { DividerIcon, WisdomCircleTextLogo } from '../../icons'
import { useAuth } from '../../api/auth'
import { useEffect } from 'react'

const AuthLayout = () => {
  const { user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) navigate('/')
  }, [user, navigate])
  return (
    <div className="w-full h-full flex flex-col lg:flex-row">
      <div className="h-full hidden px-4 py-6 text-white lg:flex flex-col items-center w-full max-w-xl bg-neutral-grey">
        <img src={logo} className="my-auto" />
        <div className="flex w-full">
          <img src={figurine} />
          <div className="flex gap-6 flex-col w-full">
            <div className="flex flex-col gap-3">
              <div className="font-bold text-3xl">Welcome back!</div>
              <p className="leading-6 text-base">
                Sign In to find opportunities that match your interests. We have
                both part-time and full-time roles that can be done online and
                in-person.
              </p>
            </div>
            <DividerIcon className="text-2xl" />
            <p className="text-sm">
              Please contact us at <b>+91-9380644532</b> if you need any
              assistance.
            </p>
          </div>
        </div>
      </div>
      <div className="flex lg:hidden justify-center items-center h-[20%]">
        <WisdomCircleTextLogo />
      </div>
      <Outlet />
    </div>
  )
}

export default AuthLayout
