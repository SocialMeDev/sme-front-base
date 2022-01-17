import { memo } from 'react'
import { Td, useColorModeValue } from '@chakra-ui/react'

function CustomTd({ children, label }) {
	const tdColor = useColorModeValue('gray.400', 'gray.400')

	return (
		<>
			<Td
				display={{
					base: 'table-cell',
					md: 'none'
				}}
				sx={{
					'@media print': {
						display: 'none'
					},
					textTransform: 'uppercase',
					color: tdColor,
					fontSize: 'xs',
					fontWeight: 'bold',
					letterSpacing: 'wider',
					fontFamily: 'heading'
				}}
			>
				{label}
			</Td>
			<Td>{children}</Td>
		</>
	)
}

export default memo(CustomTd)
