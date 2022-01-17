import { useCallback, useContext, useEffect, useReducer } from 'react'
import { useToast } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import AuthContext from './Context'
import AuthReducer from './Reducer'

import { deleteStorage } from 'utils/helpers/SirStorage'

import setLogout from 'services/SocialMeApis/modules/auth/calls/logout'
import setLogoutAll from 'services/SocialMeApis/modules/auth/calls/logoutAll'

import setAuthenticatedUser from './Actions/setAuthenticatedUser'
import setRemoveAuthUser from './Actions/setRemoveUserFromList'

import setUser from './Actions/setUser'
import setUserList from './Actions/setUserList'
import verifyUserToken from './Actions/verifyUserToken'
import updateUser from './Actions/updateUser'

function AuthProvider({ children }) {
  const toast = useToast()

  const { push, query } = useRouter()

  const initialStates = {
    user: {},
    userList: [],
    userPosition: false,
    endedAuthLogic: false,
  }

  const [state, dispatch] = useReducer(AuthReducer, initialStates)

  const { user, userPosition, userList, endedAuthLogic } = state

  useEffect(() => {
    async function loadAsync() {
      let response = {}

      if (query.userPosition) {
        response = await verifyUserToken(query.userPosition)
      }

      if (response.success) {
        dispatch({
          type: 'SetUser',
          payload: {
            user: response.body.person,
            userPosition: response.position,
          },
        })
      } else {
        if (query.userPosition) {
          toast({
            description: 'Usuário não encontrado',
            position: 'top',
            status: 'error',
          })

          push('/')
        }
      }

      dispatch({
        type: 'StopLoading',
      })
    }

    loadAsync()
  }, [query.userPosition])

  useEffect(() => {
    async function loadAsync() {
      const response = await verifyUserToken()

      if (response.success) {
        dispatch({
          type: 'SetUser',
          payload: {
            user: response.body.person,
            userPosition: response.position,
          },
        })
      }
    }

    loadAsync()
  }, [])

  useEffect(() => {
    async function loadAsync() {
      await setUserList(dispatch)
    }

    loadAsync()
  }, [])

  const setTemporaryUser = useCallback(async (user) => {
    dispatch({
      type: 'SetUser',
      payload: {
        user,
        userPosition: false,
      },
    })
  }, [])

  const setNewUser = useCallback(async (user, userIndex) => {
    await setUser(userIndex)

    dispatch({
      type: 'SetUser',
      payload: {
        user,
        userPosition: userIndex,
      },
    })
  }, [])

  const logoutAll = useCallback(async () => {
    const response = await setLogoutAll()

    if (response.success) {
      const userPositionCookie = process.env.NEXT_PUBLIC_COOKIE_USER_POSITION

      dispatch({
        type: 'DisconnectAllUsers',
      })

      await deleteStorage(userPositionCookie)
    }
  }, [])

  const logout = useCallback(async () => {
    const response = await setLogout()

    if (response.success) {
      dispatch({
        type: 'DisconnectUser',
        payload: userPosition,
      })

      await updateUser(dispatch, userList)
    }
  }, [userList, userPosition])

  const removeUserInList = useCallback(
    async (removedUser) => {
      const newUserList = await setRemoveAuthUser(removedUser, userList)

      dispatch({
        type: 'RemoveUserInList',
        payload: newUserList,
      })
    },
    [userList]
  )

  const authenticateUser = useCallback(
    async (newUser) => {
      const newuserIndex = await setAuthenticatedUser(
        dispatch,
        newUser,
        userList
      )

      return newuserIndex
    },
    [userList]
  )

  return (
    <AuthContext.Provider
      value={{
        user,
        userPosition,
        userList,
        endedAuthLogic,
        logout,
        logoutAll,
        setNewUser,
        setTemporaryUser,
        removeUserInList,
        authenticateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

export const useAuth = () => useContext(AuthContext)
