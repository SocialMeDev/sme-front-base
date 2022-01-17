import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'
import Theme from 'styles/theme'

const Warning2 = createIcon({
  defaultProps: Theme.components.Icon.baseStyle,
  displayName: 'Warning2',
  viewBox: '0 0 24 24',
  path: (
    <>
      <g xmlns="http://www.w3.org/2000/svg" fill="none">
        <path d="M0 0h24v24h-24Z" />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 13.12v-3.74"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M11.999 16.125c-.138 0-.25.112-.249.25 0 .138.112.25.25.25 .138 0 .25-.112.25-.25 0-.138-.112-.25-.251-.25"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M14.029 4.139l7.659 13.404c.89 1.558-.235 3.497-2.029 3.497h-15.318c-1.795 0-2.92-1.939-2.029-3.497l7.659-13.404c.897-1.571 3.161-1.571 4.058 8.88178e-16Z"
        />
      </g>
    </>
  ),
})

export default memo(Warning2)
