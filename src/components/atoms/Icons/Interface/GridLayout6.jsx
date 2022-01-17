import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'
import Theme from 'styles/theme'

const GridLayout6 = createIcon({
  defaultProps: Theme.components.Icon.baseStyle,
  displayName: 'GridLayout6',
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
          d="M20 7h-16c-.552 0-1-.448-1-1v-2c0-.552.448-1 1-1h16c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1Z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M20 14h-16c-.552 0-1-.448-1-1v-2c0-.552.448-1 1-1h16c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1Z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M20 21h-16c-.552 0-1-.448-1-1v-2c0-.552.448-1 1-1h16c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1Z"
        ></path>
      </g>
    </>
  ),
})

export default memo(GridLayout6)
