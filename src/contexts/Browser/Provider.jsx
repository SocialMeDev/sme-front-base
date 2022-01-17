import { useContext, useEffect, useReducer } from 'react'

import BrowserReducer from './Reducer'
import BrowserContext from './Context'

import verifyBrowserToken from './Actions/verifyBrowserToken'

function BrowserProvider({ children }) {
  const initialStates = {
    endedBrowserLogic: false,
  }

  const [state, dispatch] = useReducer(BrowserReducer, initialStates)

  useEffect(() => {
    async function loadAsync() {
      dispatch({
        type: 'Loading',
      })

      await verifyBrowserToken()

      dispatch({
        type: 'StopLoading',
      })
    }

    loadAsync()
  }, [])

  return (
    <BrowserContext.Provider
      value={{ endedBrowserLogic: state.endedBrowserLogic }}
    >
      {children}
    </BrowserContext.Provider>
  )
}

export const useBrowser = () => useContext(BrowserContext)

export default BrowserProvider
