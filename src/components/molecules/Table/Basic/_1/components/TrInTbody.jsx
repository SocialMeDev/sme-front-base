import { memo } from 'react'
import { Tr } from '@chakra-ui/react'

function TrInTbody(props) {
	return (
		<Tr
			{...props}
			display={{
				base: 'grid',
				md: 'table-row'
			}}
			sx={{
				'@media print': {
					display: 'table-row'
				},
				gridTemplateColumns: 'minmax(0px, 35%) minmax(0px, 65%)'
			}}
		>
			{props.children}
		</Tr>
	)
}

export default memo(TrInTbody)
