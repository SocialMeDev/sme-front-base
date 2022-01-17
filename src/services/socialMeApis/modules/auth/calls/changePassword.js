import API from 'services/SocialMeApis/modules/auth'

export default async function changePassword(
  { new_password, reset_login },
  { tkn, rqd, pnd }
) {
  const params = {
    operation: ['Auth', 'RecoveryPassword', 'ChangePassword'],
    urlParams: {
      token: tkn,
      tokenId: rqd,
      personId: pnd,
    },
    data: {
      new_password,
      reset_login,
    },
  }

  const response = await API(params)

  return response
}
