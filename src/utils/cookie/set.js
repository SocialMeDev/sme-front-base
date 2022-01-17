import { setCookie } from 'nookies'

export default async function Create({ key, value }) {
  setCookie(undefined, key, value, {
    maxAge: 60 * 60 * 24 * 30 * 12,
    path: '/',
  })

  return true
}
