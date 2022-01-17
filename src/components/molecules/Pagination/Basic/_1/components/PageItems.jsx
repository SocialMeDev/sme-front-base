import { memo } from 'react'
import { Button, useColorModeValue } from '@chakra-ui/react'

const PageItems = ({ currentPage, choosePages, onChangePage }) => {
	const bg = useColorModeValue('white', 'gray.800')
	const color = useColorModeValue(`primary.600`, 'whiteAlpha.600')
	const borderColor = useColorModeValue(`primary.500`, 'blackAplha.500')

	const hoverBg = useColorModeValue(`primary.300`, `primary.800`)

	return (
		<>
			{choosePages.map((page) => {
				const samePage = page.value === currentPage

				return (
					<Button
						onClick={() => onChangePage(page.value)}
						key={page.value}
						mr="1"
						px="4"
						py="2"
						rounded="md"
						border="1px solid"
						borderColor={borderColor}
						color={samePage ? 'whiteAlpha.900' : color}
						bg={samePage ? hoverBg : bg}
						cursor="pointer"
						transition="all 0.4s"
						_hover={{ color: 'whiteAlpha.900', bg: hoverBg }}
					>
						{page.label}
					</Button>
				)
			})}
		</>
	)
}

export default memo(PageItems)
