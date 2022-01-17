import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'
import Theme from 'styles/theme'

const Arrow12 = createIcon({
  defaultProps: Theme.components.Icon.baseStyle,
  displayName: 'Arrow12',
  viewBox: '0 0 24 24',
  path: (
    <>
      <g
        xmlns="http://www.w3.org/2000/svg"
        strokeLinecap="round"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        strokeLinejoin="round"
      >
        <path d="M12,3v0c4.971,0 9,4.029 9,9v0c0,4.971 -4.029,9 -9,9v0c-4.971,0 -9,-4.029 -9,-9v0c0,-4.971 4.029,-9 9,-9Z" />
        <path d="M8,12h8" />
        <path d="M11,15l-3,-3l3,-3" />
      </g>
    </>
  ),
})

export default memo(Arrow12)
