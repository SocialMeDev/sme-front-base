import { setStorage, getStorage } from 'utils/helpers/SirStorage'

import checkUserToken from 'services/SocialMeApis/modules/auth/calls/checkUserToken'

import getUsersToken from './getUsersToken'

export default async function verifyUserToken(newUserPosition) {
  const userPositionCookie = process.env.NEXT_PUBLIC_COOKIE_USER_POSITION

  const userCurrentPosition = await getStorage(userPositionCookie)

  const usersToken = await getUsersToken()

  let position = userCurrentPosition || 0

  if (newUserPosition) {
    position = newUserPosition
  }

  if (usersToken.length > 0) {
    const response = await checkUserToken()

    if (response.success) {
      await setStorage(userPositionCookie, Number(position))

      response.position = Number(position)
    }

    return response
  }

  return false
}
