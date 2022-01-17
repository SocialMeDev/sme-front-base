import API from 'services/SocialMeApis/modules/auth'

export default async function logout() {
  const params = {
    operation: ['Auth', 'User', 'Logout'],
  }

  const response = await API(params)

  return response
}
