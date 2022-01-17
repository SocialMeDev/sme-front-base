import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

import styles from './styles'
import colors from './colors'
import components from './components'
import layerStyles from './layers'
import fonts from './fonts'

const customTheme = extendTheme(
  {
    styles,
    colors,
    fonts,
    components,
    layerStyles,
  },
  withDefaultColorScheme({ colorScheme: process.env.NEXT_PUBLIC_COLOR_SCHEME })
)

export default customTheme
