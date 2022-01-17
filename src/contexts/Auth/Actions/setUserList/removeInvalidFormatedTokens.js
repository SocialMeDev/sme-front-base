import { setStorage } from 'utils/helpers/SirStorage'

export default async function removeInvalidFormatedTokens(
  userList,
  usersToken
) {
  const userCookie = process.env.NEXT_PUBLIC_COOKIE_USER

  const validUserTokens = []

  usersToken.forEach((token, index) => {
    let user = ''

    if (userList[index]) {
      user = userList[index]
    }

    if (token === user.token_token) {
      validUserTokens.push(token)
    }
  })

  await setStorage(userCookie, validUserTokens)
}
