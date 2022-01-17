import { Box, Text } from '@chakra-ui/react'

import AccountsMenu from 'components/cells/AccountsMenu/Basic#1'
import useUser from 'hooks/useUser'
import { useRouter } from 'next/router'

export default function UserContainer() {
  const { query } = useRouter()

  const { getFullName } = useUser()

  return (
    <Box>
      {query.institutionSlug && (
        <AccountsMenu>
          <Text>{getFullName()}</Text>
        </AccountsMenu>
      )}
    </Box>
  )
}
