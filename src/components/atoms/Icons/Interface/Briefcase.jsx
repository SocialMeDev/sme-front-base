import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'
import Theme from 'styles/theme'

const Briefcase = createIcon({
  defaultProps: Theme.components.Icon.baseStyle,
  displayName: 'Briefcase',
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
          d="M19 20.5h-14c-1.105 0-2-.895-2-2v-9c0-1.105.895-2 2-2h14c1.105 0 2 .895 2 2v9c0 1.105-.895 2-2 2Z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M16.174 7.5v-2c0-1.105-.895-2-2-2h-4.348c-1.105 0-2 .895-2 2v2"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M3 9.5l6.351 4.191c.327.216.71.331 1.102.331h3.094c.392 0 .775-.115 1.102-.331l6.351-4.191"
        ></path>
      </g>
    </>
  ),
})

export default memo(Briefcase)
