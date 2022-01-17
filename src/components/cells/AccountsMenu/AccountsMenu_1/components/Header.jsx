import { memo } from 'react'
import { useRouter } from 'next/router'
import {
  Button,
  Text,
  VStack,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react'
import Avatar from 'components/atoms/Avatar/Basic#1'
import { useAuth } from 'contexts/Auth/Provider'
import useUser from 'hooks/useUser'
import { decodeUri } from 'utils/transforms/string'

function PersonHeader({ onClose }) {
  const toast = useToast()

  const bg = useColorModeValue('green.300', 'green.800')
  const color = useColorModeValue('white', 'gray.400')

  const { push, query } = useRouter()
  const { logout, setNewUser } = useAuth()
  const { getFullName, getLogin, getAvatar } = useUser()

  const { institutionSlug } = query

  async function handleLogout() {
    onClose()

    toast({
      position: 'top',
      description: 'Desconectando...',
      status: 'info',
      duration: 2000,
      isClosable: true,
    })

    await logout()

    await push({
      pathname: '/[institutionSlug]/auth/account',
      query: { institutionSlug },
    })
  }

  return (
    <VStack w="100%" py="4">
      <VStack>
        <Avatar size="xl" src={decodeUri(getAvatar())} name={getFullName()} />

        <VStack spacing={0}>
          <Text fontSize="md">{getFullName()}</Text>
          <Text>{getLogin()}</Text>
        </VStack>

        <Button _hover={{ bg, color }} onClick={handleLogout}>
          Desconectar
        </Button>
      </VStack>
    </VStack>
  )
}

export default memo(PersonHeader)
