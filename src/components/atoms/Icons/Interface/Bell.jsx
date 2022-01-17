import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'
import Theme from 'styles/theme'

const Bell = createIcon({
  defaultProps: Theme.components.Icon.baseStyle,
  displayName: 'Bell',
  viewBox: '0 0 24 24',
  path: (
    <>
      <path
        d="M14,20a2.5,2.5,0,0,1-4,0"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M6,12.48171V9a6,6,0,0,1,6-6h0a6,6,0,0,1,6,6v3.48172h-.00453l1.376,1.37705A2.13333,2.13333,0,0,1,17.862,17.5H6.138a2.13333,2.13333,0,0,1-1.50947-3.64124l1.376-1.37705"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path d="M24,24H0V0H24Z" fill="none" />
    </>
  ),
})

export default memo(Bell)
