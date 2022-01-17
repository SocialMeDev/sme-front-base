import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'
import Theme from 'styles/theme'

const AttachmentLink = createIcon({
  defaultProps: Theme.components.Icon.baseStyle,
  displayName: 'AttachmentLink',
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
        <path d="M15.964 6.036c1.381-1.381 3.619-1.381 5 0v0c1.381 1.381 1.381 3.619 0 5l-5.879 5.879c-1.381 1.381-3.619 1.381-5 0v0c-1.381-1.381-1.381-3.619 0-5l.879-.879"></path>
        <path d="M8.036 18.964c-1.381 1.381-3.619 1.381-5 0v0c-1.381-1.381-1.381-3.619 0-5l5.879-5.879c1.381-1.381 3.619-1.381 5 0v0c1.381 1.381 1.381 3.619 0 5l-.915.915"></path>
      </g>
      <rect width="24" height="24" fill="none"></rect>
    </>
  ),
})

export default memo(AttachmentLink)
