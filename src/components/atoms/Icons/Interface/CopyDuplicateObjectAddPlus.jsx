import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'
import Theme from 'styles/theme'

const CopyDuplicateObjectAddPlus = createIcon({
  defaultProps: Theme.components.Icon.baseStyle,
  displayName: 'CopyDuplicateObjectAddPlus',
  viewBox: '0 0 24 24',
  path: (
    <>
      <path
        d="M7,6v8a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V6a3,3,0,0,0-3-3H10A3,3,0,0,0,7,6Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M17,17v1a3,3,0,0,1-3,3H6a3,3,0,0,1-3-3V10A3,3,0,0,1,6,7H7"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M14.00081,12V8"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M12,9.99919h4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path d="M0,24V0H24V24Z" fill="none" />
    </>
  ),
})

export default memo(CopyDuplicateObjectAddPlus)
