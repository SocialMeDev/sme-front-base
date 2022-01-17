import { memo } from 'react'
import { createIcon } from '@chakra-ui/icons'
import Theme from 'styles/theme'

const MarkerPin1 = createIcon({
  defaultProps: Theme.components.Icon.baseStyle,
  displayName: 'MarkerPin1',
  viewBox: '0 0 24 24',
  path: (
    <>
      <defs>
        <path
          d="M12 3v0l-3.39638e-07 7.10543e-15c4.29125-1.87577e-07 7.77 3.47875 7.77 7.77v5.939 -3.55271e-15c0 1.01123-.819767 1.831-1.831 1.831h-5.939l-3.39638e-07-1.06581e-14c-4.29125-1.87577e-07-7.77-3.47875-7.77-7.77 0 0 0-3.55271e-15 0-3.55271e-15v0l5.9508e-14-4.93962e-07c6.47961e-07-4.29125 3.47875-7.77 7.77-7.77Z"
          id="a"
        ></path>
      </defs>
      <g transform="matrix(1 0 0 1 11.13 -5.331)">
        <use
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          transform="matrix(.707107 .707107 -.707107 .707107 0 0)"
          xlinkHref="#a"
        ></use>
      </g>
      <rect width="24" height="24" fill="none"></rect>
      <g transform="matrix(1 0 0 1 11.13 -5.331)">
        <use
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          transform="matrix(.707107 .707107 -.707107 .707107 0 0)"
          xlinkHref="#a"
        ></use>
      </g>
      <circle
        cx="12"
        cy="10.77"
        r="2.666"
        strokeLinecap="round"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        strokeLinejoin="round"
      ></circle>
      <rect width="24" height="24" fill="none"></rect>
    </>
  ),
})

export default memo(MarkerPin1)
