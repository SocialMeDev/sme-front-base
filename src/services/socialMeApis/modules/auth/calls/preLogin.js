import API from 'services/SocialMeApis/modules/auth'

export default async function preLogin(login = '') {
  const params = {
    operation: ['Auth', 'User', 'PreLogin'],
    data: {
      login: login.replace(/\D/g, ''),
    },
  }

  const response = await API(params)

  return response
}
