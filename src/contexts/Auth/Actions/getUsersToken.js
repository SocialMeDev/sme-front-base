import { deleteStorage, getStorage } from 'utils/helpers/SirStorage'

export default async function getUsersToken() {
  const userCookie = process.env.NEXT_PUBLIC_COOKIE_USER

  let usersToken = await getStorage(userCookie)

  if (usersToken) {
    try {
      usersToken = JSON.parse(usersToken)
    } catch (error) {
      await deleteStorage(userCookie)

      return []
    }
  }

  if (!Array.isArray(usersToken)) {
    deleteStorage(usersToken)

    return []
  }

  return usersToken
}
