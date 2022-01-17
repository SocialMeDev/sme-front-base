import { Box, Text } from '@chakra-ui/react'

import useUser from 'hooks/useUser'

export default function UserContainer() {
	const { getFullName } = useUser()

	return (
		<Box>
			<Text>{getFullName()}</Text>
		</Box>
	)
}
