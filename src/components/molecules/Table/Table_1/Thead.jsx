import { memo } from 'react'
import { Thead } from '@chakra-ui/react'

function CustomThead({ children }) {
  return (
    <Thead
      display={{
        base: 'none',
        md: 'table-header-group',
      }}
      sx={{
        '@media print': {
          display: 'table-header-group',
        },
      }}
    >
      {children}
    </Thead>
  )
}

export default memo(CustomThead)
