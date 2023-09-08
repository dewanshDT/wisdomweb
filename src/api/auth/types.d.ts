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
  login: (email: string, password: string) => Promise<AuthResponse>
  signup: (data: RegisterInputs) => Promise<AuthResponse>
  sendVerificationEmail: () => Promise<void>
  logout: () => void
}

export interface AuthResponse {
  success: boolean
  message: string | undefined
}

export interface RegisterInputs {
  firstName: string
  lastName: string
  email: string
  mobileNumber: string
  password: string
}
