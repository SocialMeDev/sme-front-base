import { setStorage, deleteStorage } from 'utils/helpers/SirStorage'

export default async function updateUser(dispatch, userList) {
  const userPositionCookie = process.env.NEXT_PUBLIC_COOKIE_USER_POSITION

  let newUserPosition = null

  userList.every((user, index) => {
    if (user.token_status === 'ACTIVE') {
      newUserPosition = index

      return false
    }

    return true
  })

  if (newUserPosition === null) {
    await deleteStorage(userPositionCookie)
  } else {
    await setStorage(userPositionCookie, newUserPosition)
  }
}
