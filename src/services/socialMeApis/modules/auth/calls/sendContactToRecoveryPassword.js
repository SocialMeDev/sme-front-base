import API from 'services/SocialMeApis/modules/auth'

export default async function sendContactToRecovery({ login, main_contact }) {
  const params = {
    operation: ['Auth', 'RecoveryPassword', 'Contact'],
    data: {
      login: login.replace(/\D/g, ''),
      main_contact,
    },
  }

  const response = await API(params)

  return response
}
