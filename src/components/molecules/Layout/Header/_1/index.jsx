import { forwardRef, memo } from 'react'

import { useForm } from 'react-hook-form'

import {
	Skeleton,
	InputGroup,
	InputRightAddon,
	Input,
	HStack,
	Heading,
	Box,
	Flex,
	useColorModeValue
} from '@chakra-ui/react'

import { Search1 } from 'components/atoms/Icons/Interface'
import Card from 'components/atoms/Card/Basic/_1'

const Header = forwardRef(({ children, title }) => {
	const bg = useColorModeValue('primary.500', 'primary.200')
	const hoverBg = useColorModeValue('primary.700', 'primary.400')

	const { register } = useForm()

	return (
		<Box>
			<Card>
				<Flex
					justify="space-between"
					align={{ base: 'flex-start', md: 'center' }}
					direction={{ base: 'column', md: 'row' }}
				>
					<Skeleton mb={{ base: '4', md: '0' }}>
						<Heading>{title}</Heading>
					</Skeleton>

					<HStack
						minW={{ base: '100%', md: '50%' }}
						justify={{ base: 'space-between', md: 'flex-end' }}
					>
						<InputGroup maxW={{ base: '200px', md: '300px' }}>
							<Input
								placeholder="Filtrar pelo nome"
								rounded="md"
								autoComplete="off"
								{...register('name')}
							/>
							<InputRightAddon
								border="none"
								cursor="pointer"
								roundedBottomRight="md"
								roundedTopRight="md"
								bg={bg}
								p="2"
								color="white"
								transition="all 0.2s"
								_hover={{ bg: hoverBg, color: 'white' }}
							>
								<Search1 />
							</InputRightAddon>
						</InputGroup>

						{children}
					</HStack>
				</Flex>
			</Card>
		</Box>
	)
})

export default memo(Header)
