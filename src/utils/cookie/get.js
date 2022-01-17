import { parseCookies } from 'nookies'

export default async function Get(name) {
  const { [name]: value } = parseCookies()

  return value
}
