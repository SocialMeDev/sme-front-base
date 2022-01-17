import { memo } from 'react'
import {
	Flex,
	Box,
	Drawer,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Text,
	useColorModeValue
} from '@chakra-ui/react'

import { useSideBar } from 'contexts/SideBar/Provider'

import Logo from './Logo'
import MenuItem from './MenuItem'

function SideBar({ sidebarItems }) {
	const { isOpen, onClose } = useSideBar()
	const colorGroupName = useColorModeValue('gray.300', 'gray.900')

	return (
		<Drawer isOpen={isOpen} onClose={onClose} placement="left" size="xs">
			<DrawerOverlay />
			<DrawerContent>
				<DrawerCloseButton />
				<DrawerHeader borderBottomWidth="1px" p={1}>
					<Logo />
				</DrawerHeader>
				<Box
					h="100vh"
					pb="10"
					borderRightWidth="1px"
					w="full"
					transition="all 0.5s"
				>
					<Flex
						direction="column"
						fontSize="sm"
						aria-label="Main Navigation"
						py={1}
						justify="space-between"
					>
						<Box p={1}>
							{sidebarItems?.map((group, index) => (
								<Box
									key={index}
									mb={5}
									px={2}
									transition="all 0.5s"
									onClick={() => onClose()}
								>
									{group.name && (
										<Text
											textTransform="uppercase"
											mb={1}
											color={colorGroupName}
											fontSize="auto"
										>
											{group.name}
										</Text>
									)}

									{group.childrens?.map((item) => (
										<MenuItem key={item.href} groupHref={group.href} item={item} />
									))}
								</Box>
							))}
						</Box>
					</Flex>
				</Box>
			</DrawerContent>
		</Drawer>
	)
}

export default memo(SideBar)
