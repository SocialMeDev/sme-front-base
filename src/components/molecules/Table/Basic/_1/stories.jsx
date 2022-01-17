import { Switch, VStack, HStack, Text } from '@chakra-ui/react'

import { TagsGroup_2 as Tags } from 'components/atoms/TagsGroup/Basic'
import { Avatar_1 as Avatar } from 'components/atoms/Avatar/Basic'

import { Table, Td, TrInTbody, Th, Tbody, Thead } from './index'

export default {
	component: Table,
	title: 'Molecules/Table/Basic/_1'
}

export const Common = () => {
	return (
		<Table>
			<Thead>
				<Th minW="25%">Pessoa</Th>
				<Th minW="25%">Mâe</Th>
				<Th minW="20%">Data</Th>
				<Th minW="15%">Tags</Th>
				<Th minW="15%">Status</Th>
			</Thead>
			<Tbody>
				{[1, 2, 3, 4, 5].map((item) => (
					<TrInTbody key={item}>
						<Td minW="25%">
							<HStack>
								<Avatar src="https://uifaces.co/our-content/donated/1H_7AxP0.jpg" />

								<VStack align="flex-start">
									<Text>Jorge Barros</Text>
									<Text>123.856.886.09</Text>
								</VStack>
							</HStack>
						</Td>

						<Td minW="25%">
							<HStack>
								<Avatar src="https://uifaces.co/our-content/donated/1H_7AxP0.jpg" />
								<Text>Giovanna Vasconcelos</Text>
							</HStack>
						</Td>

						<Td minW="20%">
							<HStack>
								<Text>17 de setembro de 2020</Text>
								<Text>17:59</Text>
							</HStack>
						</Td>

						<Td minW="15%">
							<Tags
								tags={[
									{ label: 'Green', value: 'Green' },
									{ label: 'Blue', value: 'Blue' },
									{ label: 'Yellow', value: 'Yellow' }
								]}
							/>
						</Td>

						<Td minW="15%">
							<Switch />
						</Td>
					</TrInTbody>
				))}
			</Tbody>
		</Table>
	)
}
