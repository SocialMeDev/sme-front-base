import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'
import Theme from 'styles/theme'

const SingleUserMinus = createIcon({
  defaultProps: Theme.components.Icon.baseStyle,
  displayName: 'SingleUserMinus',
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
        <path d="M12.4692,3.02278c1.36371,1.36371 1.36371,3.57472 0,4.93843c-1.36371,1.36371 -3.57472,1.36371 -4.93843,8.88178e-16c-1.36371,-1.36371 -1.36371,-3.57472 -8.88178e-16,-4.93843c1.36371,-1.36371 3.57472,-1.36371 4.93843,-8.88178e-16" />
        <path d="M14.363,12.796c-1.299,-0.519 -2.823,-0.805 -4.363,-0.805c-4.048,0 -8,1.967 -8,4.992v1c0,0.552 0.448,1 1,1h9.413" />
        <path d="M17,22c-2.761,0 -5,-2.238 -5,-5c0,-2.704 2.3,-5.003 5.004,-5c2.76,0.002 4.996,2.24 4.996,5c0,2.761 -2.238,5 -5,5" />
        <path d="M19,17h-4" />
      </g>
    </>
  ),
})

export default memo(SingleUserMinus)
