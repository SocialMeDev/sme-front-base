import { memo } from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'

function ReminderCard({ children, label, ...rest }) {
	const bg = useColorModeValue('blue.300', 'blue.700')
	const hexBg = useColorModeValue('#63B3ED', '#2A4365')
	const color = useColorModeValue('white', 'whiteAlpha.800')

	return (
		<Box
			as="div"
			position="relative"
			minW="300px"
			minH="300px"
			boxShadow="lg"
			{...rest}
		>
			<Box
				as="span"
				position="absolute"
				top="-10px"
				left="-10px"
				minW="150px"
				minH="150px"
				display="flex"
				justifyContent="center"
				alignItems="center"
				overflow="hidden"
				_before={{
					position: 'absolute',
					content: `"${label}"`,
					w: '150%',
					h: '40px',
					bg,
					transform: 'rotate(-45deg) translateY(-20px)',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					textTransform: 'uppercase',
					letterSpacing: '0.1em',
					boxShadow: 'md',
					color
				}}
				_after={{
					position: 'absolute',
					content: '""',
					bottom: 0,
					left: 0,
					zIndex: '-1',
					w: '10px',
					h: '10px',
					bg,
					boxShadow: `140px -140px ${hexBg}`
				}}
			/>
			{children}
		</Box>
	)
}

export default memo(ReminderCard)
