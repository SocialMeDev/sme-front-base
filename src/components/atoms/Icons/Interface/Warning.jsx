import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'
import Theme from 'styles/theme'

const Warning = createIcon({
  defaultProps: Theme.components.Icon.baseStyle,
  displayName: 'Warning',
  viewBox: '0 0 24 24',
  path: (
    <>
      <g xmlns="http://www.w3.org/2000/svg" fill="none">
        <path d="M0 0h24v24h-24Z" />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 3v0c4.971 0 9 4.029 9 9v0c0 4.971-4.029 9-9 9v0c-4.971 0-9-4.029-9-9v0c0-4.971 4.029-9 9-9Z"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 12.5v-5"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M11.999 16c-.138 0-.25.112-.249.25 0 .138.112.25.25.25 .138 0 .25-.112.25-.25 0-.138-.112-.25-.251-.25"
        />
      </g>
    </>
  ),
})

export default memo(Warning)
