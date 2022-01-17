import { Flex } from '@chakra-ui/react'
import { useCallback, useContext, useEffect, useReducer } from 'react'

import { useAuth } from 'contexts/Auth/Provider'
import { useBrowser } from 'contexts/Browser/Provider'
import { usePermission } from 'contexts/Permission/Provider'
import InterfaceContext from './Context'
import InterfaceReducer from './Reducer'

import Loader from 'components/atoms/Loader/Basic#1'
import WifiLoader from 'components/atoms/Loader/Basic#2'

function InterfaceProvider({ children }) {
  const { endedAuthLogic } = useAuth()
  const { endedBrowserLogic } = useBrowser()
  const { endedPermissionLogic } = usePermission()

  const initialStates = {
    loadingInterface: true,
    networkProblem: false,
  }

  const [states, dispatch] = useReducer(InterfaceReducer, initialStates)

  function LoadingContainer() {
    if (states.networkProblem) {
      return <WifiLoader text="Carregando interface" />
    }
    return <Loader height="100vh" text="Carregando interface" />
  }

  const notifyNetworkProblem = useCallback(() => {
    dispatch({
      type: 'NetworkProblem',
    })
  }, [])

  useEffect(() => {
    if (endedAuthLogic && endedBrowserLogic && endedPermissionLogic) {
      dispatch({
        type: 'StopLoadingInterface',
      })
    }
  }, [endedAuthLogic, endedBrowserLogic, endedPermissionLogic])

  return (
    <InterfaceContext.Provider value={{ notifyNetworkProblem }}>
      {states.loadingInterface ? (
        <Flex w="full" h="100vh" justify="center" align="center">
          <LoadingContainer />
        </Flex>
      ) : (
        children
      )}
    </InterfaceContext.Provider>
  )
}

export default InterfaceProvider

export const useInterface = () => useContext(InterfaceContext)
