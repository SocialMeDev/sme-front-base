import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'
import Theme from 'styles/theme'

const Plus = createIcon({
  defaultProps: Theme.components.Icon.baseStyle,
  displayName: 'Plus',
  viewBox: '0 0 24 24',
  path: (
    <>
      <g fill="none">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 8v8"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M16 12h-8"
        ></path>
      </g>
    </>
  ),
})

export default memo(Plus)
