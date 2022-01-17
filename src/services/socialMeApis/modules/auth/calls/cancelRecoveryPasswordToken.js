import API from 'services/SocialMeApis/modules/auth'

export default async function cancelRecoveryToken({ tkn, rqd, pnd }) {
  const params = {
    operation: ['Auth', 'RecoveryPassword', 'CancelToken'],
    urlParams: {
      token: tkn,
      tokenId: rqd,
      personId: pnd,
    },
  }

  const response = await API(params)

  return response
}
