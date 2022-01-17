import API from 'services/SocialMeApis/modules/auth'

export default async function login({ login, password }) {
  const params = {
    operation: ['Auth', 'User', 'Login'],
    data: {
      login: login.replace(/\D/g, ''),
      password,
      keep: true,
    },
  }

  const response = await API(params)

  return response
}
