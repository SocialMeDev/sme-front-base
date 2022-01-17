import { setStorage } from 'utils/helpers/SirStorage'

import getUsersToken from './getUsersToken'

export default async function removeAuthUser(removedUser, userList) {
  const userCookie = process.env.NEXT_PUBLIC_COOKIE_USER

  const usersToken = await getUsersToken()

  const newUsersToken = usersToken.filter((token) => {
    return token !== removedUser.token_token
  })

  const newUserList = userList.filter((user) => {
    return user.id !== removedUser.id
  })

  await setStorage(userCookie, JSON.stringify(newUsersToken))

  return newUserList
}
