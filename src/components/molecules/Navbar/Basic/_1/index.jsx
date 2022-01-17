import { memo } from 'react'
import { Flex, HStack } from '@chakra-ui/react'

import SidebarDrawerButton from './components/SidebarDrawerButton'
import ThemeButton from './components/ThemeButton'
import UserContainer from './components/UserContainer'

import { useAuth } from 'contexts/Auth/Provider'

function Navbar({ noSidebar }) {
	const { user } = useAuth()

	return (
		<Flex
			as="nav"
			align="center"
			justify="flex-start"
			w="full"
			h="50px"
			px="4"
			borderBottomWidth={1}
		>
			{!noSidebar && <SidebarDrawerButton />}
			<HStack spacing={2} ml="auto" pr="2" py="1">
				<ThemeButton />
				{user && <UserContainer />}
			</HStack>
		</Flex>
	)
}

export default memo(Navbar)
