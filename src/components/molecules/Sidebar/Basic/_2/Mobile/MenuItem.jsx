import { Icon, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import Link from 'components/atoms/Link/Basic/_1'

import { useSideBar } from 'contexts/SideBar/Provider'

export default function MenuItem({ groupHref, item }) {
	const activeBg = useColorModeValue('green.500', 'green.800')
	const color = useColorModeValue('white', 'whiteAlpha.800')

	const bg = useColorModeValue('green.300', 'green.600')

	const { isOpen } = useSideBar()
	const { asPath } = useRouter()

	let isActive = false

	if (groupHref) {
		if (
			asPath === `${groupHref}${item.href}` ||
			asPath.startsWith(`${groupHref}${item.href}`)
		) {
			isActive = true
		}
	} else if (item.href === '/') {
		if (asPath === item.href) {
			isActive = true
		}
	} else if (asPath === item.href || asPath.startsWith(item.href)) {
		isActive = true
	}

	return (
		<Link href={`${groupHref}${item.href}`}>
			<Flex
				align="center"
				px={2}
				py={2}
				mb={1}
				rounded="md"
				transition="all 0.4s"
				cursor="pointer"
				color={isActive && color}
				bg={isActive && activeBg}
				_hover={
					!isActive && {
						bg,
						color
					}
				}
				role="group"
				h="36px"
			>
				<Flex align="center" w="full">
					<Flex align="center" justify="center">
						<Icon boxSize="5" ml="4px" as={item.icon} />
					</Flex>
					<Text
						ml={2}
						fontSize={isOpen ? 'sm' : '0pt'}
						transition={`font-size 0.2s ${isOpen ? '0.2s' : '0s'}`}
					>
						{item.label}
					</Text>
				</Flex>
			</Flex>
		</Link>
	)
}
