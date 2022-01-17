import { memo } from 'react'
import { Flex, Box, useColorModeValue } from '@chakra-ui/react'
import Navbar from 'components/molecules/Navbar/Navbar_1'

function LandingPage({ children }) {
  return (
    <Flex as="main" direction="row">
      <Box w="-webkit-fill-available">
        <Navbar noSidebar />
        <Box
          h="calc(100vh - 50px)"
          p="2"
          bg={useColorModeValue('gray.50', 'gray.900')}
        >
          {children}
        </Box>
      </Box>
    </Flex>
  )
}

export default memo(LandingPage)
