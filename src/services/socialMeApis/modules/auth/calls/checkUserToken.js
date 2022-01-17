import API from 'services/SocialMeApis/modules/auth'

export default async function checkUserToken() {
  const params = {
    operation: ['Auth', 'UserToken', 'Check'],
  }

  const response = await API(params)

  return response
}
