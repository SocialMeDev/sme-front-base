import { memo } from 'react'
import {
	Box,
	Flex,
	Text,
	Divider,
	Tooltip,
	Icon,
	useColorModeValue
} from '@chakra-ui/react'

import { GridLayout17 } from 'components/atoms/Icons/Interface'

import { useSideBar } from 'contexts/SideBar/Provider'

import Logo from './Logo'
import MenuItem from './MenuItem'

function SideBarDesktop({ sidebarItems }) {
	const { isOpen } = useSideBar()
	const colorGroupName = useColorModeValue('gray.300', 'gray.600')

	return (
		<Box
			h="100vh"
			pb="10"
			borderRightWidth="1px"
			w={isOpen ? '300px' : '50px'}
			transition="all 0.5s"
		>
			<Logo />
			<Divider />
			<Flex
				direction="column"
				as="nav"
				fontSize="sm"
				aria-label="Main Navigation"
				py="1"
				justify="space-between"
				h="calc(100vh - 70px)"
			>
				<Box>
					<Box p={1}>
						{sidebarItems?.map((group) => (
							<Box
								key={group.name}
								mb="5"
								px={isOpen ? '2' : '0'}
								transition="all 0.5s"
							>
								{group.name && (
									<Flex align="center" justify="center" h="30px">
										<Tooltip
											gutter={10}
											placement="right"
											label={group.name}
											fontSize="md"
											display={isOpen ? 'none' : 'block'}
										>
											<Flex align="center" justify="center">
												<Icon
													boxSize={isOpen ? '0' : '5'}
													as={group.icon || GridLayout17}
													color={colorGroupName}
													transition={`all 0.2s ${isOpen ? '0s' : '0.2s'}`}
												/>
											</Flex>
										</Tooltip>
										<Text
											textTransform="uppercase"
											color={colorGroupName}
											fontSize={isOpen ? 'md' : '0pt'}
											opacity={isOpen ? 1 : 0}
											transition={`all 0.2s ${isOpen ? '0.2s' : '0s'}`}
										>
											{group.name}
										</Text>
									</Flex>
								)}

								{group.childrens?.map((item) => (
									<MenuItem key={item.label} groupHref={group.href} item={item} />
								))}
							</Box>
						))}
					</Box>
				</Box>
			</Flex>
		</Box>
	)
}

export default memo(SideBarDesktop)
