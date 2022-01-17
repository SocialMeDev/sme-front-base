import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'
import Theme from 'styles/theme'

const MailEmailLetter15 = createIcon({
  defaultProps: Theme.components.Icon.baseStyle,
  displayName: 'MailEmailLetter15',
  viewBox: '0 0 24 24',
  path: (
    <>
      <g
        strokeLinecap="round"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        strokeLinejoin="round"
      >
        <path d="M15 15.696h-6c-1.105 0-2-.895-2-2v-3.391c0-1.105.895-2 2-2h6c1.105 0 2 .895 2 2v3.391c0 1.104-.895 2-2 2Z"></path>
        <circle cx="12" cy="12" r="9" strokeWidth="1.5882"></circle>
        <path d="M7.605 8.874c.639.585 1.918 1.754 3.049 2.786 .764.696 1.929.696 2.692-.001 1.164-1.062 2.419-2.21 3.048-2.786"></path>
      </g>
      <path fill="none" d="M0 0h24v24h-24v-24Z"></path>
    </>
  ),
})

export default memo(MailEmailLetter15)
