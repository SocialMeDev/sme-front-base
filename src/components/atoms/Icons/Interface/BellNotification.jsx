import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'
import Theme from 'styles/theme'

const BellNotification = createIcon({
  defaultProps: Theme.components.Icon.baseStyle,
  displayName: 'BellNotification',
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
        <path d="M9.708 18.344v.365c0 1.265 1.026 2.291 2.292 2.291v0c1.266 0 2.292-1.026 2.292-2.292v-.365"></path>
        <path d="M13.833 5.751v-.918c0-1.012-.82-1.833-1.833-1.833v0c-1.013 0-1.833.821-1.833 1.833v.918"></path>
        <path d="M6.563 10.188v0c0-2.503 2.029-4.531 4.531-4.531h1.813c2.503 0 4.531 2.029 4.531 4.531v0 2.797c0 .53.211 1.039.586 1.414l.641.641c.375.375.586.884.586 1.414v0c0 1.044-.846 1.89-1.89 1.89h-10.721c-1.044 0-1.89-.846-1.89-1.89v0c0-.53.211-1.039.586-1.414l.641-.641c.375-.375.586-.884.586-1.414l-8.88178e-16-2.797Z"></path>
      </g>
      <path fill="none" d="M0 0h24v24h-24Z"></path>
    </>
  ),
})

export default memo(BellNotification)
