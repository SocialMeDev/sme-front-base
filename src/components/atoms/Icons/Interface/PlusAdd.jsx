import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'
import Theme from 'styles/theme'

const PlusAdd = createIcon({
  defaultProps: Theme.components.Icon.baseStyle,
  displayName: 'PlusAdd',
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
          d="M18 20h-12c-1.105 0-2-.895-2-2v-12c0-1.105.895-2 2-2h12c1.105 0 2 .895 2 2v12c0 1.105-.895 2-2 2Z"
        ></path>
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

export default memo(PlusAdd)
