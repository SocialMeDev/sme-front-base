import API from 'services/SocialMeApis/modules/auth'

export default async function sendCode({ tkn, rqd, pnd }) {
  const params = {
    operation: ['Auth', 'RecoveryPassword', 'CheckToken'],
    urlParams: {
      token: tkn,
      tokenId: rqd,
      personId: pnd,
    },
  }

  const response = await API(params)

  return response
}
