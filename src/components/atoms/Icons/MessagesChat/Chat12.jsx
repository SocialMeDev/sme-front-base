import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'
import Theme from 'styles/theme'

const Chat12 = createIcon({
  defaultProps: Theme.components.Icon.baseStyle,
  displayName: 'Chat12',
  viewBox: '0 0 24 24',
  path: (
    <>
      <g fill="none">
        <path d="M0,0h24v24h-24v-24Z"></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M15,19h-4c-1.105,0 -2,-0.895 -2,-2v-5.5c0,-1.105 0.895,-2 2,-2h8c1.105,0 2,0.895 2,2v5.5c0,1.105 -0.895,2 -2,2h-1v2l-3,-2Z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M17.609,9.5v-4.065c0,-1.345 -1.09,-2.435 -2.435,-2.435h-9.739c-1.345,0 -2.435,1.09 -2.435,2.435v6.696c0,1.345 1.09,2.435 2.435,2.435h1.217v2.434l2.348,-1.565"
        ></path>
      </g>
    </>
  ),
})

export default memo(Chat12)
