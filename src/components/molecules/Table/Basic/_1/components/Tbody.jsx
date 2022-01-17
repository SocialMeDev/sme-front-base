import { memo } from 'react'
import { Tbody } from '@chakra-ui/react'

function CustomTbody({ children }) {
  return (
    <Tbody
      display={{
        base: 'block',
        lg: 'table-row-group',
      }}
      sx={{
        '@media print': {
          display: 'table-row-group',
        },
      }}
    >
      {children}
    </Tbody>
  )
}

export default memo(CustomTbody)
