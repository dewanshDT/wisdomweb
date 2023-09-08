import { Token } from './auth/types'
import jwt_decode from 'jwt-decode'
import dayjs from 'dayjs'

export const BASE_API_URL = 'http://localhost:8000'

export enum REST_METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

const checkRefresh = async (token: Token) => {
  const jwtUser = jwt_decode<{ name: string; exp: number }>(token.value)
  const isExpired = dayjs.unix(jwtUser.exp).diff(dayjs()) < 1
  if (isExpired) await token.refresh()
}

export const fetcher = async (url: string, token?: Token) => {
  if (token) {
    checkRefresh(token)
  }
  try {
    const customHeaders = new Headers()
    customHeaders.append('Content-Type', 'application/json')
    if (token?.value) {
      customHeaders.append('Authorization', `Bearer ${token?.value}`)
      // console.log(token.value)
    }
    const res = await fetch(url, {
      headers: customHeaders,
    })
    if (!res.ok) {
      throw new Error(res.statusText)
    }
    const { data: resData } = await res.json()
    return resData
  } catch (e) {
    console.error(`this is from fetcher\n${e}`)
  }
}

export const sendJsonData = async (
  url: string,
  data: unknown,
  token?: Token,
  method: REST_METHODS = REST_METHODS.POST,
) => {
  if (token) checkRefresh(token)
  try {
    const customHeaders = new Headers()
    customHeaders.append('Content-Type', 'application/json')
    customHeaders.append('Authorization', `Bearer ${token?.value}`)

    // console.log(url, method, data, token)
    // console.log(url)
    // console.log(JSON.stringify(data))

    const response = await fetch(url, {
      method: method,
      headers: customHeaders,
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error(response.statusText)
    }

    const { data: resData } = await response.json()
    return resData
  } catch (e) {
    console.error(`from sendJsonData\n${e}`)
  }
}
