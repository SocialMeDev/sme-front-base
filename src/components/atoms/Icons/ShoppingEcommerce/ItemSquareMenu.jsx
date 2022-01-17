import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'
import Theme from 'styles/theme'

const ItemSquareMenu = createIcon({
  defaultProps: Theme.components.Icon.baseStyle,
  displayName: 'ItemSquareMenu',
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
        <path d="M19 21h-14c-1.105 0-2-.895-2-2v-14c0-1.105.895-2 2-2h14c1.105 0 2 .895 2 2v14c0 1.105-.895 2-2 2Z" />
        <line x1="17" x2="11" y1="8" y2="8" />
        <line x1="11" x2="17" y1="12" y2="12" />
        <line x1="11" x2="17" y1="16" y2="16" />
        <path d="M6.998 7.75c-.138 0-.25.112-.248.25 0 .138.112.25.25.25 .138 0 .25-.112.25-.25 0-.138-.112-.25-.252-.25" />
        <path d="M6.998 11.75c-.138 0-.25.112-.248.25 0 .138.112.25.25.25 .138 0 .25-.112.25-.25 0-.138-.112-.25-.252-.25" />
        <path d="M6.998 15.75c-.138 0-.25.112-.248.25 0 .138.112.25.25.25 .138 0 .25-.112.25-.25 0-.138-.112-.25-.252-.25" />
      </g>
    </>
  ),
})

export default memo(ItemSquareMenu)
