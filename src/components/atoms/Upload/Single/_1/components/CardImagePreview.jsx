import { memo } from 'react'

import { Flex, Center, Text, useColorModeValue } from '@chakra-ui/react'
import { CloudUpload2 } from 'components/atoms/Icons/Interface'

function CardPreviewImage({ loading, preview }) {
	const hover = useColorModeValue('primary.500', 'white')
	const loadBorderColor = useColorModeValue('primary.500', 'white')
	const borderColor = useColorModeValue('gray.600', 'whiteAlpha.500')

	const showLabel = !loading && !preview
	const showLoading = loading && !preview

	return (
		<Center
			as="label"
			htmlFor="input-file"
			p="2"
			minW="135px"
			minH="135px"
			maxH="135px"
			backgroundSize="cover"
			backgroundPosition="center center"
			rounded="sm"
			cursor="pointer"
			transition="all 0.4s"
			border={`${preview ? '2px solid' : '1px dashed'}`}
			borderColor={`${loading ? loadBorderColor : borderColor}`}
			backgroundImage={`url(${preview})`}
			_hover={{
				color: hover,
				borderColor: hover
			}}
		>
			{showLabel && (
				<Center>
					<Flex direction="column" align="center">
						<CloudUpload2 />
						<Text>Anexar arquivo</Text>
					</Flex>
				</Center>
			)}

			{showLoading && <Flex text="Carregando..." />}
		</Center>
	)
}

export default memo(CardPreviewImage)
