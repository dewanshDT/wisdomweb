import { createContext, useContext } from 'react'
import { Context } from './types'

export const AuthContext = createContext<Context>({} as Context)

export const useAuth = (): Context => useContext(AuthContext)

export { default as AuthProvider } from './AuthProvider'
