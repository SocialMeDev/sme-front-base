import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'
import Theme from 'styles/theme'

const Arrow = createIcon({
  defaultProps: Theme.components.Icon.baseStyle,
  displayName: 'Arrow',
  viewBox: '0 0 24 24',
  path: (
    <>
      <g fill="none">
        <path d="M0 0h24v24h-24Z"></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M8 10l4 4 4-4"
        ></path>
      </g>
    </>
  ),
})

export default memo(Arrow)
