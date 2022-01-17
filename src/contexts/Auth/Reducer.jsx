const reducer = (state, action) => {
  switch (action.type) {
    case 'Loading':
      return {
        ...state,
        endedAuthLogic: false,
      }
    case 'StopLoading':
      return {
        ...state,
        endedAuthLogic: true,
      }

    case 'SetUser': {
      const { user, userPosition } = action.payload

      return {
        ...state,
        user,
        userPosition,
      }
    }

    case 'AddUserInList':
      return {
        ...state,
        userList: [...state.userList, action.payload],
      }

    case 'SetUserList':
      return {
        ...state,
        userList: action.payload,
      }
    case 'UpdateUserInList':
      return {
        ...state,
        userList: state.userList.map((user) => {
          return user.id === action.payload.id ? action.payload : user
        }),
      }
    case 'RemoveUserInList': {
      const newUserList = action.payload

      let newUserPosition = false

      newUserList.every((user, index) => {
        if (user.token_status === 'ACTIVE') {
          newUserPosition = index

          return false
        }

        return true
      })

      return {
        ...state,
        user: newUserList[newUserPosition],
        userList: newUserList,
        userPosition: newUserPosition,
      }
    }

    case 'DisconnectUser': {
      const userPosition = action.payload

      const { userList } = state

      userList[userPosition] = {
        ...userList[userPosition],
        token_status: 'INACTIVE',
      }

      const isLastUser = userList.every((user) => {
        return user.token_status !== 'ACTIVE'
      })

      return {
        ...state,
        user: {},
        userList,
        userPosition: false,
      }
    }

    case 'DisconnectAllUsers':
      return {
        ...state,
        user: {},
        userPosition: false,
        userList: state.userList.map((user) => {
          return { ...user, token_status: 'INACTIVE' }
        }),
      }
    default:
      return state
  }
}

export default reducer
