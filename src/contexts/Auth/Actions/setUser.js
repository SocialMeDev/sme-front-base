import { setStorage } from 'utils/helpers/SirStorage'

export default async function setUser(userPosition) {
  const userPositionCookie = process.env.NEXT_PUBLIC_COOKIE_USER_POSITION

  if (userPosition !== false) {
    await setStorage(userPositionCookie, userPosition)
  }
}
