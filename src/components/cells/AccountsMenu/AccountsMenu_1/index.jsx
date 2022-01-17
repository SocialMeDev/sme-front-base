import { memo, useState } from 'react'
import { useRouter } from 'next/router'
import {
  Box,
  Menu,
  MenuButton,
  Button,
  MenuList,
  useDisclosure,
} from '@chakra-ui/react'
import Loading from 'components/atoms/Loader/Basic#1'
import Card from './components/Card'
import PersonHeader from './components/Header'
import UserList from './components/UserList'
import Link from './components/Link'
import { useAuth } from 'contexts/Auth/Provider'

function AccountsMenu({ children }) {
  const [isLoading, setIsLoading] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const { user } = useAuth()
  const { query } = useRouter()

  const { institutionSlug } = query

  return (
    <Menu isOpen={isOpen} onClose={onClose}>
      <MenuButton
        onClick={onOpen}
        as={Button}
        display={user.id ? 'block' : 'none'}
      >
        {children}
      </MenuButton>
      <MenuList p="0" mt="4">
        <Card>
          {isLoading ? (
            <Loading height="350px" text="Carregando novo usuário" />
          ) : (
            <Box>
              <PersonHeader onClose={onClose} />

              <UserList setIsLoading={setIsLoading} onClose={onClose} />

              <Link
                text="Gerencimento de contas"
                href={{
                  pathname: '/[institutionSlug]/auth/account',
                  query: { institutionSlug },
                }}
              />
            </Box>
          )}
        </Card>
      </MenuList>
    </Menu>
  )
}

export default memo(AccountsMenu)
