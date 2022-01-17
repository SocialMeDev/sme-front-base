import { useContext, useEffect, useReducer } from 'react'
import { useRouter } from 'next/router'

import PermissionReducer from './Reducer'
import PermissionContext from './Context'

import getLoggedUserPermissions from 'services/SocialMeApis/modules/appAlerts/calls/getLoggedUserPermissions'

function PermissionProvider({ children }) {
  const { query } = useRouter()

  const { institutionSlug, userPosition } = query

  const initialStates = {
    endedPermissionLogic: false,
    permissions: null,
  }

  const [state, dispatch] = useReducer(PermissionReducer, initialStates)

  const { endedPermissionLogic, permissions } = state

  useEffect(() => {
    dispatch({
      type: 'Loading',
    })

    async function loadAsync() {
      const response = await getLoggedUserPermissions(institutionSlug)

      if (response.success) {
        const newPermissions = response.body.permission.elements.map(
          (item) => item.permission
        )

        dispatch({
          type: 'SetPermissions',
          payload: newPermissions || [],
        })
      }

      dispatch({
        type: 'StopLoading',
      })
    }

    if (institutionSlug && userPosition) {
      loadAsync()
    } else {
      dispatch({
        type: 'ResetPermissionStates',
      })
    }
  }, [institutionSlug, userPosition])

  return (
    <PermissionContext.Provider
      value={{
        endedPermissionLogic,
        permissions,
      }}
    >
      {children}
    </PermissionContext.Provider>
  )
}

export const usePermission = () => useContext(PermissionContext)

export default PermissionProvider
