import { memo } from 'react'
import { Tr } from '@chakra-ui/react'

function CustomTh(props) {
	return <Tr {...props}>{props.children}</Tr>
}

export default memo(CustomTh)
