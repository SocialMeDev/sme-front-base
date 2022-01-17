import getAuthUsers from 'services/SocialMeApis/modules/auth/calls/getAuthUsers'

import getUsersToken from 'contexts/Auth/Actions/getUsersToken'

import removeInvalidFormatedTokens from './removeInvalidFormatedTokens'
import orderUserList from './orderUserList'

export default async function setUserList(dispatch) {
  const usersToken = await getUsersToken()

  if (usersToken.length === 0) return

  const response = await getAuthUsers(usersToken)

  if (response.success) {
    let userList = response.body.user.elements

    if (userList.length !== usersToken.length) {
      await removeInvalidFormatedTokens(userList, usersToken)
    } else {
      userList = await orderUserList(userList, usersToken)
    }

    dispatch({
      type: 'SetUserList',
      payload: userList,
    })
  }
}
