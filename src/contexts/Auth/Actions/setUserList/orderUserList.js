export default async function orderUserList(userList, usersToken) {
  const orderUsers = []

  while (orderUsers.length < userList.length) {
    const currentIndex = orderUsers.length

    userList.every((user) => {
      let token = ''

      if (usersToken[currentIndex]) {
        token = usersToken[currentIndex]
      }

      if (token === user.token_token) {
        orderUsers.push(user)

        return false
      }

      return true
    })
  }

  return orderUsers
}
