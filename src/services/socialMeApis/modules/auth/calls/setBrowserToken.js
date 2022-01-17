import socialMeAPI from 'services/SocialMeApis/modules/auth'
import { setStorage } from 'utils/helpers/SirStorage'

export default async function setNewBrowserToken() {
  const browserCookie = process.env.NEXT_PUBLIC_COOKIE_BROWSER

  const params = {
    operation: ['Auth', 'BrowserToken', 'Set'],
  }

  const response = await socialMeAPI(params)

  if (response.success) {
    await setStorage(browserCookie, response.body.brwsrtkn)
  }
}
