import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'
import Theme from 'styles/theme'

const Bubble11 = createIcon({
  defaultProps: Theme.components.Icon.baseStyle,
  displayName: 'Bubble11',
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
        <path d="M15.5,14.5h-7"></path>
        <path d="M8.5,10.5h7"></path>
        <path
          strokeWidth="1.5882"
          d="M4.151,16.396c-0.73,-1.3 -1.151,-2.798 -1.151,-4.396c0,-4.971 4.029,-9 9,-9c4.971,0 9,4.029 9,9c0,4.971 -4.029,9 -9,9c-1.598,0 -3.096,-0.421 -4.396,-1.151l-4.604,1.151l1.151,-4.604Z"
        ></path>
      </g>
      <path fill="none" d="M0,0h24v24h-24v-24Z"></path>
    </>
  ),
})

export default memo(Bubble11)
