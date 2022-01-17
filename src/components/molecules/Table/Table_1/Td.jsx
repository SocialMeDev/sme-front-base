import { memo } from 'react'
import { Td } from '@chakra-ui/react'

function CustomTd({ children, title, ...rest }) {
  return (
    <>
      <Td
        display={{
          base: 'table-cell',
          md: 'none',
        }}
        sx={{
          '@media print': {
            display: 'none',
          },
          textTransform: 'uppercase',
          fontSize: 'xs',
          fontWeight: 'bold',
          letterSpacing: 'wider',
          fontFamily: 'heading',
        }}
        textAlign={{ base: 'center', md: 'left' }}
        {...rest}
      >
        {title}
      </Td>
      <Td fontSize="md" {...rest} textAlign={{ base: 'center', md: 'left' }}>
        {children}
      </Td>
    </>
  )
}

export default memo(CustomTd)
