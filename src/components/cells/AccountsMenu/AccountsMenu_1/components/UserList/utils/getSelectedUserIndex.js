export default async function getSelectedUserIndex(selectedUser, authUsers) {
  const findUser = (element) => {
    return element.token_token === selectedUser.token_token
  }

  const userIndex = authUsers.findIndex(findUser)

  return {
    isActive: selectedUser.token_status === 'ACTIVE',
    userIndex,
  }
}
