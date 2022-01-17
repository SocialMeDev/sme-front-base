import API from 'services/SocialMeApis/modules/auth'

import { getStorage } from 'utils/helpers/SirStorage'

export default async function getAuthUsers(usersToken) {
  const browserCookie = process.env.NEXT_PUBLIC_COOKIE_BROWSER
  const userCookie = process.env.NEXT_PUBLIC_COOKIE_USER

  const apiKey = process.env.NEXT_PUBLIC_API_KEY
  const apiKeyValue = process.env.NEXT_PUBLIC_API_KEY_VALUE

  const browserToken = await getStorage(browserCookie)

  const params = {
    operation: ['Auth', 'Users', 'Get'],
    headers: {
      [browserCookie]: browserToken,
      [userCookie]: usersToken.toString(),
      [apiKey]: apiKeyValue,
    },
  }

  const response = await API(params)

  return response
}
