import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'
import Theme from 'styles/theme'

const TrashBinSquare = createIcon({
  defaultProps: Theme.components.Icon.baseStyle,
  displayName: 'TrashBinSquare',
  viewBox: '0 0 24 24',
  path: (
    <>
      <path
        d="M14.18749,9.5V8a1,1,0,0,0-1-1h-2.375a1,1,0,0,0-1,1V9.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <line
        x1="16.5"
        y1="9.5"
        x2="7.5"
        y2="9.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M15.5,12l-.29584,3.84583A1.25,1.25,0,0,1,13.95782,17H10.04218a1.25,1.25,0,0,1-1.24634-1.15417L8.5,12"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        strokeWidth="1.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M0,0H24V24H0Z" fill="none" />
    </>
  ),
})

export default memo(TrashBinSquare)
