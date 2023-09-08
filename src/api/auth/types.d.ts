export interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  mobileNumber: string
  isEmailVerified: boolean
}

export interface Token {
  value: string
  refresh: () => Promise<void>
}

export interface Context {
  user: User | null
  token: Token | undefined
  login: (email: string, password: string) => Promise<Response | undefined>
  signup: (data: RegisterInputs) => Promise<Response | undefined>
  sendVerificationEmail: () => Promise<void>
  logout: () => void
}

export interface RegisterInputs {
  firstName: string
  lastName: string
  email: string
  mobileNumber: string
  password: string
}
