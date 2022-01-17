import { destroyCookie } from 'nookies'

export default async function Delete(key) {
  destroyCookie(null, key)

  return true
}
