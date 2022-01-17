import { memo } from 'react'
import { useRouter } from 'next/router'
import { Box, Flex, useColorModeValue } from '@chakra-ui/react'

import { SingleUserPlus } from 'components/atoms/Icons/Users'

import { useAuth } from 'contexts/Auth/Provider'

import UserItem from 'components/system/UserItem'
import LinkButtonWithIcon from 'components/system/LinkButtonWithIcon'

function UserList({ setIsLoading }) {
  const { push, query, pathname, reload } = useRouter()

  const { user, setTemporaryUser, setNewUser, userList } = useAuth()

  const { institutionSlug, userPosition } = query

  const borderColor = useColorModeValue('gray.200', 'white')

  async function handleSelectedUser(selectedUser, userIndex) {
    setIsLoading(true)

    if (selectedUser.token_status === 'ACTIVE') {
      await setNewUser(selectedUser, userIndex)

      await push({
        pathname,
        query: {
          ...query,
          userPosition: userIndex,
        },
      })

      reload()
    } else {
      await setTemporaryUser(selectedUser)

      await push({
        pathname: '/[institutionSlug]/auth/login',
        query: {
          institutionSlug,
        },
      })
    }
  }

  return (
    <>
      <Flex
        w="100%"
        p="4"
        maxH="250px"
        direction="column"
        borderTop="1px solid"
        borderBottom="1px solid"
        borderColor={borderColor}
        overflowY="auto"
      >
        {userList.map((item, index) => (
          <Box
            display={user.id !== item.id ? 'block' : 'none'}
            w="100%"
            key={item.id}
            onClick={() => handleSelectedUser(item, index)}
          >
            <UserItem user={item} index={index} />
          </Box>
        ))}

        {institutionSlug && (
          <LinkButtonWithIcon
            href={{
              pathname: '/[institutionSlug]/auth',
              query: { institutionSlug },
            }}
            label="Adicionar nova conta"
            Icon={<SingleUserPlus />}
          />
        )}
      </Flex>
    </>
  )
}

export default memo(UserList)
