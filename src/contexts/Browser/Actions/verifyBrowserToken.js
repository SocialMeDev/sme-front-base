import { getCookie } from 'utils/cookie'

import checkBrowserToken from 'services/SocialMeApis/modules/auth/calls/checkBrowserToken'
import setBrowserToken from 'services/SocialMeApis/modules/auth/calls/setBrowserToken'

export default async function verifyBrowserToken() {
  const browserCookie = process.env.NEXT_PUBLIC_COOKIE_BROWSER

  const BrowserTokenCookies = await getCookie(browserCookie)

  if (BrowserTokenCookies) {
    await checkBrowserToken()
  } else {
    await setBrowserToken()
  }
}
