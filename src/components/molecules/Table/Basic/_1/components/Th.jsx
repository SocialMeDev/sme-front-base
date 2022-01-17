import { memo } from 'react'
import { Th, useColorModeValue } from '@chakra-ui/react'

function CustomTh(props) {
  const weakTextColor = useColorModeValue('gray.200', 'whiteAlpha.600')

  return (
    <Th fontWeight="normal" color={weakTextColor} {...props}>
      {props.children}
    </Th>
  )
}

export default memo(CustomTh)
