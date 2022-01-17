import { Box, useColorModeValue } from '@chakra-ui/react'

export default function Card(props) {
	return (
		<Box
			p="4"
			bg={useColorModeValue('white', 'gray.800')}
			boxShadow={useColorModeValue('md', 'dark-lg')}
			rounded="md"
			w="full"
			{...props}
		>
			{props.children}
		</Box>
	)
}
