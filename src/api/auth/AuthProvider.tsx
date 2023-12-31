import React, { useEffect, useState } from 'react'
import { AuthContext } from '.'
import { BASE_API_URL, fetcher, sendJsonData } from '..'
import { AuthResponse, RegisterInputs, Token, User } from './types'

interface AuthProps {
  children?: React.ReactNode
}

const AuthProvider: React.FC<AuthProps> = (props) => {
  const [token, setToken] = useState<Token | undefined>()
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')

    if (accessToken && !token) {
      setToken({
        value: accessToken,
        refresh,
      })
    }

    console.log(token, 'this from auth')

    const userId = localStorage.getItem('user')

    console.log(userId, user)
    if (userId && !user && accessToken) {
      fetcher(`${BASE_API_URL}/api/user/me`, {
        value: accessToken,
        refresh,
      }).then((res) => {
        console.log(res)
        if (res?.success) setUser(res.data as User)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, user])

  const refresh = async () => {
    const refreshToken = localStorage.getItem('refreshToken')
    const response = await sendJsonData(
      `${BASE_API_URL}/api/auth/token/refresh`,
      {
        token: refreshToken,
      },
    )
    const { accessToken }: { accessToken: string } = response?.data as {
      accessToken: string
    }
    if (accessToken) {
      localStorage.setItem('accessToken', accessToken)
      setToken({ refresh, value: accessToken })
    }
  }

  const signup = async (data: RegisterInputs): Promise<AuthResponse> => {
    const customHeaders = new Headers()
    customHeaders.append('Content-Type', 'application/json')

    const response = await sendJsonData(
      `${BASE_API_URL}/api/auth/register`,
      data,
    )

    if (response?.success) {
      const {
        accessToken,
        refreshToken,
        user,
      }: { accessToken: string; refreshToken: string; user: User } =
        response.data as {
          accessToken: string
          refreshToken: string
          user: User
        }

      console.log(accessToken, refreshToken)

      if (accessToken) {
        localStorage.setItem('accessToken', accessToken)
        setToken({ refresh, value: accessToken })
      }

      if (refreshToken) localStorage.setItem('refreshToken', refreshToken)

      if (user) {
        localStorage.setItem('user', user.id)
        setUser(user)
      }

      console.log(response)

      return { success: true, message: 'signed up!' }
    } else return { success: false, message: response?.message ?? 'failed' }
  }

  const login = async (
    email: string,
    password: string,
  ): Promise<AuthResponse> => {
    const customHeaders = new Headers()
    customHeaders.append('Content-Type', 'application/json')

    const response = await sendJsonData(`${BASE_API_URL}/api/auth/login`, {
      email,
      password,
    })

    if (response?.success) {
      const {
        accessToken,
        refreshToken,
        user,
      }: { accessToken: string; refreshToken: string; user: User } =
        response.data as {
          accessToken: string
          refreshToken: string
          user: User
        }

      console.log(accessToken, refreshToken)

      if (accessToken) {
        localStorage.setItem('accessToken', accessToken)
        setToken({ refresh, value: accessToken })
      }

      if (refreshToken) localStorage.setItem('refreshToken', refreshToken)

      if (user) {
        localStorage.setItem('user', user.id)
        setUser(user)
      }
      console.log(response)

      return { success: true, message: 'logged in!' }
    } else return { success: false, message: response?.message }
  }

  const sendVerificationEmail = async () => {
    if (typeof window !== 'undefined') {
      const accessToken = localStorage.getItem('accessToken')

      if (accessToken) {
        await fetcher(`${BASE_API_URL}/api/auth/resend-email-verification`, {
          value: accessToken,
          refresh,
        })
      }
    }
  }

  const logout = async () => {
    if (typeof window !== 'undefined') {
      const refreshToken = localStorage.getItem('refreshToken')
      const accessToken = localStorage.getItem('accessToken')

      if (accessToken && refreshToken) {
        await sendJsonData(
          `${BASE_API_URL}/api/auth/logout`,
          {
            token: refreshToken,
          },
          { value: accessToken, refresh },
        )
        localStorage.clear()
        setUser(null)
      }
    }
  }

  const value = {
    user,
    token,
    login,
    signup,
    sendVerificationEmail,
    logout,
  }

  return <AuthContext.Provider value={value} children={props.children} />
}

export default AuthProvider
