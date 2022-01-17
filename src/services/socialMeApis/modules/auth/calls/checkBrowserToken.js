import SocialMeAPI from 'services/SocialMeApis/modules/auth'

import setBrowserToken from 'services/SocialMeApis/modules/auth/calls/setBrowserToken'

export default async function checkBrowserToken() {
  const params = {
    operation: ['Auth', 'BrowserToken', 'Check'],
  }

  const response = await SocialMeAPI(params)

  if (!response.success) {
    setBrowserToken()
  }
}
