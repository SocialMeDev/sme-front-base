import { useContext, useEffect, useReducer } from 'react'
import { Flex, useToast } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import InstitutionReducer from './Reducer'
import InstitutionContext from './Context'
import Loading from 'components/atoms/Loader/Basic#1'
import showInstitution from 'services/SocialMeApis/modules/appAlerts/calls/showInstitution'

function InstitutionProvider({ children }) {
  const { push, query } = useRouter()

  const toast = useToast()

  const { institutionSlug } = query

  const initialStates = {
    loadingInstitution: true,
    institution: {},
  }

  const [state, dispatch] = useReducer(InstitutionReducer, initialStates)

  const { loadingInstitution, institution } = state

  useEffect(() => {
    async function loadAsync() {
      dispatch({
        type: 'Loading',
      })

      const response = await showInstitution(institutionSlug)

      if (response.success) {
        dispatch({
          type: 'SetInstitution',
          payload: response.body.license,
        })
      } else {
        toast({
          description: 'Instituição não foi encontrada',
          position: 'top',
          status: 'error',
        })

        push('/')
      }

      dispatch({
        type: 'StopLoading',
      })
    }

    if (institutionSlug) {
      loadAsync()
    } else {
      dispatch({
        type: 'StopLoading',
      })
    }
  }, [institutionSlug])

  return (
    <InstitutionContext.Provider value={{ institution }}>
      {loadingInstitution ? (
        <Flex w="full" h="100vh" justify="center" align="center">
          <Loading height="100vh" text="Carregando instituição" />
        </Flex>
      ) : (
        children
      )}
    </InstitutionContext.Provider>
  )
}

export default InstitutionProvider

export const useInstitution = () => useContext(InstitutionContext)
