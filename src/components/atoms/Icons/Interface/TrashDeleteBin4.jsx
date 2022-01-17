import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'
import Theme from 'styles/theme'

const TrashDeleteBin4 = createIcon({
  defaultProps: Theme.components.Icon.baseStyle,
  displayName: 'TrashDeleteBin4',
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
        <path d="M18.532 9h-13.064c-.568 0-1.028-.46-1.028-1.027v-.946c0-.567.46-1.027 1.028-1.027h13.065c.567 0 1.027.46 1.027 1.027v.945c0 .568-.46 1.028-1.028 1.028Z" />
        <path d="M18 9l-.847 10.166c-.087 1.037-.953 1.834-1.993 1.834h-6.32c-1.04 0-1.907-.797-1.993-1.834l-.847-10.166" />
        <path d="M8 6l1.224-2.447c.169-.339.515-.553.894-.553h3.764c.379 0 .725.214.894.553l1.224 2.447" />
        <path d="M12 12v6" />
        <path d="M15 12l-.41 6" />
        <path d="M9 12l.41 6" />
      </g>
    </>
  ),
})

export default memo(TrashDeleteBin4)
