import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'
import Theme from 'styles/theme'

const Arrow5 = createIcon({
  defaultProps: Theme.components.Icon.baseStyle,
  displayName: 'Arrow5',
  viewBox: '0 0 24 24',
  path: (
    <>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M8,10l4,4l4,-4"
        strokeLinecap="round"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        strokeLinejoin="round"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        d="M0,0h24v24h-24Z"
      />
    </>
  ),
})

export default memo(Arrow5)
