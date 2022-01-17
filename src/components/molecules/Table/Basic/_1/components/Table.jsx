import { memo } from 'react'
import { Table, useBreakpointValue } from '@chakra-ui/react'

function CustomTable({ children }) {
  const tableVariant = useBreakpointValue({ base: 'striped', md: 'simple' })

  return (
    <Table
      variant={tableVariant}
      colorScheme={process.env.NEXT_PUBLIC_COLOR_SCHEME}
      w="full"
      display={{
        base: 'block',
        md: 'table',
      }}
      sx={{
        '@media print': {
          display: 'table',
        },
      }}
    >
      {children}
    </Table>
  )
}

export default memo(CustomTable)
