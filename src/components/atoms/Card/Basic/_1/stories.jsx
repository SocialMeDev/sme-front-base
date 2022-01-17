import { Avatar, HStack, Text, VStack } from '@chakra-ui/react'

import Card from '.'

export default {
	component: Card,
	title: 'Atoms/Card/Basic/_1'
}

export const Common = (args) => (
	<Card {...args}>
		<VStack>
			<Avatar src="https://uifaces.co/our-content/donated/1H_7AxP0.jpg" />

			<HStack>
				<Text>Primeiro nome</Text>
				<Text>Ultimo nome</Text>
			</HStack>
		</VStack>
	</Card>
)
