import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'
import Theme from 'styles/theme'

const TextCopy = createIcon({
  defaultProps: Theme.components.Icon.baseStyle,
  displayName: 'TextCopy',
  viewBox: '0 0 24 24',
  path: (
    <>
      <rect width="24" height="24" fill="none" />
      <path
        d="M16,21a2,2,0,0,0,2-2V17"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M3,19a2,2,0,0,0,2,2"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M7,6H5A2,2,0,0,0,3,8"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <line
        x1="3"
        y1="12"
        x2="3"
        y2="15"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <line
        x1="9"
        y1="21"
        x2="12"
        y2="21"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M17.8892,3H10.1108A3.1108,3.1108,0,0,0,7,6.1108H7v7.7784A3.1108,3.1108,0,0,0,10.1108,17h7.7784A3.1108,3.1108,0,0,0,21,13.8892h0V6.1094A3.1108,3.1108,0,0,0,17.8892,3Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <line
        x1="11.66567"
        y1="7.86111"
        x2="16.33233"
        y2="7.86111"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <line
        x1="13.999"
        y1="7.86111"
        x2="13.999"
        y2="12.13889"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </>
  ),
})

export default memo(TextCopy)
