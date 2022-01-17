import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'
import Theme from 'styles/theme'

const SingleUser = createIcon({
  defaultProps: Theme.components.Icon.baseStyle,
  displayName: 'SingleUser',
  viewBox: '0 0 24 24',
  path: (
    <>
      <path
        d="M20,20v-.75A4.25,4.25,0,0,0,15.75,15H8.25A4.25,4.25,0,0,0,4,19.25V20"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <circle
        cx="12"
        cy="7"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <rect width="24" height="24" fill="none" />
    </>
  ),
})

export default memo(SingleUser)
