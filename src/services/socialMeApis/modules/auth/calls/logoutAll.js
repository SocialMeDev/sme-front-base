import API from 'services/SocialMeApis/modules/auth'

import { getStorage, deleteStorage } from 'utils/helpers/SirStorage'

import getUsersToken from 'contexts/Auth/Actions/getUsersToken'

export default async function logoutAllUsers() {
  const userPositionCookie = process.env.NEXT_PUBLIC_COOKIE_USER_POSITION
  const browserCookie = process.env.NEXT_PUBLIC_COOKIE_BROWSER
  const userCookie = process.env.NEXT_PUBLIC_COOKIE_USER

  const apiKey = process.env.NEXT_PUBLIC_API_KEY
  const apiKeyValue = process.env.NEXT_PUBLIC_API_KEY_VALUE

  const browserToken = await getStorage(browserCookie)

  const usersToken = await getUsersToken()

  const params = {
    operation: ['Auth', 'User', 'Logout'],
    headers: {
      [browserCookie]: browserToken,
      [userCookie]: usersToken.toString(),
      [apiKey]: apiKeyValue,
    },
  }

  const response = await API(params)

  if (response.success) {
    await deleteStorage(userPositionCookie)
  }

  return response
}
