import Router from 'next/router'

import { getStorage } from 'utils/helpers/SirStorage'

export default async function prepareHeader() {
  const userPositionCookie = process.env.NEXT_PUBLIC_COOKIE_USER_POSITION
  const browserCookie = process.env.NEXT_PUBLIC_COOKIE_BROWSER
  const userCookie = process.env.NEXT_PUBLIC_COOKIE_USER

  const apiKey = process.env.NEXT_PUBLIC_API_KEY
  const apiKeyValue = process.env.NEXT_PUBLIC_API_KEY_VALUE

  const userPosition = await getStorage(userPositionCookie)
  const browserToken = await getStorage(browserCookie)

  const userIndex = Router.router.query.userPosition || userPosition || 0

  let usersToken = await getStorage(userCookie)

  if (usersToken) {
    usersToken = JSON.parse(usersToken)
  } else {
    usersToken = []
  }

  const headers = {
    [browserCookie]: browserToken,
    [userCookie]: usersToken[userIndex],
    [apiKey]: apiKeyValue,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept',
  }

  return headers
}
